const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = Number(process.env.PORT || 3037);
const HOST = process.env.HOST || '0.0.0.0';
const ROOT = __dirname;
const DB_DIR = path.join(ROOT, 'server');
const DB_FILE = path.join(DB_DIR, 'data.json');
const BACKUP_DIR = path.join(ROOT, 'v163', 'backups');
fs.mkdirSync(DB_DIR, { recursive: true });
fs.mkdirSync(BACKUP_DIR, { recursive: true });
if (!fs.existsSync(DB_FILE)) fs.writeFileSync(DB_FILE, JSON.stringify({version:1, updatedAt:null, state:{}}, null, 2));

let db = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
let writeQueue = Promise.resolve();
function persist(){
  const snapshot = JSON.stringify(db, null, 2);
  writeQueue = writeQueue.then(async()=>{
    const tmp = DB_FILE + '.tmp';
    await fs.promises.writeFile(tmp, snapshot, 'utf8');
    await fs.promises.rename(tmp, DB_FILE);
  }).catch(console.error);
  return writeQueue;
}
function send(res, code, data, type='application/json'){
  res.writeHead(code, {'Content-Type':type,'Cache-Control':'no-store','Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Content-Type','Access-Control-Allow-Methods':'GET,POST,DELETE,OPTIONS'});
  res.end(type==='application/json' ? JSON.stringify(data) : data);
}
function readBody(req){ return new Promise((resolve,reject)=>{let b=''; req.on('data',c=>{b+=c; if(b.length>20*1024*1024) req.destroy();}); req.on('end',()=>{try{resolve(b?JSON.parse(b):{});}catch(e){reject(e);}}); req.on('error',reject);}); }
function safePath(urlPath){
  let p = decodeURIComponent(urlPath.split('?')[0]);
  if(p==='/' || p==='') p='/v163/index.html';
  const abs = path.normalize(path.join(ROOT,p));
  if(!abs.startsWith(ROOT)) return null;
  return abs;
}
function contentType(file){const e=path.extname(file).toLowerCase(); return ({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.json':'application/json'}[e]||'application/octet-stream');}

const server=http.createServer(async(req,res)=>{
  if(req.method==='OPTIONS') return send(res,204,'');
  try{
    const url=new URL(req.url, `http://${req.headers.host||'localhost'}`);
    if(url.pathname==='/health') return send(res,200,{ok:true,service:'DHHMH Online',updatedAt:db.updatedAt});
    if(url.pathname==='/api/state' && req.method==='GET') return send(res,200,{ok:true,version:db.version,state:db.state,updatedAt:db.updatedAt});
    if(url.pathname==='/api/state' && req.method==='POST'){
      const body=await readBody(req); if(!body || typeof body.state!=='object') return send(res,400,{ok:false,error:'state object required'});
      db.state=body.state; db.updatedAt=new Date().toISOString(); await persist(); return send(res,200,{ok:true,updatedAt:db.updatedAt});
    }
    if(url.pathname==='/api/item' && req.method==='POST'){
      const body=await readBody(req); if(!body.key) return send(res,400,{ok:false,error:'key required'});
      db.state[String(body.key)] = String(body.value ?? ''); db.updatedAt=new Date().toISOString(); await persist(); return send(res,200,{ok:true});
    }
    if(url.pathname==='/api/item' && req.method==='DELETE'){
      const key=url.searchParams.get('key'); if(key) delete db.state[key]; db.updatedAt=new Date().toISOString(); await persist(); return send(res,200,{ok:true});
    }
    if(url.pathname==='/api/backup' && req.method==='POST'){
      const name='dhhmh-backup-'+new Date().toISOString().replace(/[:.]/g,'-')+'.json';
      await fs.promises.writeFile(path.join(BACKUP_DIR,name), JSON.stringify(db,null,2)); return send(res,200,{ok:true,file:name});
    }
    const file=safePath(url.pathname); if(!file) return send(res,403,{ok:false,error:'forbidden'});
    fs.stat(file,(err,st)=>{if(err||!st.isFile()) return send(res,404,{ok:false,error:'not found'}); res.writeHead(200,{'Content-Type':contentType(file),'Cache-Control':'no-cache'}); fs.createReadStream(file).pipe(res);});
  }catch(e){console.error(e); send(res,500,{ok:false,error:'server error'});}
});
server.listen(PORT,HOST,()=>console.log(`DHHMH Online running on http://${HOST}:${PORT}`));

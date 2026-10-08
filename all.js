
const RK='dhhmh_revenue_v1',CK='dhhmh_customers_v1',BK='dhhmh_bills_v1',TK='dhhmh_tariffs_v1';let tariffs=JSON.parse(localStorage.getItem(TK)||'[]');
if(!tariffs.length){const now=new Date();tariffs=[
{id:'seed-property-dhisan-2026',code:'1130101',head:'Isku jarka Dhulka Dhisan',type:'Property',propertyType:'Dhisan',zone:'ALL',grade:'ALL',year:2026,method:'area_rate',rate:600,percent:0,fixed:0,currency:'SLSH',effectiveFrom:'2026-01-01',effectiveTo:'2026-12-31',active:true,notes:'Cashuurta 1aad — Guri Dhisan: 600 Sl.Sh halkii m²',createdBy:'admin',createdDate:now.toLocaleString(),updatedAt:now.toISOString()},
{id:'seed-property-banaan-2026',code:'1130101-B',head:'Isku jarka Dhulka Banaan',type:'Property',propertyType:'Banaan',zone:'ALL',grade:'ALL',year:2026,method:'area_rate',rate:200,percent:0,fixed:0,currency:'SLSH',effectiveFrom:'2026-01-01',effectiveTo:'2026-12-31',active:true,notes:'Cashuurta 1aad — Dhul Banaan: 200 Sl.Sh halkii m²',createdBy:'admin',createdDate:now.toLocaleString(),updatedAt:now.toISOString()},
{id:'seed-property-deyran-2026',code:'1130101-D',head:'Isku jarka Dhulka Deyran',type:'Property',propertyType:'Deyran',zone:'ALL',grade:'ALL',year:2026,method:'area_rate',rate:350,percent:0,fixed:0,currency:'SLSH',effectiveFrom:'2026-01-01',effectiveTo:'2026-12-31',active:true,notes:'Cashuurta 1aad — Dhul Deyran: 350 Sl.Sh halkii m²',createdBy:'admin',createdDate:now.toLocaleString(),updatedAt:now.toISOString()}];localStorage.setItem(TK,JSON.stringify(tariffs));}
// Ensure the complete 2026 tariff chain is available without overwriting user edits.
function ensureCoreTariffs(){
 const now=new Date();
 const seeds=[
  {id:'seed-property-dhisan-2026',code:'1130101',head:'Isku jarka Dhulka Dhisan',type:'Property',propertyType:'Dhisan',zone:'ALL',grade:'ALL',year:2026,method:'area_rate',rate:600,percent:0,fixed:0,currency:'SLSH',sequence:1,active:true,notes:'Cashuurta 1aad — Guri Dhisan: 600 Sl.Sh halkii m²'},
  {id:'seed-property-banaan-2026',code:'1130101-B',head:'Isku jarka Dhulka Banaan',type:'Property',propertyType:'Banaan',zone:'ALL',grade:'ALL',year:2026,method:'area_rate',rate:200,percent:0,fixed:0,currency:'SLSH',sequence:1,active:true,notes:'Cashuurta 1aad — Dhul Banaan: 200 Sl.Sh halkii m²'},
  {id:'seed-property-deyran-2026',code:'1130101-D',head:'Isku jarka Dhulka Deyran',type:'Property',propertyType:'Deyran',zone:'ALL',grade:'ALL',year:2026,method:'area_rate',rate:350,percent:0,fixed:0,currency:'SLSH',sequence:1,active:true,notes:'Cashuurta 1aad — Dhul Deyran: 350 Sl.Sh halkii m²'},
  {id:'seed-1140935-2026',code:'1140935',head:'1140935 - Cashuurta Horumarinta Degmada',type:'Property',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'percentage',rate:0,percent:10,fixed:0,currency:'SLSH',sequence:2,active:true,notes:'10% ee cashuurta aasaasiga ah; percentage-ku wuxuu raacayaa subtotal-ka socda ilaa heerkaas.'},
  {id:'seed-1140934-2026',code:'1140934',head:'1140934 - Cashuurta 2% Waxbarashada',type:'Property',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'percentage',rate:0,percent:2,fixed:0,currency:'SLSH',sequence:3,active:true,notes:'2%'},
  {id:'seed-1140931-2026',code:'1140931',head:'1140931 - Cashuurta 2% Ciyaaraha',type:'Property',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'percentage',rate:0,percent:2,fixed:0,currency:'SLSH',sequence:4,active:true,notes:'2%'},
  {id:'seed-1420251-2026',code:'1420251',head:'Cashuurta 2% ee Caafimaadka',type:'Property',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'percentage',rate:0,percent:2,fixed:0,currency:'SLSH',sequence:5,active:true,notes:'2%'},
  {id:'seed-1140933-2026',code:'1140933',head:'1140933 - Cashuurta 5% ee Jaamacadaha',type:'Property',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'percentage',rate:0,percent:5,fixed:0,currency:'SLSH',sequence:6,active:true,notes:'5%'},
  {id:'seed-1140932-2026',code:'1140932',head:'1140932 - Cashuurta Dabdamiska ee 5%',type:'Property',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'percentage',rate:0,percent:5,fixed:0,currency:'SLSH',sequence:7,active:true,notes:'5%'},
  {id:'seed-41102-2026',code:'41102',head:'41102 - Cashuurta 2.5% / Stam Duty',type:'Property',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'percentage',rate:0,percent:2.5,fixed:0,currency:'SLSH',sequence:8,active:true,notes:'2.5%'},
  {id:'seed-1410609-2026',code:'1410609',head:'1410609 - Dakhliga Diiwaangelinta',type:'Property',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:0,percent:0,fixed:20000,currency:'SLSH',sequence:20,active:true,notes:'Lacag go’an — 20,000 Sl.Sh'},
  {id:'seed-1140922-2026',code:'1140922',head:'1140922 - Cashuurta Qashinka Qalalan iyo Qoyan',type:'Property',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:0,percent:0,fixed:5000,currency:'SLSH',sequence:21,active:true,notes:'Lacag go’an — 5,000 Sl.Sh'},
  {id:'seed-1140919-2026',code:'1140919',head:'1140919 - Cashuurta Soo Eegista',type:'Property',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:0,percent:0,fixed:0,currency:'SLSH',sequence:22,active:true,notes:'Qiimaha/percentage-ka waxaa laga beddeli karaa Tacriifad form-ka.'},
  {id:'seed-license-grade1-2026',code:'BUSGRD1',head:'Business License darajada 1aad',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'Darajada 1aad',year:2026,method:'fixed',rate:0,percent:0,fixed:1800000,currency:'SLSH',sequence:1,active:true,notes:'Qiimaha rasmiga ah: 1,800,000 Sl.Sh.'},
  {id:'seed-license-grade2-2026',code:'BUSGRD2',head:'Business License darajada 2aad',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'Darajada 2aad',year:2026,method:'fixed',rate:0,percent:0,fixed:950000,currency:'SLSH',sequence:1,active:true,notes:'Qiimaha rasmiga ah: 950,000 Sl.Sh.'},
  {id:'seed-license-grade3-2026',code:'BUSGRD3',head:'Business License darajada 3aad',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'Darajada 3aad',year:2026,method:'fixed',rate:0,percent:0,fixed:600000,currency:'SLSH',sequence:1,active:true,notes:'Qiimaha rasmiga ah: 600,000 Sl.Sh.'},
  {id:'seed-license-grade4-2026',code:'BUSGRD4',head:'Business License darajada 4aad',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'Darajada 4aad',year:2026,method:'fixed',rate:0,percent:0,fixed:400000,currency:'SLSH',sequence:1,active:true,notes:'Qiimaha rasmiga ah: 400,000 Sl.Sh.'},
  {id:'seed-license-grade5-2026',code:'BUSGRD5',head:'Business License darajada 5aad',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'Darajada 5aad',year:2026,method:'fixed',rate:0,percent:0,fixed:240000,currency:'SLSH',sequence:1,active:true,notes:'Qiimaha rasmiga ah: 240,000 Sl.Sh.'},
  {id:'seed-license-grade6-2026',code:'BUSGRD6',head:'Business License darajada 6aad',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'Darajada 6aad',year:2026,method:'fixed',rate:0,percent:0,fixed:200000,currency:'SLSH',sequence:1,active:true,notes:'Qiimaha rasmiga ah: 200,000 Sl.Sh.'},
  {id:'seed-license-grade7-2026',code:'BUSGRD7',head:'Business License darajada 7aad',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'Darajada 7aad',year:2026,method:'fixed',rate:0,percent:0,fixed:150000,currency:'SLSH',sequence:1,active:true,notes:'Qiimaha rasmiga ah: 150,000 Sl.Sh.'},
  {id:'seed-license-ser-tax-2026',code:'1.1.1.3.6',head:'Ser tax',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'percentage',rate:0,percent:10,fixed:0,currency:'SLSH',sequence:2,active:true,notes:'10% — sawirka.'},
  {id:'seed-license-signboards-2026',code:'1.1.1.6.2',head:'Sign Boards-ka',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:0,percent:0,fixed:30000,currency:'SLSH',sequence:3,active:true,notes:'30,000 Sl.Sh — sawirka.'},
  {id:'seed-license-registration-2026',code:'1130103',head:'Diiwaangelinta',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:0,percent:0,fixed:20000,currency:'SLSH',sequence:4,active:true,notes:'20,000 Sl.Sh — sawirka.'},
  {id:'seed-license-cleaning-2026',code:'1140922',head:'Nadaafada',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:0,percent:0,fixed:10000,currency:'SLSH',sequence:5,active:true,notes:'10,000 Sl.Sh — sawirka.'},
  {id:'seed-license-education-2026',code:'1140934',head:'Waxbarashada 2%',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'percentage',rate:0,percent:2,fixed:0,currency:'SLSH',sequence:6,active:true,notes:'2% — sawirka.'},
  {id:'seed-license-sports-2026',code:'1140931',head:'Ciyaaraha sports',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'percentage',rate:0,percent:2,fixed:0,currency:'SLSH',sequence:7,active:true,notes:'2% — sawirka.'},
  {id:'seed-license-health-2026',code:'1420251',head:'Caafimaadka 2%',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'percentage',rate:0,percent:2,fixed:0,currency:'SLSH',sequence:8,active:true,notes:'2% — sawirka.'},
  {id:'seed-license-university-2026',code:'1.1.1.4.13',head:'Jamacada Hargeisa',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'percentage',rate:0,percent:5,fixed:0,currency:'SLSH',sequence:9,active:true,notes:'5% — sawirka.'},
  {id:'seed-license-fire-2026',code:'1140932',head:'Dabdemiska',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'percentage',rate:0,percent:5,fixed:0,currency:'SLSH',sequence:10,active:true,notes:'5% — sawirka.'},
  {id:'seed-license-development-2026',code:'1.1.1.4.7',head:'Horumarinta casima 20%',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'percentage',rate:0,percent:20,fixed:0,currency:'SLSH',sequence:11,active:true,notes:'20% — sawirka.'},
  {id:'seed-license-stamp-2026',code:'11135',head:'Stamp duty',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'percentage',rate:0,percent:2.5,fixed:0,currency:'SLSH',sequence:12,active:true,notes:'2.5% — sawirka.'},
  {id:'seed-license-overtime-2026',code:'1430104',head:'Over Time',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:0,percent:0,fixed:15000,currency:'SLSH',sequence:13,active:true,notes:'15,000 Sl.Sh — sawirka.'},
  {id:'seed-1420107-2026',code:'1420107',head:'1420107 - Dakhliga Liisamada Ganacsiga/Ruqsooyinka',type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:0,percent:0,fixed:0,currency:'SLSH',sequence:99,active:false,notes:'Master license head; grade-specific tariff ayaa loo isticmaalaa.'},
  {id:'seed-other-soo-eegis-liisan-2026',code:'OTHER-SL-001',head:'Soo Eegis Liisan',type:'Other',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:30000,percent:0,fixed:30000,currency:'SLSH',sequence:1,active:true,notes:'Daily Collection — qiimaha waxaa lagu dejinayaa Tacriifad.'},
  {id:'seed-other-soo-eegis-dhul-2026',code:'OTHER-LD-002',head:'Soo Eegista Dhulka banaan',type:'Other',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:120000,percent:0,fixed:120000,currency:'SLSH',dailyComponents:[{label:'Waxbarashada',percent:2},{label:'Sports-ka',percent:2},{label:'Caafimaadka',percent:2},{label:'Jaamacada',percent:5},{label:'Dab damiska',percent:5},{label:'Stam Duty',percent:2.5},{label:'Over Time (OT)',percent:0,fixed:15000}],sequence:2,active:true,notes:'Daily Collection — qiimaha waxaa lagu dejinayaa Tacriifad.'},
  {id:'seed-other-ogolaansho-bulaacad-2026',code:'OTHER-BL-003',head:'Ogolaansho Bulaacad',type:'Other',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:0,percent:0,fixed:0,currency:'SLSH',sequence:3,active:true,notes:'Daily Collection — qiimaha waxaa lagu dejinayaa Tacriifad.'},
  {id:'seed-other-jeexis-cash-2026',code:'OTHER-CASH-004',head:'Jeexis Cash',type:'Other',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:200000,percent:0,fixed:200000,currency:'SLSH',dailyComponents:[{label:'Waxbarashada',percent:2},{label:'Sports-ka',percent:2},{label:'Caafimaadka',percent:2},{label:'Jaamacada',percent:5},{label:'Dab damiska',percent:5},{label:'Stam Duty',percent:2.5},{label:'Over Time (OT)',percent:0,fixed:15000}],sequence:4,active:true,notes:'Daily Collection — qiimaha waxaa lagu dejinayaa Tacriifad.'},
  {id:'seed-other-jeexis-dollar-2026',code:'OTHER-USD-005',head:'Jeexis Dollar',type:'Other',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:200,percent:0,fixed:200,currency:'USD',dailyComponents:[{label:'Waxbarashada',percent:2},{label:'Sports-ka',percent:2},{label:'Caafimaadka',percent:2},{label:'Jaamacada',percent:5},{label:'Dab damiska',percent:5},{label:'Stam Duty',percent:2.5}],sequence:5,active:true,notes:'Daily Collection — qiimaha waxaa lagu dejinayaa Tacriifad.'},
  {id:'seed-other-ogolaansho-jiingad-2026',code:'OTHER-JG-006',head:'Ogolaansho Jiingad',type:'Other',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:0,percent:0,fixed:0,currency:'SLSH',sequence:6,active:true,notes:'Daily Collection — qiimaha waxaa lagu dejinayaa Tacriifad.'},
  {id:'seed-other-gannaax-sharci-daro-2026',code:'OTHER-FINE-SH-001',head:'Gannaaxa Sharco Darada',type:'Other',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:0,percent:0,fixed:0,currency:'SLSH',sequence:0,active:true,notes:'Daily Collection — lacagta iyo currency-ga waxaa lagu dejinayaa Tacriifad.'},
  {id:'seed-other-gannaax-fayo-dhowr-2026',code:'OTHER-FINE-FD-002',head:'Gannaaxa Fayo Dhowrka',type:'Other',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:0,percent:0,fixed:0,currency:'SLSH',sequence:0,active:true,notes:'Daily Collection — lacagta iyo currency-ga waxaa lagu dejinayaa Tacriifad.'},
  {id:'seed-other-qorshayn-beer-2026',code:'OTHER-QB-007',head:'Cashuurta Qorshaynta Beeraha',type:'Other',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:1000,percent:0,fixed:1000,currency:'USD',sequence:7,active:true,dailyComponents:[{label:'Waxbarashada',percent:2},{label:'Sports-ka',percent:2},{label:'Caafimaadka',percent:2},{label:'Jaamacada',percent:5},{label:'Dab damiska',percent:5},{label:'Stam Duty',percent:2.5}],notes:'Daily Collection — Rate $1,000 USD. Percentage heads are applied sequentially as shown on General Receipt; total $1,199.2313655.'},
  {id:'seed-other-beer-roobaad-2026',code:'OTHER-BR-009',head:'Cashuurta Beer Roobaad ka',type:'Other',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:600000,percent:0,fixed:600000,currency:'SLSH',sequence:9,active:true,dailyComponents:[{label:'Waxbarashada',percent:2,code:'1140934'},{label:'Sports-ka',percent:2,code:'1140931'},{label:'Caafimaadka',percent:2,code:'1420251'},{label:'Jaamacada',percent:5,code:'1140933'},{label:'Dab damiska',percent:5,code:'1140932'},{label:'Stam Duty',percent:2.5,code:'41102'},{label:'Stam Duty',percent:2.5,code:'41102'}],notes:'Daily Collection — specification: base 600,000 SLSH with percentage heads.'},
  {id:'seed-other-under-correction-2026',code:'OTHER-UC-008',head:'Dib U Habayn',type:'Other',propertyType:'ALL',zone:'ALL',grade:'ALL',year:2026,method:'fixed',rate:0,percent:0,fixed:0,currency:'SLSH',sequence:8,active:true,notes:'Daily Collection — Manual Money Entry.'}
 ];
 let changed=false;
 seeds.forEach(seed=>{
  const found=tariffs.find(t=>String(t.code)===seed.code && Number(t.year)===2026 && (t.propertyType||'ALL')===(seed.propertyType||'ALL') && (t.grade||'ALL')===(seed.grade||'ALL') && (t.licenseType||'ALL')===(seed.licenseType||'ALL') && t.type===seed.type);
  if(!found){tariffs.push({...seed,createdBy:'admin',createdDate:now.toLocaleString(),updatedAt:now.toISOString()});changed=true;}
  else { if(found.sequence==null){found.sequence=seed.sequence;changed=true;} if(seed.licenseType && !found.licenseType){found.licenseType=seed.licenseType;changed=true;} if(['OTHER-FINE-SH-001','OTHER-FINE-FD-002','OTHER-SL-001','OTHER-LD-002','OTHER-BL-003','OTHER-CASH-004','OTHER-USD-005','OTHER-JG-006','OTHER-QB-007','OTHER-UC-008','OTHER-BR-009'].includes(seed.code) && found.active!==true){found.active=true;changed=true;} if(seed.code==='OTHER-QB-007'){ Object.assign(found,{head:'Cashuurta Qorshaynta Beeraha',rate:1000,fixed:1000,percent:0,currency:'USD',method:'fixed',active:true,dailyComponents:[{label:'Waxbarashada',percent:2},{label:'Sports-ka',percent:2},{label:'Caafimaadka',percent:2},{label:'Jaamacada',percent:5},{label:'Dab damiska',percent:5},{label:'Stam Duty',percent:2.5}],notes:'Daily Collection — Rate $1,000 USD. Percentage heads are applied sequentially; total $1,199.2313655.'}); changed=true; } }
 });
 // v1.3.60 Daily Collections specification: documented tariffs have real Amount values;
 // the two fines remain manual-entry only. Do not invent amounts for undocumented heads.
 const dailySpec={
  'OTHER-SL-001':{head:'Soo Eegis Liisan',method:'fixed',rate:30000,fixed:30000,currency:'SLSH',dailyComponents:[]},
  'OTHER-LD-002':{head:'Soo Eegista Dhulka banaan',method:'fixed',rate:120000,fixed:120000,currency:'SLSH',dailyComponents:[{label:'Waxbarashada',percent:2},{label:'Sports-ka',percent:2},{label:'Caafimaadka',percent:2},{label:'Jaamacada',percent:5},{label:'Dab damiska',percent:5},{label:'Stam Duty',percent:2.5},{label:'Over Time (OT)',percent:0,fixed:15000}]},
  'OTHER-CASH-004':{head:'Jeexis Cash',method:'fixed',rate:200000,fixed:200000,currency:'SLSH',dailyComponents:[{label:'Waxbarashada',percent:2},{label:'Sports-ka',percent:2},{label:'Caafimaadka',percent:2},{label:'Jaamacada',percent:5},{label:'Dab damiska',percent:5},{label:'Stam Duty',percent:2.5},{label:'Over Time (OT)',percent:0,fixed:15000}]},
  'OTHER-USD-005':{head:'Jeexis Dollar',method:'fixed',rate:200,fixed:200,currency:'USD',dailyComponents:[{label:'Waxbarashada',percent:2},{label:'Sports-ka',percent:2},{label:'Caafimaadka',percent:2},{label:'Jaamacada',percent:5},{label:'Dab damiska',percent:5},{label:'Stam Duty',percent:2.5}]},
  'OTHER-BR-009':{head:'Cashuurta Beer Roobaad ka',method:'fixed',rate:600000,fixed:600000,currency:'SLSH',dailyComponents:[{label:'Waxbarashada',percent:2,code:'1140934'},{label:'Sports-ka',percent:2,code:'1140931'},{label:'Caafimaadka',percent:2,code:'1420251'},{label:'Jaamacada',percent:5,code:'1140933'},{label:'Dab damiska',percent:5,code:'1140932'},{label:'Stam Duty',percent:2.5,code:'41102'},{label:'Stam Duty',percent:2.5,code:'41102'}]},
  'OTHER-BL-003':{head:'Ogolaansho Bulaacad',method:'manual',rate:0,fixed:0,currency:'SLSH',dailyComponents:[]},
  'OTHER-JG-006':{head:'Ogolaansho Jiingad',method:'manual',rate:0,fixed:0,currency:'SLSH',dailyComponents:[]},
  'OTHER-UC-008':{head:'Dib U Habayn',method:'manual',rate:0,fixed:0,currency:'SLSH',dailyComponents:[]}
 };
 Object.entries(dailySpec).forEach(([code,spec])=>{const t=tariffs.find(x=>String(x.code)===code&&Number(x.year||2026)===2026);if(t){Object.assign(t,spec);t.active=true;changed=true;}});
 if(changed)localStorage.setItem(TK,JSON.stringify(tariffs));
}
ensureCoreTariffs();
// v1.2.86 — License tariffs rebuilt exactly from the uploaded "tacriifada liisamada.pdf".
// Percentage heads are calculated sequentially on the running subtotal, matching the source figures.
function applyExactLicenseTariffs2026(){
 const y=2026, now=new Date();
 const grades=[
  {grade:'Darajada 1aad',base:1800000,sign:30000,reg:20000,clean:10000},
  {grade:'Darajada 2aad B',base:700000,sign:30000,reg:20000,clean:10000},
  {grade:'Darajada 2aad',base:975000,sign:30000,reg:null,clean:20000},
  {grade:'Darajada 3aad',base:600000,sign:30000,reg:20000,clean:10000},
  {grade:'Darajada 4aad',base:400000,sign:20000,reg:20000,clean:10000},
  {grade:'Darajada 5aad',base:240000,sign:20000,reg:20000,clean:10000},
  {grade:'Darajada 6aad',base:200000,sign:20000,reg:null,clean:10000},
  {grade:'Darajada 7aad',base:150000,sign:20000,reg:null,clean:10000}
 ];
 const pct=[
  ['41104','Sur tax',10,2],['1140934','Waxbarashada',2,6],['1140931','Sports ka',2,7],
  ['1420251','Caafimaad ka',2,8],['1140933','Jaamacada',5,9],['1140932','Dab damis ka',5,10],
  ['1140935','Hormarinta Caasimada',20,11],['41102','Stam duty',2.5,12]
 ];
 // Remove all 2026 Business License tariff rows so there can be no stale/global duplicates.
 tariffs=tariffs.filter(t=>!(t.type==='License' && Number(t.year)===y));
 const add=(g,code,head,method,rate,percent,fixed,seq,notes)=>tariffs.push({
  id:`pdf-license-${g.grade.replace(/[^a-z0-9]+/gi,'-')}-${code}-${seq}`,
  code,head,type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',grade:g.grade,year:y,
  method,rate:rate||0,percent:percent||0,fixed:fixed||0,currency:'SLSH',sequence:seq,active:true,
  effectiveFrom:'2026-01-01',effectiveTo:'2026-12-31',notes:`Source: tacriifada liisamada.pdf — ${notes}`,
  createdBy:'admin',createdDate:now.toLocaleString(),updatedAt:now.toISOString()
 });
 grades.forEach(g=>{
  add(g,'1420107','Liisamada','fixed',0,0,g.base,1,`${g.base.toLocaleString()} Sl.Sh`);
  pct.slice(0,1).forEach(x=>add(g,x[0],x[1],'percentage',0,x[2],0,x[3],`${x[2]}% of running subtotal`));
  add(g,'1140914','Sign boards','fixed',0,0,g.sign,3,`${g.sign.toLocaleString()} Sl.Sh`);
  if(g.reg!==null) add(g,'1410609','Diwaan gelinta','fixed',0,0,g.reg,4,`${g.reg.toLocaleString()} Sl.Sh`);
  add(g,'1140922','Nadaafada Qashinka Qalalan','fixed',0,0,g.clean,g.reg!==null?5:4,`${g.clean.toLocaleString()} Sl.Sh`);
  const start=g.reg!==null?6:5;
  pct.slice(1).forEach((x,i)=>add(g,x[0],x[1],'percentage',0,x[2],0,start+i,`${x[2]}% of running subtotal`));
  add(g,'1140101','Over time','fixed',0,0,15000,13,`15,000 Sl.Sh`);
 });
 localStorage.setItem(TK,JSON.stringify(tariffs));
}
applyExactLicenseTariffs2026();
// v1.2.63 tariff migration from uploaded "tacriifad wax ka badel.pdf".
// Property tariffs are rebuilt from the uploaded source; License tariffs are preserved.
function applyUploadedPropertyTariffs(){
 const y=2026, now=new Date();
 const heads=[
  {code:'1130101',head:'Dhul banaan',propertyType:'Banaan',method:'area_rate',rate:200,percent:0,fixed:0,seq:1},
  {code:'1140935',head:'Cashuurta horimarinta caasimada',subHead:'10% ee cashuurta aasaasiga ah',method:'percentage',rate:0,percent:10,fixed:0,seq:2},
  {code:'1410609',head:'Diwaangelinta',subHead:'20,000 Sl.Sh',method:'fixed',rate:0,percent:0,fixed:20000,seq:3},
  {code:'1140922',head:'Nadaafada qashinka',subHead:'5,000 Sl.Sh',method:'fixed',rate:0,percent:0,fixed:5000,seq:4},
  {code:'1140934',head:'Cashuurta Waxbarashada',method:'percentage',rate:0,percent:2,fixed:0,seq:5},
  {code:'1140931',head:'Cashuurta CIyaaraha',method:'percentage',rate:0,percent:2,fixed:0,seq:6},
  {code:'1420251',head:'Cashuurta Caafimaad ka',method:'percentage',rate:0,percent:2,fixed:0,seq:7},
  {code:'1420255',head:'Lambarinta Guryaha',method:'fixed',rate:0,percent:0,fixed:20000,seq:8},
  {code:'1140933',head:'Cashuurta Jaamacada',method:'percentage',rate:0,percent:5,fixed:0,seq:9},
  {code:'1140932',head:'Cashuurta Dabdamiska',method:'percentage',rate:0,percent:5,fixed:0,seq:10},
  {code:'41102',head:'Stum duty',method:'percentage',rate:0,percent:2.5,fixed:0,seq:11},
  {code:'114010',head:'Over time',method:'fixed',rate:0,percent:0,fixed:15000,seq:21}
 ];
 const propSeeds=[
  {key:'Banaan',name:'Dhul Banaan',rate:200},
  {key:'Dhisan',name:'Dhul Dhisan',rate:600},
  {key:'Deyran',name:'Dhul Deyran',rate:350}
 ];
 tariffs=tariffs.filter(t=>t.type!=='Property' || !String(t.code||'').match(/^(1130101|1140935|1410609|1140922|1140934|1140931|1420251|1420255|1140933|1140932|41102|114010)/));
 for(const pt of propSeeds){
   for(const h of heads){
     const isBase=h.code==='1130101';
     const rec={id:`pdf-property-${pt.key}-${h.code}-${y}`,code:h.code,head:isBase?pt.name:h.head,type:'Property',propertyType:pt.key,zone:'ALL',grade:'ALL',year:y,method:isBase?'area_rate':h.method,rate:isBase?pt.rate:h.rate,percent:h.percent,fixed:h.fixed,currency:'SLSH',effectiveFrom:`${y}-01-01`,effectiveTo:`${y}-12-31`,active:true,sequence:h.seq,notes:isBase?`${pt.name}: ${pt.rate} Sl.Sh × M² — source: uploaded tacriifad PDF.`:'Source: uploaded tacriifad PDF.' ,createdBy:'admin',createdDate:now.toLocaleString(),updatedAt:now.toISOString()};
     tariffs.push(rec);
   }
 }
 localStorage.setItem(TK,JSON.stringify(tariffs));
}
applyUploadedPropertyTariffs();

// v1.3.159 — Restore/lock the three primary Property tariff heads.
// Dhisan = 600 Sl.Sh/m², Deyr = 350 Sl.Sh/m², Banaan = 200 Sl.Sh/m².
function ensurePrimaryPropertyTariffs2026(){
 const y=2026, now=new Date();
 const primary=[
  {key:'Dhisan',code:'1130101',head:'Dhul Dhisan',rate:600,notes:'Cashuurta 1aad — Dhul Dhisan: 600 Sl.Sh halkii m²'},
  {key:'Guri Dabaq G+1',code:'1130101-G1',head:'Guri Dabaq G+1',rate:1080,notes:'Guri Dabaq G+1: 1,080 Sl.Sh halkii m²'},
  {key:'Guri Dabaq G+2',code:'1130101-G2',head:'Guri Dabaq G+2',rate:1464,notes:'Guri Dabaq G+2: 1,464 Sl.Sh halkii m²'},
  {key:'Guri Dabaq G+3',code:'1130101-G3',head:'Guri Dabaq G+3',rate:1771,notes:'Guri Dabaq G+3: 1,771 Sl.Sh halkii m²'},
  {key:'Guri Dabaq G+4',code:'1130101-G4',head:'Guri Dabaq G+4',rate:2017,notes:'Guri Dabaq G+4: 2,017 Sl.Sh halkii m²'},
  {key:'Guri Dabaq G+5',code:'1130101-G5',head:'Guri Dabaq G+5',rate:2214,notes:'Guri Dabaq G+5: 2,214 Sl.Sh halkii m²'},
  {key:'Deyran',code:'1130101-D',head:'Dhul Deyr',rate:350,notes:'Cashuurta 1aad — Dhul Deyr: 350 Sl.Sh halkii m²'},
  {key:'Banaan',code:'1130101-B',head:'Dhul Banaan',rate:200,notes:'Cashuurta 1aad — Dhul Banaan: 200 Sl.Sh halkii m²'}
 ];
 let changed=false;
 primary.forEach(seed=>{
  let t=tariffs.find(x=>String(x.code||'')===seed.code && Number(x.year||0)===y && x.type==='Property' && String(x.propertyType||'')===seed.key);
  if(!t){
   t={id:`primary-property-${seed.key.toLowerCase()}-${y}`,code:seed.code,head:seed.head,type:'Property',propertyType:seed.key,zone:'ALL',grade:'ALL',year:y,method:'area_rate',rate:seed.rate,percent:0,fixed:0,currency:'SLSH',sequence:1,active:true,effectiveFrom:`${y}-01-01`,effectiveTo:`${y}-12-31`,notes:seed.notes,createdBy:'admin',createdDate:now.toLocaleString(),updatedAt:now.toISOString()};
   tariffs.push(t); changed=true;
  }else{
   if(t.head!==seed.head){t.head=seed.head;changed=true}
   if(t.method!=='area_rate'){t.method='area_rate';changed=true}
   if(Number(t.rate)!==seed.rate){t.rate=seed.rate;changed=true}
   if(Number(t.percent||0)!==0){t.percent=0;changed=true}
   if(Number(t.fixed||0)!==0){t.fixed=0;changed=true}
   if(String(t.currency||'SLSH')!=='SLSH'){t.currency='SLSH';changed=true}
   if(t.active===false){t.active=true;changed=true}
   if(!t.notes){t.notes=seed.notes;changed=true}
  }
 });
 if(changed)localStorage.setItem(TK,JSON.stringify(tariffs));
}
ensurePrimaryPropertyTariffs2026();


// v1.2.85 — License tariffs rebuilt from the uploaded "tacriifada liisamada.pdf".
// Source contains the approved License tariff heads and the Grade 1–7 rates,
// including the separate Grade 2 B schedule. Grade 2 has a 10,000 registration
// charge and 20,000 cleaning charge. Percentage heads are calculated sequentially
// on the running subtotal, matching the Grade 2 schedule total of 1,644,755 Sl.Sh.
function applyUploadedLicenseTariffs(){
 const y=2026, now=new Date();
 const schedules=[
  {grade:'Darajada 1aad',base:1800000,sign:40000,registration:20000},
  {grade:'Darajada 2aad B',base:700000,sign:30000,registration:20000,clean:10000},
  {grade:'Darajada 2aad',base:975000,sign:30000,registration:10000,clean:20000},
  {grade:'Darajada 3aad',base:600000,sign:30000,registration:20000},
  {grade:'Darajada 4aad',base:400000,sign:20000,registration:20000},
  {grade:'Darajada 5aad',base:240000,sign:20000,registration:20000},
  {grade:'Darajada 6aad',base:200000,sign:20000,registration:null},
  {grade:'Darajada 7aad',base:150000,sign:20000,registration:null}
 ];
 const common=[
  {code:'41104',head:'Sur tax',method:'percentage',percent:10,fixed:0,seq:2},
  {code:'1140922',head:'Nadaafada Qashinka Qalalan',method:'fixed',percent:0,fixed:10000,seq:5},
  {code:'1140934',head:'Waxbarashada',method:'percentage',percent:2,fixed:0,seq:6},
  {code:'1140931',head:'Sports ka',method:'percentage',percent:2,fixed:0,seq:7},
  {code:'1420251',head:'Caafimaad ka',method:'percentage',percent:2,fixed:0,seq:8},
  {code:'1140933',head:'Jaamacada',method:'percentage',percent:5,fixed:0,seq:9},
  {code:'1140932',head:'Dab damis ka',method:'percentage',percent:5,fixed:0,seq:10},
  {code:'1140935',head:'Hormarinta Caasimada',method:'percentage',percent:20,fixed:0,seq:11},
  {code:'41102',head:'Stam duty',method:'percentage',percent:2.5,fixed:0,seq:12},
  {code:'1140101',head:'Over time',method:'fixed',percent:0,fixed:15000,seq:13}
 ];
 // Replace every existing License tariff, leaving Property and Other tariffs untouched.
 tariffs=tariffs.filter(t=>t.type!=='License');
 for(const s of schedules){
  const gradeKey=s.grade.replace(/\s+/g,'-').toLowerCase();
  const push=(o)=>tariffs.push(Object.assign({
   type:'License',licenseType:'Business License',propertyType:'ALL',zone:'ALL',
   grade:s.grade,year:y,currency:'SLSH',active:true,createdBy:'admin',
   createdDate:now.toLocaleString(),updatedAt:now.toISOString(),
   notes:'Source: tacriifada liisamada.pdf.'
  },o));
  push({id:`pdf-license-${gradeKey}-base-${y}`,code:'1420107',head:'Liisamada',
       method:'fixed',rate:0,percent:0,fixed:s.base,sequence:1});
  push({id:`pdf-license-${gradeKey}-sign-${y}`,code:'1140914',head:'Sign boards',
       method:'fixed',rate:0,percent:0,fixed:s.sign,sequence:3});
  if(s.registration!==null){
   push({id:`pdf-license-${gradeKey}-registration-${y}`,code:'1410609',head:'Diwaan gelinta',
        method:'fixed',rate:0,percent:0,fixed:s.registration,sequence:4});
  }
  for(const h of common){
   const fixedValue=(h.code==='1140922' && Number(s.clean||0)>0)?Number(s.clean):Number(h.fixed||0);
   push({id:`pdf-license-${gradeKey}-${h.code}-${y}`,code:h.code,head:h.head,
        method:h.method,rate:0,percent:h.percent,fixed:fixedValue,sequence:h.seq});
  }
 }
 localStorage.setItem(TK,JSON.stringify(tariffs));
}
applyUploadedLicenseTariffs();

let records=JSON.parse(localStorage.getItem(RK)||'[]'),customers=JSON.parse(localStorage.getItem(CK)||'[]'),bills=JSON.parse(localStorage.getItem(BK)||'[]'),lastReport=[],billHistoryMatches=[];
const $=x=>document.getElementById(x);const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));function money(n,c){return (c==='SLSH'?'Sl.Sh ':'$ ')+Number(n||0).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}function page(id){document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));$(id).classList.add('active');if(id==='dashboard')dash();if(id==='records')renderRecords();if(id==='customers')renderCustomers();if(id==='properties')renderProperties();if(id==='findid')findCustomerIds();if(id==='backup')backupStats();if(id==='billhistory')initBillHistory();if(id==='taxlist')renderTaxList();if(id==='billslist')renderBillsList()}function persist(){localStorage.setItem(RK,JSON.stringify(records));dash();renderRecords();backupStats()}let customerSearchTimer=null,customerSearchCache=null,propertySearchCache=null;function invalidateCustomerSearchCache(){customerSearchCache=null;propertySearchCache=null}function persistC(){localStorage.setItem(CK,JSON.stringify(customers));invalidateCustomerSearchCache();renderCustomers();dash();backupStats()}
let selectedTariffGroup=localStorage.getItem('dhhmh_tariff_group')||'Under Correction';
let selectedTariffSub='';
const DAILY_TARIFF_NAMES=['Gannaaxa Sharco Darada','Gannaaxa Fayo Dhowrka','Soo Eegis Liisan','Soo Eegis Dhul','Ogolaansho Bulaacad','Jeexis Cash','Jeexis Dollar','Ogolaansho Jiingad','Cashuurta Qorshaynta Beeraha','Under Correction'];
function tariffGroupOf(t){
 const h=String(t.head||'').toLowerCase(), code=String(t.code||'');
 if(code==='OTHER-UC-008'||h.includes('under correction')) return 'Under Correction';
 if(t.type==='Property') return 'Property';
 if(t.type==='License') return 'License';
 if(t.type==='Other' && (DAILY_TARIFF_NAMES.some(n=>h===n.toLowerCase()) || code.startsWith('OTHER-'))) return 'Daily Collections';
 return 'Other';
}
function tariffSubOf(t){
 const g=tariffGroupOf(t); if(g==='Property') return normalizePropertyTariffCategory(t.propertyType||t.head)||'Dhammaan';
 if(g==='License') return t.grade&&t.grade!=='ALL'?t.grade:'Dhammaan Grades';
 if(g==='Daily Collections') return t.head||'Daily Collections';
 return '';
}
function selectTariffGroup(group,btn){selectedTariffGroup=group;selectedTariffSub='';localStorage.setItem('dhhmh_tariff_group',group);document.querySelectorAll('.tariff-group-btn').forEach(b=>b.classList.toggle('active',b.dataset.group===group));renderTariffSubgroups();renderTariffs();}
function renderTariffSubgroups(){const box=$('tariffSubgroups');if(!box)return;let labels=[];
 if(selectedTariffGroup==='Property') labels=['Dhisan','Guri Dabaq G+1','Guri Dabaq G+2','Guri Dabaq G+3','Guri Dabaq G+4','Guri Dabaq G+5','Banaan','Deyran'];
 else if(selectedTariffGroup==='License') labels=['Darajada 1aad','Darajada 2aad B','Darajada 2aad','Darajada 3aad','Darajada 4aad','Darajada 5aad','Darajada 6aad','Darajada 7aad'];
 else if(selectedTariffGroup==='Daily Collections') labels=DAILY_TARIFF_NAMES;
 if(!labels.length){box.innerHTML='';box.style.display='none';return}
 box.style.display='flex';box.innerHTML='<button type="button" class="tariff-sub-btn active" data-sub="" onclick="selectTariffSub(\'\',this)">Dhammaan</button>'+labels.map(x=>`<button type="button" class="tariff-sub-btn" data-sub="${esc(x)}" onclick="selectTariffSub(${JSON.stringify(x)},this)">${esc(x)}</button>`).join('');}
function selectTariffSub(sub,btn){selectedTariffSub=sub;document.querySelectorAll('.tariff-sub-btn').forEach(b=>b.classList.toggle('active',b.dataset.sub===sub));renderTariffs();}
function initTariffForm(){
 const y=new Date().getFullYear(); if(!$('tariffYear').value)$('tariffYear').value=y;
 const zones=[...new Set((properties||[]).map(p=>String(p.zone||'').trim()).filter(Boolean))].sort();
 $('tariffZone').innerHTML='<option value="ALL">Dhammaan Zones</option>'+zones.map(z=>`<option>${esc(z)}</option>`).join('');
 const ys=[...new Set(tariffs.map(t=>String(t.year)).filter(Boolean))].sort((a,b)=>b-a); const cur=$('tariffListYear').value;
 $('tariffListYear').innerHTML='<option value="">Dhammaan</option>'+ys.map(v=>`<option>${esc(v)}</option>`).join(''); $('tariffListYear').value=cur;
 document.querySelectorAll('.tariff-group-btn').forEach(b=>b.classList.toggle('active',b.dataset.group===selectedTariffGroup));
 renderTariffSubgroups(); toggleTariffFields(); renderTariffs();
}
function toggleTariffFields(){const isL=$('tariffType').value==='License';const isDaily=$('tariffGroupSelect').value==='Daily Collections';$('tariffGradeWrap').style.display=isL?'block':'none';$('tariffPropertyWrap').style.display=isL?'none':'block';$('tariffLicenseTypeWrap').style.display=isL?'block':'none';$('dailyComponentsWrap').style.display=isDaily?'block':'none';if(isDaily&&!document.querySelector('#dailyComponentsList .daily-component-row')) addDailyComponentRow();} 
function addDailyComponentRow(label='',percent=''){const box=$('dailyComponentsList');if(!box)return;const row=document.createElement('div');row.className='daily-component-row';row.style.cssText='display:grid;grid-template-columns:1fr 110px auto;gap:7px;margin:6px 0;align-items:center';row.innerHTML=`<input class="dc-head-input" placeholder="Head / Sub Head" value="${esc(label)}"><input class="dc-percent-input" type="number" min="0" step="0.0001" placeholder="%" value="${percent!==''?esc(percent):''}"><button type="button" class="secondary" onclick="this.parentElement.remove()">Remove</button>`;box.appendChild(row);}
function getDailyComponents(){return Array.from(document.querySelectorAll('#dailyComponentsList .daily-component-row')).map(r=>({label:r.querySelector('.dc-head-input')?.value.trim()||'',percent:Number(r.querySelector('.dc-percent-input')?.value||0)})).filter(x=>x.label||x.percent>0);} 
function setDailyComponents(items){const box=$('dailyComponentsList');if(!box)return;box.innerHTML='';(Array.isArray(items)?items:[]).forEach(x=>addDailyComponentRow(x.label||'',x.percent||''));if(!items?.length&&$('tariffGroupSelect')?.value==='Daily Collections')addDailyComponentRow();}
function resetTariffForm(){
 $('tariffForm').reset();$('dailyComponentsList').innerHTML='';$('tariffId').value='';$('tariffSequence').value='';$('tariffYear').value=new Date().getFullYear();$('tariffFixed').value='0';$('tariffRate').value='0';$('tariffPercent').value='0';$('tariffCurrency').value='SLSH';$('tariffActive').value='true';$('tariffPropertyType').value='ALL';$('tariffZone').value='ALL';$('tariffGrade').value='ALL';$('tariffLicenseType').value='Business License';$('tariffMethod').value='fixed';$('tariffFormTitle').textContent='ADD';$('tariffGroup').value=selectedTariffGroup;$('tariffGroupSelect').value=selectedTariffGroup;$('tariffNotice').innerHTML='';toggleTariffFields();
 if(selectedTariffGroup==='Property'){$('tariffType').value='Property';$('tariffPropertyType').value=selectedTariffSub||'ALL';}
 else if(selectedTariffGroup==='License'){$('tariffType').value='License';$('tariffGrade').value=selectedTariffSub||'ALL';}
 else if(selectedTariffGroup==='Daily Collections'){$('tariffType').value='Other';}
 toggleTariffFields();
}
function syncTariffGroupFromForm(){const g=$('tariffGroupSelect').value;$('tariffGroup').value=g;selectedTariffGroup=g;selectedTariffSub='';localStorage.setItem('dhhmh_tariff_group',g);document.querySelectorAll('.tariff-group-btn').forEach(b=>b.classList.toggle('active',b.dataset.group===g));renderTariffSubgroups();}
function tariffMethodText(m){return ({fixed:'Fixed Amount',area_rate:'Area × Rate',area_rate_percent:'Area × Rate + Percentage',percentage:'Base × Percentage',percent_fixed:'Base × Percentage + Fixed',area_percent_fixed:'Area × Rate + Percentage + Fixed'})[m]||m}
function normalizePropertyCategory(v){
 const x=String(v||'').toLowerCase().trim();
 if(!x)return '';
 if(x.includes('banaan')||x.includes('banoon')||x.includes('open land')||x.includes('land'))return 'Banaan';
 if(x.includes('dayran')||x.includes('deyr')||x.includes('wall')||x.includes('walled'))return 'Deyran';
 if(x.includes('dhisme guri')||x.includes('guri')||x.includes('dhisan')||x.includes('dabaq')||x.includes('building')||x.includes('house'))return 'Dhisan';
 return '';
}
function normalizePropertyTariffCategory(v){
 const raw=String(v||'').trim();
 const m=raw.match(/guri\s*dabaq\s*g\+([1-5])/i);
 if(m)return `Guri Dabaq G+${m[1]}`;
 const g=raw.match(/g\+([1-5])/i);
 if(g)return `Guri Dabaq G+${g[1]}`;
 return normalizePropertyCategory(raw);
}
function displayPropertyType(v){
 const x=String(v||'').toLowerCase().trim();
 if(!x)return '';
 const gm=x.match(/guri\s*dabaq\s*g\+([1-5])/i)||x.match(/g\+([1-5])/i);
 if(gm)return `Guri Dabaq G+${gm[1]}`;
 if(x.includes('license')||x.includes('liisan')||x.includes('ruqso')||x.includes('business'))return 'Business';
 if(x.includes('vacant')||x.includes('banaan')||x.includes('land'))return 'Dhul Banaan';
 if(x.includes('deyr')||x.includes('wall')||x.includes('walled'))return 'Deyr';
 if(x.includes('dhisme guri')||x.includes('guri')||x.includes('dhisan')||x.includes('dabaq')||x.includes('building')||x.includes('house'))return 'Guri';
 return String(v);
}
function getGroupRecords(){return tariffs.filter(t=>tariffGroupOf(t)===selectedTariffGroup && (!selectedTariffSub||tariffSubOf(t)===selectedTariffSub));}
function normalizeTariffOrder(){
 const groups={};tariffs.forEach(t=>{const g=tariffGroupOf(t);(groups[g] ||= []).push(t)});
 Object.values(groups).forEach(arr=>arr.sort((a,b)=>(Number(a.sequence)||999999)-(Number(b.sequence)||999999)).forEach((t,i)=>t.sequence=i+1));
 localStorage.setItem(TK,JSON.stringify(tariffs));
}
function renderTariffs(){
 normalizeTariffOrder();
 const q=($('tariffSearch')?.value||'').toLowerCase(),ty=$('tariffListType')?.value||'',yr=$('tariffListYear')?.value||'';
 let d=tariffs.filter(t=>tariffGroupOf(t)===selectedTariffGroup && (!selectedTariffSub||tariffSubOf(t)===selectedTariffSub) && (!q||String(t.code||'').toLowerCase().includes(q)||String(t.head||'').toLowerCase().includes(q))&&(!ty||(ty==='Daily Collections'?tariffGroupOf(t)==='Daily Collections':t.type===ty))&&(!yr||String(t.year)===yr));
 d.sort((a,b)=>(Number(a.sequence)||999999)-(Number(b.sequence)||999999));
 let total=d.reduce((a,t)=>a+Number(t.fixed||0),0);$('tariffStats').textContent=`Showing 1 to ${d.length} of ${d.length} entries`;$('tariffTotal').textContent=total.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2});
 $('tariffBody').innerHTML=d.map((t,i)=>`<tr draggable="true" data-tid="${esc(t.id)}" ondragstart="tariffDragStart(event,'${esc(t.id)}')" ondragover="tariffDragOver(event)" ondrop="tariffDrop(event,'${esc(t.id)}')" ondragend="tariffDragEnd(event)"><td>${i+1}</td><td><b>${Number(t.sequence)||i+1}</b></td><td><b>${esc(t.code||'')}</b></td><td>${esc(t.head)}</td><td>${esc(t.type||'')} ${t.grade&&t.grade!=='ALL'?'— '+esc(t.grade):''}</td><td>${esc(t.year)}</td><td>${t.method==='area_rate'||t.method==='area_rate_percent'||t.method==='area_percent_fixed'?Number(t.rate||0).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:4})+' / m²':(t.method==='percentage'||t.method==='percent_fixed'?Number(t.percent||0).toLocaleString(undefined,{maximumFractionDigits:4})+'%':Number(t.fixed||0).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2}))}</td><td>${esc(t.createdBy||'admin')}</td><td>${esc(t.createdDate||new Date(t.updatedAt||Date.now()).toLocaleString())}</td><td><button type="button" class="edit-btn" onclick="editTariff('${esc(t.id)}')">EDIT</button> <button type="button" class="del-btn" onclick="deleteTariff('${esc(t.id)}')">DELETE</button></td><td><div class="tariff-order"><button type="button" title="Kor" onclick="moveTariff('${esc(t.id)}',-1)" ${i===0?'disabled':''}>↑</button><button type="button" title="Hoos" onclick="moveTariff('${esc(t.id)}',1)" ${i===d.length-1?'disabled':''}>↓</button></div></td></tr>`).join('')||'<tr><td colspan="11" style="text-align:center;padding:25px">Qaybtan wali tacriifad laguma darin.</td></tr>';
}
function tariffDragStart(e,id){e.dataTransfer.setData('text/plain',id);e.currentTarget.classList.add('dragging')}
function tariffDragOver(e){e.preventDefault();e.currentTarget.classList.add('drop-target')}
function tariffDragEnd(e){document.querySelectorAll('.tariff-table tr').forEach(r=>r.classList.remove('dragging','drop-target'))}
function tariffDrop(e,targetId){e.preventDefault();document.querySelectorAll('.tariff-table tr').forEach(r=>r.classList.remove('drop-target'));const sourceId=e.dataTransfer.getData('text/plain');if(!sourceId||sourceId===targetId)return;reorderTariffs(sourceId,targetId)}
function reorderTariffs(sourceId,targetId){const source=tariffs.find(t=>t.id===sourceId),target=tariffs.find(t=>t.id===targetId);if(!source||!target||tariffGroupOf(source)!==tariffGroupOf(target))return;const arr=tariffs.filter(t=>tariffGroupOf(t)===tariffGroupOf(source)).sort((a,b)=>(Number(a.sequence)||999999)-(Number(b.sequence)||999999));const si=arr.findIndex(t=>t.id===sourceId),ti=arr.findIndex(t=>t.id===targetId);if(si<0||ti<0)return;const [m]=arr.splice(si,1);arr.splice(ti,0,m);arr.forEach((t,i)=>t.sequence=i+1);localStorage.setItem(TK,JSON.stringify(tariffs));renderTariffs()}
function moveTariff(id,dir){const t=tariffs.find(x=>x.id===id);if(!t)return;const g=tariffGroupOf(t);const arr=tariffs.filter(x=>tariffGroupOf(x)===g).sort((a,b)=>(Number(a.sequence)||999999)-(Number(b.sequence)||999999));const i=arr.findIndex(x=>x.id===id),j=i+dir;if(i<0||j<0||j>=arr.length)return;[arr[i].sequence,arr[j].sequence]=[arr[j].sequence||j+1,arr[i].sequence||i+1];arr.forEach((x,k)=>x.sequence=k+1);localStorage.setItem(TK,JSON.stringify(tariffs));renderTariffs()}
function buildTariffFromForm(existing){const now=new Date();const isDaily=$('tariffGroupSelect').value==='Daily Collections';const t={id:existing?.id||crypto.randomUUID(),code:$('tariffCode').value.trim(),head:$('tariffHead').value.trim(),type:isDaily?'Other':$('tariffType').value,zone:$('tariffZone').value,grade:$('tariffGrade').value,licenseType:$('tariffLicenseType').value,propertyType:$('tariffPropertyType').value,year:Number($('tariffYear').value),method:$('tariffMethod').value,rate:Number($('tariffRate').value||0),percent:Number($('tariffPercent').value||0),fixed:Number($('tariffFixed').value||0),currency:$('tariffCurrency').value,effectiveFrom:$('tariffFrom').value,effectiveTo:$('tariffTo').value,active:$('tariffActive').value==='true',notes:$('tariffNotes').value,createdBy:existing?.createdBy||'admin',createdDate:existing?.createdDate||now.toLocaleString(),sequence:Number($('tariffSequence').value||0),updatedAt:now.toISOString()};if(isDaily)t.dailyComponents=getDailyComponents();else if(existing?.dailyComponents)t.dailyComponents=existing.dailyComponents;return t}
function saveTariffRecord(){const existing=tariffs.find(x=>x.id===$('tariffId').value);const t=buildTariffFromForm(existing);if(!t.code)return alert('Geli Code-ka Tacriifada.');if(!t.head)return alert('Geli Charge Name.');const g=tariffGroupOf(t);const arr=tariffs.filter(x=>tariffGroupOf(x)===g && x.id!==t.id).sort((a,b)=>(Number(a.sequence)||999999)-(Number(b.sequence)||999999));if(!t.sequence||t.sequence<1)t.sequence=arr.length+1;arr.splice(Math.min(t.sequence-1,arr.length),0,t);arr.forEach((x,i)=>x.sequence=i+1);const others=tariffs.filter(x=>tariffGroupOf(x)!==g);tariffs=others.concat(arr);localStorage.setItem(TK,JSON.stringify(tariffs));$('tariffNotice').innerHTML='<div class="notice">✅ Tacriifada waa la kaydiyey.</div>';selectedTariffGroup=g;selectedTariffSub=tariffSubOf(t);initTariffForm();resetTariffForm();renderTariffs()}
$('tariffForm').addEventListener('submit',e=>{e.preventDefault();saveTariffRecord()});
function updateTariffFromForm(){if(!$('tariffId').value)return alert('Marka hore guji EDIT record-ka aad rabto.');saveTariffRecord()}
function editTariff(id){const t=tariffs.find(x=>x.id===id);if(!t)return;$('tariffId').value=t.id;$('tariffSequence').value=t.sequence||'';$('tariffCode').value=t.code||'';$('tariffHead').value=t.head||'';$('tariffType').value=t.type||'Other';$('tariffYear').value=t.year||new Date().getFullYear();$('tariffMethod').value=t.method||'fixed';$('tariffRate').value=t.rate||0;$('tariffPercent').value=t.percent||0;$('tariffFixed').value=t.fixed||0;$('tariffCurrency').value=t.currency||'SLSH';$('tariffFrom').value=t.effectiveFrom||'';$('tariffTo').value=t.effectiveTo||'';$('tariffActive').value=String(t.active!==false);$('tariffNotes').value=t.notes||'';$('tariffFormTitle').textContent='EDIT';selectedTariffGroup=tariffGroupOf(t);selectedTariffSub=tariffSubOf(t);$('tariffGroup').value=selectedTariffGroup;$('tariffGroupSelect').value=selectedTariffGroup;initTariffForm();$('tariffZone').value=t.zone||'ALL';$('tariffGrade').value=t.grade||'ALL';$('tariffLicenseType').value=t.licenseType||'Business License';$('tariffPropertyType').value=t.propertyType||'ALL';setDailyComponents(t.dailyComponents||[]);toggleTariffFields();document.querySelector('.tariff-side').scrollIntoView({behavior:'smooth',block:'start'});}
function deleteTariff(id){if(!confirm('Delete this tariff?'))return;tariffs=tariffs.filter(t=>t.id!==id);localStorage.setItem(TK,JSON.stringify(tariffs));renderTariffs();}

function classifyBillCustomer(){
 const id=String($('billCustomer').value||'').trim();
 const c=customers.find(x=>String(x.customerId||'').trim()===id);
 const p=properties.find(x=>String(x.propertyId||'').trim()===id||String(x.customerId||'').trim()===id);
 const scope=$('billScope')?.value||'individual';
 const registered=String(c?.type||c?.propertyType||c?.property||p?.type||p?.propertyType||p?.property||'').toLowerCase();
 const isLicense=scope==='general' ? $('billGeneralType')?.value==='License' : /license|liisan|ruqso|business/.test(registered) || !!(c?.licenseGrade||c?.grade||p?.licenseGrade||p?.grade);
 return {c,p,isLicense,scope};
}
function calculateBillFromTariff(){
 if($('billYear')&&$('billMonth'))$('billMonth').value=String($('billYear').value)+'-01';
 const {c,p,isLicense,scope}=classifyBillCustomer();
 if(scope==='individual' && !c&&!p)return alert('Dooro Customer ID sax ah.');
 if(scope==='general'){ $('billType').value=isLicense?'License':'Property'; $('billTariffStatus').value=`General ${isLicense?'License':'Property'} billing selected`; return 0; }
 const year=Number($('billYear')?.value||new Date().getFullYear());
 const zone=String($('billZone').value||(p?.zone)||c?.zone||'').trim();
 const grade=$('billGrade').value||c?.licenseGrade||c?.grade||p?.licenseGrade||p?.grade||'';
 const customerBillCategory=c?.category||c?.licenseCategory||c?.customerCategory||c?.businessCategory||c?.licenseType||p?.category||p?.licenseCategory||p?.licenseType||'';
 const licenseType='Business License';
 const category=isLicense?'License':'Property';
 const source=p||c||{};
 const propertyCategory=normalizePropertyTariffCategory(p?.propertyType||p?.propertyName||c?.propertyType||c?.property||$('billType').value);
 if(category==='Property' && !propertyCategory){
   $('billTariffStatus').value='Select/verify Property Type: Guri, Guri Dabaq G+1 ilaa G+5, Banaan ama Deyr';
   return alert('Customer-kan Property Type-kiisa lama aqoonsan. Taxpayer Info ka dooro nooca saxda ah, kadib Generate mar kale.');
 }
 if(category==='License' && !grade){
   $('billTariffStatus').value='Select/verify License Grade';
   return alert('Customer-kan License Grade-kiisa lama aqoonsan. Taxpayer Info ka dooro Darajada 1aad ilaa 7aad, kadib Generate mar kale.');
 }
 const split= c?.measurementBreakdown && typeof c.measurementBreakdown==='object' ? Object.entries(c.measurementBreakdown).map(([partName,part])=>({partName,area:parseAreaExpression(part?.areaInput??part?.area??0)})).filter(x=>x.area>0) : [];
 const area=Number(source?.area||0)>0?Number(source.area):((Number(source?.height||0)>0&&Number(source?.width||0)>0)?Number(source.height)*Number(source.width):Number(source?.size||0)||0);
 let eligible=tariffs.filter(t=>t.active!==false&&Number(t.year)===year&&String(t.type||'').toLowerCase()===category.toLowerCase()&&
   (!t.zone||t.zone==='ALL'||String(t.zone).toLowerCase()===zone.toLowerCase())&&
   (category==='License' ? ((!t.grade||t.grade==='ALL'||t.grade===grade)&&(!t.licenseType||t.licenseType==='ALL'||t.licenseType===licenseType)) :
    (!t.propertyType||t.propertyType==='ALL'||t.propertyType===propertyCategory))
 ).sort((a,b)=>Number(a.sequence||999)-Number(b.sequence||999));
 if(!eligible.length){$('billAmount').value='';$('billTariffStatus').value='No matching tariff';return alert(`Ma jiro Tacriifad ku habboon ${category}, Year ${year}${category==='Property'?' iyo Nooca '+propertyCategory:' iyo Grade '+grade}.`)}
 let base=0,total=0,details=[];
 if(category==='Property' && split.length){
   // Iskujarka: calculate Head #1 for every part, combine them once, then calculate the remaining heads once.
   const partBases=[];
   for(const part of split){
     const pt=normalizePropertyTariffCategory(part.partName)||part.partName;
     const partTariffs=tariffs.filter(t=>t.active!==false&&Number(t.year)===year&&String(t.type||'').toLowerCase()==='property'&&
       (!t.zone||t.zone==='ALL'||String(t.zone).toLowerCase()===zone.toLowerCase())&&
       (!t.propertyType||t.propertyType==='ALL'||normalizePropertyTariffCategory(t.propertyType)===pt))
       .sort((a,b)=>Number(a.sequence||999)-Number(b.sequence||999));
     const primary=partTariffs.find(t=>t.method==='area_rate'&&normalizePropertyTariffCategory(t.propertyType)===pt)||partTariffs.find(t=>t.method==='area_rate');
     if(!primary){$('billAmount').value='';$('billTariffStatus').value='No matching split tariff';return alert(`Ma jiro Tacriifad ku habboon ${pt}, Year ${year}.`)}
     const amount=Math.round((part.area*Number(primary.rate||0)+Number.EPSILON)*100)/100;
     partBases.push({partName:pt,area:part.area,tariff:primary,amount});
   }
   const primaryAmount=Math.round((partBases.reduce((n,x)=>n+x.amount,0)+Number.EPSILON)*100)/100;
   base=primaryAmount; total=primaryAmount;
   details.push({code:'1130101',head:'Cashuurta Dhulka — Iskujarka',subHead:partBases.map(x=>`${x.partName}: ${x.area.toLocaleString()} m² × ${Number(x.tariff.rate||0).toLocaleString()}`).join(' + '),amount:primaryAmount,rate:0,percent:0,fixed:0,method:'area_rate',currency:partBases[0]?.tariff?.currency||'SLSH',propertyType:'ISKUJAR',sequence:1,partName:'Iskujarka',area:partBases.reduce((n,x)=>n+x.area,0)});
   const requiredCodes=['1140935','1410609','1140922'];
   const other=eligible.filter(t=>requiredCodes.includes(String(t.code||''))||!['1130101'].includes(String(t.code||''))).sort((a,b)=>Number(a.sequence||999)-Number(b.sequence||999));
   const seen=new Set();
   other.forEach(t=>{if(seen.has(String(t.code||t.id)))return;seen.add(String(t.code||t.id));let v=0;
     if(t.code==='1140935') v=total*Number(t.percent||10)/100;
     else if(t.code==='1410609') v=Number(t.fixed||20000);
     else if(t.code==='1140922') v=Number(t.fixed||5000);
     else if(t.method==='percentage') v=total*Number(t.percent||0)/100;
     else if(t.method==='percent_fixed') v=total*Number(t.percent||0)/100+Number(t.fixed||0);
     else if(t.method==='fixed') v=Number(t.fixed||0);
     else if(t.method==='area_rate') v=0;
     else v=Number(t.fixed||0);
     v=Math.round((v+Number.EPSILON)*100)/100; total+=v;
     details.push({code:t.code,head:t.head,subHead:t.subHead||t.subhead||t.chargeName||t.head||'',amount:v,rate:Number(t.rate||0),percent:Number(t.percent||0),fixed:Number(t.fixed||0),method:t.method,currency:t.currency||'SLSH',propertyType:'ALL',sequence:t.sequence});
   });
   // Keep Head #1 combined as one tariff line; the sub-head records every split part and its area/rate.
   const totalForBill=details.filter(d=>!d.detailOnly).reduce((n,d)=>n+Number(d.amount||0),0); total=totalForBill;
 } else if(category==='Property'){
   const baseT=eligible.find(t=>t.method==='area_rate' && normalizePropertyTariffCategory(t.propertyType)===propertyCategory)||eligible.find(t=>t.method==='area_rate');
   if(!baseT)return alert('Tacriifada property-ga ee nooca la doortay lama helin.');
   base=area*Number(baseT.rate||0);
   // Property bill must always calculate and show these three source-defined heads
   // immediately after the base property charge: 1140935 (10%), 1410609 (20,000), 1140922 (5,000).
   const requiredCodes=['1130101','1130101-G1','1130101-G2','1130101-G3','1130101-G4','1130101-G5','1140935','1410609','1140922'];
   const ordered=[...eligible.filter(t=>requiredCodes.includes(String(t.code||''))), ...eligible.filter(t=>!requiredCodes.includes(String(t.code||'')))];
   const seen=new Set();
   ordered.forEach(t=>{
     if(seen.has(t.code)) return; seen.add(t.code);
     let v=0;
     if(t.id===baseT.id||t.code==='1130101') v=base;
     else if(t.code==='1140935') v=total*Number(t.percent||10)/100;
     else if(t.code==='1410609') v=Number(t.fixed||20000);
     else if(t.code==='1140922') v=Number(t.fixed||5000);
     else if(t.method==='fixed') v=Number(t.fixed||0);
     else if(t.method==='percentage') v=total*Number(t.percent||0)/100;
     else if(t.method==='area_rate') v=area*Number(t.rate||0);
     else if(t.method==='percent_fixed') v=total*Number(t.percent||0)/100+Number(t.fixed||0);
     else v=Number(t.fixed||0);
     v=Math.round((v+Number.EPSILON)*100)/100; total+=v;
     details.push({code:t.code,head:t.head,subHead:t.subHead||t.subhead||t.chargeName||t.head||'',amount:v,rate:Number(t.rate||0),percent:Number(t.percent||0),fixed:Number(t.fixed||0),method:t.method,currency:t.currency||'SLSH',propertyType:t.propertyType||propertyCategory,sequence:t.sequence});
   });
 } else {
   const gradeT=eligible.find(t=>t.grade&&t.grade!=='ALL'&&t.grade===grade)||eligible.find(t=>t.grade==='ALL'&&t.method==='fixed');
   if(!gradeT)return alert('Tacriifada License/Grade-ka la doortay lama helin.');
   base=Number(gradeT.fixed||gradeT.rate||0);
   eligible.forEach(t=>{
     let v=0;
     if(t.id===gradeT.id) v=base;
     else if(t.method==='fixed') v=Number(t.fixed||0);
     else if(t.method==='percentage') v=base*Number(t.percent||0)/100;
     else if(t.method==='percent_fixed') v=base*Number(t.percent||0)/100+Number(t.fixed||0);
     else v=Number(t.fixed||0);
     v=Math.round(v); total+=v;
     details.push({code:t.code,head:t.head,subHead:t.subHead||t.subhead||t.chargeName||t.head||'',amount:v,rate:Number(t.rate||0),percent:Number(t.percent||0),fixed:Number(t.fixed||0),method:t.method,currency:t.currency||'SLSH',grade:t.grade||grade,sequence:t.sequence});
   });
 }
 $('billAmount').value=total.toFixed(2);$('billCurrency').value=eligible[0]?.currency||'SLSH';
 $('billTariffStatus').value=`${category} • ${category==='Property'?propertyCategory:grade} • ${details.length} heads • Base ${base.toLocaleString()} SLSH • 1140935 + 1410609 + 1140922 included`;
 window.lastCalculatedBill={category,propertyCategory,grade,licenseType,year,area,base,total,details,customerId:c?.customerId||p?.customerId||p?.propertyId};
 window.currentBillCharges=details.map(x=>({...x}));
 return total;
}
function initBillForm(){
 const y=new Date().getFullYear();
 if($('billYear')){
   const cur=Number($('billYear').value)||y;
   let opts=''; for(let yr=1990;yr<=y;yr++) opts+=`<option value="${yr}">${yr}</option>`;
   $('billYear').innerHTML=opts; $('billYear').value=String(Math.min(Math.max(cur,1990),y));
 }
 if($('billMonth'))$('billMonth').value=String($('billYear')?.value||y)+'-01';
 if($('billSearch'))$('billSearch').value=''; if($('billSearchResults'))$('billSearchResults').innerHTML='<option value="">Select customer...</option>';
 if($('billScope'))$('billScope').value='individual'; if($('billGeneralTypeWrap'))$('billGeneralTypeWrap').style.display='none'; if($('billManualRate'))$('billManualRate').value=''; if($('billNoYears'))$('billNoYears').value='1';
 toggleBillScope();
}
function toggleBillScope(){
 const general=$('billScope')?.value==='general';
 if($('billGeneralTypeWrap'))$('billGeneralTypeWrap').style.display=general?'block':'none';
 ['billSearch','billCustomer','billSearchResults'].forEach(id=>{const el=$(id); if(el&&el.closest('div')) el.closest('div').style.display=general?'none':'';});
 const indivOnly=['billCustomerName','billGIS','billDistrict','billZone','billSubZone','billCustomerTypeWrap','billLicenseTypeWrap','billGrade'];
 indivOnly.forEach(id=>{const el=$(id); if(el&&el.closest('div')) el.closest('div').style.display=general?'none':'';});
 if(general){$('billType').value=$('billGeneralType')?.value||'Property';} else {fillBillCustomerById();}
}
function searchBillCustomers(){const q=($('billSearch').value||'').trim().toLowerCase();const s=$('billSearchResults');const matches=customers.filter(c=>[c.customerId,c.name].join(' ').toLowerCase().includes(q)&&c.status!=='Inactive');s.innerHTML='<option value="">Select customer...</option>'+matches.map(c=>`<option value="${esc(c.customerId)}">${esc(c.customerId)} — ${esc(c.name)}</option>`).join('');if(matches.length===1){$('billCustomer').value=matches[0].customerId;fillBillCustomer(matches[0]);}}
function chooseBillCustomer(){const id=$('billSearchResults').value;if(!id)return;$('billCustomer').value=id;fillBillCustomerById();}
function fillBillCustomerById(){const id=$('billCustomer').value.trim();const c=customers.find(x=>x.customerId===id);if(c)fillBillCustomer(c);}
function fillBillCustomer(c){
 $('billCustomerName').value=c.name||'';$('billGIS').value=c.gis||c.supplyNo||'';$('billDistrict').value=c.district||'Hargeisa';$('billZone').value=c.zone||'Maxamuud Haybe';$('billSubZone').value=c.xaafadda||c.subZone||'';
 const l=!!(c.licenseGrade||c.grade||/license|liisan|ruqso|business/i.test(String(c.type||c.licenseType||'')));
 $('billType').value=l?'License':(c.propertyType||c.property||c.type||'');const selectedCategory=c.category||c.licenseCategory||c.customerCategory||c.businessCategory||c.licenseType||'';
 const catSelect=$('billLicenseType');
 if(catSelect){catSelect.innerHTML='';const opt=document.createElement('option');opt.value=selectedCategory||'Business License';opt.textContent=selectedCategory||'Business License';catSelect.appendChild(opt);catSelect.value=opt.value;}
 $('billGrade').value=c.licenseGrade||c.grade||'';
 toggleBillLicenseFields();
}
function resetBillForm(){$('billForm').reset();$('billDistrict').value='Hargeisa';$('billZone').value='Maxamuud Haybe';if($('billDiscountPercent'))$('billDiscountPercent').value='';if($('billPrimaryHeadAmount'))$('billPrimaryHeadAmount').value='';initBillForm();}
function billYearRange(b){const from=Number(b.tariffFromYear||b.fromYear||b.tariffYear||String(b.month||b.issueDate||'').slice(0,4)||0);const to=Number(b.tariffToYear||b.toYear||b.tariffYear||from||0);return {from:Math.min(from,to||from),to:Math.max(from,to||from)};}
function billOverlapsYear(customerId,startYear,endYear,category,grade){return bills.find(b=>{if(String(b.customerId||'').toUpperCase()!==String(customerId||'').toUpperCase())return false;const br=billYearRange(b);if(!br.from)return false;if(br.to<startYear||br.from>endYear)return false;const bc=String(b.category||b.type||'').toLowerCase();if(category&&bc&&((category==='License')!==/license|liisan|ruqso|business/i.test(bc)))return false;if(category==='License'&&grade&&String(b.grade||'')&&String(b.grade||'')!==String(grade))return false;return true;});}
$('billForm').addEventListener('submit',e=>{e.preventDefault();
 const customerId=String($('billCustomer').value||'').trim();
 if(!customerId)return alert('Dooro Customer marka hore.');
 const start=Number($('billFromYear')?.value||$('billYear')?.value||new Date().getFullYear());
 const finish=Number($('billToYear')?.value||start);
 const fromYear=Math.min(start,finish),toYear=Math.max(start,finish);
 const category=(/license/i.test($('billType').value)||$('billGrade').value)?'License':'Property';
 const grade=$('billGrade').value||'';
 const duplicate=billOverlapsYear(customerId,fromYear,toYear,category,grade);
 if(duplicate){const r=billYearRange(duplicate);return alert(`❌ Duplicate Tax Bill: Customer ${customerId} waxaa hore loogu generate-gareeyey cashuur ku jirta ${r.from===r.to?r.from:r.from+'–'+r.to}. Lama generate-gareyn karo isla sanad/years-ka. Fadlan dooro sanad aan hore loo dalacin.`);}
 if(!Number($('billAmount').value)){const calculated=calculateBillFromTariff();if(!calculated)return;}
 const amount=Number($('billAmount').value||0);if(!(amount>0))return alert('Fadlan marka hore Calculate from Tacriifad samee.');
 const billCustomerObj=customers.find(x=>String(x.customerId||'')===customerId)||{};
 const customerCategory=billCustomerObj.category||billCustomerObj.licenseCategory||billCustomerObj.customerCategory||billCustomerObj.businessCategory||billCustomerObj.licenseType||billCustomerObj.propertyType||billCustomerObj.property||''; const b={id:crypto.randomUUID(),billNo:String(new Date().getFullYear())+String(Date.now()).slice(-8),customerId,customerName:$('billCustomerName').value,businessName:billCustomerObj.businessName||billCustomerObj.business||'',phone:billCustomerObj.phone||billCustomerObj.mobile||billCustomerObj.telephone||'',mobile:billCustomerObj.mobile||billCustomerObj.phone||billCustomerObj.telephone||'',gis:$('billGIS').value,district:$('billDistrict').value,zone:$('billZone').value,subZone:$('billSubZone').value,type:$('billType').value,category,customerType:category,customerCategory:customerCategory,measurementBreakdown:billCustomerObj.measurementBreakdown?JSON.parse(JSON.stringify(billCustomerObj.measurementBreakdown)):null,measurementBreakdownSummary:window._currentBillSplitSummary||'',grade,licenseType:customerCategory||$('billLicenseType')?.value||billCustomerObj.licenseType||'',month:String(fromYear)+'-01',issueDate:new Date().toISOString().slice(0,10),dueDate:'',amount,currency:$('billCurrency').value,charges:window.currentBillCharges||[],combinedInvoice:true,tariffYear:fromYear,tariffFromYear:fromYear,tariffToYear:toYear,years:toYear-fromYear+1,discountPercent:Number($('billDiscountPercent')?.value||0)||0,primaryHeadAmount:Number($('billPrimaryHeadAmount')?.value||0)||0,notes:$('billNotes').value,status:'Unpaid',createdAt:new Date().toISOString()};
 bills.unshift(b);localStorage.setItem(BK,JSON.stringify(bills));localStorage.setItem('dhhmh_last_bill',JSON.stringify(b));$('billNotice').innerHTML='<div class="notice">✅ Bill waa la generate gareeyey oo lagu kaydiyey Bill History.</div>';openBill(b);});
function tariffRateText(c){const n=v=>Number(v||0).toLocaleString(undefined,{minimumFractionDigits:0,maximumFractionDigits:4});if(c.method==='percentage')return `${n(c.percent)}%`;if(c.method==='fixed')return n(c.fixed||c.amount);if(c.method==='area_rate')return n(c.rate);if(c.method==='area_rate_percent')return `${n(c.rate)} + ${n(c.percent)}%`;if(c.method==='percent_fixed')return `${n(c.percent)}% + ${n(c.fixed)}`;if(c.method==='area_percent_fixed')return `${n(c.rate)} + ${n(c.percent)}% + ${n(c.fixed)}`;if(Number(c.percent||0))return `${n(c.percent)}%`;if(Number(c.rate||0))return n(c.rate);return n(c.fixed||c.amount)}
function billChargeRows(b){const charges=Array.isArray(b.charges)&&b.charges.length?b.charges:[{code:b.category==='License'?'LICENSE':'PROPERTY',head:b.type||b.category||'Property Tax',subHead:b.type||b.category||'Property Tax',method:'fixed',amount:Number(b.amount||0),fixed:Number(b.amount||0)}];const from=Number(b.tariffFromYear||0),to=Number(b.tariffToYear||0),years=(from&&to&&to>=from)?(to-from+1):1;const combined=years>1||b.type==='Isku Jar';return charges.map((c,i)=>{const totalAmount=Number(c.amount||0);const annualAmount=Number(c.annualAmount||0)>0?Number(c.annualAmount):(combined?totalAmount/years:totalAmount);const sub=(c.subHead||c.subhead)?`<div style="font-size:8px;color:#555;margin-top:1px">${esc(c.subHead||c.subhead)}</div>`:'';if(combined){return `<tr><td>${i+1}</td><td>${esc(c.code||'')}</td><td><b>${esc(c.head||c.chargeName||'')}</b>${c.partName?`<div style="font-size:8px;color:#555;margin-top:1px">${esc(c.partName)} area: ${Number(c.area||0).toLocaleString(undefined,{maximumFractionDigits:2})} m²</div>`:''}${sub}</td><td class="charge-annual">${money(annualAmount,c.currency||b.currency||'SLSH')}</td><td class="charge-years">${years}</td><td class="charge-total">${money(totalAmount,c.currency||b.currency||'SLSH')}</td></tr>`;}return `<tr><td>${i+1}</td><td>${esc(c.code||'')}</td><td><b>${esc(c.head||c.chargeName||'')}</b>${c.partName?`<div style="font-size:8px;color:#555;margin-top:1px">${esc(c.partName)} area: ${Number(c.area||0).toLocaleString(undefined,{maximumFractionDigits:2})} m²</div>`:''}${sub}</td><td class="charge-rate">${esc(tariffRateText(c))}</td><td class="charge-amount">${money(totalAmount,c.currency||b.currency||'SLSH')}</td></tr>`}).join('')}
let currentBillForPrint=null;let currentPrintRecord=null;
function billPropertyMetrics(b){const p=properties.find(x=>String(x.customerId||x.customerID||'')===String(b.customerId||''))||properties.find(x=>String(x.propertyId||'')===String(b.propertyId||''));const c=customers.find(x=>String(x.customerId||'')===String(b.customerId||''));const h=Number(b.height||p?.height||c?.height||0),w=Number(b.width||p?.width||c?.width||0),area=Number(b.area||p?.area||c?.area||0)||(h&&w?h*w:0);return {height:h,width:w,area};}
function openBill(b){
 currentBillForPrint=b; currentPrintRecord=null;
 const c=customers.find(x=>String(x.customerId||'')===String(b.customerId||''))||{};
 const pm=billPropertyMetrics(b);
 const issue=new Date((b.issueDate||new Date().toISOString().slice(0,10))+'T00:00:00');
 const dateText=isNaN(issue)?(b.issueDate||''):issue.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
 const yr=billYearRange(b); const billYear=yr.from&&yr.to?(yr.from===yr.to?String(yr.from):`${yr.from} – ${yr.to}`):String((b.month||b.issueDate||'').slice(0,4)||new Date().getFullYear());
 const code=b.type==='Dhisan'?'1130101':b.type==='Banana'?'1140101':b.type==='Deyr'?'1140921':b.type==='Business'?'1420251':'OTHER';
 const chargeName=b.grade?`${b.type||'Property Tax'} — ${b.grade}`:(b.type||'Property Tax');
 const amount=money(b.amount,b.currency||'SLSH');
 const isBusinessBill=/license|liisan|ruqso|business/i.test(String(b.category||b.type||b.licenseType||''));
 const billTitle=isBusinessBill?'Business License Bill':'Property Tax Bill';
 const footerTitle=isBusinessBill?'Business License Bill — Maxamuud Haybe District':'Property Tax Bill — Maxamuud Haybe District';
 $('receipt').innerHTML=`
 <div class="bill-preview-wrap">
  <div class="bill-paper">
   <div class="bill-header">
    <img src="data:image/png;base64,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" alt="DHHMH Logo">
    <div class="bill-title"><div class="org">DAWLADA HOOSE EE HARGEYSA</div><div class="sub">${billTitle}</div><div class="year">Years Covered: ${esc(billYear)}</div></div>
    <div class="bill-meta"><div><b>Cust. #</b><span>${esc(b.customerId)}</span></div><div><b>Bill No</b><span><b>${esc(b.billNo)}</b></span></div><div><b>Date</b><span>${esc(dateText)}</span></div></div>
   </div>
   <div class="bill-grid">
    <div class="bill-cell"><div class="bill-label">GIS Ref</div><div class="bill-value">${esc(b.gis||'—')}</div></div>
    <div class="bill-cell"><div class="bill-label">District</div><div class="bill-value">${esc(b.district||'Hargeisa')}</div></div>
    <div class="bill-cell"><div class="bill-label">S. District / Zone</div><div class="bill-value">${esc(b.zone||'—')}</div></div>
    <div class="bill-cell"><div class="bill-label">Qudhac Dheer / S. Zone</div><div class="bill-value">${esc(b.subZone||'—')}</div></div>
    <div class="bill-cell bill-wide"><div class="bill-label">Customer</div><div class="bill-value">${esc(b.customerName||'—')}</div></div>${isBusinessBill?`<div class="bill-cell"><div class="bill-label">Business Name</div><div class="bill-value">${esc(b.businessName||c.businessName||c.business||'—')}</div></div>`:''}<div class="bill-cell"><div class="bill-label">Mobile No</div><div class="bill-value">${esc(b.phone||b.mobile||'—')}</div></div>
     <div class="bill-cell"><div class="bill-label">Mobile No</div><div class="bill-value">${esc(b.phone||b.mobile||'—')}</div></div>
     ${isBusinessBill?'':`<div class="bill-cell bill-wide"><div class="bill-label">Property Size</div><div class="bill-value">Height / Dherer: ${pm.height!==undefined&&pm.height!=='' ? Number(pm.height).toLocaleString(undefined,{maximumFractionDigits:2})+' m' : '—'} &nbsp; × &nbsp; Width / Ballac: ${pm.width!==undefined&&pm.width!=='' ? Number(pm.width).toLocaleString(undefined,{maximumFractionDigits:2})+' m' : '—'} &nbsp; | &nbsp; Area: ${pm.area?Number(pm.area).toLocaleString(undefined,{maximumFractionDigits:2})+' m²':'—'}</div></div>`}
     <div class="bill-cell"><div class="bill-label">Bill Amount</div><div class="bill-value">${amount}</div></div>
    <div class="bill-cell"><div class="bill-label">Category</div><div class="bill-value">${esc(displayPropertyType(isBusinessBill?(b.customerCategory||b.licenseType||b.category||'License'):(b.propertyType||b.type||b.category||'Property')))}</div></div><div class="bill-cell"><div class="bill-label">License Type</div><div class="bill-value">${esc(isBusinessBill?'Business':'—')}</div></div>
    <div class="bill-cell"><div class="bill-label">License Grade</div><div class="bill-value">${esc(b.grade||'—')}</div></div>
    <div class="bill-cell"><div class="bill-label">Billing Month</div><div class="bill-value">${esc(b.month||'—')}</div></div>
    <div class="bill-cell"><div class="bill-label">Due Date</div><div class="bill-value">${esc(b.dueDate||'—')}</div></div>
    <div class="bill-cell"><div class="bill-label">Currency</div><div class="bill-value">${esc(b.currency||'SLSH')}</div></div>
    <div class="bill-cell"><div class="bill-label">Payment Status</div><div class="bill-value">${esc(b.status||'Unpaid')}</div></div><div class="bill-cell"><div class="bill-label">Reference GRNO</div><div class="bill-value">${esc(b.referenceGrNo||b.lastGrNo||'—')}</div></div><div class="bill-cell"><div class="bill-label">Reference Date</div><div class="bill-value">${esc(b.referenceDate||b.lastGrDate||'—')}</div></div><div class="bill-cell"><div class="bill-label">For Year</div><div class="bill-value">${esc(b.forYear||'—')}</div></div>
    <div class="bill-cell"><div class="bill-label">Notes</div><div class="bill-value">${esc(b.notes||'—')}</div></div>
   </div>
   <table class="bill-charges">${((Number(b.tariffToYear||0)>Number(b.tariffFromYear||0))||b.type==='Isku Jar')?'<thead><tr><th>No.</th><th>Code</th><th>Head/Sub Head</th><th>Annual Amount</th><th>Years</th><th>Total</th></tr></thead>':'<thead><tr><th>Sr.</th><th>Code</th><th>Head / Sub Head</th><th>Rate / %</th><th>Amount</th></tr></thead>'}<tbody>${billChargeRows(b)}</tbody></table>
   <div class="bill-total"><span class="label">Bill Amount:</span><span class="amount">${Number(b.amount||0).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</span></div>
   <div class="bill-barcode"></div><div class="bill-barcode-no">${esc(b.billNo)}</div>
   <div class="bill-footer"><span>${esc(dateText)} ${new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</span><span>${footerTitle}</span><span>Page 1 of 1</span></div>
  </div>
  <div class="bill-actions"><button onclick="printReceipt()">Print Bill</button><button onclick="downloadBillPDF()">⬇ Download PDF</button><button class="pay-bill-btn" onclick="payBill(currentBillForPrint.id)">💳 Pay</button><button class="whatsapp-bill-btn" onclick="sendBillWhatsApp(currentBillForPrint)">💬 WhatsApp Bill</button><button class="secondary" onclick="closeModal()">Close</button></div>
 </div>`;
 $('modal').classList.add('open')
 const regType=String(c.type||c.propertyType||c.property||''); $('billType').value=/license|liisan|ruqso|business/i.test(regType)?'License':'Property';
}
function normalizeWhatsAppNumber(v){
 let n=String(v||'').replace(/[^0-9+]/g,'');
 if(n.startsWith('+'))n=n.slice(1);
 if(n.startsWith('00'))n=n.slice(2);
 if(n.startsWith('0'))n='252'+n.slice(1);
 if(n.length===9 && (n.startsWith('6')||n.startsWith('7')) )n='252'+n;
 return n;
}
function billWhatsAppMessage(b){
 const c=customers.find(x=>String(x.customerId||'')===String(b?.customerId||''))||{};
 const gr=billLastGR(b);
 const yr=billYearRange(b);
 const years=yr.from&&yr.to?(yr.from===yr.to?String(yr.from):`${yr.from} – ${yr.to}`):String((b?.month||b?.issueDate||'').slice(0,4)||'');
 const status=String(b?.status||'Unpaid');
 return `DAWLADA HOOSE EE HARGEYSA\nDHHMH REVENUE MANAGEMENT SYSTEM\n\nTAX INVOICE / BILL\n\nCustomer ID: ${b?.customerId||''}\nCustomer Name: ${b?.customerName||c.name||''}\nPhone: ${b?.phone||b?.mobile||c.phone||c.mobile||''}\nDistrict: ${b?.district||c.district||'Hargeisa'}\nZone: ${b?.zone||c.zone||c.xaafadda||''}\nXaafadda: ${b?.subZone||c.subZone||''}\nProperty/License Type: ${b?.type||b?.category||c.type||''}\nYears Covered: ${years}\nBill No: ${b?.billNo||''}\nBill Date: ${b?.issueDate||''}\nStatus: ${status}\n\nTOTAL AMOUNT: ${money(b?.amount,b?.currency||'SLSH')}${status==='Paid'&&gr?`\nGR No: ${gr.grNo||''}\nGR Date: ${gr.date||''}`:''}\n\nFadlan ku soo bixi Bill ka Mudada laguugu talogaly\nDHHMH — Maxamuud Haybe District`;
}
function sendBillWhatsApp(b){
 if(!b)return alert('Bill-ka lama helin.');
 const c=customers.find(x=>String(x.customerId||'')===String(b.customerId||''))||{};
 const raw=b.phone||b.mobile||c.phone||c.mobile||c.telephone||'';
 const phone=normalizeWhatsAppNumber(raw);
 if(!phone)return alert('Customer-kan WhatsApp/Phone number laguma diiwaangelin. Fadlan Customer-ka ku dar mobile number.');
 const text=encodeURIComponent(billWhatsAppMessage(b));
 const url=`https://wa.me/${phone}?text=${text}`;
 window.open(url,'_blank','noopener,noreferrer');
}
function setToday(){$('date').value=new Date().toISOString().slice(0,10)}function resetEntry(){$('entryForm').reset();$('editId').value='';$('entryTitle').textContent='New Revenue Entry';populateCustomerSelect();toggleLicenseGrade();setToday()}
function toggleLicenseGrade(){const isBusiness=$('revenueType').value==='Business License';$('licenseGradeWrap').style.display=isBusiness?'block':'none';$('licenseGrade').required=isBusiness;if(!isBusiness)$('licenseGrade').value=''}
function toggleBillLicenseFields(){const isLicense=/business|license/i.test($('billType').value)||!!$('billGrade').value;$('billLicenseTypeWrap').style.display=isLicense?'block':'none';if(!isLicense)$('billGrade').value=''}
$('billType').addEventListener('change',toggleBillLicenseFields);$('billGrade').addEventListener('change',toggleBillLicenseFields);
$('entryForm').addEventListener('submit',e=>{e.preventDefault();const id=$('editId').value||crypto.randomUUID(),obj={id,customerId:$('customerSelect').value,customerName:$('customerName').value.trim(),grNo:$('grNo').value.trim(),gisNo:$('gisNo').value.trim(),xaafadda:$('xaafadda').value.trim(),district:$('district').value,zone:$('zone').value,revenueType:$('revenueType').value,licenseGrade:$('licenseGrade').value,amount:Number($('amount').value),currency:$('currency').value,status:$('status').value,method:$('method').value,date:$('date').value,collector:$('collector').value.trim(),notes:$('notes').value.trim(),createdAt:new Date().toISOString()};const i=records.findIndex(r=>r.id===id);if(i>=0)records[i]=obj;else records.unshift(obj);persist();resetEntry();$('entryNotice').innerHTML='<div class="notice">✅ Xogta waa la kaydiyey.</div>';page('records')});
function editRevenue(id){const r=records.find(x=>x.id===id);if(!r)return;$('editId').value=r.id;populateCustomerSelect(r.customerId);$('district').value=r.district||'Hargeisa';$('zone').value=r.zone||'Maxamuud Haybe';$('customerName').value=r.customerName;$('grNo').value=r.grNo;$('gisNo').value=r.gisNo;$('xaafadda').value=r.xaafadda;$('revenueType').value=r.revenueType;toggleLicenseGrade();$('licenseGrade').value=r.licenseGrade||'';$('amount').value=r.amount;$('currency').value=r.currency||'USD';$('status').value=r.status;$('method').value=r.method;$('date').value=r.date;$('collector').value=r.collector;$('notes').value=r.notes;$('entryTitle').textContent='Edit Revenue Entry';page('entry')}
function del(id){if(confirm('Delete this revenue record?')){records=records.filter(r=>r.id!==id);persist()}}function renderRecords(){const q=($('search')?.value||'').toLowerCase(),s=$('fs')?.value||'All',t=$('ft')?.value||'All';const d=records.filter(r=>(!q||[r.customerId,r.customerName,r.grNo,r.gisNo,r.xaafadda].join(' ').toLowerCase().includes(q))&&(s==='All'||r.status===s)&&(t==='All'||r.revenueType===t));$('recordsBody').innerHTML=d.map(r=>`<tr><td>${r.date}</td><td>${esc(r.customerName)}<br><small>${esc(r.grNo)}</small></td><td>${esc(displayPropertyType(r.revenueType))}${r.licenseGrade?'<br><small>'+esc(r.licenseGrade)+'</small>':''}</td><td>${money(r.amount,r.currency||'USD')}</td><td><span class="badge ${r.status==='Paid'?'paid':'unpaid'}">${r.status}</span></td><td><button onclick="openReceipt('${r.id}')">Receipt</button> <button class="secondary" onclick="editRevenue('${r.id}')">Edit</button> <button class="danger" onclick="del('${r.id}')">Delete</button></td></tr>`).join('')||'<tr><td colspan="6">No records found.</td></tr>'}
function dash(){
 const year=Number($('dashYear')?.value||new Date().getFullYear());
 const sum=(arr,c)=>arr.filter(r=>(r.currency||'USD')===c).reduce((a,r)=>a+Number(r.amount||0),0);
 const yearBills=(Array.isArray(bills)?bills:[]).filter(b=>Number(String(b.tariffYear||b.month||b.issueDate||'').slice(0,4))===year);
 const yearRecords=records.filter(r=>Number(String(r.date||'').slice(0,4))===year);
 const slshBills=sum(yearBills,'SLSH'), slshRecords=sum(yearRecords,'SLSH');
 $('dSLSH').textContent=money(slshBills||slshRecords,'SLSH'); $('dBills').textContent=(yearBills.length||yearRecords.length).toLocaleString(); $('dCustomers').textContent=customers.length.toLocaleString();
 const unpaid=yearBills.filter(b=>String(b.status||'Unpaid')!=='Paid'); const outstanding=unpaid.reduce((a,b)=>a+Number(b.amount||0),0); $('dOutstanding').textContent=money(outstanding,'SLSH'); $('dUnpaid').textContent=`${unpaid.length} unpaid bills`; $('dRevenueChange').textContent=yearBills.length?`${yearBills.length.toLocaleString()} generated bills`:'All recorded SLSH revenue'; $('dBillChange').textContent=yearBills.length?`${year} billing activity`:'No bills yet'; $('dYearChip').textContent=year;
 const props=Array.isArray(properties)?properties:[]; const cat=(p)=>{const t=String(p.propertyType||p.licenseType||p.propertyName||p.property||'').toLowerCase();if(/license|liis|ruqso|business/.test(t))return'license';if(/wall|deyr|dayr|darb|xayndaab/.test(t))return'wall';if(/banaan|vacant|land|dhul/.test(t)&&!/dhisan|guri|building/.test(t))return'land';return'building'};
 const pc={building:0,land:0,wall:0,license:0}, rev={building:0,land:0,wall:0,license:0}; props.forEach(p=>{const c=cat(p);pc[c]++;rev[c]+=Number(p.balance||0)}); customers.forEach(c=>{if(!props.some(p=>String(p.propertyId||'')===String(c.propertyId||''))){const cc=cat(c);pc[cc]++;rev[cc]+=Number(c.balance||0)}});
 $('dBuildings').textContent=pc.building.toLocaleString(); $('dLand').textContent=pc.land.toLocaleString(); $('dWall').textContent=pc.wall.toLocaleString(); $('dLicense').textContent=pc.license.toLocaleString(); $('dBuildingRevenue').textContent=money(rev.building,'SLSH'); $('dLandRevenue').textContent=money(rev.land,'SLSH'); $('dWallRevenue').textContent=money(rev.wall,'SLSH'); $('dLicenseRevenue').textContent=money(rev.license,'SLSH');
 const monthly=Array(12).fill(0); [...yearBills,...yearRecords].forEach(r=>{const d=r.issueDate||r.date||r.month||'';const m=Number(String(d).slice(5,7));if(m>=1&&m<=12&&((r.currency||'SLSH')==='SLSH'))monthly[m-1]+=Number(r.amount||0)}); const max=Math.max(...monthly,1); const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; $('dashTrend').innerHTML=monthly.map((v,i)=>`<div class="trend-col"><div class="trend-bar-wrap"><div class="trend-bar" style="height:${Math.max(2,(v/max)*100)}%" title="${v.toLocaleString()} Sl.Sh"></div></div><div class="trend-value">${v>=1000000?(v/1000000).toFixed(1)+'M':v>=1000?(v/1000).toFixed(0)+'K':v.toFixed(0)}</div><div class="trend-label">${months[i]}</div></div>`).join('');
 const cats=[['Buildings',revFromBills(yearBills,'building',yearRecords),'#0b8b58'],['Land',revFromBills(yearBills,'land',yearRecords),'#d59b00'],['Wall',revFromBills(yearBills,'wall',yearRecords),'#2878c7'],['License',revFromBills(yearBills,'license',yearRecords),'#7650ba']]; const totalCat=cats.reduce((a,x)=>a+x[1],0); $('dashDonutTotal').textContent=totalCat>=1000000000?(totalCat/1000000000).toFixed(2)+'B':totalCat>=1000000?(totalCat/1000000).toFixed(1)+'M':totalCat>=1000?(totalCat/1000).toFixed(0)+'K':totalCat.toFixed(0); let cursor=0; const stops=cats.map(x=>{const pct=totalCat?(x[1]/totalCat*100):25;const out=`${x[2]} ${cursor}% ${cursor+pct}%`;cursor+=pct;return out}); $('dashDonut').style.background=`conic-gradient(${stops.join(',')})`; $('dashCategoryLegend').innerHTML=cats.map(x=>`<div class="legend-row"><i class="legend-dot" style="background:${x[2]}"></i><b>${x[0]}</b><span>${totalCat?(x[1]/totalCat*100).toFixed(1):'0.0'}% · ${Number(x[1]||0).toLocaleString()}</span></div>`).join('');
 const activities=[]; yearBills.slice().sort((a,b)=>String(b.createdAt||b.issueDate).localeCompare(String(a.createdAt||a.issueDate))).slice(0,5).forEach(b=>activities.push({icon:'▤',title:'Bill Generated',sub:`${b.billNo||'—'} — ${b.customerName||b.customerId||'Customer'}`,time:b.issueDate||''})); yearRecords.slice().sort((a,b)=>String(b.createdAt||b.date).localeCompare(String(a.createdAt||a.date))).slice(0,5).forEach(r=>activities.push({icon:r.status==='Paid'?'$':'•',title:r.status==='Paid'?'Payment Received':'Revenue Recorded',sub:`${r.customerName||r.customerId||'Customer'} — ${money(r.amount,r.currency||'SLSH')}`,time:r.date||''})); activities.sort((a,b)=>String(b.time).localeCompare(String(a.time))); $('dashActivity').innerHTML=activities.slice(0,6).map(a=>`<div class="activity-row"><div class="activity-icon">${a.icon}</div><div><div class="activity-title">${esc(a.title)}</div><div class="activity-sub">${esc(a.sub)}</div></div><div class="activity-time">${esc(a.time)}</div></div>`).join('')||'<div class="muted" style="padding:25px 0;text-align:center">No recent activity.</div>';
 const today=new Date().toISOString().slice(0,10),ym=today.slice(0,7); const td=yearRecords.filter(r=>r.date===today),md=yearRecords.filter(r=>String(r.date||'').startsWith(ym)); $('dToday').textContent=money(sum(td,'USD'),'USD')+' | '+money(sum(td,'SLSH'),'SLSH'); $('dMonth').textContent=money(sum(md,'USD'),'USD')+' | '+money(sum(md,'SLSH'),'SLSH'); $('dPaid').textContent=yearRecords.filter(r=>r.status==='Paid').length; $('dUSD').textContent=money(sum(yearRecords,'USD'),'USD'); $('typeDash').innerHTML='';
}
function revFromBills(arr,kind,rec){const match=x=>{const t=String(x.type||x.category||x.revenueType||'').toLowerCase();if(kind==='license')return /license|liis|ruqso|business/.test(t);if(kind==='land')return /land|banaan|vacant/.test(t);if(kind==='wall')return /wall|deyr|dayr|darb/.test(t);return /building|dhisan|guri|property/.test(t)&&!(/land|banaan|vacant|wall|deyr|dayr|darb|license|business/.test(t));};const b=arr.filter(match).reduce((a,x)=>a+((x.currency||'SLSH')==='SLSH'?Number(x.amount||0):0),0);const r=rec.filter(match).reduce((a,x)=>a+((x.currency||'SLSH')==='SLSH'?Number(x.amount||0):0),0);return b||r}
function nextCustomerId(){let max=0;customers.forEach(c=>{const m=String(c.customerId||'').match(/^CUST-(\d+)$/);if(m)max=Math.max(max,Number(m[1]))});return 'CUST-'+String(max+1).padStart(6,'0')}
function nextTaxCode(){let max=0;customers.forEach(c=>{const m=String(c.taxCode||'').match(/^TAX-(\d+)$/i);if(m)max=Math.max(max,Number(m[1]))});return 'TAX-'+String(max+1).padStart(6,'0')}
function migrateCustomerIds(){let changed=false;customers.forEach(c=>{if(!c.customerId){c.customerId=nextCustomerId();changed=true}});if(changed)localStorage.setItem(CK,JSON.stringify(customers))}
function migrateTaxCodes(){let changed=false;const used=new Set(customers.map(c=>String(c.taxCode||'').trim().toUpperCase()).filter(Boolean));customers.forEach(c=>{if(!String(c.taxCode||'').trim()){let code=nextTaxCode();while(used.has(code))code='TAX-'+String(Number(code.slice(4))+1).padStart(6,'0');c.taxCode=code;used.add(code);changed=true}});if(changed)localStorage.setItem(CK,JSON.stringify(customers))}
migrateCustomerIds();
migrateTaxCodes();
migrateCustomerHouseNumbers();
function populateCustomerSelect(selected){const sel=$('customerSelect');if(!sel)return;sel.innerHTML='<option value="">Select Customer...</option>'+customers.filter(c=>c.status!=='Inactive').map(c=>`<option value="${esc(c.customerId)}">${esc(c.customerId)} — ${esc(c.name)} — ${esc(c.xaafadda)}</option>`).join('');if(selected)sel.value=selected}
function selectCustomerForRevenue(){const id=$('customerSelect').value,c=customers.find(x=>x.customerId===id);if(!c)return;$('customerName').value=c.name;$('gisNo').value=c.gis||'';$('xaafadda').value=c.xaafadda||'';$('district').value=c.district||'Hargeisa';$('zone').value=c.zone||'Maxamuud Haybe'}
function showCustomerSavedMessage(customerId){const n=$('customerSaveNotice');if(!n)return;n.style.setProperty('display','block','important');n.style.setProperty('visibility','visible','important');n.style.setProperty('opacity','1','important');n.style.cssText+=';background:#ecfdf5;color:#065f46;border:1px solid #86efac;padding:13px 16px;border-radius:8px;margin:0 0 14px;font-weight:700;font-family:Arial,sans-serif;';n.innerHTML=`✅ Waa la diiwaangeliyey xogtan.<br><span style="font-weight:600">Customer ID: ${esc(customerId)}</span>`;try{n.scrollIntoView({behavior:'smooth',block:'center'});}catch(e){}}
function getCanonicalHouseNumber(c){
  if(!c)return '';
  const vals=[c.houseNumber,c.houseNo,c.house_number,c['House Number']];
  for(const v of vals){const x=String(v??'').trim();if(x)return x;}
  return '';
}
function syncCustomerHouseNumber(c){
  if(!c)return '';
  const h=getCanonicalHouseNumber(c);
  c.houseNumber=h;
  c.houseNo=h;
  return h;
}
function migrateCustomerHouseNumbers(){
  let changed=false;
  customers.forEach(c=>{const before=JSON.stringify([c.houseNumber,c.houseNo]);const h=syncCustomerHouseNumber(c);if(JSON.stringify([c.houseNumber,c.houseNo])!==before)changed=true;});
  if(changed){localStorage.setItem(CK,JSON.stringify(customers));invalidateCustomerSearchCache();}
}
function openCustomerTaxpayerInfo(){
 const form=$('custId');
 const typedId=String($('custDisplayId')?.value||form?.value||form?.dataset?.originalId||'').trim();
 if(!typedId){alert('Customer ID lama helin. Marka hore Save Customer ama dooro Customer hore u jiray.');return}
 const c=customers.find(x=>String(x.customerId||x.id||'').toUpperCase()===typedId.toUpperCase()||String(x.id||'').toUpperCase()===typedId.toUpperCase());
 if(!c){alert('Customer-kan wali lama diiwaangelin. Marka hore Save Customer samee.');return}
 const customerId=String(c.customerId||c.id||typedId);
 currentTaxpayerId=customerId;
 localStorage.setItem('dhhmh_last_taxpayer',customerId);
 page('taxpayer');
 renderTaxpayerWorkspace();
}
function newCustomer(){
 const ub=document.querySelector('#customerForm button[onclick="updateCustomer()"]');
 if(ub)ub.textContent='✏️ Update';
 if($('custForm'))$('custForm').reset();
 const form=$('custId');
 if(form){form.value='';form.dataset.originalId='';form.dataset.originalData='';}
 const cid=nextCustomerId();
 $('custDisplayId').value=cid;
 $('custTitle').textContent='Add Customer';
 $('custDate').value=new Date().toISOString().slice(0,10);
 if($('custAreaMode'))$('custAreaMode').value='automatic';
 if($('custDistrict'))$('custDistrict').value='Hargeisa';
 if($('custSubDistrict'))$('custSubDistrict').value='Maxamuud Haybe';
 if($('custZone'))$('custZone').value='';
 if($('custHouseNumber'))$('custHouseNumber').value='';
 if($('custSubZone'))$('custSubZone').value='';
 setCustomerAreaMode();
 if($('customerSaveNotice')){$('customerSaveNotice').style.display='none';$('customerSaveNotice').textContent=''}
 page('customerForm')
}
$('custForm').addEventListener('submit',e=>{e.preventDefault();if($('custId').value){alert('Customer-kan hore ayuu u diiwaangashan yahay. Isticmaal Update si aad xogtiisa u beddesho.');return}const id=crypto.randomUUID();const customerId=String($('custDisplayId').value||nextCustomerId()).trim();const o={id,customerId,taxCode:nextTaxCode(),name:$('custName').value.trim(),phone:$('custPhone').value.trim(),district:'Hargeisa',subDistrict:'Maxamuud Haybe',zone:$('custZone').value.trim(),xaafadda:$('custZone').value.trim(),subZone:$('custSubZone').value.trim(),street:$('custStreet').value.trim(),plotNumber:$('custPlot').value.trim(),latitude:$('custLatitude').value.trim(),longitude:$('custLongitude').value.trim(),houseNumber:$('custHouseNumber').value.trim(),houseNo:$('custHouseNumber').value.trim(),property:$('custProperty').value,propertyType:$('custProperty').value,height:$('custHeight').value,width:$('custWidth').value,area:getCustomerAreaValue(),areaInput:$('custArea').value,areaMode:$('custAreaMode')?.value||'automatic',date:$('custDate').value,status:$('custStatus').value,notes:$('custNotes').value.trim()};if(!o.name){alert('Fadlan geli magaca Customer-ka.');return}customers.unshift(o);try{invalidateCustomerSearchCache();persistC();populateCustomerSelect();renderCustomers();}finally{showCustomerSavedMessage(customerId);setTimeout(()=>alert(`Waa la diiwaangeliyey xogtan.\nCustomer ID: ${customerId}`),30);}});

function updateCustomer(){
 const form=$('custId');
 const originalKey=String(form?.dataset?.originalId||'').trim();
 const displayId=String($('custDisplayId')?.value||'').trim();
 if(!originalKey){alert('Dooro Customer hore u jiray kadib Update samee.');return}
 const i=customers.findIndex(c=>String(c.customerId||'')===originalKey||String(c.id||'')===originalKey);
 if(i<0){alert('Customer-ka lama helin.');return}
 const old=customers[i];
 const updated=Object.assign({},old,{
   customerId:displayId||String(old.customerId||originalKey),
   name:String($('custName')?.value||'').trim(),
   phone:String($('custPhone')?.value||'').trim(),
   district:String($('custDistrict')?.value||'Hargeisa').trim()||'Hargeisa',
   subDistrict:String($('custSubDistrict')?.value||'Maxamuud Haybe').trim()||'Maxamuud Haybe',
   zone:String($('custZone')?.value||'').trim(),
   xaafadda:String($('custZone')?.value||'').trim(),
   subZone:String($('custSubZone')?.value||'').trim(),
   street:String($('custStreet')?.value||'').trim(),
   plotNumber:String($('custPlot')?.value||'').trim(),
   plotNo:String($('custPlot')?.value||'').trim(),
   latitude:String($('custLatitude')?.value||'').trim(),
   longitude:String($('custLongitude')?.value||'').trim(),
   houseNumber:String($('custHouseNumber')?.value||'').trim(),
   houseNo:String($('custHouseNumber')?.value||'').trim(),
   property:String($('custProperty')?.value||old.property||'Other'),
   propertyType:String($('custProperty')?.value||old.propertyType||old.property||'Other'),
   height:String($('custHeight')?.value||''),
   width:String($('custWidth')?.value||''),
   area:getCustomerAreaValue(),
   areaInput:String($('custArea')?.value||''),
   areaMode:$('custAreaMode')?.value||old.areaMode||'automatic',
   date:String($('custDate')?.value||old.date||''),
   status:String($('custStatus')?.value||old.status||'Active'),
   notes:String($('custNotes')?.value||'').trim(),
   updatedAt:new Date().toISOString()
 });
 if(!updated.name){alert('Fadlan geli magaca Customer-ka.');return}
 // Keep the internal database id unchanged. Only customer data entered in the form is updated.
 updated.id=old.id;
 customers[i]=updated;
 if(form){form.value=String(updated.customerId||'');form.dataset.originalId=String(updated.customerId||old.id);form.dataset.originalData=JSON.stringify(updated)}
 invalidateCustomerSearchCache();
 persistC();
 populateCustomerSelect();
 renderCustomers();
 // Update-ku si aamusnaan ah ayuu u dhammaystirmayaa; fariin guul ah lama soo bandhigayo.
}
function renderCustomers(){clearTimeout(customerSearchTimer);renderCustomersNow()}
function renderCustomersNow(){
 const q=String($('custSearch')?.value||'').trim().toLowerCase();
 if(!q){
   const rows=customers.slice(0,100).map(c=>`<tr><td><b>${esc(c.customerId||'')}</b></td><td>${esc(c.name)}</td><td>${esc(c.phone)}</td><td>${esc(c.zone||c.xaafadda||'')}</td><td>${esc(getCanonicalHouseNumber(c))}</td><td>${esc(displayPropertyType(c.propertyType||c.licenseType||c.property||''))}</td><td>${esc(c.height||'—')} m</td><td>${esc(c.width||'—')} m</td><td>${(Number(c.height||0)*Number(c.width||0)||Number(c.area)||Number(c.size)||0).toLocaleString(undefined,{maximumFractionDigits:2})} m²</td><td><button onclick="editCustomer('${c.id}')">Edit</button> <button class="danger" onclick="deleteCustomer('${c.id}')">Delete</button></td></tr>`).join('');
   $('customersBody').innerHTML=rows||'<tr><td colspan="10">No customers found.</td></tr>';return;
 }
 if(!customerSearchCache||customerSearchCache.source!==customers){customerSearchCache={source:customers,rows:customers.map(c=>({c,text:[c.customerId,c.name,c.phone,c.zone,c.xaafadda,c.subZone,getCanonicalHouseNumber(c),c.gis,c.supplyNo,c.property,c.propertyType,c.licenseType,c.propertyId,c.height,c.width].map(v=>String(v??'').toLowerCase()).join(' ')}))};}
 const d=customerSearchCache.rows.filter(x=>x.text.includes(q)).map(x=>x.c);
 const cids=new Set(d.map(c=>String(c.propertyId||'')));
 if(!propertySearchCache||propertySearchCache.source!==properties){propertySearchCache={source:properties,rows:properties.map(p=>({p,text:[p.propertyId,p.ownerName,p.phone,p.houseNo,p.supplyNo,p.plotNo,p.propertyType,p.zone,p.subZone,p.height,p.width,p.size].map(v=>String(v??'').toLowerCase()).join(' ')}))};}
 const pd=propertySearchCache.rows.filter(x=>x.text.includes(q)&&!cids.has(String(x.p.propertyId||''))).map(x=>x.p);
 const a=d.map(c=>`<tr><td><b>${esc(c.customerId||'')}</b></td><td>${esc(c.name)}</td><td>${esc(c.phone)}</td><td>${esc(c.zone||c.xaafadda||'')}</td><td>${esc(getCanonicalHouseNumber(c))}</td><td>${esc(displayPropertyType(c.propertyType||c.licenseType||c.property||''))}</td><td>${esc(c.height||'—')} m</td><td>${esc(c.width||'—')} m</td><td>${(Number(c.height||0)*Number(c.width||0)||Number(c.area)||Number(c.size)||0).toLocaleString(undefined,{maximumFractionDigits:2})} m²</td><td><button onclick="editCustomer('${c.id}')">Edit</button> <button class="danger" onclick="deleteCustomer('${c.id}')">Delete</button></td></tr>`);
 const b=pd.map(p=>`<tr><td><b>${esc(p.propertyId)}</b></td><td>${esc(p.ownerName||'N/A')}</td><td>${esc(p.phone||'')}</td><td>${esc(p.zone||'')}</td><td>${esc(p.supplyNo||p.houseNo||'')}</td><td>${esc(displayPropertyType(p.propertyType||p.licenseType||p.propertyName||''))}</td><td>${esc(p.height||'—')} m</td><td>${esc(p.width||'—')} m</td><td>${(Number(p.height||0)*Number(p.width||0)||Number(p.size)||0).toLocaleString(undefined,{maximumFractionDigits:2})} m²</td><td><button type="button" class="secondary" onclick="editImportedCustomer('${esc(p.propertyId)}')">+ Add Customer</button></td></tr>`);
 $('customersBody').innerHTML=[...a,...b].join('')||'<tr><td colspan="10">No customers or property records found.</td></tr>';
}
function editImportedCustomer(pid){
 const p=properties.find(x=>String(x.propertyId||'')===String(pid||''));
 if(!p)return;
 let c=customers.find(x=>String(x.propertyId||'')===String(pid||''));
 if(!c){c=propertyToCustomer(p);customers.push(c);invalidateCustomerSearchCache();persistC();populateCustomerSelect();}
 else {c=propertyToCustomer(p,c);const i=customers.findIndex(x=>String(x.id)===String(c.id));if(i>=0)customers[i]=c;persistC();}
 editCustomer(c.id);
}
function editCustomer(id){
 const c=customers.find(x=>String(x.id)===String(id));
 if(!c)return;
 const canonical=JSON.parse(JSON.stringify(c));
 const house=String(canonical.houseNumber??canonical.houseNo??canonical.gis??canonical.supplyNo??'').trim();
 canonical.houseNumber=house; canonical.houseNo=house;
 $('custId').dataset.originalId=String(c.customerId||c.id);
 $('custId').dataset.originalData=JSON.stringify(canonical);
 const set=(id,val)=>{const el=$(id);if(el)el.value=val??''};
 const zone=String(c.zone??c.xaafadda??'').trim();
 set('custId',c.customerId??c.id??''); set('custDisplayId',c.customerId??c.id??'');
 set('custDistrict',c.district??'Hargeisa'); set('custSubDistrict',c.subDistrict??'Maxamuud Haybe');
 set('custZone',zone); set('custSubZone',c.subZone??''); set('custStreet',c.street??'');
 set('custPlot',c.plotNumber??c.plotNo??''); set('custLatitude',c.latitude??''); set('custLongitude',c.longitude??'');
 set('custHouseNumber',house); set('custName',c.name??''); set('custPhone',c.phone??'');
 const rawType=String(c.propertyType??c.licenseType??c.property??'Other');
 const mapped=/building|guri|dhisme/i.test(rawType)?'Building':/vacant\s*land|banaan|dhul\s*banaan/i.test(rawType)?'Vacant Land':/wall|deyr|deyran/i.test(rawType)?'Wall':/business|license|liisan|ruqso/i.test(rawType)?'Business':rawType;
 set('custProperty',mapped);
 set('custHeight',c.height??''); set('custWidth',c.width??'');
 set('custAreaMode',c.areaMode??'automatic');
 // Do not recalculate here: preserve the exact stored area value.
 set('custArea',c.areaInput??c.area??c.size??'');
 set('custDate',c.date??''); set('custStatus',c.status??''); set('custNotes',c.notes??'');
 if($('custTitle'))$('custTitle').textContent='Edit Customer';
 const ub=document.querySelector('#customerForm button[onclick="updateCustomer()"]');if(ub)ub.textContent='✏️ Update';
 page('customerForm');
}
function deleteCustomer(id){if(confirm('Delete this customer?')){customers=customers.filter(c=>c.id!==id);records=records.filter(r=>r.customerId!==id && r.customerId!==customers.find(x=>x.id===id)?.customerId);persist();persistC()}}
function parseCustomerArea(v){const x=String(v??'').trim().replace(/,/g,'');if(!x)return 0;if(/^[0-9.]+\s*[×x*]\s*[0-9.]+$/i.test(x)){const a=x.split(/[×x*]/i).map(Number);return Number((a[0]*a[1]).toFixed(2));}const n=Number(x);return Number.isFinite(n)&&n>=0?n:0;}
function setCustomerAreaMode(){const mode=$('custAreaMode')?.value||'automatic',a=$('custArea');if(!a)return;if(mode==='automatic'){a.readOnly=true;a.placeholder='Automatic Height × Width';updateCustomerArea();}else{a.readOnly=false;a.placeholder='Manual: 144 ama 12*12';}}
function getCustomerAreaValue(){const mode=$('custAreaMode')?.value||'automatic';if(mode==='manual')return parseCustomerArea($('custArea')?.value||0);const h=Number($('custHeight')?.value||0),w=Number($('custWidth')?.value||0);return h&&w?Number((h*w).toFixed(2)):0;}
function updateCustomerArea(){if(($('custAreaMode')?.value||'automatic')==='automatic'&&$('custArea')){const h=Number($('custHeight')?.value||0),w=Number($('custWidth')?.value||0);$('custArea').value=h&&w?(h*w).toFixed(2):'';}}
function updatePropertyArea(){const h=Number($('pfHeight')?.value||0),w=Number($('pfWidth')?.value||0);if($('pfArea'))$('pfArea').value=h&&w?(h*w).toFixed(2):'';}
function editProperty(id){const p=properties.find(x=>String(x.propertyId)===String(id));if(!p)return;$('editPropertyId').value=p.propertyId||'';$('pfId').value=p.propertyId||'';$('pfOwner').value=p.ownerName||'';$('pfPhone').value=p.phone||'';$('pfZone').value=p.zone||'';$('pfSubZone').value=p.subZone||'';$('pfHouse').value=p.houseNo||'';$('pfSupply').value=p.supplyNo||'';$('pfPlot').value=p.plotNo||'';const rawPt=p.propertyType||p.licenseType||'Building';const pt=normalizePropertyCategory(rawPt)==='Dhisan'?'Building':normalizePropertyCategory(rawPt)==='Banaan'?'Vacant Land':normalizePropertyCategory(rawPt)==='Deyran'?'Wall':/license|liisan|ruqso|business/i.test(String(rawPt))?'Business':rawPt;if(pt&&![...$('pfType').options].some(o=>o.value===pt))$('pfType').add(new Option(displayPropertyType(pt),pt));$('pfType').value=pt;$('pfHeight').value=p.height||'';$('pfWidth').value=p.width||'';$('pfBalance').value=p.balance||'';updatePropertyArea();page('propertyForm');}
$('propertyEditForm').addEventListener('submit',e=>{e.preventDefault();const id=$('editPropertyId').value,p=properties.find(x=>String(x.propertyId)===String(id));if(!p)return;p.ownerName=$('pfOwner').value.trim();p.phone=$('pfPhone').value.trim();p.zone=$('pfZone').value.trim();p.subZone=$('pfSubZone').value.trim();p.houseNo=$('pfHouse').value.trim();p.supplyNo=$('pfSupply').value.trim();p.plotNo=$('pfPlot').value.trim();p.propertyType=$('pfType').value;p.height=$('pfHeight').value;p.width=$('pfWidth').value;p.size=$('pfArea').value;p.balance=$('pfBalance').value;localStorage.setItem(PK,JSON.stringify(properties));renderProperties();page('properties');});
function initBillHistory(){
 $('billSearchMode').value='specific'; $('bhCustomerId').value=''; $('bhSpecificResult').innerHTML='<option value="">Search a Customer ID first...</option>'; $('bhGeneralType').value=''; $('bhGeneralFilter').innerHTML='<option value="">Select...</option>'; $('billHistoryResults').innerHTML=''; $('billHistoryStats').textContent=`${bills.length.toLocaleString()} generated bills are saved.`; toggleBillHistoryMode();
}
function toggleBillHistoryMode(){const m=$('billSearchMode').value==='general';$('bhSpecificWrap').style.display=m?'none':'block';$('bhSpecificResultWrap').style.display=m?'none':'block';$('bhGeneralTypeWrap').style.display=m?'block':'none';$('bhGeneralFilterWrap').style.display=m?'block':'none';$('bhDateFromWrap').style.display=m?'block':'none';$('bhDateToWrap').style.display=m?'block':'none';if(m){updateGeneralBillFilter();renderGeneralBillResults()}else{$('billHistoryResults').innerHTML='';$('billHistoryStats').textContent=`${bills.length.toLocaleString()} generated bills are saved.`}}
function searchBillHistorySpecific(){const q=($('bhCustomerId').value||'').trim().toLowerCase();const matches=q?bills.filter(b=>String(b.customerId||'').toLowerCase().includes(q)||String(b.customerName||'').toLowerCase().includes(q)):[];billHistoryMatches=matches;$('bhSpecificResult').innerHTML='<option value="">Select bill...</option>'+matches.map((b,i)=>`<option value="${i}">${esc(b.customerId)} — ${esc(b.customerName)} — ${esc(b.billNo)} — ${esc(b.issueDate||'')}</option>`).join('');$('billHistoryStats').textContent=matches.length?`${matches.length} bill(s) found for this Customer ID.`:'No generated bills found for this Customer ID.';$('billHistoryResults').innerHTML=matches.length?billHistoryTable(matches):''}
function showSelectedBillHistory(){const i=$('bhSpecificResult').value;if(i==='')return;const b=billHistoryMatches[Number(i)];if(b)$('billHistoryResults').innerHTML=billHistoryTable([b])}
function updateGeneralBillFilter(){const type=$('bhGeneralType').value;const f=$('bhGeneralFilter');if(type==='Property'){const zones=[...new Set([...properties.map(p=>p.zone),...customers.map(c=>c.zone),...bills.map(b=>b.zone)].map(x=>String(x||'').trim()).filter(Boolean))].sort();$('bhGeneralFilterLabel').textContent='Select Property Zone';f.innerHTML='<option value="">All Property Zones</option>'+zones.map(z=>`<option>${esc(z)}</option>`).join('')}else if(type==='License'){const grades=[...new Set([...bills.map(b=>b.grade),...customers.map(c=>c.licenseGrade),...records.map(r=>r.licenseGrade)].map(x=>String(x||'').trim()).filter(Boolean))].sort();$('bhGeneralFilterLabel').textContent='Select License Grade';f.innerHTML='<option value="">All License Grades</option>'+grades.map(g=>`<option>${esc(g)}</option>`).join('')}else{f.innerHTML='<option value="">Select Type First...</option>';}$('billHistoryResults').innerHTML='';renderGeneralBillResults()}
function renderGeneralBillResults(){const type=$('bhGeneralType').value,filter=$('bhGeneralFilter').value,from=$('bhDateFrom').value,to=$('bhDateTo').value;if(!type){$('billHistoryStats').textContent='Select Property or License to continue.';$('billHistoryResults').innerHTML='';return}billHistoryMatches=bills.filter(b=>{const cat=b.category||((b.grade)?'License':'Property');const typeOk=cat===type;const filterOk=!filter||(type==='Property'?b.zone===filter:b.grade===filter);const dateOk=(!from||String(b.issueDate||'')>=from)&&(!to||String(b.issueDate||'')<=to);return typeOk&&filterOk&&dateOk});$('billHistoryStats').textContent=`${billHistoryMatches.length.toLocaleString()} bill(s) found — ${type}${filter?' / '+filter:''}.`;$('billHistoryResults').innerHTML=billHistoryMatches.length?billHistoryTable(billHistoryMatches):'<p>No generated bills match these filters.</p>'}
function billHistoryTable(data){return `<div style="overflow:auto"><table><thead><tr><th>Bill No</th><th>Customer ID</th><th>Customer</th><th>Type</th><th>Zone / Grade</th><th>Date</th><th>Amount</th><th>Action</th></tr></thead><tbody>${data.map((b,i)=>`<tr><td><b>${esc(b.billNo)}</b></td><td>${esc(b.customerId)}</td><td>${esc(b.customerName)}</td><td>${esc(displayPropertyType(b.propertyType||b.category||b.type||'Property'))}</td><td>${esc((b.category==='License'||b.grade)?b.grade:(b.zone||''))}</td><td>${esc(b.issueDate||'')}</td><td>${money(b.amount,b.currency||'SLSH')}</td><td><button onclick="openBillById('${esc(b.id||'')}')">View / Print</button></td></tr>`).join('')}</tbody></table></div>`}
function openBillById(id){const b=bills.find(x=>x.id===id);if(b)openBill(b)}
function printSelectedBillHistory(){const i=$('bhSpecificResult').value;if(i===''){if(billHistoryMatches.length===1)return printBills([billHistoryMatches[0]]);return alert('Select one bill first.')}printBills([billHistoryMatches[Number(i)]])}
function printGeneralBillResults(){if($('billSearchMode').value!=='general')return alert('Choose General / Bulk Print first.');if(!billHistoryMatches.length)return alert('No bills match the selected filters.');printBills(billHistoryMatches)}
function printBills(data){const w=window.open('','_blank');if(!w)return alert('Please allow pop-ups to print bills.');w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>DHHMH Bills</title><style>body{font-family:Arial,sans-serif;margin:0;background:#fff}.print-toolbar{position:sticky;top:0;background:#123b5d;color:#fff;padding:10px;text-align:center;z-index:10}.print-toolbar button{border:0;border-radius:6px;padding:9px 14px;margin:0 4px;cursor:pointer;background:#10a95b;color:#fff}.print-toolbar .secondary{background:#64748b}.bill-preview-wrap{padding:15px;background:#eef2f1}.bill-paper{width:100%;max-width:900px;margin:0 auto;background:#fff;color:#111;border:1px solid #111;padding:0;page-break-after:always}.bill-paper:last-child{page-break-after:auto}.bill-header{display:grid;grid-template-columns:82px 1fr 165px;align-items:center;border-bottom:2px solid #202020;padding:8px 9px}.bill-header img{width:58px;height:58px;object-fit:contain;border-radius:50%;padding:2px;background:#fff}.bill-title{text-align:center}.bill-title .org{font-size:18px;font-weight:800;color:#111}.bill-title .sub{font-size:15px;font-weight:800;text-decoration:underline;margin-top:3px;color:#111}.bill-title .year{font-size:14px;font-weight:700;margin-top:3px;color:#111}.bill-meta{font-size:12px}.bill-meta div{display:flex;justify-content:space-between;gap:8px;border-bottom:1px solid #111;padding:3px 0}.bill-grid{display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid #111}.bill-cell{border-right:1px solid #111;border-bottom:1px solid #111;min-height:38px}.bill-cell:nth-child(4n){border-right:0}.bill-wide{grid-column:span 2}.bill-label{font-size:8px;font-weight:700;padding:2px 4px;background:#f1f1f1;border-bottom:1px solid #222}.bill-value{font-size:10px;font-weight:600;padding:4px}.bill-charges{width:100%;border-collapse:collapse}.bill-charges th,.bill-charges td{border-bottom:1px solid #aaa;padding:5px 7px;font-size:11px}.bill-charges th{border-top:1px solid #222;background:#e8e8e8;color:#111}.bill-charges td:nth-child(4),.bill-charges th:nth-child(4),.bill-charges td:last-child,.bill-charges th:last-child{text-align:right}.bill-total{display:flex;justify-content:flex-end;border-top:2px solid #222;border-bottom:1px solid #222;font-weight:800;background:#f5f5f5}.bill-total span{padding:8px 12px}.bill-total .amount{min-width:150px;text-align:right;border-left:1px solid #111}.bill-barcode{height:44px;margin:7px auto 2px;width:300px;background:repeating-linear-gradient(90deg,#111 0,#111 2px,#fff 2px,#fff 4px,#111 4px,#111 7px,#fff 7px,#fff 9px,#111 9px,#111 10px,#fff 10px,#fff 13px)}.bill-barcode-no{text-align:center;font-size:11px;letter-spacing:1px}.bill-footer{display:flex;justify-content:space-between;font-size:10px;padding:6px 8px}@media print{.print-toolbar{display:none!important}.bill-preview-wrap{padding:0;background:#fff}.bill-paper{max-width:none;border:0}}</style>
<style>
.attachment-list{display:flex;flex-direction:column;gap:12px;width:100%;align-items:stretch}.attachment-card{width:100%;max-width:100%;border:1px solid #d9e2ea;border-radius:10px;padding:12px;background:#f8fafc;box-sizing:border-box}.attachment-card + .attachment-card{margin-top:0}.attachment-meta{display:grid;grid-template-columns:1fr 1fr;gap:8px}.attachment-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.attachment-actions button{padding:7px 10px}.direct-tax-hidden{display:none!important}.direct-tax-fine-only{display:none}.direct-tax-fine-only.show{display:block}.receipt-charges{margin-top:12px}.receipt-charges th{background:#f1f5f9;font-weight:700}.receipt-total{font-size:18px;font-weight:800;text-align:right;margin-top:10px}.payment-view-btn{background:#64748b!important}
</style>
<style id="modern-sidebar-theme">
:root{--side:#062f55;--side2:#0b477a;--accent:#1976d2;--top:#083b66;--bg:#f4f7fb;--text:#172033}
body{background:var(--bg);color:var(--text);padding-left:238px}
body>header{position:fixed;left:238px;right:0;top:0;height:70px;z-index:30;background:linear-gradient(90deg,#083b66,#0b4f86);padding:0 24px;box-shadow:0 2px 12px #062f5522}
body>header .brand img{display:none}
body>header .brand b{font-size:20px;letter-spacing:.2px}
body>header .brand div div{font-size:11px;opacity:.8;margin-top:3px}
body>nav.top-nav{display:none}
body>main{max-width:none;margin:0;padding:92px 22px 28px}
.app-sidebar{position:fixed;left:0;top:0;bottom:0;width:238px;background:linear-gradient(180deg,#062f55 0%,#073a68 58%,#052b4e 100%);color:#fff;z-index:40;box-shadow:3px 0 16px #062f5530;overflow-y:auto}
.app-sidebar .side-brand{display:flex;align-items:center;gap:10px;padding:17px 14px 15px;border-bottom:1px solid #ffffff1c}
.app-sidebar .side-brand img{width:42px;height:42px;border-radius:50%;background:#fff;object-fit:contain;padding:2px}
.app-sidebar .side-brand strong{display:block;font-size:14px;line-height:1.15}.app-sidebar .side-brand small{display:block;font-size:10px;opacity:.72;margin-top:3px}
.side-section{padding:12px 9px 4px;color:#8eb5d6;text-transform:uppercase;font-size:9px;font-weight:800;letter-spacing:1px}
.side-btn{width:100%;display:flex;align-items:center;gap:10px;background:transparent!important;color:#eaf4ff!important;text-align:left;border-radius:7px;padding:10px 12px!important;margin:2px 0;font-size:12px!important;font-weight:600}
.side-btn:hover,.side-btn.active{background:#ffffff18!important;color:#fff!important}.side-icon{width:20px;text-align:center;font-size:14px;opacity:.95}.side-sub{padding-left:28px!important;font-size:11px!important;color:#c7dcf0!important}
.side-footer{margin:18px 12px 12px;padding:10px;border:1px solid #ffffff1b;border-radius:9px;color:#a9c7df;font-size:10px;text-align:center}
.page h2{color:#0a3c66}.dashboard-page{min-height:calc(100vh - 120px)}
.dash-hero{border-radius:12px!important;background:linear-gradient(135deg,#ffffff,#f1f7fc)!important;border:1px solid #dce7f1!important}
.list-card,.card,form{box-shadow:0 2px 10px #123b5d0b}
@media(max-width:900px){body{padding-left:0}body>header{left:0}.app-sidebar{transform:translateX(-100%);transition:.2s}.app-sidebar.open{transform:translateX(0)}body>main{padding:84px 12px 22px}.mobile-menu{display:block!important}}
.mobile-menu{display:none;background:#ffffff1a!important;color:#fff!important;font-size:18px!important;padding:7px 10px!important;margin-right:8px}
@media print{body{padding-left:0}body>header{position:static;display:none!important}.app-sidebar{display:none!important}body>main{margin:0;padding:0}.dash-hero{display:none}}

/* v1.2.97 BILL PRINT THEME — matches the latest compact green/black bill */
.bill-preview-wrap{background:#eef2f1;padding:18px}.bill-paper{max-width:820px;background:#fff;color:#111;border:2px solid #202020;border-radius:0;box-shadow:0 2px 12px rgba(0,0,0,.12)}
.bill-paper:before{background-size:105mm 105mm;opacity:.035}
.bill-header{grid-template-columns:82px 1fr 165px;border-bottom:2px solid #202020;padding:8px 9px}
.bill-header img{width:58px;height:58px;border-radius:50%;padding:2px;background:#fff}
.bill-title .org{font-size:18px;line-height:1.1;color:#111;text-transform:uppercase}.bill-title .sub{font-size:15px;color:#111;text-decoration:underline;margin-top:3px}.bill-title .year{font-size:14px;color:#111;margin-top:3px;font-weight:800;letter-spacing:.2px}
.bill-meta{font-size:10px}.bill-meta div{padding:2px 0;border-bottom:1px solid #222}.bill-meta b{font-weight:700}
.bill-grid{grid-template-columns:repeat(4,1fr);border-bottom:1px solid #222}
.bill-cell{min-height:34px;border-right:1px solid #222;border-bottom:1px solid #222}.bill-label{font-size:8px;padding:2px 4px;background:#f1f1f1;border-bottom:1px solid #222;text-transform:none}.bill-value{font-size:10px;padding:4px;font-weight:600}
.bill-charges th,.bill-charges td{border-bottom:1px solid #777;padding:4px 6px;font-size:10px;line-height:1.12}.bill-charges th{background:#e8e8e8;border-top:1px solid #222;color:#111}.bill-charges td:nth-child(4),.bill-charges th:nth-child(4),.bill-charges td:last-child,.bill-charges th:last-child{text-align:right}
.bill-total{border-top:2px solid #222;border-bottom:1px solid #222;background:#f5f5f5}.bill-total span{padding:6px 9px}.bill-total .amount{border-left:1px solid #222;color:#111}
.bill-barcode{height:35px;margin:5px auto 2px;width:260px}.bill-barcode-no{font-size:9px}.bill-footer{font-size:8px;padding:4px 6px;border-top:1px solid #222}.bill-note{font-size:8px;padding:4px 6px}
.bill-paper .bill-charges th:first-child{background:#e8e8e8}
@media print{
 html,body{width:210mm;height:297mm;margin:0!important;padding:0!important;background:#fff!important}
 .bill-preview-wrap{padding:0!important;background:#fff!important}.bill-paper{width:190mm!important;max-width:190mm!important;margin:0 auto!important;border:2px solid #202020!important;border-radius:0!important;box-shadow:none!important;background:#fff!important}
 .bill-paper:before{background-size:105mm 105mm!important;opacity:.035!important}
 .bill-header{grid-template-columns:55px 1fr 120px!important;padding:4px 6px!important;border-bottom:2px solid #202020!important}.bill-header img{width:42px!important;height:42px!important}.bill-title .org{font-size:13px!important}.bill-title .sub{font-size:11px!important;margin-top:2px!important}.bill-title .year{font-size:10px!important;margin-top:2px!important}.bill-meta{font-size:7px!important}.bill-meta div{padding:1px 0!important}
 .bill-grid{grid-template-columns:repeat(4,1fr)!important}.bill-cell{min-height:23px!important}.bill-label{font-size:6.5px!important;padding:1.5px 3px!important;background:#f1f1f1!important}.bill-value{font-size:7.5px!important;padding:2px 3px!important}
 .bill-charges th,.bill-charges td{font-size:7.5px!important;padding:2.5px 3.5px!important;line-height:1.1!important}.bill-charges th{background:#e8e8e8!important;color:#111!important}.bill-total span{padding:4px 6px!important}.bill-total .amount{min-width:90px!important}.bill-barcode{height:23px!important;width:185px!important;margin:3px auto 1px!important}.bill-barcode-no{font-size:6.5px!important}.bill-footer{font-size:6.5px!important;padding:2.5px 4px!important}
}

</style>

</head><body><div class="print-toolbar"><button onclick="window.print()">🖨 Print All</button><button onclick="window.print()">⬇ Download PDF</button><button class="secondary" onclick="window.close()">Close</button></div>${data.map(b=>billPrintHtml(b)).join('')}
<script>
function initAccessImport(){ renderAccessHistory(); }
function inspectAccessFile(){
 const f=document.getElementById('accessFile').files[0]; const st=document.getElementById('accessStatus'); const pv=document.getElementById('accessPreview');
 if(!f){st.innerHTML='<div class="notice">⚠️ Fadlan dooro .accdb ama .mdb file.</div>';return;}
 const ext=(f.name.split('.').pop()||'').toLowerCase();
 if(!['accdb','mdb'].includes(ext)){st.innerHTML='<div class="notice">❌ File-ku waa inuu noqdaa .accdb ama .mdb.</div>';return;}
 st.innerHTML='<div class="notice">✅ File la helay: <b>'+esc(f.name)+'</b> — '+Number(f.size).toLocaleString()+' bytes.</div>';
 pv.innerHTML='<table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>File Type</td><td>'+ext.toUpperCase()+'</td></tr><tr><td>Target</td><td>'+esc(document.getElementById('accessTarget').value)+'</td></tr><tr><td>Mode</td><td>'+esc(document.getElementById('accessMode').value)+'</td></tr><tr><td>Next Step</td><td>Tables & column mapping will be handled by the online/backend importer.</td></tr></tbody></table>';
 const hist=JSON.parse(localStorage.getItem('dhhmh_access_import_history')||'[]'); hist.unshift({date:new Date().toISOString(),file:f.name,target:document.getElementById('accessTarget').value,mode:document.getElementById('accessMode').value,status:'Ready / Pending backend'}); localStorage.setItem('dhhmh_access_import_history',JSON.stringify(hist.slice(0,20))); renderAccessHistory();
}
function renderAccessHistory(){const b=document.getElementById('accessHistoryBody'); if(!b)return; const h=JSON.parse(localStorage.getItem('dhhmh_access_import_history')||'[]'); b.innerHTML=h.length?h.map(x=>'<tr><td>'+new Date(x.date).toLocaleString()+'</td><td>'+esc(x.file)+'</td><td>'+esc(x.target)+'</td><td>'+esc(x.mode)+'</td><td>'+esc(x.status)+'</td></tr>').join(''):'<tr><td colspan="5" class="muted">No Access imports yet.</td></tr>';}
function clearAccessImport(){document.getElementById('accessFile').value='';document.getElementById('accessStatus').innerHTML='';document.getElementById('accessPreview').innerHTML='';}
initReportCategoryFilter();
<\/script>




</body></html>`);w.document.close();w.focus();}function downloadBillPDF(){
 if(!currentBillForPrint)return;
 const w=window.open('','_blank');
 if(!w){alert('Please allow pop-ups to download the PDF.');return;}
 w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>DHHMH Bill ${esc(currentBillForPrint.billNo||'')}</title><style>body{font-family:Arial,sans-serif;margin:0}.download-note{padding:12px;text-align:center;background:#123b5d;color:#fff;font-weight:700}.bill-preview-wrap{padding:15px;background:#eef2f1}.bill-paper{width:100%;max-width:900px;margin:0 auto;background:#fff;color:#111;border:1px solid #111}.bill-header{display:grid;grid-template-columns:82px 1fr 165px;align-items:center;border-bottom:2px solid #202020;padding:8px 9px}.bill-header img{width:58px;height:58px;object-fit:contain;border-radius:50%;padding:2px;background:#fff}.bill-title{text-align:center}.bill-title .org{font-size:18px;font-weight:800;color:#111}.bill-title .sub{font-size:15px;font-weight:800;text-decoration:underline;margin-top:3px;color:#111}.bill-title .year{font-size:14px;font-weight:700;margin-top:3px;color:#111}.bill-meta{font-size:12px}.bill-meta div{display:flex;justify-content:space-between;gap:8px;border-bottom:1px solid #111;padding:3px 0}.bill-grid{display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid #111}.bill-cell{border-right:1px solid #111;border-bottom:1px solid #111;min-height:38px}.bill-cell:nth-child(4n){border-right:0}.bill-wide{grid-column:span 2}.bill-label{font-size:8px;font-weight:700;padding:2px 4px;background:#f1f1f1;border-bottom:1px solid #222}.bill-value{font-size:10px;font-weight:600;padding:4px}.bill-charges{width:100%;border-collapse:collapse}.bill-charges th,.bill-charges td{border-bottom:1px solid #aaa;padding:5px 7px;font-size:11px}.bill-charges th{border-top:1px solid #222;background:#e8e8e8;color:#111}.bill-charges td:nth-child(4),.bill-charges th:nth-child(4),.bill-charges td:last-child,.bill-charges th:last-child{text-align:right}.bill-total{display:flex;justify-content:flex-end;border-top:2px solid #222;border-bottom:1px solid #222;font-weight:800;background:#f5f5f5}.bill-total span{padding:8px 12px}.bill-total .amount{min-width:150px;text-align:right;border-left:1px solid #111}.bill-barcode{height:44px;margin:7px auto 2px;width:300px;background:repeating-linear-gradient(90deg,#111 0,#111 2px,#fff 2px,#fff 4px,#111 4px,#111 7px,#fff 7px,#fff 9px,#111 9px,#111 10px,#fff 10px,#fff 13px)}.bill-barcode-no{text-align:center;font-size:11px;letter-spacing:1px}.bill-footer{display:flex;justify-content:space-between;font-size:10px;padding:6px 8px}@media print{.download-note{display:none}.bill-preview-wrap{padding:0}.bill-paper{max-width:none;border:0}}</style>
<style>
.attachment-list{display:flex;flex-direction:column;gap:12px;width:100%;align-items:stretch}.attachment-card{width:100%;max-width:100%;border:1px solid #d9e2ea;border-radius:10px;padding:12px;background:#f8fafc;box-sizing:border-box}.attachment-card + .attachment-card{margin-top:0}.attachment-meta{display:grid;grid-template-columns:1fr 1fr;gap:8px}.attachment-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.attachment-actions button{padding:7px 10px}.direct-tax-hidden{display:none!important}.direct-tax-fine-only{display:none}.direct-tax-fine-only.show{display:block}.receipt-charges{margin-top:12px}.receipt-charges th{background:#f1f5f9;font-weight:700}.receipt-total{font-size:18px;font-weight:800;text-align:right;margin-top:10px}.payment-view-btn{background:#64748b!important}
</style>
<style id="modern-sidebar-theme">
:root{--side:#062f55;--side2:#0b477a;--accent:#1976d2;--top:#083b66;--bg:#f4f7fb;--text:#172033}
body{background:var(--bg);color:var(--text);padding-left:238px}
body>header{position:fixed;left:238px;right:0;top:0;height:70px;z-index:30;background:linear-gradient(90deg,#083b66,#0b4f86);padding:0 24px;box-shadow:0 2px 12px #062f5522}
body>header .brand img{display:none}
body>header .brand b{font-size:20px;letter-spacing:.2px}
body>header .brand div div{font-size:11px;opacity:.8;margin-top:3px}
body>nav.top-nav{display:none}
body>main{max-width:none;margin:0;padding:92px 22px 28px}
.app-sidebar{position:fixed;left:0;top:0;bottom:0;width:238px;background:linear-gradient(180deg,#062f55 0%,#073a68 58%,#052b4e 100%);color:#fff;z-index:40;box-shadow:3px 0 16px #062f5530;overflow-y:auto}
.app-sidebar .side-brand{display:flex;align-items:center;gap:10px;padding:17px 14px 15px;border-bottom:1px solid #ffffff1c}
.app-sidebar .side-brand img{width:42px;height:42px;border-radius:50%;background:#fff;object-fit:contain;padding:2px}
.app-sidebar .side-brand strong{display:block;font-size:14px;line-height:1.15}.app-sidebar .side-brand small{display:block;font-size:10px;opacity:.72;margin-top:3px}
.side-section{padding:12px 9px 4px;color:#8eb5d6;text-transform:uppercase;font-size:9px;font-weight:800;letter-spacing:1px}
.side-btn{width:100%;display:flex;align-items:center;gap:10px;background:transparent!important;color:#eaf4ff!important;text-align:left;border-radius:7px;padding:10px 12px!important;margin:2px 0;font-size:12px!important;font-weight:600}
.side-btn:hover,.side-btn.active{background:#ffffff18!important;color:#fff!important}.side-icon{width:20px;text-align:center;font-size:14px;opacity:.95}.side-sub{padding-left:28px!important;font-size:11px!important;color:#c7dcf0!important}
.side-footer{margin:18px 12px 12px;padding:10px;border:1px solid #ffffff1b;border-radius:9px;color:#a9c7df;font-size:10px;text-align:center}
.page h2{color:#0a3c66}.dashboard-page{min-height:calc(100vh - 120px)}
.dash-hero{border-radius:12px!important;background:linear-gradient(135deg,#ffffff,#f1f7fc)!important;border:1px solid #dce7f1!important}
.list-card,.card,form{box-shadow:0 2px 10px #123b5d0b}
@media(max-width:900px){body{padding-left:0}body>header{left:0}.app-sidebar{transform:translateX(-100%);transition:.2s}.app-sidebar.open{transform:translateX(0)}body>main{padding:84px 12px 22px}.mobile-menu{display:block!important}}
.mobile-menu{display:none;background:#ffffff1a!important;color:#fff!important;font-size:18px!important;padding:7px 10px!important;margin-right:8px}
@media print{body{padding-left:0}body>header{position:static;display:none!important}.app-sidebar{display:none!important}body>main{margin:0;padding:0}.dash-hero{display:none}}
</style>

</head><body><div class="download-note">Dooro “Save as PDF” marka print dialog-ku furmo.</div>${billPrintHtml(currentBillForPrint)}</body></html>`);
 w.document.close();w.focus();
 setTimeout(()=>w.print(),300);
}
function billPrintHtml(b){const c=customers.find(x=>String(x.customerId||'')===String(b.customerId||''))||{};const pm=billPropertyMetrics(b);const yr=billYearRange(b);const y=yr.from&&yr.to?(yr.from===yr.to?String(yr.from):`${yr.from} – ${yr.to}`):String((b.month||b.issueDate||'').slice(0,4)||new Date().getFullYear());const amount=money(b.amount,b.currency||'SLSH');const isBusinessBill=/license|liisan|ruqso|business/i.test(String(b.category||b.type||b.licenseType||''));const billTitle=isBusinessBill?'Business License Bill':'Property Tax Bill';const footerTitle=isBusinessBill?'Business License Bill — Maxamuud Haybe District':'Property Tax Bill — Maxamuud Haybe District';return `<div class="bill-preview-wrap"><div class="bill-paper"><div class="bill-watermark" aria-hidden="true"></div><div class="bill-header"><img src="data:image/png;base64,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"><div class="bill-title"><div class="org">DAWLADA HOOSE EE HARGEYSA</div><div class="sub">${billTitle}</div><div class="year">Years Covered: ${esc(y)}</div></div><div class="bill-meta"><div><b>Cust. #</b><span>${esc(b.customerId||'—')}</span></div><div><b>Bill No / Invoice No</b><span><b>${esc(b.billNo||'—')}</b></span></div><div><b>Date</b><span>${esc(b.issueDate||'—')}</span></div></div></div><div class="bill-grid"><div class="bill-cell"><div class="bill-label">GIS Ref</div><div class="bill-value">${esc(b.gis||'—')}</div></div><div class="bill-cell"><div class="bill-label">District</div><div class="bill-value">${esc(b.district||'Hargeisa')}</div></div><div class="bill-cell"><div class="bill-label">Zone</div><div class="bill-value">${esc(b.zone||'—')}</div></div><div class="bill-cell"><div class="bill-label">Sub Zone</div><div class="bill-value">${esc(b.subZone||'—')}</div></div><div class="bill-cell bill-wide"><div class="bill-label">Customer</div><div class="bill-value">${esc(b.customerName||'—')}</div></div>${isBusinessBill?`<div class="bill-cell"><div class="bill-label">Business Name</div><div class="bill-value">${esc(b.businessName||c.businessName||c.business||'—')}</div></div>`:''}<div class="bill-cell"><div class="bill-label">Mobile No</div><div class="bill-value">${esc(b.phone||b.mobile||b.telephone||c.phone||c.mobile||c.telephone||'—')}</div></div>${isBusinessBill?'':`<div class="bill-cell bill-wide"><div class="bill-label">Property Size / Cabirka</div><div class="bill-value">${b.measurementBreakdownSummary?`<b>Iskujarka:</b> ${esc(b.measurementBreakdownSummary)}`:`Dherer: ${pm.height ? Number(pm.height).toLocaleString(undefined,{maximumFractionDigits:2})+' m' : '—'} &nbsp; × &nbsp; Ballac: ${pm.width ? Number(pm.width).toLocaleString(undefined,{maximumFractionDigits:2})+' m' : '—'} &nbsp; | &nbsp; Area: ${pm.area ? Number(pm.area).toLocaleString(undefined,{maximumFractionDigits:2})+' m²' : '—'}`}</div></div>`}<div class="bill-cell"><div class="bill-label">Type / Nooca</div><div class="bill-value">${esc(isBusinessBill?'License':'Property')}</div></div><div class="bill-cell"><div class="bill-label">Category / Qaybta</div><div class="bill-value">${esc(b.customerCategory||c.category||c.licenseCategory||c.licenseType||(isBusinessBill?'Business License':(normalizePropertyCategory(b.type||c.propertyType||c.property||b.category)||b.type||b.category||'Property')))}</div></div><div class="bill-cell"><div class="bill-label">License Grade</div><div class="bill-value">${esc(b.grade||'—')}</div></div><div class="bill-cell"><div class="bill-label">Billing Month</div><div class="bill-value">${esc(b.month||'—')}</div></div><div class="bill-cell"><div class="bill-label">Due Date</div><div class="bill-value">${esc(b.dueDate||'—')}</div></div><div class="bill-cell"><div class="bill-label">Status</div><div class="bill-value">${esc(b.status||'Unpaid')}</div></div><div class="bill-cell"><div class="bill-label">For Year</div><div class="bill-value">${esc(b.forYear||'—')}</div></div><div class="bill-cell"><div class="bill-label">Reference GRNO</div><div class="bill-value">${esc(b.referenceGrNo||'—')}</div></div><div class="bill-cell"><div class="bill-label">Reference Date</div><div class="bill-value">${esc(b.referenceDate||'—')}</div></div><div class="bill-cell bill-wide"><div class="bill-label">Notes</div><div class="bill-value">${esc(b.notes||'—')}</div></div></div><table class="bill-charges"><thead><tr><th>Sr.</th><th>Code</th><th>Head / Sub Head</th><th>Rate / %</th><th>Amount</th></tr></thead><tbody>${billChargeRows(b)}</tbody></table><div class="bill-total"><span>Bill Amount:</span><span class="amount">${Number(b.amount||0).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</span></div><div class="bill-barcode"></div><div class="bill-barcode-no">${esc(b.billNo)}</div><div class="bill-note">Fadlan ku bixi cashuurtaada waqtigeeda. Cashuurtaadu waa horumarka bulshada.</div><div class="bill-footer"><span>${esc(b.issueDate||'')}</span><span>${footerTitle}</span><span>Page 1 of 1</span></div></div></div>`}
function refreshBillHistory(){initBillHistory()}
function clearBillHistory(){initBillHistory()}
function toggleReportCategoryFilter(){
 const lic=$('rlicense')?.value||'All',wrap=$('reportCategoryWrap'),sel=$('rCategory');
 if(!wrap||!sel)return;
 const show=true;
 wrap.style.display='block';
 const cats=(typeof TAXPAYER_CATEGORIES!=='undefined'?[...TAXPAYER_CATEGORIES]:[]).sort((a,b)=>a.localeCompare(b,undefined,{sensitivity:'base',numeric:true}));
 const current=sel.value||'All';
 sel.innerHTML='<option value="All">All Categories</option>'+cats.map(x=>'<option value="'+esc(x)+'">'+esc(x)+'</option>').join('');
 if(cats.includes(current))sel.value=current;else sel.value='All';
 
}
function syncReportCategorySelection(){
 const sel=$('rCategory');
 if(sel) sel.title=sel.value==='All'?'All Categories':('Selected Taxpayer Category: '+sel.value);
}
function initReportCategoryFilter(){toggleReportCategoryFilter();syncReportCategorySelection();}

function report(){
 const f=$('rf').value,t=$('rt').value,zone=$('rzone').value,sub=$('rsubzone').value,prop=$('rproperty').value,lic=$('rlicense').value,category=$('rCategory')?.value||'All',rev=$('rty').value,st=$('rst').value;
 const categoryOnly=category!=='All' && lic==='All';
 const custById=new Map(customers.map(c=>[String(c.customerId||c.id||'').toUpperCase(),c]));
 const propByCust=new Map(properties.map(p=>[String(p.customerId||p.propertyId||'').toUpperCase(),p]));
 const canonProp=v=>normalizePropertyCategory(v)||'';
 const revCategory=(r)=>{const x=String(r.revenueType||r.collectionType||r.category||r.type||'').toLowerCase();if(x.includes('daily')||x.includes('revenue collection'))return 'Daily Collection';if(x.includes('license')||x.includes('liisan')||x.includes('ruqso')||x.includes('business'))return 'License';if(x.includes('property')||x.includes('building')||x.includes('vacant')||x.includes('wall')||x.includes('dhisan')||x.includes('banaan')||x.includes('deyr'))return 'Property';return 'Other'};
 const decorate=(r,source)=>{const cid=String(r.customerId||'').toUpperCase(),c=custById.get(cid)||{},p=propByCust.get(cid)||{};const propertyType=canonProp(r.propertyType||r.property||p.propertyType||c.propertyType||c.property||r.type);const grade=r.licenseGrade||r.grade||p.licenseGrade||p.grade||c.licenseGrade||c.grade||'';const date=r.date||r.grDate||r.issueDate||r.createdAt?.slice?.(0,10)||'';const amount=Number(r.amount||0);const genericCats=new Set(['license','property','property tax','daily collection','revenue collection','business','other','']);const rawCatCandidates=[c.category,c.customerCategory,c.licenseCategory,c.businessCategory,p.category,p.customerCategory,p.licenseCategory,r.customerCategory,r.licenseCategory,r.businessCategory,r.category];const reportCategory=rawCatCandidates.map(v=>String(v??'').trim()).find(v=>v&&!genericCats.has(v.toLowerCase()))||'';return {...r,_source:source,_date:date,_rev:revCategory(r),_zone:r.zone||p.zone||c.zone||'',_sub:r.xaafadda||r.subZone||p.subZone||c.xaafadda||'',_prop:propertyType,_grade:grade,_category:reportCategory,_name:r.customerName||c.name||p.ownerName||'',_number:r.phone||r.mobile||c.phone||c.mobile||p.phone||r.gisNo||p.supplyNo||c.gis||'',_gis:r.gisNo||p.supplyNo||c.gis||'',_size:Number(r.area||r.size||c.area||c.size||p.area||p.size||0),_customerId:r.customerId||c.customerId||p.customerId||'',_amount:amount};};
 let data=records.map(r=>decorate(r,'record'));
 const unpaidBills=bills.filter(b=>String(b.status||'Unpaid').toLowerCase()!=='paid').map(b=>decorate({...b,status:'Unpaid',date:b.issueDate||b.createdAt?.slice?.(0,10)||'',revenueType:b.category||b.type||'Property Tax',licenseGrade:b.grade||'',area:b.area||b.size||''},'bill'));
 data=data.concat(unpaidBills);
 lastReport=data.filter(r=>(!f||r._date>=f)&&(!t||r._date<=t)&&(zone==='All'||String(r._zone).toLowerCase()===zone.toLowerCase())&&(sub==='All'||String(r._sub).toLowerCase()===sub.toLowerCase())&&(prop==='All'||r._prop===prop)&&(categoryOnly||lic==='All'||String(r._grade).toLowerCase()===lic.toLowerCase())&&(category==='All'||String(r._category).trim().toLowerCase()===category.trim().toLowerCase())&&(category==='All'||r._rev==='License')&&(rev==='All'||r._rev===rev)&&(st==='All'||String(r.status||'Unpaid').toLowerCase()===st.toLowerCase()));
 const sum=d=>d.reduce((a,r)=>a+Number(r._amount||0),0),paid=lastReport.filter(r=>String(r.status).toLowerCase()==='paid'),unpaid=lastReport.filter(r=>String(r.status).toLowerCase()==='unpaid');
 const effectiveGrade=categoryOnly?'All':lic;
 const filterText=`Zone: ${zone} | Xaafadda: ${sub} | Property: ${prop} | License Grade: ${effectiveGrade} | Category: ${category} | Revenue: ${rev} | Status: ${st} | ${f||'All'} → ${t||'All'}`;
 const chips=[['Zone',zone],['Xaafadda',sub],['Property',prop],['License',effectiveGrade],['Category',category],['Revenue',rev],['Status',st],['Date',`${f||'All'} → ${t||'All'}`]];
 const rows=lastReport.map((r,i)=>`<tr><td>${i+1}</td><td>${esc(r._customerId||'—')}</td><td>${esc(r._name||'—')}</td><td>${esc(r._number||'—')}</td><td>${esc(r._zone||'—')}</td><td>${esc(r._sub||'—')}</td><td>${esc(r._prop||r._rev||'—')}</td><td>${esc(r._grade||'—')}</td><td>${esc(r._category||'—')}</td><td>${esc(r._size?Number(r._size).toLocaleString(undefined,{maximumFractionDigits:2})+' m²':'—')}</td><td>${esc(r._rev)}</td><td>${money(r._amount,r.currency||'SLSH')}</td><td><span class="badge ${String(r.status).toLowerCase()==='paid'?'paid':'unpaid'}">${esc(r.status||'Unpaid')}</span></td><td>${esc(r._date||'—')}</td></tr>`).join('');
 $('reportResult').innerHTML=`<div class="report-print-sheet" id="reportPrintSheet"><div class="report-print-header"><img src="data:image/png;base64,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" alt="DHHMH Logo" style="display:block!important;visibility:visible!important;width:82px;height:82px;object-fit:contain;"><div class="report-print-title"><h1>DAWLADA HOOSE EE HARGEYSA</h1><h2>DHHMH REVENUE MANAGEMENT REPORT</h2><p>Official Revenue Collection & Customer Status Report</p></div><div class="report-print-meta"><b>Generated:</b><br>${new Date().toLocaleString()}<br><br><b>Records:</b> ${lastReport.length}</div></div><div class="report-filter-strip">${chips.map(x=>`<span class="report-filter-chip">${esc(x[0])}: ${esc(x[1])}</span>`).join('')}</div><div class="report-stat-grid"><div class="report-stat total"><small>Total Records</small><strong>${lastReport.length}</strong></div><div class="report-stat paid"><small>Paid</small><strong>${money(sum(paid),'SLSH')}</strong><small>${paid.length} records</small></div><div class="report-stat unpaid"><small>Unpaid</small><strong>${money(sum(unpaid),'SLSH')}</strong><small>${unpaid.length} records</small></div></div><div class="report-table-wrap">${rows?`<table><thead><tr><th>No.</th><th>Customer ID</th><th>Customer Name</th><th>Number</th><th>Zone</th><th>Xaafadda</th><th>Property Type</th><th>License Grade</th><th>Category</th><th>Size</th><th>Revenue Type</th><th>Amount</th><th>Status</th><th>Date</th></tr></thead><tbody>${rows}</tbody></table>`:'<div class="report-empty">No data found for the selected filters.</div>'}</div><div class="report-print-footer"><span>DHHMH Revenue Management System</span><span>${esc(filterText)}</span><span>Page 1 of 1</span></div></div>`;
}
function printReport(){if(!lastReport.length){alert('Marka hore Generate Report samee.');return}document.title='DHHMH Revenue Report';window.print()}
function downloadReportPDF(){if(!lastReport.length){alert('Marka hore Generate Report samee.');return}document.title='DHHMH Revenue Report';window.print()}
function exportReport(){exportRows(lastReport.map(r=>({...r,date:r._date,zone:r._zone,xaafadda:r._sub,customerId:r._customerId,customerName:r._name,gisNo:r._gis,revenueType:r._rev,licenseGrade:r._grade,category:r._category||'',amount:r._amount,status:r.status,currency:r.currency||'SLSH'})),'DHHMH_Report.csv')}
function exportCSV(){exportRows(records,'DHHMH_Revenue.csv')}function exportRows(data,name){const rows=[['Date','District','Zone','Sub Zone','Customer ID','Customer Name','GIS No','Revenue Type','License Grade','Amount','Currency','Status','Method','Collector'],...data.map(r=>[r.date,r.district,r.zone,r.xaafadda,r.customerId,r.customerName,r.gisNo,r.revenueType,r.licenseGrade||'',r.amount,r.currency,r.status,r.method,r.collector])];const csv=rows.map(a=>a.map(x=>`"${String(x??'').replaceAll('"','""')}"`).join(',')).join('\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download=name;a.click()}
function receiptChargeRows(r){let charges=[];if(r.billId){const b=bills.find(x=>String(x.id)===String(r.billId));if(b&&Array.isArray(b.charges))charges=b.charges;}if(!charges.length&&r.tariffSnapshot?.charges)charges=r.tariffSnapshot.charges;if(!charges.length&&r.tariffSnapshot)charges=[r.tariffSnapshot];if(!charges.length&&r.tariffId){const t=tariffs.find(x=>String(x.id)===String(r.tariffId));if(t)charges=[{code:t.code,head:t.head,rate:t.rate,fixed:t.fixed,percent:t.percent,method:t.method,amount:r.amount,currency:t.currency,dailyComponents:t.dailyComponents}]};return charges.map((c,i)=>{const comps=Array.isArray(c.dailyComponents)?c.dailyComponents:[];const base=Number(c.amount||c.fixed||c.rate||0);let running=base;let rows=`<tr><td>${i+1}</td><td>${esc(c.code||'')}</td><td>${esc(c.head||c.chargeName||'')}</td><td>${esc(tariffRateText(c))}</td><td>${money(base,c.currency||r.currency||'SLSH')}</td></tr>`;if(comps.length){comps.forEach(x=>{const add=running*Number(x.percent||0)/100+Number(x.fixed||0);running+=add;rows+=`<tr><td></td><td></td><td style="padding-left:20px">${esc(x.label||'')}</td><td>${Number(x.percent||0)?Number(x.percent||0)+'%':(Number(x.fixed||0)?'Fixed':'')}</td><td>${money(add,c.currency||r.currency||'USD')}</td></tr>`})}return rows}).join('')||`<tr><td>1</td><td>${esc(r.tariffCode||'')}</td><td>${esc(displayPropertyType(r.revenueType||r.head||''))}</td><td>—</td><td>${money(r.amount,r.currency||'SLSH')}</td></tr>`}
function recordReceiptHtml(r){
 const c=customers.find(x=>String(x.customerId||'').toUpperCase()===String(r.customerId||'').toUpperCase())||{}; const year=(r.date||r.grDate||new Date().toISOString().slice(0,10)).slice(0,4); const pm={height:Number(r.height||c.height||0),width:Number(r.width||c.width||0),area:Number(r.area||c.area||0)}; const sizeText=pm.height&&pm.width?`${pm.height} m × ${pm.width} m${pm.area?' = '+pm.area+' m²':''}`:(pm.area?`${pm.area} m²`:'—');
 return `<div class="receipt bill-preview-wrap"><div class="bill-paper"><div class="bill-watermark" aria-hidden="true"></div><div class="bill-header"><img src="data:image/png;base64,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"><div class="bill-title"><div class="org">DAWLADA HOOSE EE HARGEYSA</div><div class="sub">Revenue Receipt</div><div class="year">${esc(year)}</div></div><div class="bill-meta"><div><b>Customer</b><span>${esc(r.customerId||'')}</span></div><div><b>GR No</b><span><b>${esc(r.grNo||'')}</b></span></div><div><b>Date</b><span>${esc(r.date||r.grDate||'')}</span></div></div></div><div class="bill-grid"><div class="bill-cell"><div class="bill-label">GIS / Supply No</div><div class="bill-value">${esc(r.gisNo||c.gis||c.supplyNo||'—')}</div></div><div class="bill-cell"><div class="bill-label">District</div><div class="bill-value">${esc(r.district||c.district||'Hargeisa')}</div></div><div class="bill-cell"><div class="bill-label">Zone</div><div class="bill-value">${esc(r.zone||c.zone||'—')}</div></div><div class="bill-cell"><div class="bill-label">Sub Zone</div><div class="bill-value">${esc(r.xaafadda||c.xaafadda||'—')}</div></div><div class="bill-cell bill-wide"><div class="bill-label">Customer</div><div class="bill-value">${esc(r.customerName||c.name||'—')}</div></div><div class="bill-cell"><div class="bill-label">Revenue Type</div><div class="bill-value">${esc(r.revenueType||r.head||'—')}</div></div><div class="bill-cell"><div class="bill-label">Status</div><div class="bill-value">${esc(r.status||'Paid')}</div></div><div class="bill-cell"><div class="bill-label">Currency</div><div class="bill-value">${esc(r.currency||'SLSH')}</div></div><div class="bill-cell"><div class="bill-label">Payment Method</div><div class="bill-value">${esc(r.method||'—')}</div></div><div class="bill-cell"><div class="bill-label">Collector</div><div class="bill-value">${esc(r.collector||'—')}</div></div>${(/property|license/i.test(String(r.revenueType||r.type||r.category||'')) && (pm.height||pm.width||pm.area))?`<div class="bill-cell bill-wide"><div class="bill-label">Property Size</div><div class="bill-value">${esc(sizeText)}</div></div>`:''}</div><table class="bill-charges receipt-charges"><thead><tr><th>Sr.</th><th>Code</th><th>Charge Name</th><th>Rate</th><th>Amount</th></tr></thead><tbody>${receiptChargeRows(r)}</tbody></table><div class="bill-total"><span>Total:</span><span class="amount">${money(r.amount,r.currency||'SLSH')}</span></div><div class="bill-footer"><span>${esc(r.date||r.grDate||'')}</span><span>DHHMH Revenue Receipt — Maxamuud Haybe District</span><span>Receipt</span></div></div></div>`;
}
function openReceipt(id){const r=records.find(x=>String(x.id)===String(id));if(!r)return;currentPrintRecord=r;currentBillForPrint=null;$('receipt').innerHTML=recordReceiptHtml(r);$('modal').classList.add('open')}
function closeModal(){$('modal').classList.remove('open')}function printReceipt(){
 const record=currentPrintRecord||null, bill=currentBillForPrint||null; if(!record&&!bill)return; const w=window.open('','_blank'); if(!w){alert('Please allow pop-ups to print the receipt/bill.');return;}
 const title=record?`Receipt ${record.grNo||''}`:`Bill ${bill.billNo||''}`; const html=record?recordReceiptHtml(record):billPrintHtml(bill);
 w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>DHHMH ${esc(title)}</title><style>body{font-family:Arial,sans-serif;margin:0;background:#fff}.print-toolbar{position:sticky;top:0;background:#123b5d;color:#fff;padding:10px;text-align:center;z-index:10}.print-toolbar button{border:0;border-radius:6px;padding:9px 14px;margin:0 4px;cursor:pointer;background:#10a95b;color:#fff}.print-toolbar .secondary{background:#64748b}.bill-preview-wrap{padding:15px;background:#eef2f1}.bill-paper{width:100%;max-width:820px;margin:0 auto;background:#fff;color:#111;font-family:Arial,sans-serif;border:2px solid #202020;position:relative;overflow:hidden;isolation:isolate}.bill-paper:before{content:"";position:absolute;inset:0;background-image:url("logo.png");background-repeat:no-repeat;background-position:center center;background-size:125mm 125mm;opacity:.075;pointer-events:none;z-index:0}.bill-paper>*{position:relative;z-index:1}.bill-header{display:grid;grid-template-columns:82px 1fr 165px;align-items:center;border-bottom:2px solid #202020;padding:8px 9px}.bill-header img{width:58px;height:58px;object-fit:contain;border-radius:50%;padding:2px;background:#fff}.bill-title{text-align:center}.bill-title .org{font-size:18px;font-weight:800;color:#111}.bill-title .sub{font-size:15px;font-weight:800;text-decoration:underline;margin-top:3px;color:#111}.bill-title .year{font-size:14px;font-weight:700;margin-top:3px;color:#111}.bill-meta{font-size:12px}.bill-meta div{display:flex;justify-content:space-between;gap:8px;border-bottom:1px solid #111;padding:3px 0}.bill-grid{display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid #111}.bill-cell{border-right:1px solid #111;border-bottom:1px solid #111;min-height:38px}.bill-cell:nth-child(4n){border-right:0}.bill-wide{grid-column:span 2}.bill-label{font-size:8px;font-weight:700;padding:2px 4px;background:#f1f1f1;border-bottom:1px solid #222}.bill-value{font-size:10px;font-weight:600;padding:4px}.bill-charges{width:100%;border-collapse:collapse}.bill-charges th,.bill-charges td{border-bottom:1px solid #aaa;padding:5px 7px;font-size:11px}.bill-charges th{border-top:1px solid #222;background:#e8e8e8;color:#111}.bill-charges td:nth-child(4),.bill-charges th:nth-child(4),.bill-charges td:last-child,.bill-charges th:last-child{text-align:right}.bill-total{display:flex;justify-content:flex-end;border-top:2px solid #222;border-bottom:1px solid #222;font-weight:800;background:#f5f5f5}.bill-total span{padding:8px 12px}.bill-total .amount{min-width:150px;text-align:right;border-left:1px solid #111}.bill-footer{display:flex;justify-content:space-between;font-size:10px;padding:6px 8px}.bill-note{font-size:10px;padding:5px 8px;border-top:1px solid #aaa;text-align:center;font-weight:700}.bill-charges tr{break-inside:avoid}.bill-charges thead{display:table-header-group}.bill-paper:before{opacity:.035}.bill-paper .bill-label{background:#f1f1f1}.bill-paper .bill-charges th{background:#e8e8e8;color:#111}.bill-paper .bill-total{background:#f5f5f5}@media print{.print-toolbar{display:none!important}.bill-preview-wrap{padding:0;background:#fff}.bill-paper{max-width:none;border:0}.bill-paper{page-break-inside:auto}.bill-charges tr{page-break-inside:avoid;break-inside:avoid}.bill-charges thead{display:table-header-group}.bill-footer{page-break-inside:avoid}}</style></head><body><div class="print-toolbar"><button onclick="window.print()">🖨 Print</button><button onclick="window.print()">⬇ Download PDF</button><button class="secondary" onclick="window.close()">Close</button></div>${html}</body></html>`); w.document.close(); w.focus();
}

function billLastGR(b){const matches=records.filter(r=>String(r.customerId||'')===String(b.customerId||'')).sort((a,z)=>String(z.date||'').localeCompare(String(a.date||'')));return matches[0]||null}
function billHead(b){if(Array.isArray(b.charges)&&b.charges.length){return b.charges.map(c=>c.chargeName||c.head||c.name||c.code).filter(Boolean).join(' • ')||b.type||b.category||'Bill'}return b.head||b.type||b.category||'Bill'}
function taxSize(r){const p=properties.find(x=>String(x.customerId||x.customerID||'')===String(r.customerId||''));const h=Number(r.height||r.h||p?.height||p?.h||0),w=Number(r.width||r.w||p?.width||p?.w||0),a=Number(r.area||p?.area||0);return a||(h&&w?h*w:0)}
function taxBusiness(r){return r.business||r.businessName||r.customerName||r.licenseType||''}
function renderTaxList(){const q=String($('taxHeadFilter')?.value||'').toLowerCase(),district=$('taxDistrictFilter')?.value||'',zone=String($('taxZoneFilter')?.value||'').toLowerCase(),type=$('taxTypeFilter')?.value||'',status=$('taxStatusFilter')?.value||'',currency=$('taxCurrencyFilter')?.value||'';const data=records.filter(r=>(!q||String(r.head||r.chargeName||r.revenueType||'').toLowerCase().includes(q))&&(!district||String(r.district||'Hargeisa')===district)&&(!zone||String(r.zone||r.xaafadda||'').toLowerCase().includes(zone))&&(!type||String(r.revenueType||r.type||'').toLowerCase()===type.toLowerCase()||String(r.category||'').toLowerCase()===type.toLowerCase())&&(!status||String(r.status||'').toLowerCase()===status.toLowerCase())&&(!currency||String(r.currency||'SLSH')===currency));$('taxListBody').innerHTML=data.map((r,i)=>{const st=String(r.status||'Unpaid');return `<tr><td>${i+1}</td><td class="head-cell">${esc(r.head||r.chargeName||r.revenueType||'')}</td><td>${taxSize(r)?Number(taxSize(r)).toLocaleString()+' m²':'—'}</td><td>${esc(r.district||'Hargeisa')}</td><td>${esc(r.zone||r.xaafadda||'')}</td><td>${esc(displayPropertyType(r.revenueType||r.type||r.category||''))}</td><td><span class="status-pill ${st==='Paid'?'status-paid':st==='Active'?'status-active':'status-unpaid'}">${esc(st)}</span></td><td>${esc(taxBusiness(r))}</td><td>${esc(r.currency||'SLSH')}</td><td class="amount-cell">${Number(r.amount||0).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</td></tr>`}).join('')||'<tr><td colspan="10">No tax records found.</td></tr>';const total=data.reduce((a,r)=>a+Number(r.amount||0),0);$('taxListStats').textContent=`${data.length.toLocaleString()} tax records`;$('taxListTotal').textContent=`Total: ${money(total,currency||'SLSH')}`}
function renderBillsList(){const q=String($('billHeadFilter')?.value||'').toLowerCase(),district=$('billDistrictFilter')?.value||'',from=$('billDateFromFilter')?.value||'',to=$('billDateToFilter')?.value||'',currency=$('billCurrencyFilter')?.value||'',status=$('billStatusFilter')?.value||'';const data=bills.filter(b=>(!q||billHead(b).toLowerCase().includes(q))&&(!district||String(b.district||'Hargeisa')===district)&&(!from||String(b.issueDate||'')>=from)&&(!to||String(b.issueDate||'')<=to)&&(!currency||String(b.currency||'SLSH')===currency)&&(!status||String(b.status||'').toLowerCase()===status.toLowerCase()));$('billsListBody').innerHTML=data.map((b,i)=>{const gr=billLastGR(b);const st=String(b.status||'Unpaid');return `<tr><td>${i+1}</td><td class="head-cell">${esc(billHead(b))}</td><td>${esc(b.district||'Hargeisa')}</td><td>${esc(b.issueDate||'')}</td><td>${esc(b.currency||'SLSH')}</td><td class="amount-cell">${Number(b.amount||0).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</td><td><span class="status-pill ${st==='Paid'?'status-paid':'status-unpaid'}">${esc(st)}</span></td><td>${esc(gr?.grNo||b.lastGrNo||'—')}</td><td>${esc(gr?.date||b.lastGrDate||'—')}</td><td><button class="list-action" onclick="openBillById('${esc(b.id||'')}')">View / Print</button></td></tr>`}).join('')||'<tr><td colspan="10">No bills found.</td></tr>';const total=data.reduce((a,b)=>a+Number(b.amount||0),0);$('billsListStats').textContent=`${data.length.toLocaleString()} bills`;$('billsListTotal').textContent=`Total: ${money(total,currency||'SLSH')}`}
function backupCanonical(v){
  if(Array.isArray(v)) return v.map(backupCanonical);
  if(v && typeof v==='object'){
    const o={}; Object.keys(v).sort().forEach(k=>o[k]=backupCanonical(v[k])); return o;
  }
  if(v===null||v===undefined) return '';
  return String(v);
}
function backupChecksum(data){
  const raw=JSON.stringify({app:String(data.app||''),version:String(data.version||''),createdAt:String(data.createdAt||''),records:backupCanonical(data.records||[]),customers:backupCanonical(data.customers||[]),properties:backupCanonical(data.properties||[]),bills:backupCanonical(data.bills||[]),tariffs:backupCanonical(data.tariffs||[])});
  let h=0;for(let i=0;i<raw.length;i++)h=((h<<5)-h+raw.charCodeAt(i))|0;
  return String(h>>>0);
}
function backupData(){
  const now=new Date().toISOString();
  const data={app:'DHHMH Offline',version:'1.2.84',createdAt:now,
    records:Array.isArray(records)?records:[],customers:Array.isArray(customers)?customers:[],
    properties:Array.isArray(properties)?properties:[],bills:Array.isArray(bills)?bills:[],
    tariffs:Array.isArray(tariffs)?tariffs:[]
  };
  data.checksum=backupChecksum(data); return data;
}
function xmlEsc(v){return String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');}
function xlsxCell(ref,value){
  const v=value==null?'':String(value); return '<c r="'+ref+'" t="inlineStr"><is><t xml:space="preserve">'+xmlEsc(v)+'</t></is></c>';
}
function colName(n){let s='';while(n>0){let r=(n-1)%26;s=String.fromCharCode(65+r)+s;n=Math.floor((n-1)/26)}return s;}
function xlsxSheet(rows){
  let xml='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>';
  rows.forEach((r,ri)=>{xml+='<row r="'+(ri+1)+'">';r.forEach((v,ci)=>{xml+=xlsxCell(colName(ci+1)+(ri+1),v)});xml+='</row>'});
  return xml+'</sheetData></worksheet>';
}
function makeZipFixed(files){
  const enc=new TextEncoder(), chunks=[], central=[]; let offset=0;
  function crc32(bytes){let c=0xffffffff;for(let i=0;i<bytes.length;i++){c^=bytes[i];for(let k=0;k<8;k++)c=(c>>>1)^((c&1)?0xedb88320:0)}return (c^0xffffffff)>>>0;}
  function u16(n){return new Uint8Array([n&255,(n>>>8)&255])} function u32(n){return new Uint8Array([n&255,(n>>>8)&255,(n>>>16)&255,(n>>>24)&255])}
  function cat(a,b){let x=new Uint8Array(a.length+b.length);x.set(a);x.set(b,a.length);return x}
  files.forEach(f=>{const name=enc.encode(f.name),data=typeof f.data==='string'?enc.encode(f.data):f.data,crc=crc32(data);let h=new Uint8Array();h=cat(h,u32(0x04034b50));h=cat(h,u16(20));h=cat(h,u16(0));h=cat(h,u16(0));h=cat(h,u16(0));h=cat(h,u16(0));h=cat(h,u32(crc));h=cat(h,u32(data.length));h=cat(h,u32(data.length));h=cat(h,u16(name.length));h=cat(h,u16(0));h=cat(h,name);chunks.push(h,data);central.push({name,crc,size:data.length,offset});offset+=h.length+data.length});
  let cd=new Uint8Array();central.forEach(f=>{let h=new Uint8Array();h=cat(h,u32(0x02014b50));h=cat(h,u16(20));h=cat(h,u16(20));h=cat(h,u16(0));h=cat(h,u16(0));h=cat(h,u16(0));h=cat(h,u16(0));h=cat(h,u32(f.crc));h=cat(h,u32(f.size));h=cat(h,u32(f.size));h=cat(h,u16(f.name.length));h=cat(h,u16(0));h=cat(h,u16(0));h=cat(h,u16(0));h=cat(h,u16(0));h=cat(h,u32(0));h=cat(h,u32(f.offset));h=cat(h,f.name);cd=cat(cd,h)});
  const eocd=cat(cat(cat(cat(cat(cat(cat(u32(0x06054b50),u16(0)),u16(0)),u16(central.length)),u16(central.length)),u32(cd.length)),u32(offset)),u16(0));
  let out=new Uint8Array(offset+cd.length+eocd.length),pos=0; for(const c of chunks){out.set(c,pos);pos+=c.length} out.set(cd,pos);pos+=cd.length;out.set(eocd,pos);return out;
}
function makeXlsx(data){
  const datasets=[['Metadata',[['Field','Value'],['App',data.app],['Version',data.version],['Created At',data.createdAt],['Checksum',data.checksum]]],['Revenue',data.records],['Customers',data.customers],['Properties',data.properties],['Bills',data.bills],['Tariffs',data.tariffs]];
  const files=[]; const sheetNames=datasets.map(x=>x[0]);
  const wb='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>'+sheetNames.map((n,i)=>'<sheet name="'+xmlEsc(n)+'" sheetId="'+(i+1)+'" r:id="rId'+(i+1)+'"/>').join('')+'</sheets></workbook>';
  const rel='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'+sheetNames.map((n,i)=>'<Relationship Id="rId'+(i+1)+'" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet'+(i+1)+'.xml"/>').join('')+'</Relationships>';
  const rootrel='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>';
  const types='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>'+sheetNames.map((n,i)=>'<Override PartName="/xl/worksheets/sheet'+(i+1)+'.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>').join('')+'</Types>';
  files.push({name:'[Content_Types].xml',data:types},{name:'_rels/.rels',data:rootrel},{name:'xl/workbook.xml',data:wb},{name:'xl/_rels/workbook.xml.rels',data:rel});
  datasets.forEach((d,i)=>{let list=d[1],rows=[];if(i===0)rows=list;else{const arr=Array.isArray(list)?list:[];const keys=[...new Set(arr.flatMap(o=>Object.keys(o||{})))];rows=[keys];arr.forEach(o=>rows.push(keys.map(k=>{const v=o?.[k];return typeof v==='object'?JSON.stringify(v):v})))}files.push({name:'xl/worksheets/sheet'+(i+1)+'.xml',data:xlsxSheet(rows)})});
  return makeZipFixed(files);
}
function exportFullBackupXLSX(){
  try{const data=backupData(),bytes=makeXlsx(data),blob=new Blob([bytes],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='DHHMH_FULL_BACKUP_v1.2.84_'+data.createdAt.slice(0,10)+'.xlsx';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1500);localStorage.setItem('dhhmh_last_backup',data.createdAt);backupStats();if($('backupStatus'))$('backupStatus').innerHTML='<b>Full Excel Backup completed.</b> .xlsx file-ka waa diyaar in PC kale lagu Import-gareeyo.'}catch(e){alert('Backup failed: '+e.message)}}
function backup(){exportFullBackupXLSX()}
function backupStats(){if($('bcR'))$('bcR').textContent=records.length;if($('bcC'))$('bcC').textContent=customers.length;if($('bcP'))$('bcP').textContent=Array.isArray(properties)?properties.length:0;if($('bcB'))$('bcB').textContent=Array.isArray(bills)?bills.length:0;if($('bcL'))$('bcL').textContent=localStorage.getItem('dhhmh_last_backup')?new Date(localStorage.getItem('dhhmh_last_backup')).toLocaleString():'Never'}
function parseCSVBackup(text){text=String(text||'').replace(/^\uFEFF/,'');const rows=[];let row=[],cell='',quoted=false;for(let i=0;i<text.length;i++){const ch=text[i];if(quoted){if(ch==='"'){if(text[i+1]==='"'){cell+='"';i++}else quoted=false}else cell+=ch}else{if(ch==='"')quoted=true;else if(ch===','){row.push(cell);cell=''}else if(ch==='\n'){row.push(cell);rows.push(row);row=[];cell=''}else if(ch!=='\r')cell+=ch}}if(cell!==''||row.length){row.push(cell);rows.push(row)}return rows}
function parseXmlRows(xml){const doc=new DOMParser().parseFromString(xml,'application/xml');if(doc.querySelector('parsererror'))throw Error('Invalid Excel worksheet.');return [...doc.getElementsByTagNameNS('http://schemas.openxmlformats.org/spreadsheetml/2006/main','row')].map(r=>{const cells=[];[...r.getElementsByTagNameNS('http://schemas.openxmlformats.org/spreadsheetml/2006/main','c')].forEach(c=>{const ref=c.getAttribute('r')||'',letters=(ref.match(/[A-Z]+/)||[''])[0];let col=0;for(const ch of letters)col=col*26+ch.charCodeAt(0)-64;col--;const t=c.getAttribute('t'),is=c.getElementsByTagNameNS('http://schemas.openxmlformats.org/spreadsheetml/2006/main','t')[0],v=c.getElementsByTagNameNS('http://schemas.openxmlformats.org/spreadsheetml/2006/main','v')[0];cells[col]=t==='inlineStr'?(is?is.textContent:''):(v?v.textContent:'')});return cells})}
async function readXlsxWorkbook(file){
  const buf=await file.arrayBuffer(),bytes=new Uint8Array(buf),dv=new DataView(buf),dec=new TextDecoder('utf-8');let eocd=-1;
  for(let i=bytes.length-22;i>=Math.max(0,bytes.length-65558);i--){if(dv.getUint32(i,true)===0x06054b50){eocd=i;break;}}
  if(eocd<0)throw Error('Invalid XLSX ZIP file.');
  const cdOff=dv.getUint32(eocd+16,true),cdSize=dv.getUint32(eocd+12,true);let pos=cdOff,entries={};
  while(pos<cdOff+cdSize){if(dv.getUint32(pos,true)!==0x02014b50)throw Error('Invalid XLSX central directory.');const method=dv.getUint16(pos+10,true),csize=dv.getUint32(pos+20,true),nl=dv.getUint16(pos+28,true),xl=dv.getUint16(pos+30,true),cl=dv.getUint16(pos+32,true),name=dec.decode(bytes.slice(pos+46,pos+46+nl));entries[name]={method,csize,offset:dv.getUint32(pos+42,true)};pos+=46+nl+xl+cl;}
  async function unzip(name){const en=entries[name];if(!en)throw Error('Missing '+name);const o=en.offset,nl=dv.getUint16(o+26,true),xl=dv.getUint16(o+28,true),data=bytes.slice(o+30+nl+xl,o+30+nl+xl+en.csize);if(en.method===0)return data;if(en.method===8){if(typeof DecompressionStream==='undefined')throw Error('This browser cannot decompress Excel files. Please use Chrome or Edge.');const ds=new DecompressionStream('deflate-raw');return new Uint8Array(await new Response(new Blob([data]).stream().pipeThrough(ds)).arrayBuffer());}throw Error('Unsupported Excel compression format.');}
  let shared=[];if(entries['xl/sharedStrings.xml']){const doc=new DOMParser().parseFromString(dec.decode(await unzip('xl/sharedStrings.xml')),'application/xml');shared=[...doc.getElementsByTagNameNS('http://schemas.openxmlformats.org/spreadsheetml/2006/main','si')].map(si=>[...si.getElementsByTagNameNS('http://schemas.openxmlformats.org/spreadsheetml/2006/main','t')].map(t=>t.textContent).join(''));}
  const wbDoc=new DOMParser().parseFromString(dec.decode(await unzip('xl/workbook.xml')),'application/xml');const sheets=[...wbDoc.getElementsByTagNameNS('http://schemas.openxmlformats.org/spreadsheetml/2006/main','sheet')];if(sheets.length<6)throw Error('Incomplete DHHMH Full Backup: required sheets are missing.');
  const out=[];for(let i=0;i<sheets.length;i++){const name='xl/worksheets/sheet'+(i+1)+'.xml';if(!entries[name])throw Error('Missing Excel worksheet '+(i+1)+'.');const xml=dec.decode(await unzip(name));const doc=new DOMParser().parseFromString(xml,'application/xml');const rows=[];for(const r of [...doc.getElementsByTagNameNS('http://schemas.openxmlformats.org/spreadsheetml/2006/main','row')]){const cells=[];for(const c of [...r.getElementsByTagNameNS('http://schemas.openxmlformats.org/spreadsheetml/2006/main','c')]){const ref=c.getAttribute('r')||'',letters=(ref.match(/[A-Z]+/)||[''])[0];let col=0;for(const ch of letters)col=col*26+ch.charCodeAt(0)-64;col--;const typ=c.getAttribute('t'),v=c.getElementsByTagNameNS('http://schemas.openxmlformats.org/spreadsheetml/2006/main','v')[0]?.textContent??'';let val=v;if(typ==='s')val=shared[Number(v)]??'';else if(typ==='inlineStr')val=[...c.getElementsByTagNameNS('http://schemas.openxmlformats.org/spreadsheetml/2006/main','t')].map(t=>t.textContent).join('');else if(typ==='str')val=v;cells[col]=val;}rows.push(cells);}out.push(rows)}return out;
}
function fullSystemCanonical(obj){
  if(Array.isArray(obj)) return obj.map(fullSystemCanonical);
  if(obj && typeof obj==='object'){
    const out={}; Object.keys(obj).sort().forEach(k=>out[k]=fullSystemCanonical(obj[k])); return out;
  }
  return obj;
}
function fullSystemHash(text){
  let h=2166136261>>>0;
  const s=String(text||'');
  for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)>>>0;}
  return String(h>>>0);
}
function collectFullSystemData(){
  const storage={};
  for(let i=0;i<localStorage.length;i++){
    const k=localStorage.key(i); if(k!==null) storage[k]=localStorage.getItem(k);
  }
  return {
    format:'DHHMH-FULL-SYSTEM-BACKUP',
    formatVersion:1,
    app:'DHHMH Offline',
    appVersion:'1.3.03',
    createdAt:new Date().toISOString(),
    storage:fullSystemCanonical(storage)
  };
}
function fullSystemPayload(data){
  return JSON.stringify(fullSystemCanonical({
    format:data.format,formatVersion:data.formatVersion,app:data.app,appVersion:data.appVersion,storage:data.storage
  }));
}
function exportFullSystemBackup(){
  try{
    const data=collectFullSystemData();
    data.checksum=fullSystemHash(fullSystemPayload(data));
    const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json;charset=utf-8'});
    const a=document.createElement('a'); a.href=URL.createObjectURL(blob);
    const stamp=data.createdAt.replace(/[:.]/g,'-'); a.download='DHHMH_FULL_SYSTEM_BACKUP_'+stamp+'.json';
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),1500);
    localStorage.setItem('dhhmh_last_backup',data.createdAt);
    backupStats();
    if($('systemTransferStatus'))$('systemTransferStatus').innerHTML='<b>✅ Full System Data downloaded.</b> Dhammaan local data iyo settings-ka DHHMH ayaa lagu geliyey hal file.';
  }catch(e){
    if($('systemTransferStatus'))$('systemTransferStatus').innerHTML='<b style="color:#b42318">Download failed:</b> '+esc(e.message);
    alert('Full System Data download failed: '+e.message);
  }
}
async function importFullSystemBackup(){
  const file=$('systemRestoreFile')?.files?.[0];
  if(!file)return alert('Fadlan dooro DHHMH Full System Backup file-ka.');
  try{
    const text=await file.text();
    const data=JSON.parse(text);
    if(data.format!=='DHHMH-FULL-SYSTEM-BACKUP')throw Error('File-kan ma aha DHHMH Full System Backup.');
    if(Number(data.formatVersion)!==1)throw Error('Backup format-kan lama taageero version-kan.');
    if(!data.storage || typeof data.storage!=='object' || Array.isArray(data.storage))throw Error('Backup-ka ma wato local system data sax ah.');
    if(data.checksum && String(data.checksum)!==fullSystemHash(fullSystemPayload(data)))throw Error('Checksum mismatch — backup file-ka waa la beddelay ama wuu dhaawacmay.');
    const keys=Object.keys(data.storage);
    const important=['dhhmh_app_users_v1','dhhmh_current_user_v1','dhhmh_system_locations_v1','dhhmh_records_v1','dhhmh_customers_v1','dhhmh_properties_v1','dhhmh_bills_v1','dhhmh_tariffs_v1'];
    const present=important.filter(k=>Object.prototype.hasOwnProperty.call(data.storage,k));
    let counts=[];
    const countFor=(k,label)=>{try{const v=JSON.parse(data.storage[k]);if(Array.isArray(v))counts.push(label+': '+v.length)}catch(e){}};
    countFor('dhhmh_records_v1','Revenue');countFor('dhhmh_customers_v1','Customers');countFor('dhhmh_properties_v1','Properties');countFor('dhhmh_bills_v1','Bills');countFor('dhhmh_tariffs_v1','Tariffs');countFor('dhhmh_app_users_v1','Users');
    const summary=`Keys: ${keys.length}\n${counts.join('\n')}`;
    if(!confirm('Full System Import-kan wuxuu beddelayaa DHHMH local data-ga PC-kan oo dhan.\n\n'+summary+'\n\nWaxaa lagu soo celinayaa xogtii PC-ga laga soo qaaday. Continue?'))return;
    const oldKeys=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k!==null)oldKeys.push(k)}
    oldKeys.forEach(k=>localStorage.removeItem(k));
    keys.forEach(k=>localStorage.setItem(k,String(data.storage[k]??'')));
    localStorage.setItem('dhhmh_last_backup',new Date().toISOString());
    if($('systemTransferStatus'))$('systemTransferStatus').innerHTML='<b>✅ Full System Import completed.</b> '+keys.length+' local data/settings entries ayaa PC-kan lagu soo celiyey. System-ka hadda wuu reload-gareynayaa.';
    setTimeout(()=>location.reload(),500);
  }catch(e){
    if($('systemTransferStatus'))$('systemTransferStatus').innerHTML='<b style="color:#b42318">Import failed:</b> '+esc(e.message);
    alert('Full System Import failed: '+e.message);
  }
}

async function importFullBackup(){
  const file=$('restore').files[0];if(!file)return alert('Choose a DHHMH Full Backup .xlsx file.');
  try{
    const all=await readXlsxWorkbook(file),data={app:'',version:'',createdAt:'',checksum:'',records:[],customers:[],properties:[],bills:[],tariffs:[]},targets=['records','customers','properties','bills','tariffs'];
    const meta=all[0]||[];meta.slice(1).forEach(r=>{if(r[0]==='App')data.app=r[1]||'';else if(r[0]==='Version')data.version=r[1]||'';else if(r[0]==='Created At')data.createdAt=r[1]||'';else if(r[0]==='Checksum')data.checksum=r[1]||'';});
    for(let i=1;i<6;i++){const rows=all[i]||[],keys=rows[0]||[];data[targets[i-1]]=rows.slice(1).filter(r=>r.length).map(r=>{const o={};keys.forEach((k,j)=>{if(!k)return;let v=r[j]??'';if(typeof v==='string'&&(v.startsWith('{')||v.startsWith('['))){try{v=JSON.parse(v)}catch(e){}}o[k]=v});return o;});}
    if(data.app!=='DHHMH Offline')throw Error('Not a valid DHHMH Full Backup. Please select a backup exported by DHHMH.');
    if(data.checksum&&backupChecksum(data)!==String(data.checksum))throw Error('Backup data was changed after export.');
    const summary=`Revenue: ${data.records.length}\nCustomers: ${data.customers.length}\nProperties: ${data.properties.length}\nBills: ${data.bills.length}\nTariffs: ${data.tariffs.length}`;
    if(!confirm('Full Backup-kan wuxuu beddelayaa local data-ga PC-kan.\n\n'+summary+'\n\nContinue?'))return;
    records=data.records;customers=data.customers;properties=data.properties;bills=data.bills;tariffs=data.tariffs;
    localStorage.setItem(RK,JSON.stringify(records));localStorage.setItem(CK,JSON.stringify(customers));localStorage.setItem(PK,JSON.stringify(properties));localStorage.setItem(BK,JSON.stringify(bills));localStorage.setItem(TK,JSON.stringify(tariffs));
    persist();persistC();fillPropertyTypeFilter();renderProperties();backupStats();if($('backupStatus'))$('backupStatus').innerHTML='<b>Full Excel Restore completed successfully.</b> Xogtii PC-ga hore ayaa lagu soo celiyey PC-kan.';alert('Full Backup restored successfully.');page('dashboard');
  }catch(e){if($('backupStatus'))$('backupStatus').innerHTML='<b style="color:#b42318">Import failed:</b> '+esc(e.message);alert('Import failed: '+e.message);}
}
function restore(){importFullBackup()}

function parseCSVBackup(text){text=String(text||'').replace(/^\uFEFF/,'');const rows=[];let row=[],cell='',quoted=false;for(let i=0;i<text.length;i++){const ch=text[i];if(quoted){if(ch==='"'){if(text[i+1]==='"'){cell+='"';i++}else quoted=false}else cell+=ch}else{if(ch==='"')quoted=true;else if(ch===','){row.push(cell);cell=''}else if(ch==='\n'){row.push(cell);rows.push(row);row=[];cell=''}else if(ch!=='\r')cell+=ch}}if(cell!==''||row.length){row.push(cell);rows.push(row)}return rows}
function parseXmlRows(xml){const doc=new DOMParser().parseFromString(xml,'application/xml');if(doc.querySelector('parsererror'))throw Error('Invalid Excel worksheet.');return [...doc.getElementsByTagNameNS('http://schemas.openxmlformats.org/spreadsheetml/2006/main','row')].map(r=>[...r.getElementsByTagNameNS('http://schemas.openxmlformats.org/spreadsheetml/2006/main','c')].map(c=>{const t=c.getAttribute('t');const is=c.getElementsByTagNameNS('http://schemas.openxmlformats.org/spreadsheetml/2006/main','t')[0];const v=c.getElementsByTagNameNS('http://schemas.openxmlformats.org/spreadsheetml/2006/main','v')[0];return t==='inlineStr'?(is?is.textContent:''):(v?v.textContent:'')}))}
function readZipStored(buf){const b=new Uint8Array(buf),dv=new DataView(buf),dec=new TextDecoder();const out={};for(let off=0;off+30<b.length;){if(dv.getUint32(off,true)!==0x04034b50)break;const nlen=dv.getUint16(off+26,true),elen=dv.getUint16(off+28,true),method=dv.getUint16(off+8,true),size=dv.getUint32(off+18,true),name=dec.decode(b.slice(off+30,off+30+nlen));const dataStart=off+30+nlen+elen;if(method!==0)throw Error('This Excel backup uses an unsupported compression format. Please export a new DHHMH Full Backup from v1.2.84.');out[name]=b.slice(dataStart,dataStart+size);off=dataStart+size}return out}
function importFullBackup(){
  const file=$('restore').files[0];
  if(!file)return alert('Choose a DHHMH Full Backup .xlsx file.');
  const rd=new FileReader();
  rd.onload=()=>{
    try{
      const zip=readZipStored(rd.result), dec=new TextDecoder();
      if(!zip['xl/workbook.xml'])throw Error('Not a valid DHHMH Excel backup.');
      const wb=new DOMParser().parseFromString(dec.decode(zip['xl/workbook.xml']),'application/xml');
      const sheets=[...wb.getElementsByTagNameNS('http://schemas.openxmlformats.org/spreadsheetml/2006/main','sheet')];
      if(sheets.length<6)throw Error('Incomplete DHHMH Full Backup: required sheets are missing.');
      const data={app:'',version:'',createdAt:'',checksum:'',records:[],customers:[],properties:[],bills:[],tariffs:[]};
      const targets=['records','customers','properties','bills','tariffs'];
      sheets.forEach((sh,i)=>{
        const fileName='xl/worksheets/sheet'+(i+1)+'.xml';
        if(!zip[fileName])throw Error('Missing Excel sheet '+(i+1)+'.');
        const rows=parseXmlRows(dec.decode(zip[fileName]));
        if(i===0){
          rows.slice(1).forEach(r=>{
            if(r[0]==='App')data.app=r[1]||'';
            else if(r[0]==='Version')data.version=r[1]||'';
            else if(r[0]==='Created At')data.createdAt=r[1]||'';
            else if(r[0]==='Checksum')data.checksum=r[1]||'';
          });
        }else{
          const keys=rows[0]||[];
          data[targets[i-1]]=rows.slice(1).filter(r=>r.length).map(r=>{
            const o={};
            keys.forEach((k,j)=>{
              if(!k)return;
              let v=r[j]??'';
              if(typeof v==='string'&&(v.startsWith('{')||v.startsWith('['))){try{v=JSON.parse(v)}catch(e){}}
              o[k]=v;
            });
            return o;
          });
        }
      });
      if(data.app!=='DHHMH Offline')throw Error('Not a valid DHHMH Full Backup. Please select a backup exported by DHHMH.');
      const raw=JSON.stringify({app:data.app,version:data.version,createdAt:data.createdAt,records:data.records,customers:data.customers,properties:data.properties,bills:data.bills,tariffs:data.tariffs});
      let h=0;for(let i=0;i<raw.length;i++)h=((h<<5)-h+raw.charCodeAt(i))|0;
      if(data.checksum&&String(h>>>0)!==String(data.checksum))throw Error('Checksum mismatch — Excel backup was changed after export.');
      const summary=`Revenue: ${data.records.length}\nCustomers: ${data.customers.length}\nProperties: ${data.properties.length}\nBills: ${data.bills.length}\nTariffs: ${data.tariffs.length}`;
      if(!confirm('Full Backup-kan wuxuu beddelayaa local data-ga PC-kan.\n\n'+summary+'\n\nContinue?'))return;
      records=data.records;customers=data.customers;properties=data.properties;bills=data.bills;tariffs=data.tariffs;
      localStorage.setItem(RK,JSON.stringify(records));localStorage.setItem(CK,JSON.stringify(customers));localStorage.setItem(PK,JSON.stringify(properties));localStorage.setItem(BK,JSON.stringify(bills));localStorage.setItem(TK,JSON.stringify(tariffs));
      persist();persistC();fillPropertyTypeFilter();renderProperties();backupStats();
      if($('backupStatus'))$('backupStatus').innerHTML='<b>Full Excel Restore completed successfully.</b> Xogtii PC-ga hore ayaa lagu soo celiyey PC-kan.';
      alert('Full Backup restored successfully.');page('dashboard');
    }catch(e){
      if($('backupStatus'))$('backupStatus').innerHTML='<b style="color:#b42318">Import failed:</b> '+esc(e.message);
      alert('Import failed: '+e.message);
    }
  };
  rd.readAsArrayBuffer(file);
}
function restore(){importFullBackup()}
function wipe(){
  if(confirm('WARNING: This will delete all local Revenue and Customer data. Continue?')){
    records=[];customers=[];properties=[];bills=[];
    localStorage.removeItem(RK);localStorage.removeItem(CK);localStorage.removeItem(PK);localStorage.removeItem(BK);
    persist();persistC();backupStats();
  }
}

let currentTaxpayerId='';let currentTpTab='overview';
function initTaxpayerWorkspace(){const id=currentTaxpayerId||localStorage.getItem('dhhmh_last_taxpayer')||'';$('tpSearch').value=id;searchTaxpayers();if(id&&customers.some(c=>String(c.customerId||'').toUpperCase()===id.toUpperCase())){currentTaxpayerId=id;renderTaxpayerWorkspace()}}
function searchTaxpayers(){const q=String($('tpSearch')?.value||'').trim().toLowerCase();const grCustomerIds=new Set(records.filter(r=>String(r.grNo||r.gr||r.receiptNo||'').toLowerCase().includes(q)).map(r=>String(r.customerId||'').toUpperCase()));const data=customers.filter(c=>{if(!q)return true;const fields=[c.customerId,c.name,c.phone,c.mobile,c.number,c.telephone,c.gis,c.supplyNo,c.xaafadda,c.property,c.propertyId,c.taxCode].map(v=>String(v||'').toLowerCase());return fields.some(v=>v.includes(q))||grCustomerIds.has(String(c.customerId||'').toUpperCase())}).slice(0,80);$('tpResults').innerHTML='<option value="">Select taxpayer...</option>'+data.map(c=>`<option value="${esc(c.customerId)}">${esc(c.customerId)} — ${esc(c.name)}</option>`).join('');if(currentTaxpayerId&&data.some(c=>String(c.customerId).toUpperCase()===String(currentTaxpayerId).toUpperCase()))$('tpResults').value=currentTaxpayerId}
function initTaxpayerSearch(){const el=$('taxpayerDirectorySearch');if(el&&!el.value)el.value='';renderTaxpayerSearch()}
function searchTaxpayerGR(){const q=String($('taxpayerGrSearch')?.value||'').trim().toLowerCase();const box=$('taxpayerGrResults');if(!box)return;if(!q){box.innerHTML='';return}const matches=records.filter(r=>String(r.grNo||r.grNumber||'').toLowerCase().includes(q));const billMatches=bills.filter(b=>String(b.lastGrNo||'').toLowerCase().includes(q));if(!matches.length&&!billMatches.length){box.innerHTML='<div class="notice">GR No lama helin.</div>';return}const rows=matches.map(r=>{const c=customers.find(x=>String(x.customerId)===String(r.customerId));return `<tr><td>${esc(r.grNo||'—')}</td><td>${esc(r.date||r.grDate||'—')}</td><td>${esc(r.customerName||c?.name||'—')}</td><td>${esc(r.customerId||'—')}</td><td>${esc(c?.taxCode||'—')}</td><td>${esc(r.revenueType||r.head||'—')}</td><td>${money(r.amount,r.currency||'SLSH')}</td><td><button onclick="openTaxpayer('${esc(r.customerId||'')}')">Open Taxpayer</button></td></tr>`}).join('');const billRows=billMatches.filter(b=>!matches.some(r=>String(r.billId||'')===String(b.id))).map(b=>{const c=customers.find(x=>String(x.customerId)===String(b.customerId));return `<tr><td>${esc(b.lastGrNo||'—')}</td><td>${esc(b.lastGrDate||'—')}</td><td>${esc(b.customerName||c?.name||'—')}</td><td>${esc(b.customerId||'—')}</td><td>${esc(c?.taxCode||'—')}</td><td>${esc(b.type||b.category||'—')}</td><td>${money(b.amount,b.currency||'SLSH')}</td><td><button onclick="openTaxpayer('${esc(b.customerId||'')}')">Open Taxpayer</button></td></tr>`}).join('');box.innerHTML=`<div class="compact-table-wrap"><table class="compact-table"><thead><tr><th>GR No</th><th>GR Date</th><th>Customer</th><th>Customer ID</th><th>Tax Code</th><th>Revenue Type</th><th>Amount</th><th>Action</th></tr></thead><tbody>${rows}${billRows}</tbody></table></div>`}function clearTaxpayerGRSearch(){$('taxpayerGrSearch').value='';$('taxpayerGrResults').innerHTML=''}
function getCustomerDirectory(){
 const out=customers.slice();
 const seen=new Set(out.map(c=>String(c.propertyId||'').trim()).filter(Boolean));
 properties.forEach(p=>{
   const pid=String(p.propertyId||'').trim();
   if(!pid||seen.has(pid))return;
   const h=Number(p.height||0),w=Number(p.width||0),area=(h&&w)?h*w:Number(p.area||p.size||0);
   out.push({id:'property-'+pid,customerId:p.customerId||pid,taxCode:p.taxCode||'',name:p.ownerName||p.name||'',phone:p.phone||'',district:p.district||'Hargeisa',zone:p.zone||'Maxamuud Haybe',xaafadda:p.subZone||'',gis:p.supplyNo||p.gis||'',supplyNo:p.supplyNo||p.houseNo||'',propertyId:pid,type:'Property',property:p.propertyType||'',propertyType:p.propertyType||'',height:h||'',width:w||'',area:area||'',size:p.size||area||'',status:p.status||'Active',source:'Properties/Excel'});
   seen.add(pid);
 });
 return out;
}
function renderTaxpayerSearch(){const q=String($('taxpayerDirectorySearch')?.value||'').trim().toLowerCase();const all=getCustomerDirectory();const data=all.filter(c=>!q||[c.name,c.customerId,c.taxCode,c.phone,c.telephone,getCanonicalHouseNumber(c),c.gis,c.supplyNo,c.propertyId,c.type,c.property,c.propertyType,c.xaafadda,c.zone].join(' ').toLowerCase().includes(q)).slice(0,100);$('taxpayerSearchBody').innerHTML=data.map((c,i)=>`<tr onclick="openTaxpayerDirectory('${esc(c.customerId)}','${esc(c.propertyId||'')}')"><td>${i+1}</td><td>${esc(c.customerId||'—')}</td><td>${esc(c.name||'—')}</td><td>${esc(displayPropertyType(c.propertyType||c.property||c.type||'Others'))}</td><td>${esc(c.district||'Hargeisa')}</td><td>${esc(c.zone||'Maxamuud Haybe')}</td><td>${esc(c.gis||c.supplyNo||'—')}</td><td><span class="status-pill status-active">Active</span></td><td><button onclick="event.stopPropagation();openTaxpayerDirectory('${esc(c.customerId)}','${esc(c.propertyId||'')}')">Open Taxpayer</button></td></tr>`).join('')||'<tr><td colspan=9>No taxpayers found.</td></tr>';$('taxpayerSearchStats').textContent=`${data.length.toLocaleString()} taxpayers / property records`}
function openTaxpayerDirectory(customerId,propertyId){let c=customers.find(x=>String(x.customerId||'')===String(customerId||''));if(!c&&propertyId){const p=properties.find(x=>String(x.propertyId||'')===String(propertyId||''));if(p)c={...getCustomerDirectory().find(x=>String(x.propertyId||'')===String(propertyId||''))};}if(!c)return;window._directoryCustomer=c;openTaxpayer(c.customerId||customerId)}
function clearTaxpayerSearch(){if($('taxpayerDirectorySearch'))$('taxpayerDirectorySearch').value='';renderTaxpayerSearch()}
function openTaxpayer(id){currentTaxpayerId=id;localStorage.setItem('dhhmh_last_taxpayer',id);page('taxpayer');renderTaxpayerWorkspace()}
function selectTaxpayer(){const id=$('tpResults').value;if(!id)return;currentTaxpayerId=id;localStorage.setItem('dhhmh_last_taxpayer',id);['tpMixDhisanMode','tpMixDhisanH','tpMixDhisanW','tpMixDhisanA','tpMixBanaanMode','tpMixBanaanH','tpMixBanaanW','tpMixBanaanA','tpMixDeyrMode','tpMixDeyrH','tpMixDeyrW','tpMixDeyrA'].forEach(k=>{const el=$(k);if(el)el.value='';});if($('tpMixAutoRows'))$('tpMixAutoRows').innerHTML='';if($('tpMixRemaining'))$('tpMixRemaining').textContent='—';if($('tpMixModal'))$('tpMixModal').classList.remove('open');renderTaxpayerWorkspace()}
function openTaxpayerAnySearch(){const m=$('tpAnySearchModal');if(!m)return;m.style.display='flex';const z=$('tpAnySearchZone');if(z)z.value='';const input=$('tpAnySearchInput');if(input){input.value='';setTimeout(()=>input.focus(),50)}$('tpAnySearchResults').innerHTML='<div class="tp-no-results">Type Customer ID, Name, Number, GIS, Supply No or GR No.</div>';}
function closeTaxpayerAnySearch(){const m=$('tpAnySearchModal');if(m)m.style.display='none';}
function runTaxpayerAnySearch(){const q=String($('tpAnySearchInput')?.value||'').trim().toLowerCase();const selectedZone=String($('tpAnySearchZone')?.value||'').trim().toLowerCase();const box=$('tpAnySearchResults');if(!box)return;if(!q){box.innerHTML='<div class="tp-no-results">Type Customer ID, Name, Number, GIS, Supply No or GR No.</div>';return;}const zoneCustomers=customers.filter(c=>!selectedZone||String(c.xaafadda||c.subZone||'').trim().toLowerCase()===selectedZone);const matches=zoneCustomers.filter(c=>[c.customerId,c.name,c.phone,c.mobile,c.number,c.telephone,getCanonicalHouseNumber(c),c.gis,c.supplyNo,c.propertyId,c.taxCode].some(v=>String(v||'').toLowerCase().includes(q)));const allowedIds=new Set(zoneCustomers.map(c=>String(c.customerId||'').toUpperCase()));const grMatches=records.filter(r=>allowedIds.has(String(r.customerId||'').toUpperCase())&&String(r.grNo||r.gr||r.receiptNo||'').toLowerCase().includes(q)).map(r=>String(r.customerId||'').toUpperCase());const data=zoneCustomers.filter(c=>matches.includes(c)||grMatches.includes(String(c.customerId||'').toUpperCase())).slice(0,100);box.innerHTML=data.map(c=>{const grs=[...new Set(records.filter(r=>String(r.customerId||'').toUpperCase()===String(c.customerId||'').toUpperCase()).map(r=>r.grNo||r.gr||r.receiptNo).filter(Boolean))].join(', ');return `<div class="tp-any-result" onclick="chooseTaxpayerAnySearch('${esc(c.customerId)}')"><div><strong>${esc(c.customerId||'—')} — ${esc(c.name||'—')}</strong><small>Number: ${esc(c.phone||c.mobile||c.number||c.telephone||'—')} &nbsp; | &nbsp; GIS/Supply: ${esc(c.gis||c.supplyNo||'—')} &nbsp; | &nbsp; GR No: ${esc(grs||'—')}</small></div><button type="button" onclick="event.stopPropagation();chooseTaxpayerAnySearch('${esc(c.customerId)}')">Open</button></div>`}).join('')||'<div class="tp-no-results">No customer found.</div>'; }
function chooseTaxpayerAnySearch(customerId){
 const id=String(customerId||'').trim();
 if(!id)return;
 const c=customers.find(x=>String(x.customerId||'').toUpperCase()===id.toUpperCase());
 if(!c){alert('Customer-ka lama helin.');return;}
 currentTaxpayerId=c.customerId;
 localStorage.setItem('dhhmh_last_taxpayer',c.customerId);
 closeTaxpayerAnySearch();
 page('taxpayer');
 currentTpTab='overview';
 document.querySelectorAll('.taxpayer-tabs button').forEach(x=>x.classList.remove('active'));
 $('tpTabOverview')?.classList.add('active');
 renderTaxpayerWorkspace();
}
function selectFirstTaxpayerAnySearch(){const first=document.querySelector('#tpAnySearchResults .tp-any-result');if(first)first.click();}

function tpCustomer(){return customers.find(c=>String(c.customerId||'').toUpperCase()===String(currentTaxpayerId||'').toUpperCase())||null}
function tpRecords(){return records.filter(r=>String(r.customerId||'').toUpperCase()===String(currentTaxpayerId||'').toUpperCase())}
function tpBills(){return bills.filter(b=>String(b.customerId||'').toUpperCase()===String(currentTaxpayerId||'').toUpperCase())}
function tpTab(tab){currentTpTab=tab;document.querySelectorAll('.taxpayer-tabs button').forEach(x=>x.classList.remove('active'));const names={overview:'Overview',tax:'Tax',bills:'Bills',payments:'Payments',info:'Info',contact:'Contact'};const el=$('tpTab'+names[tab]);if(el)el.classList.add('active');renderTaxpayerWorkspace()}
const PAYMENT_ATTACH_DB='dhhmh_payment_attachments_v1';
function openPaymentAttachmentDB(){
  return new Promise((resolve,reject)=>{
    const r=indexedDB.open(PAYMENT_ATTACH_DB,2);
    r.onupgradeneeded=()=>{
      const db=r.result, tx=r.transaction;
      if(!db.objectStoreNames.contains('attachments_v2')){
        const ns=db.createObjectStore('attachments_v2',{keyPath:'attachmentId'});
        ns.createIndex('paymentId','paymentId',{unique:false});
        if(db.objectStoreNames.contains('attachments')){
          const old=tx.objectStore('attachments');
          old.openCursor().onsuccess=e=>{
            const c=e.target.result;
            if(!c)return;
            const v=c.value;
            ns.put({attachmentId:crypto.randomUUID(),paymentId:v.paymentId,customerId:v.customerId,name:v.name,type:v.type,size:v.size,attachedAt:v.attachedAt||new Date().toISOString(),blob:v.blob});
            c.continue();
          };
        }
      }
    };
    r.onsuccess=()=>resolve(r.result);
    r.onerror=()=>reject(r.error);
  });
}
async function savePaymentAttachment(paymentId,customerId,file){const db=await openPaymentAttachmentDB();return new Promise((resolve,reject)=>{const tx=db.transaction('attachments_v2','readwrite');tx.objectStore('attachments_v2').put({attachmentId:crypto.randomUUID(),paymentId,customerId,name:file.name,type:file.type,size:file.size,attachedAt:new Date().toISOString(),blob:file});tx.oncomplete=()=>{db.close();resolve()};tx.onerror=()=>{db.close();reject(tx.error)}})}
async function getPaymentAttachments(paymentId){const db=await openPaymentAttachmentDB();return new Promise((resolve,reject)=>{const tx=db.transaction('attachments_v2','readonly');const q=tx.objectStore('attachments_v2').index('paymentId').getAll(paymentId);q.onsuccess=()=>{db.close();resolve(q.result||[])};q.onerror=()=>{db.close();reject(q.error)}})}
async function getPaymentAttachment(attachmentId){const db=await openPaymentAttachmentDB();return new Promise((resolve,reject)=>{const tx=db.transaction('attachments_v2','readonly');const q=tx.objectStore('attachments_v2').get(attachmentId);q.onsuccess=()=>{db.close();resolve(q.result||null)};q.onerror=()=>{db.close();reject(q.error)}})}
async function deletePaymentAttachment(attachmentId){const db=await openPaymentAttachmentDB();return new Promise((resolve,reject)=>{const tx=db.transaction('attachments_v2','readwrite');tx.objectStore('attachments_v2').delete(attachmentId);tx.oncomplete=()=>{db.close();resolve()};tx.onerror=()=>{db.close();reject(tx.error)}})}
function fmtAttachmentSize(n){if(!n)return '0 KB';if(n<1024*1024)return (n/1024).toFixed(1)+' KB';return (n/1024/1024).toFixed(2)+' MB'}
async function renderLatestPaymentAttachment(){const wrap=$('latestPaymentAttachment');if(!wrap)return;try{const customerId=String(currentTaxpayerId||'').toUpperCase();const pays=tpRecords().filter(r=>String(r.status).toLowerCase()==='paid').sort((a,b)=>String(b.date||b.createdAt||'').localeCompare(String(a.date||a.createdAt||'')));const allDb=await getCustomerAttachments(currentTaxpayerId);const paymentFiles=[];for(const r of pays){const files=await getPaymentAttachments(r.id);for(const a of files)paymentFiles.push({...a,payment:r,source:'Payment Bill'});}const manualFiles=allDb.filter(a=>!a.paymentId).map(a=>({...a,source:'Manual File'}));const all=[...manualFiles,...paymentFiles].filter(a=>String(a.customerId||'').toUpperCase()===customerId).sort((a,b)=>String(b.attachedAt||b.payment?.date||'').localeCompare(String(a.attachedAt||a.payment?.date||'')));if(!all.length){wrap.innerHTML='<div class="tp-empty">File attachments lama helin. Guji 📎 Add File Attachment si aad file uga soo geliso computer-ka.</div>';return}wrap.innerHTML='<div class="muted" style="margin-bottom:8px">'+all.length+' attachment'+(all.length===1?'':'s')+' oo taxpayer-kan ah</div><div class="attachment-list">'+all.map(a=>`<div class="attachment-card"><div class="attachment-meta"><div><small>File Name</small><strong>${esc(a.name)}</strong></div><div><small>File Type</small><strong>${esc(a.type||'—')}</strong></div><div><small>Date Attached</small><strong>${esc(a.attachedAt?new Date(a.attachedAt).toLocaleString():'—')}</strong></div><div><small>Size</small><strong>${esc(fmtAttachmentSize(a.size))}</strong></div><div><small>Source</small><strong>${esc(a.source||'—')}</strong></div><div><small>${a.payment?'Payment GR No':'Customer ID'}</small><strong>${esc(a.payment?.grNo||a.customerId||'—')}</strong></div></div><div class="attachment-actions"><button type="button" onclick="viewPaymentAttachment('${String(a.attachmentId)}')">View</button><button type="button" onclick="downloadPaymentAttachment('${String(a.attachmentId)}',${JSON.stringify(a.name||'attachment')})">Download</button><button type="button" class="danger" onclick="removePaymentAttachment('${String(a.attachmentId)}')">Delete</button></div></div>`).join('')+'</div>'}catch(e){console.error(e);wrap.innerHTML='<div class="tp-empty">Attachment-yada lama soo bandhigi karin. Fadlan mar kale fur Overview.</div>'}}
async function getCustomerAttachments(customerId){const db=await openPaymentAttachmentDB();return new Promise((resolve,reject)=>{const tx=db.transaction('attachments_v2','readonly');const q=tx.objectStore('attachments_v2').getAll();q.onsuccess=()=>{db.close();const id=String(customerId||'').toUpperCase();resolve((q.result||[]).filter(a=>String(a.customerId||'').toUpperCase()===id))};q.onerror=()=>{db.close();reject(q.error)}})}
function openManualTaxpayerAttachment(){const m=$('manualTaxpayerAttachmentModal');const i=$('manualTaxpayerAttachmentInput');const w=$('manualTaxpayerAttachmentPreview');if(!m)return;if(i)i.value='';if(w)w.innerHTML='';m.classList.add('open')}
function closeManualTaxpayerAttachment(){const m=$('manualTaxpayerAttachmentModal');if(m)m.classList.remove('open');const i=$('manualTaxpayerAttachmentInput');const w=$('manualTaxpayerAttachmentPreview');if(i)i.value='';if(w)w.innerHTML=''}
function openManualTaxpayerAttachmentUpload(){const i=$('manualTaxpayerAttachmentInput');if(i)i.click()}
function addFilesToManualTaxpayerAttachment(list){const i=$('manualTaxpayerAttachmentInput');if(!i)return;const existing=Array.from(i.files||[]),incoming=Array.from(list||[]),seen=new Set(existing.map(f=>f.name+'|'+f.size+'|'+f.lastModified)),dt=new DataTransfer();existing.forEach(f=>dt.items.add(f));incoming.forEach(f=>{const k=f.name+'|'+f.size+'|'+f.lastModified;if(!seen.has(k)){dt.items.add(f);seen.add(k)}});i.files=dt.files;renderManualTaxpayerAttachmentPreview()}
function renderManualTaxpayerAttachmentPreview(){const i=$('manualTaxpayerAttachmentInput'),w=$('manualTaxpayerAttachmentPreview');if(!i||!w)return;const fs=Array.from(i.files||[]);w.innerHTML=fs.map((f,n)=>`<div class="pay-attachment-chip"><span>📎</span><span class="pay-file-name" title="${esc(f.name)}">${esc(f.name)}</span><small>${fmtAttachmentSize(f.size)}</small><button type="button" class="pay-file-cancel" title="Cancel file" onclick="cancelManualTaxpayerAttachment(${n})">×</button></div>`).join('')}
function cancelManualTaxpayerAttachment(n){const i=$('manualTaxpayerAttachmentInput');if(!i)return;const fs=Array.from(i.files||[]),dt=new DataTransfer();fs.forEach((f,k)=>{if(k!==n)dt.items.add(f)});i.files=dt.files;renderManualTaxpayerAttachmentPreview()}
async function saveManualTaxpayerAttachments(){const customer=tpCustomer();if(!customer)return alert('Taxpayer lama dooran.');const files=Array.from($('manualTaxpayerAttachmentInput')?.files||[]);if(!files.length)return alert('Fadlan dooro ugu yaraan hal file.');for(const f of files){if(!['image/png','image/jpeg','application/pdf'].includes(f.type))return alert('Fadlan geli PNG, JPG/JPEG ama PDF.');if(f.size>15*1024*1024)return alert(`File-ka ${f.name} waa inuu ka yaraadaa 15 MB.`)}try{for(const f of files)await savePaymentAttachment(null,customer.customerId,f);closeManualTaxpayerAttachment();await renderLatestPaymentAttachment();alert(`✅ ${files.length} attachment${files.length===1?'':'s'} ayaa lagu daray Taxpayer Overview.`)}catch(e){console.error(e);alert('File attachment lama kaydin karin. Fadlan mar kale isku day.')}}

async function viewPaymentAttachment(attachmentId){try{const a=await getPaymentAttachment(attachmentId);if(!a||!a.blob)return alert('Attachment lama helin.');const u=URL.createObjectURL(a.blob),w=window.open('about:blank','_blank');if(!w){URL.revokeObjectURL(u);return alert('Browser-ku wuxuu xannibay View window-ka. Fadlan oggolow pop-up-ka DHHMH.')}w.opener=null;w.location.href=u;setTimeout(()=>URL.revokeObjectURL(u),60000)}catch(e){console.error(e);alert('Attachment-ka lama furi karin.')}}
async function downloadPaymentAttachment(attachmentId,name){try{const a=await getPaymentAttachment(attachmentId);if(!a||!a.blob)return alert('Attachment lama helin.');const u=URL.createObjectURL(a.blob),x=document.createElement('a');x.href=u;x.download=name||a.name||'payment-attachment';x.style.display='none';document.body.appendChild(x);x.click();x.remove();setTimeout(()=>URL.revokeObjectURL(u),3000)}catch(e){console.error(e);alert('Attachment-ka lama download-gareyn karin.')}}
async function removePaymentAttachment(attachmentId){if(!confirm('Ma hubtaa inaad tirtirayso attachment-kan?'))return;try{await deletePaymentAttachment(attachmentId);await renderLatestPaymentAttachment();}catch(e){console.error(e);alert('Attachment-ka lama tirtiri karin.')}}

function renderTaxpayerWorkspace(){
const c=tpCustomer();if(!c){$('tpProfileCard').innerHTML='<div class="tp-empty">Raadi Customer ID si aad u furto Taxpayer profile-ka.</div>';$('tpContent').innerHTML='<div class="tp-empty">Dooro taxpayer.</div>';return}
const initials=String(c.name||'TP').split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase();const rr=tpRecords(),bb=tpBills(),paid=rr.filter(r=>String(r.status).toLowerCase()==='paid'),unpaid=rr.filter(r=>String(r.status).toLowerCase()!=='paid');const totalS=rr.filter(r=>(r.currency||'SLSH')==='SLSH').reduce((a,r)=>a+Number(r.amount||0),0);
$('tpProfileCard').innerHTML=`<div class="taxpayer-avatar">${esc(initials)}</div><div class="taxpayer-name">${esc(c.name||'—')}</div><div class="taxpayer-code">Tax Code: ${esc(c.taxCode||c.customerId||'—')}</div><div class="taxpayer-status"><span>Active</span></div><div class="taxpayer-actions"><button onclick="tpManageTax()">Manage Tax</button><button style="background:#17213a" onclick="tpPayDirect()">Pay Direct Tax</button></div><div class="taxpayer-fields"><div><b>Property Type / License Type:</b><strong>${esc(displayPropertyType(c.propertyType||c.property||c.type||'Others'))}</strong></div><div><b>Mobile:</b><strong>${esc(c.phone||c.mobile||'—')}</strong></div><div><b>Telephone:</b><strong>${esc(c.telephone||'—')}</strong></div><div><b>National ID:</b><strong>${esc(c.nationalId||'—')}</strong></div><div><b>Email:</b><strong>${esc(c.email||'—')}</strong></div><div><b>Address:</b><strong>${esc(c.address||c.xaafadda||'—')}</strong></div></div>`;
let html='';if(currentTpTab==='overview')html=`<h2>Taxpayer Overview</h2><div class="tp-kpis"><div class="tp-kpi"><span>Tax Records</span><b>${rr.length}</b></div><div class="tp-kpi"><span>Bills</span><b>${bb.length}</b></div><div class="tp-kpi"><span>Paid</span><b>${paid.length}</b></div><div class="tp-kpi"><span>Unpaid</span><b>${unpaid.length}</b></div></div><div class="tp-card"><div class="tp-grid"><div><small>Customer ID</small><strong>${esc(c.customerId)}</strong></div><div><small>District</small><strong>${esc(c.district||'Hargeisa')}</strong></div><div><small>Zone</small><strong>${esc(c.zone||'Maxamuud Haybe')}</strong></div><div><small>Sub Zone</small><strong>${esc(c.xaafadda||c.subZone||'—')}</strong></div><div><small>GIS / Supply No</small><strong>${esc(c.gis||c.supplyNo||'—')}</strong></div><div><small>Total SLSH</small><strong>${money(totalS,'SLSH')}</strong></div></div></div><div class="tp-card"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap"><h3 style="margin:0">File Attachments</h3><button type="button" onclick="openManualTaxpayerAttachment()">📎 Add File Attachment</button></div><div class="muted" style="margin:6px 0 10px">Manual file attachments-ka taxpayer-kan iyo payment bill attachments-ka dhammaantood halkan ayay ka muuqanayaan.</div><div id="latestPaymentAttachment"><div class="tp-empty">Checking attachments...</div></div></div><div class="tp-card"><h3>Latest Bills</h3>${tpBillTable(bb.slice().sort((a,z)=>String(z.issueDate||'').localeCompare(String(a.issueDate||''))).slice(0,8))}</div>`;
if(currentTpTab==='tax')html=`<h2>Tax List</h2><div class="toolbar"><button onclick="tpGenerate()">Generate Tax Bill</button><button class="secondary" onclick="openIskuModal()">Isku Jar</button></div>${tpTaxTable(rr)}`;
if(currentTpTab==='bills')html=`<h2>Tax Bills</h2>${tpBillTable(bb)}`;
if(currentTpTab==='payments')html=`<h2>Payments</h2>${tpPaymentTable(paid)}`;
if(currentTpTab==='info'){const pp=properties.find(p=>String(p.customerId||'').toUpperCase()===String(c.customerId||'').toUpperCase()||String(p.propertyId||'').toUpperCase()===String(c.propertyId||'').toUpperCase())||{};const savedType=String(c.type||c.property||'').toLowerCase();const isL=savedType==='license'||/license|liisan|ruqso|business/.test(savedType)||!!(c.licenseGrade||c.grade);const savedGrade=c.licenseGrade||c.grade||pp.licenseGrade||pp.grade||'';const savedProp=normalizePropertyTariffCategory(c.propertyType||c.property||pp.propertyType||'');html=`<h2>Taxpayer Info</h2><div class="tp-card"><div class="tp-edit"><div><label>Customer ID</label><input value="${esc(c.customerId)}" readonly></div><div><label>Tax Code</label><input id="tpEditTaxCode" value="${esc(c.taxCode||'')}"></div><div><label>Category</label><select id="tpEditCategory">${taxpayerCategoryOptions(c.category)}</select></div><div><label>Name</label><input id="tpEditName" value="${esc(c.name||'')}"></div><div><label>Type</label><select id="tpEditType" onchange="renderTaxpayerTypeChoices()"><option value="Property" ${!isL&&!['other'].includes(savedType)?'selected':''}>Property</option><option value="License" ${isL?'selected':''}>License</option><option value="Other" ${savedType==='other'?'selected':''}>Other</option></select></div><div><label>Business Name</label><input id="tpEditBusinessName" value="${esc(c.businessName||c.business||'')}"></div><div class="full"><label>Property Type / License Grade</label><div id="tpTypeChoices"></div><input type="hidden" id="tpEditPropertyType" value="${esc(savedProp)}"><input type="hidden" id="tpEditLicenseGrade" value="${esc(savedGrade)}"><div class="tp-choice-help">Dooro nooca property-ga ama darajada liisanka; Generate Bill wuxuu si automatic ah uga isticmaali doonaa xogtan.</div></div><div><label>District</label><input id="tpEditDistrict" value="Hargeisa" readonly></div><div><label>Sub District</label><input id="tpEditSubDistrict" value="Maxamuud Haybe" readonly></div><div><label>Zone</label><select id="tpEditZone"><option value="">Select Zone...</option><option ${c.zone==='Burco Duuray'?'selected':''}>Burco Duuray</option><option ${c.zone==='Qudhac Dheer'?'selected':''}>Qudhac Dheer</option><option ${c.zone==='Jameeco Weyn'?'selected':''}>Jameeco Weyn</option><option ${c.zone==='Sheekh shukri'?'selected':''}>Sheekh shukri</option><option ${c.zone==='Masalaha'?'selected':''}>Masalaha</option><option ${c.zone==='Kalabaydh'?'selected':''}>Kalabaydh</option></select></div><div><label>Sub-Zone</label><select id="tpEditSub"><option value="">Select Sub-Zone...</option><option ${String(c.subZone||'')==='1'?'selected':''}>1</option><option ${String(c.subZone||'')==='2'?'selected':''}>2</option><option ${String(c.subZone||'')==='3'?'selected':''}>3</option><option ${String(c.subZone||'')==='4'?'selected':''}>4</option></select></div><div><label>Street</label><input id="tpEditStreet" value="${esc(c.street||'')}"></div><div><label>Plot Number</label><input id="tpEditPlot" value="${esc(c.plotNumber||c.plotNo||'')}"></div><div><label>House Number</label><input id="tpEditHouseNumber" value="${esc(c.houseNumber||c.houseNo||c.gis||c.supplyNo||'')}"></div><div><label>Latitude</label><input id="tpEditLatitude" type="text" inputmode="decimal" value="${esc(c.latitude||'')}"></div><div><label>Longitude</label><input id="tpEditLongitude" type="text" inputmode="decimal" value="${esc(c.longitude||'')}"></div><div style="grid-column:1/-1;margin-top:-4px"><button type="button" onclick="(function(){var a=(document.getElementById('tpEditLatitude')||{}).value||'';var o=(document.getElementById('tpEditLongitude')||{}).value||'';a=a.trim();o=o.trim();if(!a||!o){alert('Fadlan geli Latitude iyo Longitude marka hore.');return;}window.open('https://www.google.com/maps/@?api=1&map_action=map&center='+encodeURIComponent(a+','+o)+'&zoom=20','_blank','noopener,noreferrer');})()">View Map</button></div><div><label>GIS / Supply No</label><input id="tpEditGis" value="${esc(c.gis||c.supplyNo||'')}"></div><div class="dimension-row full"><div><label>Height / Dherer</label><input id="tpEditHeight" type="number" step="0.01" value="${esc(c.height||pp.height||'')}"></div><div><label>Width / Ballac</label><input id="tpEditWidth" type="number" step="0.01" value="${esc(c.width||pp.width||'')}"></div></div><div><label>Habka Cabbirka</label><select id="tpEditAreaMode" onchange="updateTpEditAreaMode()"><option value="automatic" ${((c.areaMode||'automatic')==='automatic')?'selected':''}>Automatic — Height × Width</option><option value="manual" ${((c.areaMode||'automatic')==='manual')?'selected':''}>Manual Entry</option></select><label style="margin-top:6px">Area (m²)</label><input id="tpEditArea" value="${esc(c.area||pp.area||'')}" inputmode="text" type="text" placeholder="Automatic Height × Width" oninput="updateTpManualArea()"><div class="tp-choice-help" style="margin-top:5px">Dooro <b>Automatic</b> si Height × Width loo xisaabiyo, ama <b>Manual Entry</b> si Area-ga gacanta loogu geliyo, tusaale <b>144</b> ama <b>12*12</b>.</div></div><div class="full"><button type="button" class="secondary" onclick="openTpMixModal()">↔ Iskujarka Cabirka</button><div id="tpMixSavedSummary" class="tp-choice-help" style="margin-top:7px">${Object.entries(c.measurementBreakdown||{}).map(([k,v])=>`${esc(k)}: ${esc(v.height)} × ${esc(v.width)} = ${esc(v.area)} m²`).join(' &nbsp; | &nbsp; ')||'Weli lama kala qaybin cabirka guud.'}</div></div><div class="full"><button type="button" onclick="saveTaxpayerInfo()">Save Customer & Property Info</button></div></div></div>`;}
if(currentTpTab==='contact')html=`<h2>Taxpayer Contact</h2><div class="tp-card"><div class="tp-edit"><div><label>Mobile</label><input id="tpEditPhone" value="${esc(c.phone||c.mobile||'')}"></div><div><label>Telephone</label><input id="tpEditTel" value="${esc(c.telephone||'')}"></div><div><label>Email</label><input id="tpEditEmail" value="${esc(c.email||'')}"></div><div><label>National ID</label><input id="tpEditNational" value="${esc(c.nationalId||'')}"></div><div class="full"><label>Address</label><input id="tpEditAddress" value="${esc(c.address||c.xaafadda||'')}"></div><div class="full"><button onclick="saveTaxpayerContact()">Save Contact</button></div></div></div>`;
$('tpContent').innerHTML=html;if(currentTpTab==='info')renderTaxpayerTypeChoices();if(currentTpTab==='overview')renderLatestPaymentAttachment()}
function renderTaxpayerTypeChoices(){const wrap=$('tpTypeChoices'),type=$('tpEditType')?.value;if(!wrap)return;const prop=$('tpEditPropertyType')?.value||'',grade=$('tpEditLicenseGrade')?.value||'';if(type==='Property'){const opts=[['Dhisan','Guri'],['Guri Dabaq G+1','Guri Dabaq G+1'],['Guri Dabaq G+2','Guri Dabaq G+2'],['Guri Dabaq G+3','Guri Dabaq G+3'],['Guri Dabaq G+4','Guri Dabaq G+4'],['Guri Dabaq G+5','Guri Dabaq G+5'],['Banaan','Dhul Banaan'],['Deyran','Deyr']];wrap.innerHTML='<div class=\"tp-choice-row\">'+opts.map(([v,l])=>`<button type=\"button\" class=\"${prop===v?'active':''}\" onclick=\"selectTaxpayerCategory('Property','${v}')\">${l}</button>`).join('')+'</div>';}else if(type==='License'){const grades=['Darajada 1aad','Darajada 2aad B','Darajada 2aad','Darajada 3aad','Darajada 4aad','Darajada 5aad','Darajada 6aad','Darajada 7aad'];wrap.innerHTML='<div class=\"tp-choice-row\">'+grades.map(g=>`<button type=\"button\" class=\"${grade===g?'active':''}\" onclick=\"selectTaxpayerCategory('License','${g}')\">${g}</button>`).join('')+'</div>';}else{wrap.innerHTML='<div class=\"tp-choice-help\">Other: ma jiro Property/License category.</div>';}}
function selectTaxpayerCategory(type,value){if(type==='License'){$('tpEditLicenseGrade').value=value;$('tpEditPropertyType').value='';}else{$('tpEditPropertyType').value=value;$('tpEditLicenseGrade').value='';}renderTaxpayerTypeChoices()}
function tpTaxTable(data){if(!data.length)return '<div class="tp-empty">No tax records found for this taxpayer.</div>';return `<div class="tp-table-wrap"><table class="tp-table"><thead><tr><th>Head</th><th>Size</th><th>District</th><th>Zone</th><th>Type</th><th>Status</th><th>Business</th><th>Currency</th><th>Amount</th></tr></thead><tbody>${data.map(r=>`<tr><td>${esc(r.head||r.chargeName||r.revenueType||'')}</td><td>${taxSize(r)?Number(taxSize(r)).toLocaleString()+' m²':'—'}</td><td>${esc(r.district||'Hargeisa')}</td><td>${esc(r.zone||r.xaafadda||'')}</td><td>${esc(displayPropertyType(r.revenueType||r.type||r.category||''))}</td><td><span class="status-pill ${String(r.status||'Unpaid')==='Paid'?'status-paid':'status-unpaid'}">${esc(r.status||'Unpaid')}</span></td><td>${esc(taxBusiness(r))}</td><td>${esc(r.currency||'SLSH')}</td><td class="tp-amount">${Number(r.amount||0).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</td></tr>`).join('')}</tbody></table></div>`}
function openPaymentAttachmentUpload(){const input=$('payAttachment');if(input)input.click()}
function addFilesToPaymentAttachment(fileList){const input=$('payAttachment');if(!input)return;const existing=Array.from(input.files||[]),incoming=Array.from(fileList||[]);const seen=new Set(existing.map(f=>f.name+'|'+f.size+'|'+f.lastModified));const dt=new DataTransfer();existing.forEach(f=>dt.items.add(f));incoming.forEach(f=>{const k=f.name+'|'+f.size+'|'+f.lastModified;if(!seen.has(k)){dt.items.add(f);seen.add(k)}});input.files=dt.files;renderPayAttachmentPreview()}
async function openScannedPictures(){
 const input=$('payScannedPictures');
 if(!input)return;
 try{
  if(window.showOpenFilePicker){
   const handles=await window.showOpenFilePicker({multiple:true,excludeAcceptAllOption:true,types:[{description:'DHHMH Scanned Pictures',accept:{'image/jpeg':['.jpg','.jpeg'],'image/png':['.png']}}],startIn:'pictures'});
   const files=[];
   for(const handle of handles){files.push(await handle.getFile())}
   addFilesToPaymentAttachment(files);
   return;
  }
 }catch(e){if(e&&e.name==='AbortError')return}
 input.click();
}
function openDashboardAttachmentModal(){const sel=$('dashAttachmentPayment');if(!sel)return;const paid=records.filter(r=>String(r.status||'').toLowerCase()==='paid').slice().sort((a,b)=>String(b.date||b.createdAt||'').localeCompare(String(a.date||a.createdAt||'')));sel.innerHTML='<option value="">— Select Paid Payment —</option>'+paid.map(r=>`<option value="${esc(r.id)}">${esc(r.grNo||'No GR')} • ${esc(r.customerName||r.customerId||'')} • ${esc(r.date||'')} • ${esc(r.forYear||'')}</option>`).join('');$('dashAttachmentInput').value='';$('dashAttachmentPreview').innerHTML='';renderDashboardAttachmentTarget();$('dashboardAttachmentModal').classList.add('open')}
function closeDashboardAttachmentModal(){if($('dashboardAttachmentModal'))$('dashboardAttachmentModal').classList.remove('open')}
function selectedDashboardPayment(){const id=String($('dashAttachmentPayment')?.value||'');return records.find(r=>String(r.id)===id)||null}
function renderDashboardAttachmentTarget(){const r=selectedDashboardPayment();$('dashAttachmentTarget').textContent=r?`Customer: ${r.customerName||r.customerId||'—'} • GR No: ${r.grNo||'—'} • For Year: ${r.forYear||'—'} • Date: ${r.date||'—'}`:'Dooro payment-ka aad attachment ugu dari rabto.'}
function openDashboardAttachmentUpload(){const i=$('dashAttachmentInput');if(i)i.click()}
function addFilesToDashboardAttachment(list){const i=$('dashAttachmentInput');if(!i)return;const existing=Array.from(i.files||[]),incoming=Array.from(list||[]),seen=new Set(existing.map(f=>f.name+'|'+f.size+'|'+f.lastModified)),dt=new DataTransfer();existing.forEach(f=>dt.items.add(f));incoming.forEach(f=>{const k=f.name+'|'+f.size+'|'+f.lastModified;if(!seen.has(k)){dt.items.add(f);seen.add(k)}});i.files=dt.files;renderDashboardAttachmentPreview()}
function renderDashboardAttachmentPreview(){const i=$('dashAttachmentInput'),w=$('dashAttachmentPreview');if(!i||!w)return;const fs=Array.from(i.files||[]);w.innerHTML=fs.map((f,n)=>`<div class="pay-attachment-chip"><span>📎</span><span class="pay-file-name" title="${esc(f.name)}">${esc(f.name)}</span><small>${fmtAttachmentSize(f.size)}</small><button type="button" class="pay-file-cancel" onclick="cancelDashboardAttachment(${n})">×</button></div>`).join('')}
function cancelDashboardAttachment(n){const i=$('dashAttachmentInput');if(!i)return;const fs=Array.from(i.files||[]),dt=new DataTransfer();fs.forEach((f,k)=>{if(k!==n)dt.items.add(f)});i.files=dt.files;renderDashboardAttachmentPreview()}
function openDashboardScannedPictures(){const i=$('dashScannedPictures');if(i)i.click()}
async function openHPScanForDashboardAttachment(){try{const r=await fetch('http://127.0.0.1:3038/open-hp-scan',{method:'POST'});const j=await r.json().catch(()=>({}));if(!r.ok||!j.ok)throw new Error(j.error||'HP Scan lama la furin.');alert('✅ HP Scan waa la furay. Scan-ka ku kaydi Pictures → DHHMH Scans, kadib guji 📂 Add from Scanned Pictures.')}catch(e){alert('❌ HP Scan lama furin.\n\n'+(e.message||e)+'\n\nFur START_DHHMH_SCANNER.bat oo mar kale isku day.')}}
async function scanForDashboardAttachment(){const r=selectedDashboardPayment();if(!r)return alert('Fadlan dooro Paid Payment marka hore.');try{const h=await fetch('http://127.0.0.1:3038/health',{cache:'no-store'});if(!h.ok)throw new Error('Scanner Bridge health check failed.');const x=await fetch('http://127.0.0.1:3038/scan',{method:'POST'});const raw=await x.text();let j={};try{j=JSON.parse(raw)}catch{}if(!x.ok||!j.ok||!j.dataUrl)throw new Error((j.stage?'Tallaabada: '+j.stage+'\n':'')+(j.error||raw||'Scan ma soo celin file.'));const blob=await (await fetch(j.dataUrl)).blob();addFilesToDashboardAttachment([new File([blob],j.fileName||`HP-M28-M31-scan-${Date.now()}.jpg`,{type:j.type||'image/jpeg'})]);alert('✅ Scan-ka waxaa lagu daray attachment-ka Payment-ka aad dooratay.')}catch(e){alert('❌ Scan to Payment ma shaqayn.\n\n'+(e.message||e)+'\n\nHaddii HP Scan-ka caadiga ahi shaqaynayo, isticmaal 🖥️ Open HP Scan, kadib 📂 Add from Scanned Pictures.')}}
async function saveDashboardPaymentAttachments(){const r=selectedDashboardPayment();if(!r)return alert('Fadlan dooro Paid Payment.');const files=Array.from($('dashAttachmentInput')?.files||[]);if(!files.length)return alert('Fadlan dooro ama scan garee ugu yaraan hal attachment.');for(const f of files){if(!['image/png','image/jpeg','application/pdf'].includes(f.type))return alert('Fadlan geli PNG, JPG/JPEG ama PDF.');if(f.size>15*1024*1024)return alert(`File-ka ${f.name} waa inuu ka yaraadaa 15 MB.`)}try{for(const f of files)await savePaymentAttachment(r.id,r.customerId,f);closeDashboardAttachmentModal();await renderLatestPaymentAttachment();alert(`✅ ${files.length} attachment${files.length===1?'':'s'} ayaa lagu daray Latest Payment Bill Attachment.`)}catch(e){console.error(e);alert('Attachment-ka lama kaydin karin. Fadlan mar kale isku day.')}}
async function scanFromPrinter(){
 const btn=[...document.querySelectorAll('#paymentModal button')].find(b=>b.textContent.includes('Scan from HP M28'));
 if(btn){btn.disabled=true;btn.textContent='⏳ Connecting HP scanner...'}
 try{
  const base='http://127.0.0.1:3038';
  let health;
  try{health=await fetch(base+'/health',{method:'GET',cache:'no-store'});}catch(e){throw new Error('Scanner Bridge lama xiriirin (127.0.0.1:3038). Fur START_DHHMH_SCANNER.bat oo HA XIRIN window-ka.')}
  if(!health.ok)throw new Error('Scanner Bridge health check failed.');
  if(btn)btn.textContent='⏳ Detecting HP M28–M31...';
  const dr=await fetch(base+'/devices',{method:'GET',cache:'no-store'}); const dj=await dr.json().catch(()=>({}));
  if(!dr.ok||!dj.ok)throw new Error(dj.error||'Windows scanner devices lama akhrin.');
  const names=(Array.isArray(dj.devices)?dj.devices:[]).map(x=>x.name).filter(Boolean);
  const hp=names.filter(n=>/HP.*(M28|M29|M30|M31)|(M28|M29|M30|M31).*HP/i.test(n));
  if(!hp.length)throw new Error('HP M28–M31 lama helin. Windows wuxuu arkay: '+(names.join(' | ')||'wax scanner ah ma helin'));
  if(btn)btn.textContent='⏳ Scanning HP M28–M31...';
  const r=await fetch(base+'/scan',{method:'POST',cache:'no-store'}); const raw=await r.text(); let j={}; try{j=JSON.parse(raw)}catch{}
  if(!r.ok||!j.ok||!j.dataUrl)throw new Error((j.stage?'Tallaabada: '+j.stage+'\n':'')+(j.error||raw||'HP scanner-ku ma soo celin scan.'));
  const blob=await (await fetch(j.dataUrl)).blob();
  const file=new File([blob],j.fileName||(`HP-M28-M31-scan-${Date.now()}.jpg`),{type:j.type||'image/jpeg'});
  addFilesToPaymentAttachment([file]);
  alert('✅ HP M28–M31 scan-ka waxaa lagu daray DHHMH Payment Attachment.\n\nSawirka sidoo kale wuxuu ku jiraa Pictures → DHHMH Scans.');
 }catch(e){console.error(e);alert('❌ Scan from HP M28–M31 ma shaqayn.\n\n'+(e.message||e)+'\n\nHubi:\n1. START_DHHMH_SCANNER.bat inuu RUNNING yahay.\n2. Window-ka bridge-ka HA XIRIN.\n3. HP M28–M31 driver-ka iyo HP Scan ay shaqaynayaan.')}
 finally{if(btn){btn.disabled=false;btn.textContent='🖨️ Scan from HP M28–M31'}}
}
function resetPayBillForm(){['payGrNo','payGrDate','payReferenceGrNo','payReferenceDate','payForYear','payCollector'].forEach(id=>{const el=$(id);if(el)el.value=''});if($('payMethod'))$('payMethod').value='Cash';if($('payAttachment'))$('payAttachment').value='';if($('payAttachmentPreview'))$('payAttachmentPreview').innerHTML='';if($('payBillNo'))$('payBillNo').value='';if($('payBillAmount'))$('payBillAmount').value='';if($('paymentBillInfo'))$('paymentBillInfo').textContent=''}
function renderPayAttachmentPreview(){const input=$('payAttachment'),wrap=$('payAttachmentPreview');if(!input||!wrap)return;const files=Array.from(input.files||[]);wrap.innerHTML=files.map((f,i)=>`<div class="pay-attachment-chip"><span>📎</span><span class="pay-file-name" title="${esc(f.name)}">${esc(f.name)}</span><small>${fmtAttachmentSize(f.size)}</small><button type="button" class="pay-file-cancel" title="Cancel file" aria-label="Cancel ${esc(f.name)}" onclick="cancelPayAttachment(${i})">×</button></div>`).join('')}
function cancelPayAttachment(index){const input=$('payAttachment');if(!input)return;const files=Array.from(input.files||[]);if(index<0||index>=files.length)return;const dt=new DataTransfer();files.forEach((f,i)=>{if(i!==index)dt.items.add(f)});input.files=dt.files;renderPayAttachmentPreview()}
function payBill(id){const b=bills.find(x=>x.id===id);if(!b)return alert('Bill lama helin.');if(String(b.status||'').toLowerCase()==='paid')return alert('Bill-kan hore ayaa loo paid gareeyey.');window.pendingPayBillId=id;resetPayBillForm();$('payBillNo').value=b.billNo||'';$('payBillAmount').value=money(b.amount,b.currency||'SLSH');$('paymentBillInfo').textContent=`${b.customerName||b.customerId||''} • ${b.currency||'SLSH'}`;$('paymentModal').classList.add('open')}
function closePayBillModal(){resetPayBillForm();$('paymentModal').classList.remove('open');window.pendingPayBillId=null}
function paymentInfoHtml(rec){
 const b=bills.find(x=>String(x.id)===String(rec.billId))||{};
 const c=customers.find(x=>String(x.customerId||'')===String(rec.customerId||''))||{};
 const pm=billPropertyMetrics(b);
 const netPayable=Number(b.amount||rec.amount||0), discountPct=Number(b.discountPercent||0); const first=Array.isArray(b.charges)&&b.charges.length?b.charges[0]:null; const years=Number(b.years||((Number(b.tariffToYear||0)&&Number(b.tariffFromYear||0))?(Number(b.tariffToYear)-Number(b.tariffFromYear)+1):1))||1; const primaryBefore=first&&Number(first.annualAmount||0)>0?Number(first.annualAmount)*years:netPayable; const discountAmount=discountPct?Math.max(0,primaryBefore*discountPct/100):0; const total=netPayable+discountAmount, received=Number(rec.amount||0), balance=Math.max(0,netPayable-received);
 const discountType=b.discountType&&b.discountType!=='None'?b.discountType:(discountPct?'Head 1 Discount':'—');
 const charges=Array.isArray(b.charges)?b.charges:[];
 const chargeRows=charges.length?charges.map((x,i)=>`<tr><td>${i+1}</td><td>${esc(x.code||'')}</td><td>${esc(x.head||x.chargeName||'')}</td><td>${esc(tariffRateText(x))}</td><td>${money(Number(x.amount||x.fixed||x.rate||0),x.currency||b.currency||'SLSH')}</td></tr>`).join(''):`<tr><td>1</td><td>${esc(b.category||'PROPERTY')}</td><td>${esc(b.type||b.category||'Property Tax')}</td><td>—</td><td>${money(total,b.currency||rec.currency||'SLSH')}</td></tr>`;
 const size=pm.area?`${pm.area.toLocaleString(undefined,{maximumFractionDigits:2})} m²`:(pm.height&&pm.width?`${pm.height} m × ${pm.width} m`:'—');
 return `<div class="payment-info-print-wrap"><div class="payment-info-paper">
  <div class="pi-head"><img src="logo.png" alt="DHHMH Logo"><div class="pi-title"><div class="org">DAWLADA HOOSE EE HARGEYSA</div><div class="sys">DHHMH REVENUE MANAGEMENT SYSTEM</div><div class="name">PAYMENT INFORMATION</div></div><div class="pi-ref"><span>Receipt No</span><strong>${esc(rec.grNo||'—')}</strong><span>${esc(rec.date||'')}</span></div></div>
  <div class="pi-section"><h3>BILL & CUSTOMER INFORMATION</h3><div class="pi-grid"><div class="pi-cell"><b>Invoice / Bill No</b><span>${esc(b.billNo||rec.billNo||'—')}</span></div><div class="pi-cell"><b>Customer ID</b><span>${esc(rec.customerId||'—')}</span></div><div class="pi-cell"><b>Customer Name</b><span>${esc(rec.customerName||c.name||'—')}</span></div><div class="pi-cell"><b>Phone / Number</b><span>${esc(rec.phone||c.phone||c.mobile||b.phone||'—')}</span></div><div class="pi-cell"><b>District / Zone</b><span>${esc(rec.district||b.district||c.district||'Hargeisa')} / ${esc(rec.zone||b.zone||c.zone||'—')}</span></div><div class="pi-cell"><b>Xaafadda</b><span>${esc(rec.xaafadda||b.subZone||c.xaafadda||'—')}</span></div><div class="pi-cell"><b>Property Type</b><span>${esc(displayPropertyType(b.propertyType||b.type||b.category||rec.revenueType||'—'))}</span></div><div class="pi-cell"><b>Property Size</b><span>${esc(size)}</span></div><div class="pi-cell"><b>Years Covered</b><span>${b.tariffFromYear&&b.tariffToYear?`${esc(b.tariffFromYear)} – ${esc(b.tariffToYear)}`:esc(b.tariffYear||'—')}</span></div><div class="pi-cell"><b>Payment Date</b><span>${esc(rec.date||'—')}</span></div></div></div>
  <div class="pi-summary"><div class="pi-kpi pi-blue"><b>Bill Amount</b><strong>${money(total,b.currency||rec.currency||'SLSH')}</strong></div><div class="pi-kpi pi-green"><b>Discount</b><strong>${discountPct?money(discountAmount,b.currency||rec.currency||'SLSH'):'0.00'}</strong></div><div class="pi-kpi pi-orange"><b>Received</b><strong>${money(received,rec.currency||b.currency||'SLSH')}</strong></div><div class="pi-kpi pi-red"><b>Balance</b><strong>${money(balance,rec.currency||b.currency||'SLSH')}</strong></div></div>
  <div class="pi-section"><h3>PAYMENT DETAILS</h3><div class="pi-grid"><div class="pi-cell"><b>GR No</b><span>${esc(rec.grNo||'—')}</span></div><div class="pi-cell"><b>GR Date</b><span>${esc(rec.date||rec.grDate||'—')}</span></div><div class="pi-cell"><b>Payment Method</b><span>${esc(rec.method||'—')}</span></div><div class="pi-cell"><b>Collector</b><span>${esc(rec.collector||'—')}</span></div><div class="pi-cell"><b>Currency</b><span>${esc(rec.currency||b.currency||'SLSH')}</span></div><div class="pi-cell"><b>Status</b><span>PAID</span></div><div class="pi-cell"><b>Net Payable</b><span>${money(netPayable,b.currency||rec.currency||'SLSH')}</span></div></div></div>
  <div class="pi-section"><h3>TAX / CHARGE SUMMARY</h3><table class="pi-table"><thead><tr><th>No.</th><th>Code</th><th>Head / Sub Head</th><th>Rate</th><th>Amount</th></tr></thead><tbody>${chargeRows}</tbody></table>${discountPct?`<div class="pi-note"><b>Discount:</b> ${esc(discountType)} — ${discountPct}% &nbsp; | &nbsp; <b>Discount Amount:</b> ${money(discountAmount,b.currency||rec.currency||'SLSH')}</div>`:''}</div>
  <div class="pi-section"><h3>PAYMENT NOTE</h3><div style="padding:10px;font-size:11px">${esc(rec.notes||`Payment received for Bill ${b.billNo||''}. Please keep this payment information for your records.`)}</div></div>
  <div class="pi-note" style="border-left-color:#1769aa;background:#f4f8fc"><b>Received By:</b> ${esc(rec.collector||'—')} &nbsp; | &nbsp; <b>GR No:</b> ${esc(rec.grNo||'—')} &nbsp; | &nbsp; <b>GR Date:</b> ${esc(rec.date||'—')}</div>
  <div class="pi-footer">Mahadsanid! Lacagta cashuurtu waxay taageertaa adeegyada iyo horumarka bulshada.</div>
 </div></div>`;
}
function openPaymentInfoPage(rec){if(!rec)return alert('Payment record lama helin.');const w=window.open('','_blank');if(!w){alert('Payment waa la kaydiyey, laakiin popup-ka Payment Information waa la xannibay. Fadlan allow pop-ups.');return;}const title=`Payment Information ${rec.grNo||''}`;w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>DHHMH ${esc(title)}</title><style>body{margin:0;font-family:Arial,sans-serif;background:#eef4f8;color:#122033}.print-toolbar{position:sticky;top:0;z-index:20;text-align:center;padding:10px;background:#073a68;color:#fff}.print-toolbar button{border:0;border-radius:7px;padding:9px 15px;margin:0 4px;background:#087443;color:#fff;cursor:pointer}.print-toolbar .secondary{background:#64748b}.payment-info-print-wrap{padding:16px}.payment-action-btn{padding:6px 9px!important;font-size:11px!important;margin:1px;border-radius:6px!important}.payment-action-update{background:#1468ad!important;color:#fff!important}.payment-action-delete{background:#c62828!important;color:#fff!important}.payment-info-paper{width:100%;max-width:900px;margin:0 auto;background:#fff;color:#122033;border:2px solid #0b477a;border-radius:14px;overflow:hidden;position:relative;box-shadow:0 8px 30px #0b477a18}.payment-info-paper:before{content:"";position:absolute;inset:0;background:url("logo.png") center/115mm no-repeat;opacity:.045;pointer-events:none}.payment-info-paper>*{position:relative;z-index:1}.pi-head{display:grid;grid-template-columns:90px 1fr 170px;align-items:center;padding:12px 16px;background:linear-gradient(90deg,#073a68,#087443);color:#fff}.pi-head img{width:68px;height:68px;object-fit:contain;background:#fff;border-radius:50%;padding:3px}.pi-title{text-align:center}.pi-title .org{font-size:20px;font-weight:900}.pi-title .sys{font-size:14px;font-weight:800;margin-top:4px}.pi-title .name{display:inline-block;margin-top:8px;padding:6px 16px;border-radius:20px;background:#fff;color:#073a68;font-size:15px;font-weight:900}.pi-ref{text-align:right;font-size:11px}.pi-ref strong{display:block;font-size:15px;margin-top:4px}.pi-section{margin:12px 14px;border:1px solid #d5e1eb;border-radius:10px;overflow:hidden;background:#fff}.pi-section h3{margin:0;padding:7px 11px;background:#0b477a;color:#fff;font-size:12px}.pi-grid{display:grid;grid-template-columns:1fr 1fr}.pi-cell{padding:8px 10px;border-bottom:1px solid #e4ebf1;border-right:1px solid #e4ebf1}.pi-cell:nth-child(2n){border-right:0}.pi-cell b{display:block;font-size:10px;color:#64748b;margin-bottom:3px;text-transform:uppercase}.pi-cell span{font-size:12px;font-weight:700}.pi-summary{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:12px 14px}.pi-kpi{padding:10px;border-radius:9px;color:#fff;text-align:center}.pi-kpi b{display:block;font-size:10px}.pi-kpi strong{display:block;font-size:15px;margin-top:5px}.pi-blue{background:#1769aa}.pi-green{background:#087443}.pi-orange{background:#e88700}.pi-red{background:#c62828}.pi-table{width:calc(100% - 28px);margin:0 14px 12px;border-collapse:collapse}.pi-table th,.pi-table td{border:1px solid #d7e0e8;padding:6px 7px;font-size:10px}.pi-table th{background:#eaf2f8;color:#073a68;font-weight:900}.pi-table td:last-child{text-align:right;font-weight:800}.pi-note{margin:0 14px 12px;padding:9px 11px;border-left:4px solid #087443;background:#f0fbf5;font-size:11px}.pi-footer{text-align:center;padding:9px 12px;border-top:1px solid #d5e1eb;color:#166534;font-weight:800;font-size:11px}@media print{@page{size:A4 portrait;margin:7mm}.print-toolbar{display:none}.payment-info-print-wrap{padding:0}.payment-info-paper{max-width:none;border:2px solid #0b477a;border-radius:0;box-shadow:none}.pi-head{padding:7px 9px}.pi-head img{width:50px;height:50px}.pi-title .org{font-size:15px}.pi-title .sys{font-size:10px}.pi-title .name{font-size:11px;margin-top:4px;padding:4px 10px}.pi-ref{font-size:8px}.pi-ref strong{font-size:11px}.pi-section{margin:7px 8px}.pi-section h3{font-size:9px;padding:5px 8px}.pi-cell{padding:5px 7px}.pi-cell b{font-size:7px}.pi-cell span{font-size:8px}.pi-summary{gap:5px;margin:7px 8px}.pi-kpi{padding:6px}.pi-kpi b{font-size:7px}.pi-kpi strong{font-size:10px}.pi-table{width:calc(100% - 16px);margin:0 8px 7px}.pi-table th,.pi-table td{padding:4px;font-size:7px}.pi-note{margin:0 8px 7px;padding:5px 7px;font-size:8px}.pi-footer{font-size:8px;padding:5px}}</style></head><body><div class="print-toolbar"><button onclick="window.print()">🖨 Print Payment Information</button><button class="secondary" onclick="window.close()">Close</button></div>${paymentInfoHtml(rec)}</body></html>`);w.document.close();}
function setBillReferenceGRNO(id){const b=bills.find(x=>x.id===id);if(!b)return;const current=String(b.referenceGrNo||b.lastGrNo||'');const v=prompt('Geli Reference GRNO:',current);if(v===null)return;b.referenceGrNo=String(v).trim();localStorage.setItem(BK,JSON.stringify(bills));openBill(b);}
function setBillReferenceDate(id){const b=bills.find(x=>x.id===id);if(!b)return;const current=String(b.referenceDate||b.lastGrDate||'');const v=prompt('Geli Reference Date (YYYY-MM-DD):',current);if(v===null)return;const d=String(v).trim();if(d&&!/^\d{4}-\d{2}-\d{2}$/.test(d))return alert('Fadlan geli taariikhda qaabka YYYY-MM-DD.');b.referenceDate=d;localStorage.setItem(BK,JSON.stringify(bills));openBill(b);}
async function confirmPayBill(){
  const id=window.pendingPayBillId,b=bills.find(x=>x.id===id);
  if(!b)return closePayBillModal();
  const gr=String($('payGrNo').value||'').trim(),date=$('payGrDate').value,
    refGr=String($('payReferenceGrNo').value||'').trim(),refDate=$('payReferenceDate').value,
    forYear=String($('payForYear').value||'').trim();
  if(!gr||!date)return alert('GR No iyo GR Date waa khasab.');
  if(!/^\d{4}$/.test(forYear))return alert('For Year geli sanad sax ah, tusaale 2026.');
  if((refGr&&!refDate)||(!refGr&&refDate))return alert('Reference GRNO iyo Reference Date labadaba geli ama labadaba ka tag.');
  if(String(b.status||'').toLowerCase()==='paid')return alert('Bill-kan hore ayaa loo paid gareeyey.');
  const files=Array.from($('payAttachment')?.files||[]);
  const allowed=["image/png","image/jpeg","application/pdf"];
  for(const file of files){
    if(!allowed.includes(file.type))return alert('Fadlan geli PNG, JPG/JPEG ama PDF oo keliya.');
    if(file.size>15*1024*1024)return alert(`File-ka ${file.name} waa inuu ka yaraadaa 15 MB.`);
  }
  const c=customers.find(x=>String(x.customerId)===String(b.customerId));
  const rec={id:crypto.randomUUID(),customerId:b.customerId,customerName:b.customerName||c?.name||'',grNo:gr,gisNo:b.gis||c?.gis||'',xaafadda:b.subZone||c?.xaafadda||'',district:b.district||c?.district||'Hargeisa',zone:b.zone||c?.zone||'Maxamuud Haybe',revenueType:b.type||b.category||'Property Tax',head:b.type||b.category||'Property Tax',billId:b.id,billNo:b.billNo,licenseGrade:b.grade||'',phone:b.phone||c?.phone||c?.mobile||'',amount:Number(b.amount||0),currency:b.currency||'SLSH',status:'Paid',method:$('payMethod').value,date,collector:$('payCollector').value.trim(),referenceGrNo:refGr,referenceDate:refDate,forYear:Number(forYear),notes:'Payment for Bill '+(b.billNo||''),tariffSnapshot:{code:b.charges?.map(x=>x.code).join(', ')||'',head:b.charges?.map(x=>x.head).join(' + ')||b.type||b.category||'Property Tax',charges:Array.isArray(b.charges)?b.charges.map(x=>({...x})):[]},createdAt:new Date().toISOString()};
  try{
    for(const file of files)await savePaymentAttachment(rec.id,b.customerId,file);
    records.unshift(rec);b.status='Paid';b.paidAt=new Date().toISOString();b.lastGrNo=gr;b.lastGrDate=date;b.referenceGrNo=refGr;b.referenceDate=refDate;b.forYear=Number(forYear);
    localStorage.setItem(BK,JSON.stringify(bills));persist();closePayBillModal();renderTaxpayerWorkspace();openPaymentInfoPage(rec);
  }catch(e){console.error(e);alert('Payment-ka lama diiwaangelin karin. Fadlan mar kale isku day.');}
}
function deleteBill(id){const b=bills.find(x=>x.id===id);if(!b)return alert('Bill lama helin.');if(!confirm(`Ma hubtaa inaad tirtirayso Bill ${b.billNo||''}? Payment record-yada la xiriira sidoo kale waa la tirtiri doonaa.`))return;bills=bills.filter(x=>x.id!==id);records=records.filter(r=>r.billId!==id);localStorage.setItem(BK,JSON.stringify(bills));persist();renderTaxpayerWorkspace();alert('Bill-ka waa la tirtiray.')}
function tpBillTable(data){if(!data.length)return '<div class="tp-empty">No bills found for this taxpayer.</div>';return `<div class="tp-table-wrap"><table class="tp-table"><thead><tr><th>District</th><th>Date</th><th>For Year</th><th>Reference GRNO</th><th>Reference Date</th><th>Currency</th><th>Total</th><th>Status</th><th>Actions</th><th>Last GR No</th><th>Last GR Date</th></tr></thead><tbody>${data.map(b=>{const gr=billLastGR(b),st=b.status||'Pending';return `<tr><td>${esc(b.district||'Hargeisa')}</td><td>${esc(b.issueDate||'')}</td><td>${esc(b.forYear||'—')}</td><td>${esc(b.referenceGrNo||'—')}</td><td>${esc(b.referenceDate||'—')}</td><td>${esc(b.currency||'SLSH')}</td><td class="tp-amount">${Number(b.amount||0).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</td><td><span class="status-pill ${String(st).toLowerCase()==='paid'?'status-paid':'status-unpaid'}">${esc(st)}</span></td><td class="tp-actions"><button class="secondary" onclick="openBillById('${esc(b.id||'')}')">View</button><button onclick="payBill('${esc(b.id||'')}')">Pay</button><button class="danger" onclick="deleteBill('${esc(b.id||'')}')">Delete</button></td><td>${esc(gr?.grNo||b.lastGrNo||'—')}</td><td>${esc(gr?.date||b.lastGrDate||'—')}</td></tr>`}).join('')}</tbody></table></div>`}
function tpPaymentTable(data){if(!data.length)return '<div class="tp-empty">No payments found for this taxpayer.</div>';return `<div class="tp-table-wrap"><table class="tp-table"><thead><tr><th>Head</th><th>GR No</th><th>Date</th><th>Currency</th><th>Amount</th><th>Status</th><th>Collector</th><th>Action</th></tr></thead><tbody>${data.map(r=>`<tr><td>${esc(displayPropertyType(r.revenueType||r.head||''))}</td><td>${esc(r.grNo||'—')}</td><td>${esc(r.date||r.grDate||'')}</td><td>${esc(r.currency||'SLSH')}</td><td class="tp-amount">${money(r.amount,r.currency||'SLSH')}</td><td><span class="status-pill status-paid">Paid</span></td><td>${esc(r.collector||'—')}</td><td><button type="button" class="payment-view-btn payment-action-btn" onclick="viewPayment('${esc(r.id||'')}')">View</button><button type="button" class="payment-action-btn payment-action-update" onclick="updatePayment('${esc(r.id||'')}')">Update</button><button type="button" class="payment-action-btn payment-action-delete" onclick="deletePayment('${esc(r.id||'')}')">Delete</button></td></tr>`).join('')}</tbody></table></div>`}
function updatePayment(id){const r=records.find(x=>String(x.id)===String(id));if(!r)return alert('Payment lama helin.');const newGr=prompt('Geli GR No cusub:',r.grNo||'');if(newGr===null)return;const newDate=prompt('Geli GR Date cusub (YYYY-MM-DD):',r.date||r.grDate||'');if(newDate===null)return;const newRefGr=prompt('Geli Reference GRNO cusub:',r.referenceGrNo||'');if(newRefGr===null)return;const newRefDate=prompt('Geli Reference Date cusub (YYYY-MM-DD):',r.referenceDate||'');if(newRefDate===null)return;const newYear=prompt('Geli For Year cusub:',r.forYear||'');if(newYear===null)return;if(!String(newGr).trim()||!String(newDate).trim())return alert('GR No iyo GR Date waa khasab.');if(newRefDate.trim()&&!/^\d{4}-\d{2}-\d{2}$/.test(newRefDate.trim()))return alert('Reference Date geli qaabka YYYY-MM-DD.');if(newYear.trim()&&!/^\d{4}$/.test(newYear.trim()))return alert('For Year geli sanad sax ah, tusaale 2026.');r.grNo=String(newGr).trim();r.date=String(newDate).trim();r.grDate=r.date;r.referenceGrNo=String(newRefGr).trim();r.referenceDate=String(newRefDate).trim();r.forYear=newYear.trim()?Number(newYear.trim()):'';r.status='Paid';const b=r.billId?bills.find(x=>String(x.id)===String(r.billId)):null;if(b){b.status='Paid';b.lastGrNo=r.grNo;b.lastGrDate=r.date;b.paidAt=b.paidAt||new Date().toISOString();b.referenceGrNo=r.referenceGrNo;b.referenceDate=r.referenceDate;b.forYear=r.forYear;localStorage.setItem(BK,JSON.stringify(bills));}persist();renderTaxpayerWorkspace();alert('Payment-ka iyo For Year / Reference GRNO / Reference Date waa la update gareeyey.');}
function deletePayment(id){const r=records.find(x=>String(x.id)===String(id));if(!r)return alert('Payment lama helin.');if(!confirm(`Ma hubtaa inaad masaxayso Payment-ka GR No ${r.grNo||''}?`))return;records=records.filter(x=>String(x.id)!==String(id));const b=r.billId?bills.find(x=>String(x.id)===String(r.billId)):null;if(b){b.status='Pending';delete b.lastGrNo;delete b.lastGrDate;delete b.paidAt;localStorage.setItem(BK,JSON.stringify(bills));}persist();renderTaxpayerWorkspace();alert('Payment-ka waa la masaxay, Bill-kana waxaa loo celiyey Unpaid/Pending.');}

function viewPayment(id){const r=records.find(x=>String(x.id)===String(id));if(!r)return alert('Payment lama helin.');openReceipt(id)}
function openIskuModal(){
 const y=new Date().getFullYear();
 if($('iskuEnterMoney')) $('iskuEnterMoney').value='';
 if($('iskuFromYear')) $('iskuFromYear').value=y;
 if($('iskuToYear')) $('iskuToYear').value=y;
 if($('iskuAutoRows')) $('iskuAutoRows').innerHTML='';
 if($('iskuPrimaryInfo')) $('iskuPrimaryInfo').textContent='Geli lacagta Head-ka ugu badan, From Year iyo To Year. System-ku wuxuu ka akhrinayaa nooca Customer-ka iyo sanadka, kadibna wuxuu xisaabinayaa Heads-ka kale.';
 if($('iskuPreview')) $('iskuPreview').textContent='Geli Enter Money, From Year iyo To Year si aad u aragto xisaabta.';
 if($('iskuModal')) $('iskuModal').classList.add('open');
}
function closeIskuModal(){$('iskuModal').classList.remove('open')}
function addIskuYears(){updateIskuPreview()}
function getIskuContext(){
 const entered=Number($('iskuEnterMoney')?.value||0);
 const year=Number($('iskuFromYear')?.value||new Date().getFullYear());
 const toYear=Number($('iskuToYear')?.value||year); if(toYear<year){return null;}
 if(!(entered>0))return null;
 const c=tpCustomer()||{};
 const p=properties.find(x=>String(x.customerId||'').toUpperCase()===String(c.customerId||'').toUpperCase()||String(x.propertyId||'').toUpperCase()===String(c.propertyId||'').toUpperCase()||String(x.propertyId||'').toUpperCase()===String(c.customerId||''))||{};
 const propType=normalizePropertyCategory(p.propertyType||c.propertyType||c.property||'');
 const grade=c.licenseGrade||c.grade||p.licenseGrade||p.grade||'';
 const licenseType=c.licenseType||p.licenseType||'Business License';
 let type=String(c.type||c.property||p.type||'').toLowerCase().includes('license')?'License':'Property';
 if(!['Property','License'].includes(type)) type=String(c.licenseGrade||c.grade||p.licenseGrade||p.grade||'')? 'License':'Property';
 const source=(p&&Object.keys(p).length)?p:c;
 const area=Number(source.area||0)>0?Number(source.area):((Number(source.height||0)>0&&Number(source.width||0)>0)?Number(source.height)*Number(source.width):Number(source.size||0)||0);
 let eligible=tariffs.filter(t=>t.active!==false&&Number(t.year)===year&&t.type===type&&
   (type==='License' ? ((!t.grade||t.grade==='ALL'||t.grade===grade)&&(!t.licenseType||t.licenseType==='ALL'||t.licenseType===licenseType)) :
    (!t.propertyType||t.propertyType==='ALL'||t.propertyType===propType))
 ).sort((a,b)=>Number(a.sequence||999)-Number(b.sequence||999));
 if(!eligible.length)return {entered,year,c,p,propType,grade,licenseType,type,area,error:`Tacriifada ${type} ah lagama helin sanadka ${year}.`};
 // The primary/base charge is the highest base charge for this taxpayer/year. Percentage heads are calculated from the entered money.
 const baseCandidates=eligible.filter(t=>!['percentage','percent_fixed'].includes(t.method));
 let primary=baseCandidates.slice().sort((a,b)=>{
   const calc=t=>t.method==='area_rate'?area*Number(t.rate||0):t.method==='area_rate_percent'?area*Number(t.rate||0):t.method==='area_percent_fixed'?area*Number(t.rate||0)+Number(t.fixed||0):Number(t.fixed||t.rate||0);
   return calc(b)-calc(a);
 })[0]||eligible[0];
 return {entered,year,c,p,propType,grade,licenseType,type,area,eligible,primary};
}
function loadIskuPrimary(){
 const ctx=getIskuContext();
 if(!ctx){$('iskuAutoRows').innerHTML='';$('iskuPrimaryInfo').textContent='Geli lacagta Head-ka ugu badan iyo sanadka.';$('iskuPreview').textContent='Geli lacagta iyo Year si aad u aragto xisaabta.';return;}
 if(ctx.error){$('iskuAutoRows').innerHTML='';$('iskuPrimaryInfo').innerHTML='⚠️ '+esc(ctx.error);$('iskuPreview').textContent='';return;}
 const fromYear=Number($('iskuFromYear')?.value||ctx.year);
 const toYear=Number($('iskuToYear')?.value||fromYear);
 const years=Math.max(1,toYear-fromYear+1);
 $('iskuPrimaryInfo').innerHTML=`<b>Enter Money: ${money(ctx.entered,ctx.primary.currency||'SLSH')}</b> — ${esc(ctx.type)}${ctx.type==='License'?' • '+esc(ctx.grade||'—'):' • '+esc(ctx.propType||'—')} • Years ${fromYear}–${toYear} • Area ${ctx.area?ctx.area.toLocaleString()+' m²':'—'}<br><span class="muted">Head-ka ugu badan: ${esc(ctx.primary.head)} (${esc(ctx.primary.code)})</span>`;
 let running=ctx.entered;
 const rows=ctx.eligible.map((t,i)=>{
   let amount=0; const isPrimary=String(t.id)===String(ctx.primary.id);
   if(isPrimary) amount=ctx.entered;
   else if(t.method==='fixed') amount=Number(t.fixed||0);
   else if(t.method==='area_rate') amount=ctx.area*Number(t.rate||0);
   else if(t.method==='area_rate_percent'){const base=ctx.area*Number(t.rate||0);amount=base+(base*Number(t.percent||0)/100)}
   else if(t.method==='percentage') amount=running*(Number(t.percent||0)/100);
   else if(t.method==='percent_fixed') amount=running*(Number(t.percent||0)/100)+Number(t.fixed||0);
   else if(t.method==='area_percent_fixed'){const base=ctx.area*Number(t.rate||0);amount=base+(base*Number(t.percent||0)/100)+Number(t.fixed||0)}
   else amount=Number(t.fixed||0);
   amount=ctx.type==='License'?Math.round(amount):Math.round((amount+Number.EPSILON)*100)/100;
   running=Math.round((running+amount+Number.EPSILON)*100)/100;
   return {id:t.id,code:t.code,head:t.head,amount,rate:Number(t.rate||0),percent:Number(t.percent||0),method:t.method,currency:t.currency||ctx.primary.currency||'SLSH',propertyType:t.propertyType||'ALL',sequence:Number(t.sequence||999),runningTotal:running,isPrimary};
 });
 const annualTotal=Math.round((running+Number.EPSILON)*100)/100;
 const multiTotal=Math.round((annualTotal*years+Number.EPSILON)*100)/100;
 $('iskuAutoRows').innerHTML=`<div class="isku-summary-title"><b>Head Summary</b><span>${years} year(s) — ${fromYear}–${toYear}</span></div><div class="isku-table-wrap"><table class="isku-summary-table"><thead><tr><th>#</th><th>Code</th><th>Head</th><th>Annual Amount</th><th>Years</th><th>Total</th></tr></thead><tbody>${rows.map((r,i)=>{const total=Math.round((Number(r.amount||0)*years+Number.EPSILON)*100)/100;return `<tr><td>${i+1}</td><td>${esc(r.code)}</td><td><b>${esc(r.head)}</b>${r.isPrimary?'<small class="isku-entered">Entered Head</small>':''}</td><td>${money(r.amount,r.currency||ctx.primary.currency||'SLSH')}</td><td>${years}</td><td><b>${money(total,r.currency||ctx.primary.currency||'SLSH')}</b></td></tr>`}).join('')}</tbody><tfoot><tr><th colspan="5" style="text-align:right">Grand Total</th><th>${money(multiTotal,rows[0]?.currency||ctx.primary.currency||'SLSH')}</th></tr></tfoot></table></div>`;
 updateIskuPreview();
}
function getIskuAutoRows(){
 const ctx=getIskuContext();if(!ctx||ctx.error)return null;
 let running=ctx.entered;const rows=[];
 ctx.eligible.forEach(t=>{
   let amount=0;const isPrimary=String(t.id)===String(ctx.primary.id);
   if(isPrimary)amount=ctx.entered;
   else if(t.method==='fixed')amount=Number(t.fixed||0);
   else if(t.method==='area_rate')amount=ctx.area*Number(t.rate||0);
   else if(t.method==='area_rate_percent'){const b=ctx.area*Number(t.rate||0);amount=b+(b*Number(t.percent||0)/100)}
   else if(t.method==='percentage')amount=running*(Number(t.percent||0)/100);
   else if(t.method==='percent_fixed')amount=running*(Number(t.percent||0)/100)+Number(t.fixed||0);
   else if(t.method==='area_percent_fixed'){const b=ctx.area*Number(t.rate||0);amount=b+(b*Number(t.percent||0)/100)+Number(t.fixed||0)}
   else amount=Number(t.fixed||0);
   amount=ctx.type==='License'?Math.round(amount):Math.round((amount+Number.EPSILON)*100)/100;
   running=Math.round((running+amount+Number.EPSILON)*100)/100;
   rows.push({code:t.code,head:t.head,method:t.method,amount,rate:Number(t.rate||0),percent:Number(t.percent||0),fixed:Number(t.fixed||0),currency:t.currency||ctx.primary.currency||'SLSH',sequence:Number(t.sequence||999),propertyType:t.propertyType||'ALL',grade:t.grade||'ALL',isPrimary});
 });
 return {ctx,rows,total:running};
}
function calculateIskuJar(){
 const x=getIskuAutoRows();if(!x)return alert('Geli Enter Money sax ah iyo sanad sax ah.');
 const from=Number($('iskuFromYear')?.value||x.ctx.year);const to=Number($('iskuToYear')?.value||from);const years=Math.max(1,to-from+1);const total=Math.round((x.total*years+Number.EPSILON)*100)/100;
 $('iskuPreview').innerHTML=`Enter Money: <b>${money(x.ctx.entered,x.ctx.primary.currency||'SLSH')}</b><br>Head-ka ugu badan: <b>${esc(x.ctx.primary.code)} — ${esc(x.ctx.primary.head)}</b><br>${x.rows.length} Head(s) — Annual Total: <b>${money(x.total,x.rows[0]?.currency||x.ctx.primary.currency||'SLSH')}</b> × ${years} year(s) — Grand Total: <b>${money(total,x.rows[0]?.currency||x.ctx.primary.currency||'SLSH')}</b>`;
 return {rows:x.rows,years,total,ctx:x.ctx};
}
function updateIskuPreview(){const entered=Number($('iskuEnterMoney')?.value||0);if(!(entered>0)){ $('iskuPreview').textContent='Geli Enter Money iyo Year si aad u aragto xisaabta.';return}const x=getIskuAutoRows();if(!x){$('iskuPreview').textContent='Nooca Customer-ka ama Tacriifada sanadkaas lama helin.';return}const from=Number($('iskuFromYear')?.value||x.ctx.year);const to=Number($('iskuToYear')?.value||from);const years=Math.max(1,to-from+1);const total=Math.round((x.total*years+Number.EPSILON)*100)/100;$('iskuPreview').innerHTML=`${x.rows.length} Head(s) automatic ah — Annual Total <b>${money(x.total,x.rows[0]?.currency||x.ctx.primary.currency||'SLSH')}</b> × ${years} year(s) — <b>${money(total,x.rows[0]?.currency||x.ctx.primary.currency||'SLSH')}</b>`}
function generateIskuBill(){const x=calculateIskuJar();if(!x)return;const c=tpCustomer();if(!c)return;const from=Number($('iskuFromYear')?.value||x.ctx.year),to=Number($('iskuToYear')?.value||from);const dup=billOverlapsYear(c.customerId,Math.min(from,to),Math.max(from,to),x.ctx.type,x.ctx.grade||'');if(dup){const r=billYearRange(dup);return alert(`❌ Duplicate Tax Bill: Customer-kan hore ayaa cashuur loogu generate-gareeyey ${r.from===r.to?r.from:r.from+'–'+r.to}. Lama sameyn karo bill kale oo isla sanadkaa ku jira.`);}const now=new Date().toISOString().slice(0,10);const b={id:crypto.randomUUID(),billNo:String(new Date().getFullYear())+String(Date.now()).slice(-8),customerId:c.customerId,customerName:c.name||'',gis:c.gis||c.supplyNo||'',district:c.district||'Hargeisa',zone:c.zone||'Maxamuud Haybe',subZone:c.xaafadda||'',type:'Isku Jar',category:x.ctx.type,grade:x.ctx.grade||'',licenseType:x.ctx.licenseType||'',month:String(x.ctx.year)+'-01',issueDate:now,dueDate:'',amount:x.total*x.years,currency:x.rows[0]?.currency||x.ctx.primary.currency||'SLSH',charges:x.rows.map((r,i)=>({...r,annualAmount:Number(r.amount||0),amount:Number(r.amount||0)*x.years,fixed:Number(r.fixed||0),years:x.years,sequence:i+1})),tariffYear:Math.min(from,to),tariffFromYear:Math.min(from,to),tariffToYear:Math.max(from,to),years:Math.max(from,to)-Math.min(from,to)+1,notes:`Discount/Isku Jar: Enter Money ${x.ctx.entered} — ${x.ctx.primary.code} — ${x.ctx.primary.head} — Years ${Math.min(from,to)}–${Math.max(from,to)}`,status:'Unpaid',createdAt:new Date().toISOString()};bills.unshift(b);localStorage.setItem(BK,JSON.stringify(bills));closeIskuModal();currentTpTab='bills';renderTaxpayerWorkspace();openBill(b)}
function tpManageTax(){currentTpTab='info';renderTaxpayerWorkspace();setTimeout(()=>{const el=$('tpTabInfo');if(el)el.click()},0)}
function isDirectFineTariff(t){const h=String(t?.head||'').toLowerCase();return h.includes('gannaaxa sharco')||h.includes('ganaaxa sharco')||h.includes('gannaax sharco')||h.includes('ganaax sharco')||h.includes('gannaaxa fayo')||h.includes('ganaaxa fayo')||h.includes('gannaax fayo')||h.includes('ganaax fayo')||h.includes('ogolaansho bulaacad')||h.includes('ogolaansho jiingad')||h.includes('dib u habayn')||h.includes('dib u habayn');}
function openDirectTaxModal(){
 const c=tpCustomer(); if(!c){alert('Fadlan marka hore dooro taxpayer.');return;}
 const opts=tariffs.filter(t=>tariffGroupOf(t)==='Daily Collections'&&Number(t.year||2026)===2026&&t.active!==false).sort((a,b)=>Number(a.sequence||999)-Number(b.sequence||999));
 $('directTaxBox').innerHTML=`<div class="direct-tax-box"><div class="direct-tax-head"><div><h2>Daily Collections — Pay Direct Tax</h2><p>Dooro magaca adeegga. Faahfaahinta tacriifada lama soo bandhigayo.</p></div><button class="secondary" onclick="closeDirectTaxModal()">Close</button></div><div class="direct-tax-grid"><div><label>Customer ID</label><input id="dcCustomerId" value="${esc(c.customerId||'')}" readonly></div><div><label>Customer Name</label><input id="dcCustomerName" value="${esc(c.name||'')}" readonly></div><div class="full"><label>Daily Collection / Tax Type *</label><select id="dcTariff" onchange="updateDirectTaxTariff()"><option value="">Select type...</option>${opts.map(t=>`<option value="${esc(t.id)}">${esc(t.head)}</option>`).join('')}</select></div><div id="dcCodeWrap" class="direct-tax-detail"><input id="dcCode" readonly></div><div id="dcCurrencyWrap" class="direct-tax-currency-normal"><input id="dcCurrency" readonly></div><div><label>Enter Money / Amount</label><input id="dcAmount" type="number" min="0" step="0.01" readonly oninput="updateDirectTaxManualPreview()"></div><div id="dcFineCurrencyWrap" class="direct-tax-fine-only"><label>Currency</label><input id="dcFineCurrency" readonly></div><div><label>GR No *</label><input id="dcGrNo" placeholder="Geli GR No-ka la jaray"></div><div><label>GR Date *</label><input id="dcGrDate" type="date" value="${new Date().toISOString().slice(0,10)}"></div><div><label>Payment Method</label><select id="dcMethod"><option>Cash</option><option>ZAAD</option><option>eDahab</option><option>Bank</option><option>Other</option></select></div><div class="full"><label>Notes</label><textarea id="dcNotes" placeholder="Optional"></textarea></div></div><div class="direct-tax-summary"><div><small>Selected Type</small><strong id="dcHead">—</strong></div><div><small>Auto Amount</small><strong id="dcAmountPreview">0.00</strong></div></div><div class="direct-tax-actions"><button class="secondary" onclick="closeDirectTaxModal()">Cancel</button><button onclick="saveDirectTaxCollection()">Confirm Collection</button></div></div>`;
 $('directTaxModal').classList.add('open');
}
function closeDirectTaxModal(){$('directTaxModal').classList.remove('open')}
function updateDirectTaxTariff(){
 const id=$('dcTariff')?.value; const t=tariffs.find(x=>x.id===id); if(!t)return;
 const fine=isDirectFineTariff(t); let amount=0;
 if(fine){$('dcAmount').readOnly=false;$('dcAmount').value='';}
 else{$('dcAmount').readOnly=true;if(Array.isArray(t.dailyComponents)&&t.dailyComponents.length){amount=Number(t.rate||t.fixed||0);t.dailyComponents.forEach(c=>{const pct=Number(c.percent||0);const fixed=Number(c.fixed||0);if(pct) amount+=amount*pct/100;if(fixed) amount+=fixed})}else if(t.method==='fixed') amount=Number(t.fixed||t.rate||0);else if(t.method==='percentage') amount=Number(t.rate||t.fixed||0)*Number(t.percent||0)/100;else amount=Number(t.fixed||t.amount||t.rate||0);$('dcAmount').value=amount;}
 $('dcCode').value=t.code||''; $('dcCurrency').value=t.currency||'SLSH'; $('dcFineCurrency').value=t.currency||'SLSH'; $('dcFineCurrencyWrap').classList.toggle('show',fine); $('dcHead').textContent=t.head||'—'; $('dcAmountPreview').textContent=amount?money(amount,t.currency||'SLSH'):'0.00';
}
function updateDirectTaxManualPreview(){const n=Number($('dcAmount')?.value||0);const c=$('dcCurrency')?.value||$('dcFineCurrency')?.value||'SLSH';if($('dcAmountPreview'))$('dcAmountPreview').textContent=n?money(n,c):'0.00';}
function nextGRNo(){const nums=records.map(r=>String(r.grNo||'').match(/(\d+)$/)?.[1]).filter(Boolean).map(Number);const n=(Math.max(0,...nums)+1).toString().padStart(6,'0');return 'GR-'+new Date().getFullYear()+'-'+n}
function saveDirectTaxCollection(){const c=tpCustomer(),t=tariffs.find(x=>x.id===$('dcTariff')?.value);if(!c||!t)return alert('Dooro taxpayer iyo daily collection type.');const amount=Number($('dcAmount').value||0),grNo=String($('dcGrNo')?.value||'').trim(),grDate=$('dcGrDate')?.value||'';if(amount<=0)return alert('Tacriifada noocan wali qiime sax ah ma laha. Tag Tacriifad oo geli Amount.');if(!grNo||!grDate)return alert('GR No iyo GR Date waa khasab.');const rec={id:crypto.randomUUID(),customerId:c.customerId,customerName:c.name||'',grNo,grDate,gisNo:c.gis||c.supplyNo||'',xaafadda:c.xaafadda||c.zone||'',district:c.district||'Hargeisa',zone:c.zone||'Maxamuud Haybe',revenueType:t.head,head:t.head,tariffCode:t.code,tariffId:t.id,tariffSnapshot:{code:t.code,head:t.head,rate:t.rate,fixed:t.fixed,percent:t.percent,currency:t.currency,method:t.method,dailyComponents:Array.isArray(t.dailyComponents)?t.dailyComponents.map(x=>({...x})):[]},licenseGrade:'',amount,currency:t.currency||'SLSH',status:'Paid',method:$('dcMethod').value,date:grDate,collector:'',notes:$('dcNotes').value.trim(),collectionType:'Daily Collection',createdAt:new Date().toISOString()};records.unshift(rec);persist();closeDirectTaxModal();currentTpTab='payments';renderTaxpayerWorkspace();alert(`Daily Collection waa la kaydiyey. GR No: ${rec.grNo}`);}
function openAppearance(){const m=$('appearanceModal');if(!m)return;const saved=localStorage.getItem('dhhmh_bg_color')||'#f3f6f5';$('bgColorPicker').value=saved;$('bgPreset').value=saved; m.classList.add('open')}
function closeAppearance(){$('appearanceModal')?.classList.remove('open')}
function applyBgPreset(v){if(v)$('bgColorPicker').value=v}
function saveAppearance(){const v=$('bgColorPicker')?.value||'#f3f6f5';localStorage.setItem('dhhmh_bg_color',v);document.body.style.background=v;closeAppearance();alert('Background color waa la kaydiyey.')}
function resetAppearance(){localStorage.removeItem('dhhmh_bg_color');document.body.style.background='#f3f6f5';if($('bgColorPicker'))$('bgColorPicker').value='#f3f6f5';if($('bgPreset'))$('bgPreset').value='#f3f6f5'}
function applySavedAppearance(){const v=localStorage.getItem('dhhmh_bg_color');if(v)document.body.style.background=v}
applySavedAppearance();
function tpPayDirect(){openDirectTaxModal()}
function tpGenerate(){const c=tpCustomer();if(!c)return alert('Dooro taxpayer marka hore.');page('bill');initBillForm();$('billCustomer').value=c.customerId;fillBillCustomer(c);const registered=String(c.type||c.property||c.propertyType||'').toLowerCase();const isLicense=/license|liisan|ruqso|business/.test(registered)||!!(c.licenseGrade||c.grade);$('billType').value=isLicense?'License':'Property';if(isLicense)$('billGrade').value=c.licenseGrade||c.grade||'';else $('billGrade').value='';toggleBillLicenseFields();setTimeout(()=>{if($('billYear')?.value)calculateBillFromTariff();},0)}
const TAXPAYER_CATEGORIES = [
'GOOBAHA LEEXOOYINKA CARUURTA','MOOFO','GEERASHKA','STORE YARE','KALUUNLE','CILAAJ','RAYIISLE YER','ISKARAAB','GOODHI YER','PHOTOGRAPHY','DESIGN','POULTRY','PRODUCT','LAXAAMAD','CAANO','MACHINERY','RESTAURANT','TECHNOLOGY SOLUTION','HOSPITAL','BARBERSHOP','STORE','ENTERTAINMENT','BEAUTY SALON','REAL ESTATE','BANKS','SPARE PARTS','WHOLESALE STORES','FUEL STATION','ELECTRONICS','JEWELERS','TRANSPORTATION COMPANIES','FOOTBALL STADIUMS','ONLINE MARKETING BUSINESS','WORKSHOPS','RENT COMPANIES','JET COMPANIES','HOTEL','INTERNET CAFE / MULTI SERVICE','GYM AND FITNESS','BACADLE','BACADYAAL','GOODHI YAR','DAWAARLE','BOOKSHOP','STATIONERY','CAR WASH','BUILDING MATERIAL / ELECTRIC SUPPLIES','HOME MATERIAL','COMPANY','CORPORATIONS','CONSTRUCTION COMPANY','ELECTRONICS AND COMPUTER','FACTORY','FURNITURE','ALUMINIUM SHOP','GARAGE / WORKSHOP','IMPORT EXPORT','GENERAL TRADING','DAHABLE','PHARMACY','MEDIA AND ADVERTISEMENTS','NOTARY','MAQAAXI','MACMACAANLE','SCHOOLS','INSTITUTIONS / TRAINING CENTRE','SUPERMARKET / GROCERY / SHOPPING CENTER','DUKAAN','TRAVEL AND TOURISM AGENCY','AIRLINE','UNIVERSITY','FIRE SAFETY','WASTE MANAGEMENT','XAMAAM','WATER SUPPLIES','HERBAL CENTER','BEAUTY AND PERSONAL CARE','JAAJUURLE','HOME AND GARDEN','BOOSHAARI','DENTAL CARE','WEELLE','MOTORS','SARIIBAD','RENTAL CARS','COSMETIC','MAQAAXI BUN YAR','DUKAAMADA XALWADA','DHUXULE','ORGANISATION','SHOES','COLLECTION AND STYLE','MOBILE ACCESSORIES','SHIID LAY','KOLAY JAAD','SHOP','BANJARLE','SOO DAJIYE','LABORATORY','PETROLEUM','DIAGNOSTIC','FLY','SERVICE','MONEY TRANSFER','DATE TECHNOLOGY','GUESTHOUSE','FAST FOODS','INSURANCE','ENERGY','GASSES','COMPUTER','DECORATIONS','MALL','CHICKENS','COLD DRINKS','MATERIAL','COMMERCIAL','CARWO','GROUP','MEDICAL COLLEGE','SO GASHO BRANCH','TRADING','XAWAALAD (EXCHANGE)','CITY GATE','OPTICAL','APARTMENTS','PLAY GAME','CAFETERIA','AL IHSAN NUTRITION CENTER','ORGANIC MARKET','CLINIC','SANITATION','ISKAASHATADA','PRINTING','BEEDKA','EDUCATION','BUSINESS CENTER','TYRES','PERFUMES (UDUG)','ICE CREAM','XABXABLE','TV','CUNTO WADANI'];
function taxpayerCategoryOptions(selected){const cats=[...TAXPAYER_CATEGORIES].sort((a,b)=>a.localeCompare(b,undefined,{sensitivity:'base',numeric:true}));return '<option value="">Select category...</option>'+cats.map(x=>'<option value="'+esc(x)+'" '+(String(selected||'')===x?'selected':'')+'>'+esc(x)+'</option>').join('');}
function toggleTpEditAreaMode(){updateTpEditAreaMode();const area=$('tpEditArea');if(area&&$('tpEditAreaMode')?.value==='manual'){area.focus();area.select();}}
function focusTpManualArea(){if($('tpEditAreaMode'))$('tpEditAreaMode').value='manual';updateTpEditAreaMode();const area=$('tpEditArea');if(area){area.focus();area.select();}}
function updateTpEditAreaMode(){const mode=$('tpEditAreaMode')?.value||'automatic',area=$('tpEditArea'),h=Number($('tpEditHeight')?.value||0),w=Number($('tpEditWidth')?.value||0);if(!area)return;if(mode==='automatic'){area.readOnly=true;const v=h>0&&w>0?h*w:0;area.value=v?String(Number(v.toFixed(2))):'';}else{area.readOnly=false;}updateTpManualArea();}
function updateTpEditArea(){updateTpEditAreaMode();}
function parseAreaExpression(value){const raw=String(value??'').trim().replace(/,/g,'').replace(/×/g,'*').replace(/x/gi,'*');if(!raw)return 0;if(/^\d+(?:\.\d+)?(?:\s*\*\s*\d+(?:\.\d+)?)+$/.test(raw)){const parts=raw.split('*').map(v=>Number(v.trim()));return parts.reduce((a,b)=>a*b,1);}const n=Number(raw);return Number.isFinite(n)&&n>=0?n:0;}
function updateTpManualArea(){const input=$('tpEditArea');if(!input)return;const raw=input.value.trim();if(raw&&/^[0-9.\s*x×]+$/i.test(raw)&&raw.includes('*')){const result=parseAreaExpression(raw);input.title=result?`Area = ${result.toLocaleString()} m²`:'';}else input.title='';}
function getTpMixTotal(){const h=Number($('tpEditHeight')?.value||0),w=Number($('tpEditWidth')?.value||0),manual=parseAreaExpression($('tpEditArea')?.value||0);return {h,w,area:manual>0?manual:(h&&w?h*w:0)}};
function updateTpMixMode(name){const map={Dhisan:['tpMixDhisanMode','tpMixDhisanH','tpMixDhisanW','tpMixDhisanA'],Banaan:['tpMixBanaanMode','tpMixBanaanH','tpMixBanaanW','tpMixBanaanA'],Deyr:['tpMixDeyrMode','tpMixDeyrH','tpMixDeyrW','tpMixDeyrA']};const [modeId,hId,wId,aId]=map[name]||[];if(!modeId)return;const mode=$(modeId)?.value||'automatic',h=Number($(hId)?.value||0),w=Number($(wId)?.value||0),a=$(aId);if(!a)return;if(mode==='automatic'){const v=h>0&&w>0?h*w:0;a.value=v?String(Number(v.toFixed(2))):'';a.readOnly=true;}else{a.readOnly=false;}updateTpMix();}function updateTpMix(){const t=getTpMixTotal();if($('tpMixTotalDim'))$('tpMixTotalDim').textContent=t.h&&t.w?`${t.h} × ${t.w} m`:'—';if($('tpMixTotalArea'))$('tpMixTotalArea').textContent=t.area?`${t.area.toLocaleString(undefined,{maximumFractionDigits:2})} m²`:'—';const types=[['Dhisan','tpMixDhisanMode','tpMixDhisanH','tpMixDhisanW','tpMixDhisanA'],['Banaan','tpMixBanaanMode','tpMixBanaanH','tpMixBanaanW','tpMixBanaanA'],['Deyr','tpMixDeyrMode','tpMixDeyrH','tpMixDeyrW','tpMixDeyrA']];let used=0;types.forEach(([n,m,h,w,a])=>{const mode=$(m)?.value||'automatic',hh=Number($(h)?.value||0),ww=Number($(w)?.value||0),el=$(a);let aa=mode==='automatic'?(hh>0&&ww>0?hh*ww:0):parseAreaExpression(el?.value||0);if(mode==='automatic'&&el)el.value=aa?String(Number(aa.toFixed(2))):'';used+=aa;});if($('tpMixRemaining'))$('tpMixRemaining').textContent=`${Math.max(0,t.area-used).toLocaleString(undefined,{maximumFractionDigits:2})} m²`;}
function openTpMixModal(){const t=getTpMixTotal();if(!(t.area>0))return alert('Marka hore geli cabirka guud ee Area (m²), ama geli Height / Dherer iyo Width / Ballac.');const mix=tpCustomer()?.measurementBreakdown||{};[['Dhisan','tpMixDhisanMode','tpMixDhisanH','tpMixDhisanW','tpMixDhisanA'],['Banaan','tpMixBanaanMode','tpMixBanaanH','tpMixBanaanW','tpMixBanaanA'],['Deyr','tpMixDeyrMode','tpMixDeyrH','tpMixDeyrW','tpMixDeyrA']].forEach(([k,m,h,w,a])=>{$(m).value=mix[k]?.mode||'automatic';$(h).value=mix[k]?.height??'';$(w).value=mix[k]?.width??'';$(a).value=mix[k]?.areaInput??mix[k]?.area??'';updateTpMixMode(k);});updateTpMix();$('tpMixModal').classList.add('open');}
function closeTpMixModal(){$('tpMixModal')?.classList.remove('open');}
function autoSplitTpMix(){const t=getTpMixTotal();if(!(t.area>0))return alert('Cabirka guud ee Area (m²) lama helin.');const areas=[['Dhisan','tpMixDhisanA'],['Banaan','tpMixBanaanA'],['Deyr','tpMixDeyrA']];const filled=areas.filter(([,a])=>parseAreaExpression($(a)?.value||0)>0);if(!filled.length)return alert('Geli ugu yaraan hal Area, tusaale 12*12 ama 144.');const used=filled.reduce((sum,[,a])=>sum+parseAreaExpression($(a).value||0),0);if(used>t.area+0.01)return alert('Wadarta Area-yada qaybaha waxay ka badan tahay Area-ga guud.');const empty=areas.filter(([,a])=>!(parseAreaExpression($(a)?.value||0)>0));const remaining=Math.max(0,t.area-used);if(empty.length===1&&remaining>0)$(empty[0][1]).value=String(Number(remaining.toFixed(2)));else if(empty.length>1&&remaining>0){const each=Number((remaining/empty.length).toFixed(2));empty.forEach(([_,a],i)=>$(a).value=String(i===empty.length-1?Number((remaining-each*(empty.length-1)).toFixed(2)):each));}updateTpMix();}
function saveTpMix(){const t=getTpMixTotal();if(!(t.area>0))return alert('Area-ga guud lama helin.');const defs=[['Dhisan','tpMixDhisanMode','tpMixDhisanH','tpMixDhisanW','tpMixDhisanA'],['Banaan','tpMixBanaanMode','tpMixBanaanH','tpMixBanaanW','tpMixBanaanA'],['Deyr','tpMixDeyrMode','tpMixDeyrH','tpMixDeyrW','tpMixDeyrA']];const parts={};let total=0;defs.forEach(([name,m,h,w,a])=>{const mode=$(m)?.value||'automatic',hh=Number($(h)?.value||0),ww=Number($(w)?.value||0),aa=mode==='automatic'?(hh>0&&ww>0?hh*ww:0):parseAreaExpression($(a)?.value||0);if(aa>0){parts[name]={mode,height:hh||'',width:ww||'',area:Number(aa.toFixed(2)),areaInput:String($(a)?.value||'').trim()};total+=aa;}});if(!Object.keys(parts).length)return alert('Geli ugu yaraan hal Area.');if(total>t.area+0.01)return alert('Wadarta Area-yada qaybaha waxay ka badan tahay Area-ga guud.');const remaining=Math.max(0,t.area-total),c=tpCustomer();if(!c)return;c.measurementBreakdown=parts;c.measurementBreakdownTotalArea=Number(total.toFixed(2));c.measurementBreakdownRemainingArea=Number(remaining.toFixed(2));persistC();closeTpMixModal();renderTaxpayerWorkspace();alert('Iskujarka cabirada waa la kaydiyey.');}
function saveTaxpayerInfo(){const c=tpCustomer();if(!c)return;c.taxCode=String($('tpEditTaxCode')?.value||'').trim()||nextTaxCode();c.category=$('tpEditCategory').value;c.name=$('tpEditName').value;c.type=$('tpEditType').value;c.property=$('tpEditType').value;c.businessName=$('tpEditBusinessName')?.value?.trim()||'';c.district='Hargeisa';c.subDistrict='Maxamuud Haybe';c.zone=$('tpEditZone').value;c.subZone=$('tpEditSub').value;c.street=$('tpEditStreet').value.trim();c.plotNumber=$('tpEditPlot').value.trim();c.plotNo=c.plotNumber;c.houseNumber=String($('tpEditHouseNumber')?.value||'').trim();c.houseNo=c.houseNumber;c.latitude=$('tpEditLatitude').value.trim();c.longitude=$('tpEditLongitude').value.trim();const enteredGis=String($('tpEditGis')?.value||'').trim();c.gis=enteredGis||c.gis||c.supplyNo||'';c.supplyNo=enteredGis||c.supplyNo||c.gis||'';const h=Number($('tpEditHeight').value||0),w=Number($('tpEditWidth').value||0),mode=$('tpEditAreaMode')?.value||'automatic',manualArea=parseAreaExpression($('tpEditArea').value||0),area=mode==='automatic'?(h>0&&w>0?h*w:0):manualArea;c.height=h||'';c.width=w||'';c.area=area||'';c.areaMode=mode;const prop=$('tpEditPropertyType')?.value||'';const grade=$('tpEditLicenseGrade')?.value||'';c.propertyType=c.type==='Property'?prop:'';c.licenseGrade=c.type==='License'?grade:'';c.grade=c.licenseGrade;let p=properties.find(x=>String(x.customerId||'').toUpperCase()===String(c.customerId||'').toUpperCase());if(p){p.ownerName=c.name;p.district='Hargeisa';p.subDistrict='Maxamuud Haybe';p.zone=c.zone;p.subZone=c.subZone;p.street=c.street;p.plotNo=c.plotNumber;p.houseNo=c.houseNumber;p.latitude=c.latitude;p.longitude=c.longitude;p.supplyNo=c.gis||c.supplyNo||p.supplyNo;p.height=h;p.width=w;p.area=area;p.areaMode=mode;p.size=area||p.size;p.propertyType=c.propertyType||p.propertyType;p.licenseGrade=c.licenseGrade||p.licenseGrade;}persistC();localStorage.setItem(PK,JSON.stringify(properties));renderTaxpayerWorkspace();alert('Customer, Type/Grade iyo cabirka property-ga waa la kaydiyey.')}
function saveTaxpayerContact(){const c=tpCustomer();if(!c)return;c.phone=$('tpEditPhone').value;c.telephone=$('tpEditTel').value;c.email=$('tpEditEmail').value;c.nationalId=$('tpEditNational').value;c.address=$('tpEditAddress').value;persistC();renderTaxpayerWorkspace();alert('Taxpayer contact saved.')}
function loadProfile(){
 const id=($('profileId').value||'').trim().toUpperCase();
 if(!id){$('profileResult').innerHTML='<div class="notice">Geli Customer ID.</div>';return}
 const c=customers.find(x=>String(x.customerId||'').toUpperCase()===id);
 if(!c){$('profileResult').innerHTML='<div class="notice">Customer ID lama helin. Isticmaal Find Customer ID si aad u hesho ID sax ah.</div>';return}
 const from=$('profileFrom').value||'',to=$('profileTo').value||'',sub=$('profileSubZone').value||'';
 const pays=records.filter(r=>String(r.customerId||'').toUpperCase()===id && (!from||r.date>=from) && (!to||r.date<=to) && (!sub||r.xaafadda===sub)).sort((a,b)=>String(b.date).localeCompare(String(a.date)));
 const usd=a=>a.filter(r=>(r.currency||'USD')==='USD').reduce((s,r)=>s+Number(r.amount||0),0);
 const slsh=a=>a.filter(r=>(r.currency||'USD')==='SLSH').reduce((s,r)=>s+Number(r.amount||0),0);
 const paid=pays.filter(r=>r.status==='Paid'),unpaid=pays.filter(r=>r.status==='Unpaid');
 const latest=pays[0],earliest=pays[pays.length-1];
 $('profileResult').innerHTML=`
 <div class="analysis-heading"><div><h3>${esc(c.name)}</h3><div class="muted">Customer ID: <b>${esc(c.customerId)}</b></div></div><div class="analysis-actions"><button onclick="printCustomerAnalysis()">🖨 Print</button><button onclick="exportCustomerAnalysis()">Export CSV</button></div></div>
 <div class="analysis-fields">
  <div><b>District</b><span>${esc(c.district||'Hargeisa')}</span></div><div><b>Zone</b><span>${esc(c.zone||'Maxamuud Haybe')}</span></div><div><b>Sub Zone</b><span>${esc(c.xaafadda||'—')}</span></div><div><b>GIS / Supply No</b><span>${esc(c.gis||'—')}</span></div><div><b>Property</b><span>${esc(c.property||'—')}</span></div><div><b>Size</b><span>${esc(c.size||'—')} m²</span></div>
 </div>
 <div class="analysis-stats"><div><b>Total USD</b><strong>${money(usd(pays),'USD')}</strong></div><div><b>Total SLSH</b><strong>${money(slsh(pays),'SLSH')}</strong></div><div><b>Paid</b><strong>${paid.length}</strong></div><div><b>Unpaid</b><strong>${unpaid.length}</strong></div><div><b>First Payment</b><strong>${earliest?esc(earliest.date):'—'}</strong></div><div><b>Latest Payment</b><strong>${latest?esc(latest.date):'—'}</strong></div></div>
 <h3>List of Bills and Receipts for the Customer</h3>
 <div style="overflow:auto"><table class="history-table"><thead><tr><th>Revenue Type</th><th>License Grade</th><th>GR No</th><th>Date</th><th>Currency</th><th>Amount</th><th>Status</th><th>Payment Method</th><th>Collector</th></tr></thead><tbody>
 ${pays.map(r=>`<tr><td>${esc(r.revenueType)}</td><td>${esc(r.licenseGrade||'—')}</td><td>${esc(r.grNo||'—')}</td><td>${esc(r.date)}</td><td>${esc(r.currency||'USD')}</td><td>${money(r.amount,r.currency||'USD')}</td><td><span class="badge ${r.status==='Paid'?'paid':'unpaid'}">${esc(r.status)}</span></td><td>${esc(r.method||'—')}</td><td>${esc(r.collector||'—')}</td></tr>`).join('')||'<tr><td colspan="9">No payment history for this Customer in the selected period.</td></tr>'}
 </tbody></table></div>
 <div class="analysis-footer"><b>Records:</b> ${pays.length} &nbsp; | &nbsp; <b>Total:</b> ${money(usd(pays),'USD')} | ${money(slsh(pays),'SLSH')}</div>`;
 window.currentProfileRecords=pays;window.currentProfileCustomer=c;
}
function printCustomerAnalysis(){const r=$('profileResult');if(!r.innerHTML||!window.currentProfileCustomer)return;const w=window.open('','_blank');w.document.write(`<!doctype html><html><head><title>Customer Analysis</title><style>body{font-family:Arial,sans-serif;padding:24px}h2,h3{margin:6px 0 12px}table{width:100%;border-collapse:collapse;margin-top:12px}th,td{border:1px solid #ccc;padding:7px;text-align:left}.analysis-heading{display:flex;justify-content:space-between}.analysis-fields{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:12px 0}.analysis-fields div{border:1px solid #ddd;padding:8px}.analysis-fields span{display:block;margin-top:4px}.analysis-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:12px 0}.analysis-stats div{border:1px solid #ddd;padding:8px}.analysis-stats strong{display:block;margin-top:5px}</style>
<style>
.attachment-list{display:flex;flex-direction:column;gap:12px;width:100%;align-items:stretch}.attachment-card{width:100%;max-width:100%;border:1px solid #d9e2ea;border-radius:10px;padding:12px;background:#f8fafc;box-sizing:border-box}.attachment-card + .attachment-card{margin-top:0}.attachment-meta{display:grid;grid-template-columns:1fr 1fr;gap:8px}.attachment-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.attachment-actions button{padding:7px 10px}.direct-tax-hidden{display:none!important}.direct-tax-fine-only{display:none}.direct-tax-fine-only.show{display:block}.receipt-charges{margin-top:12px}.receipt-charges th{background:#f1f5f9;font-weight:700}.receipt-total{font-size:18px;font-weight:800;text-align:right;margin-top:10px}.payment-view-btn{background:#64748b!important}
</style>
<style id="modern-sidebar-theme">
:root{--side:#062f55;--side2:#0b477a;--accent:#1976d2;--top:#083b66;--bg:#f4f7fb;--text:#172033}
body{background:var(--bg);color:var(--text);padding-left:238px}
body>header{position:fixed;left:238px;right:0;top:0;height:70px;z-index:30;background:linear-gradient(90deg,#083b66,#0b4f86);padding:0 24px;box-shadow:0 2px 12px #062f5522}
body>header .brand img{display:none}
body>header .brand b{font-size:20px;letter-spacing:.2px}
body>header .brand div div{font-size:11px;opacity:.8;margin-top:3px}
body>nav.top-nav{display:none}
body>main{max-width:none;margin:0;padding:92px 22px 28px}
.app-sidebar{position:fixed;left:0;top:0;bottom:0;width:238px;background:linear-gradient(180deg,#062f55 0%,#073a68 58%,#052b4e 100%);color:#fff;z-index:40;box-shadow:3px 0 16px #062f5530;overflow-y:auto}
.app-sidebar .side-brand{display:flex;align-items:center;gap:10px;padding:17px 14px 15px;border-bottom:1px solid #ffffff1c}
.app-sidebar .side-brand img{width:42px;height:42px;border-radius:50%;background:#fff;object-fit:contain;padding:2px}
.app-sidebar .side-brand strong{display:block;font-size:14px;line-height:1.15}.app-sidebar .side-brand small{display:block;font-size:10px;opacity:.72;margin-top:3px}
.side-section{padding:12px 9px 4px;color:#8eb5d6;text-transform:uppercase;font-size:9px;font-weight:800;letter-spacing:1px}
.side-btn{width:100%;display:flex;align-items:center;gap:10px;background:transparent!important;color:#eaf4ff!important;text-align:left;border-radius:7px;padding:10px 12px!important;margin:2px 0;font-size:12px!important;font-weight:600}
.side-btn:hover,.side-btn.active{background:#ffffff18!important;color:#fff!important}.side-icon{width:20px;text-align:center;font-size:14px;opacity:.95}.side-sub{padding-left:28px!important;font-size:11px!important;color:#c7dcf0!important}
.side-footer{margin:18px 12px 12px;padding:10px;border:1px solid #ffffff1b;border-radius:9px;color:#a9c7df;font-size:10px;text-align:center}
.page h2{color:#0a3c66}.dashboard-page{min-height:calc(100vh - 120px)}
.dash-hero{border-radius:12px!important;background:linear-gradient(135deg,#ffffff,#f1f7fc)!important;border:1px solid #dce7f1!important}
.list-card,.card,form{box-shadow:0 2px 10px #123b5d0b}
@media(max-width:900px){body{padding-left:0}body>header{left:0}.app-sidebar{transform:translateX(-100%);transition:.2s}.app-sidebar.open{transform:translateX(0)}body>main{padding:84px 12px 22px}.mobile-menu{display:block!important}}
.mobile-menu{display:none;background:#ffffff1a!important;color:#fff!important;font-size:18px!important;padding:7px 10px!important;margin-right:8px}
@media print{body{padding-left:0}body>header{position:static;display:none!important}.app-sidebar{display:none!important}body>main{margin:0;padding:0}.dash-hero{display:none}}
</style>


<style id="dhhmh-mobile-embedded-css">
#dhhmhMobileOverlay{display:none;position:fixed;inset:0;z-index:9999;background:rgba(2,18,32,.72);backdrop-filter:blur(2px);align-items:center;justify-content:center;padding:18px}
#dhhmhMobileOverlay.open{display:flex}
.dhhmh-mobile-shell{width:min(1180px,96vw);height:min(92vh,900px);background:#fff;border-radius:18px;box-shadow:0 20px 70px rgba(0,0,0,.35);overflow:hidden;display:flex;flex-direction:column;border:1px solid #cbd8e3}
.dhhmh-mobile-toolbar{height:54px;min-height:54px;background:linear-gradient(135deg,#062f55,#0f766e);color:#fff;display:flex;align-items:center;justify-content:space-between;padding:8px 12px;gap:10px}
.dhhmh-mobile-toolbar strong{font-size:14px}.dhhmh-mobile-toolbar small{display:block;opacity:.75;font-size:10px;margin-top:2px}
.dhhmh-mobile-actions{display:flex;gap:7px}.dhhmh-mobile-actions button{border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.12);color:#fff;border-radius:8px;padding:7px 10px;font-weight:700;cursor:pointer}
.dhhmh-mobile-frame{width:100%;height:calc(100% - 54px);border:0;background:#f3f6f5}
@media(max-width:600px){#dhhmhMobileOverlay{padding:0}.dhhmh-mobile-shell{width:100vw;height:100vh;border-radius:0}.dhhmh-mobile-toolbar{height:50px;min-height:50px}.dhhmh-mobile-frame{height:calc(100% - 50px)}}
@media print{#dhhmhMobileOverlay{display:none!important}}
</style>
</head><body><div id="dhhmhMobileOverlay" aria-hidden="true">
  <div class="dhhmh-mobile-shell" role="dialog" aria-modal="true" aria-label="DHHMH Mobile Collector App">
    <div class="dhhmh-mobile-toolbar">
      <div><strong>📱 DHHMH Mobile Collector App</strong><small>Mobile Collector — gudaha DHHMH system-ka</small></div>
      <div class="dhhmh-mobile-actions"><button type="button" onclick="openMobileNewWindow()">↗ New Window</button><button type="button" onclick="closeMobileApp()">✕ Close</button></div>
    </div>
    <iframe id="dhhmhMobileFrame" class="dhhmh-mobile-frame" src="mobile.html" title="DHHMH Mobile Collector App"></iframe>
  </div>
</div>
<h2>DHHMH — Customer Analysis</h2>${r.innerHTML}</body></html>`);w.document.close();w.focus();w.print()}
function exportCustomerAnalysis(){const data=window.currentProfileRecords||[];if(!data.length)return alert('No records to export.');const rows=[['Customer ID','Customer Name','District','Zone','Sub Zone','GIS / Supply No','Revenue Type','License Grade','GR No','Date','Currency','Amount','Status','Payment Method','Collector'],...data.map(r=>[window.currentProfileCustomer.customerId,window.currentProfileCustomer.name,window.currentProfileCustomer.district||'Hargeisa',window.currentProfileCustomer.zone||'Maxamuud Haybe',r.xaafadda||window.currentProfileCustomer.xaafadda||'',window.currentProfileCustomer.gis||'',r.revenueType,r.licenseGrade||'',r.grNo||'',r.date,r.currency||'USD',r.amount,r.status,r.method||'',r.collector||''])];const csv=rows.map(row=>row.map(x=>`"${String(x??'').replaceAll('"','""')}"`).join(',')).join('\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='DHHMH_Customer_Analysis_'+window.currentProfileCustomer.customerId+'.csv';a.click()}
function findCustomerIds(){
 const q=($('findIdQ').value||'').trim().toLowerCase();
 const d=customers.filter(c=>!q||[c.customerId,c.name,c.phone,c.gis,c.xaafadda,c.property,c.propertyId].join(' ').toLowerCase().includes(q));
 const customerIds=new Set(d.map(c=>String(c.propertyId||'')));
 const pd=properties.filter(p=>(!q||[p.propertyId,p.ownerName,p.phone,p.houseNo,p.supplyNo,p.plotNo,p.propertyType,p.zone,p.subZone,p.height,p.width,p.size].join(' ').toLowerCase().includes(q))&&!customerIds.has(String(p.propertyId||'')));
 const rows=d.map(c=>{
   const cid=String(c.customerId||'');
   const licenses=records.filter(r=>String(r.customerId||'').toUpperCase()===cid.toUpperCase() && String(r.revenueType||'').toLowerCase()==='business license' && r.licenseGrade);
   const latestLicense=licenses.sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')))[0];
   const typeText=`<b>Property:</b> ${esc(c.property||'—')}`+(latestLicense?`<br><small><b>License:</b> ${esc(latestLicense.licenseGrade)}</small>`:'');
   return `<tr><td><b>${esc(c.customerId)}</b></td><td>${esc(c.name)}</td><td>${esc(c.phone)}</td><td>${esc(c.xaafadda)}</td><td>${typeText}</td><td>${esc(c.gis)}</td><td><button onclick="openCustomerProfile('${esc(c.customerId)}')">Profile</button> <button class="secondary" onclick="selectCustomerInRevenue('${esc(c.customerId)}')">Use in Revenue</button></td></tr>`
 });
 const prows=pd.map(p=>`<tr><td><b>${esc(p.propertyId)}</b><br><small>Property ID</small></td><td>${esc(p.ownerName||'N/A')}</td><td>${esc(p.phone||'')}</td><td>${esc(p.zone||'')}</td><td><b>Property Type / License Type:</b> ${esc(displayPropertyType(p.propertyType||p.licenseType||p.propertyName||'—'))}<br><small>House/Supply: ${esc(p.supplyNo||p.houseNo||'—')}</small></td><td>${esc(p.supplyNo||p.houseNo||'')}</td><td><button type="button" onclick="newCustomer()">Add Customer</button></td></tr>`);
 $('findIdBody').innerHTML=[...rows,...prows].join('')||'<tr><td colspan="7">No matching customers or properties.</td></tr>'
}
function openCustomerProfile(id){$('profileId').value=id;page('profile');loadProfile()}function selectCustomerInRevenue(id){page('entry');populateCustomerSelect(id);selectCustomerForRevenue()}
const PK='dhhmh_properties_v1';
let properties=JSON.parse(localStorage.getItem(PK)||'null');
function initProperties(){
  const pre=Array.isArray(window.DHHMH_PRELOADED_PROPERTIES)?window.DHHMH_PRELOADED_PROPERTIES:[];
  if(!Array.isArray(properties)) properties=[];
  // Always merge the packaged master data into local storage, so an older/empty local cache cannot hide it.
  const byId=new Map(properties.map(p=>[String(p.propertyId||'').trim(),p]));
  let changed=false;
  pre.forEach(p=>{const id=String(p.propertyId||'').trim();if(id&&!byId.has(id)){properties.push(p);byId.set(id,p);changed=true;}});
  if(changed||!localStorage.getItem(PK)) localStorage.setItem(PK,JSON.stringify(properties));
  fillPropertyTypeFilter();
}
function fillPropertyTypeFilter(){const sel=$('propType');if(!sel)return;const cur=sel.value;const types=[...new Set(properties.map(p=>String(p.propertyType||'').trim()).filter(Boolean))].sort();sel.innerHTML='<option value="">All Property Types</option>'+types.map(t=>`<option>${esc(t)}</option>`).join('');sel.value=cur;}
function renderProperties(){
 const q=($('propSearch')?.value||'').trim().toLowerCase(),z=$('propZone')?.value||'',t=$('propType')?.value||'';
 const d=properties.filter(p=>(!q||[p.propertyId,p.ownerName,p.phone,p.houseNo,p.supplyNo,p.plotNo,p.propertyType,p.zone,p.subZone,p.height,p.width,p.size].join(' ').toLowerCase().includes(q))&&(!z||p.zone===z)&&(!t||p.propertyType===t));
 $('propertyStats').textContent=`Showing ${d.length.toLocaleString()} of ${properties.length.toLocaleString()} property records`;
 const view=d.slice(0,500);
 $('propertiesBody').innerHTML=view.map(p=>`<tr><td><b>${esc(p.propertyId)}</b></td><td>${esc(p.ownerName)}</td><td>${esc(p.phone)}</td><td>${esc(p.zone)}</td><td>${esc(p.subZone)}</td><td>${esc(p.supplyNo||p.houseNo)}</td><td>${esc(p.plotNo)}</td><td>${esc(displayPropertyType(p.propertyType||p.licenseType||''))}</td><td>${esc(p.height||'—')}</td><td>${esc(p.width||'—')}</td><td>${(Number(p.height||0)*Number(p.width||0)||Number(p.size)||0).toLocaleString(undefined,{maximumFractionDigits:2})}</td><td>${esc(p.balance??0)}</td><td><button class="secondary" onclick="editProperty('${esc(p.propertyId)}')">Edit</button></td></tr>`).join('')||'<tr><td colspan="13">No property records found.</td></tr>';
 if(d.length>500)$('propertyStats').textContent+=` — First 500 shown. Use search/filter to narrow the list.`;
}
function normalizeHeader(h){return String(h??'').trim().toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[\s_\-\/().²]+/g,'');}
function parseDimensionPair(v){
 const s=String(v??'').trim().replace(/,/g,'.');
 if(!s)return null;
 const m=s.match(/(\d+(?:\.\d+)?)\s*(?:m(?:eter)?\s*)?(?:x|×|\*|by|\bX\b)\s*(\d+(?:\.\d+)?)/i);
 return m?[m[1],m[2]]:null;
}
function cleanDimension(v){
 const s=String(v??'').trim().replace(/\s+/g,'').replace(/,/g,'.');
 if(!s)return '';
 const n=Number(s.replace(/[^0-9.+-]/g,''));
 return Number.isFinite(n)?String(n):s;
}
function mapPropertyRow(row,headers){
 // IMPORTANT: this CSV uses the misspelled header "Hight" for Height.
 // Map Width and Hight independently by their exact normalized headers so neither column is lost.
 const m={};headers.forEach((h,i)=>{const k=normalizeHeader(h);m[k]=row[i]??'';});
 const get=(names)=>{for(const n of names){const k=normalizeHeader(n);if(Object.prototype.hasOwnProperty.call(m,k)&&String(m[k]).trim()!=='')return String(m[k]).trim()}return '';};
 const rawSize=get(['Size','Size (m²)','Size M2','Cabirka','Cabirka (m)','Cabir','Area (m²)','Dimensions','Dimension','Plot Size']);
 // Prefer the exact Height/Hight field. Do NOT infer one dimension from the other.
 const rawHeight=get(['Height (m)','Height m','Height M','Height','Hight','Dherer','Dhererka','Dherer m','Dherer (m)','Length','Length (m)','Length m']);
 const rawWidth=get(['Width (m)','Width m','Width M','Width','Widh','Ballac','Ballaca','Ballac m','Ballac (m)','Breadth','Breadth (m)']);
 let parsedHeight=cleanDimension(rawHeight), parsedWidth=cleanDimension(rawWidth);
 // Only split a combined dimensions field when BOTH independent fields are missing.
 if(!parsedHeight && !parsedWidth){
   const pair=parseDimensionPair(rawSize);
   if(pair){parsedHeight=cleanDimension(pair[0]); parsedWidth=cleanDimension(pair[1]);}
 }
 const area=(parsedHeight!==''&&parsedWidth!==''&&Number.isFinite(Number(parsedHeight))&&Number.isFinite(Number(parsedWidth)))
   ? String(Number(parsedHeight)*Number(parsedWidth)) : '';
 return {propertyId:get(['ID','Property ID','Customer ID','Property No']),propertyName:get(['Property Name','Property']),ownerName:get(['Owner Name','Owner','Name']),phone:get(['Phone No.','Phone','Mobile No','Mobile']),district:get(['District'])||'Hargeisa',subDistrict:get(['SubDistrict','Sub District'])||'Maxamuud Haybe',zone:get(['Zone','Xaafad']),subZone:get(['Sub-Zone','Sub Zone']),houseNo:get(['House No','House Number']),plotNo:get(['Plot No','Plot Number']),propertyType:get(['Property Type','License Type','Licence Type','License','Licence','Type']),licenseType:get(['License Type','Licence Type','License','Licence']),balance:get(['Balance'])||0,height:parsedHeight,width:parsedWidth,size:rawSize,area:area,supplyNo:get(['Supply No','Supply Number','GIS / Supply No'])};
}
let pendingPropertyRows=null;
function openImportForm(){ $('importPanel').style.display='block'; $('importPanel').scrollIntoView({behavior:'smooth',block:'start'}); }
function closeImportForm(){ $('importPanel').style.display='none'; clearImportPreview(); }
function clearImportPreview(){ pendingPropertyRows=null; $('importPreview').innerHTML=''; $('importMessage').innerHTML=''; $('importActions').style.display='none'; if($('excelFile'))$('excelFile').value=''; }
async function readSelectedImportFile(){
 const input=$('excelFile'),file=input.files[0]; if(!file){alert('Fadlan dooro Excel/CSV file.');return;}
 try{
  const name=file.name.toLowerCase(); let rows;
  if(name.endsWith('.csv')||name.endsWith('.tsv')){rows=parseDelimited(await file.text(),name.endsWith('.tsv')?'\t':',');}
  else if(name.endsWith('.xlsx')){rows=await readXlsxFirstSheet(file);}
  else {throw Error('Noocan lama akhriyi karo. Isticmaal .xlsx, .csv ama .tsv. File .xls hore ah marka hore Save As → .xlsx.');}
  if(!rows||rows.length<2)throw Error('File-ku ma laha headers iyo records ku filan.');
  const headers=rows[0].map((x,i)=>String(x??'').trim()||('Column '+(i+1)));
  const normalizedHeaders=headers.map(normalizeHeader);
  const hasWidth=normalizedHeaders.includes('width');
  const hasHight=normalizedHeaders.includes('hight');
  const hasHeight=normalizedHeaders.includes('height') || normalizedHeaders.includes('heightm');
  if((hasHight||hasHeight)&&hasWidth){
    $('importMessage').innerHTML='<div class="notice">📐 Cabbirrada waa la aqoonsaday: <b>Width → Width (m)</b> iyo <b>'+(hasHight?'Hight':'Height')+' → Height (m)</b>. Labada column waxaa loo qaadanayaa si gooni ah.</div>';
  }
  const mapped=rows.slice(1).map(r=>mapPropertyRow(r,headers)).filter(p=>p.propertyId||p.ownerName||p.houseNo||p.phone||p.supplyNo||p.propertyType||p.licenseType||p.height||p.width||p.size);
  if(!mapped.length)throw Error('Wax records ah lama aqoonsan. Hubi headers-ka Excel-ka.');
  pendingPropertyRows=mapped; renderImportPreview(headers,mapped); $('importMessage').innerHTML='<div class="notice">✅ File-ka waa la akhriyey: <b>'+mapped.length.toLocaleString()+'</b> records. Hoos ka eeg preview-ka, kadib Confirm Import.</div>'; $('importActions').style.display='flex';
 }catch(e){$('importMessage').innerHTML='<div class="notice" style="border-color:#b91c1c">❌ '+esc(e.message)+'</div>';pendingPropertyRows=null;$('importActions').style.display='none';}
}
function renderImportPreview(headers,rows){
 const cols=['propertyId','ownerName','phone','district','subDistrict','zone','subZone','houseNo','plotNo','propertyType','height','width','area','supplyNo','balance'];
 const labels=['Property ID','Owner Name','Phone','District','SubDistrict','Zone','Sub-Zone','House No','Plot No','Property Type','Height (m)','Width (m)','Area (m²)','Supply No','Balance'];
 const sample=rows.slice(0,15); let h='<table><thead><tr>'+labels.map(x=>'<th>'+esc(x)+'</th>').join('')+'</tr></thead><tbody>';
 sample.forEach(p=>{h+='<tr>'+cols.map(c=>'<td>'+esc(p[c])+'</td>').join('')+'</tr>';}); h+='</tbody></table><small class="muted">Waxaa la tusayaa ilaa 15 records oo preview ah.</small>'; $('importPreview').innerHTML=h;
}
function propertyToCustomer(p, existing){
 const pid=String(p.propertyId||'').trim();
 const h=p.height??'', w=p.width??'';
 const area=(p.area!==''&&p.area!=null)?p.area:((Number(h)||0)*(Number(w)||0)||Number(p.size)||'');
 const house=String(p.houseNumber??p.houseNo??p.gis??p.supplyNo??existing?.houseNumber??existing?.houseNo??existing?.gis??existing?.supplyNo??'').trim();
 const zone=String(p.zone??p.xaafadda??existing?.zone??existing?.xaafadda??'').trim();
 const subZone=String(p.subZone??existing?.subZone??'').trim();
 return {...(existing||{}), id:existing?.id||crypto.randomUUID(), customerId:existing?.customerId||nextCustomerId(), taxCode:existing?.taxCode||nextTaxCode(), propertyId:pid||existing?.propertyId||'', name:p.ownerName??p.name??existing?.name??'N/A', phone:p.phone??existing?.phone??'', district:p.district??existing?.district??'Hargeisa', subDistrict:p.subDistrict??existing?.subDistrict??'Maxamuud Haybe', zone, xaafadda:zone, subZone, street:p.street??existing?.street??'', plotNumber:p.plotNumber??p.plotNo??existing?.plotNumber??existing?.plotNo??'', plotNo:p.plotNo??p.plotNumber??existing?.plotNo??existing?.plotNumber??'', latitude:p.latitude??existing?.latitude??'', longitude:p.longitude??existing?.longitude??'', houseNumber:house, houseNo:house, gis:house, supplyNo:p.supplyNo??existing?.supplyNo??'', property:p.propertyType??existing?.property??'Other', propertyType:p.propertyType??existing?.propertyType??'Other', licenseType:p.licenseType??existing?.licenseType??'', height:h, width:w, area, size:p.size??existing?.size??'', areaInput:existing?.areaInput??area, areaMode:existing?.areaMode??'automatic', date:existing?.date??new Date().toISOString().slice(0,10), status:existing?.status??'Active', notes:existing?.notes??`Property ID: ${pid} | Plot No: ${p.plotNo??existing?.plotNo??''} | Balance: ${p.balance??existing?.balance??0}`};
}
function syncPropertiesToCustomers(silent=false){
 // Every imported Property must have a durable Customer record. If an Excel row
 // has no Property ID, create a stable imported ID instead of silently skipping it.
 const norm=v=>String(v??'').trim().toLowerCase().replace(/\s+/g,' ');
 const makePid=p=>{
   let pid=String(p.propertyId||'').trim();
   if(pid)return pid;
   const seed=[p.ownerName,p.phone,p.zone,p.subZone,p.houseNo,p.plotNo,p.supplyNo].map(norm).join('|');
   let h=0; for(let i=0;i<seed.length;i++)h=((h<<5)-h+seed.charCodeAt(i))|0;
   pid='IMP-'+Math.abs(h>>>0).toString(36).toUpperCase();
   let n=1,base=pid; while(properties.some(x=>x!==p&&String(x.propertyId||'').trim()===pid))pid=base+'-'+(n++);
   p.propertyId=pid; return pid;
 };
 const byPid=new Map(customers.filter(c=>c.propertyId).map(c=>[String(c.propertyId).trim(),c]));
 let added=0,updated=0;
 properties.forEach(p=>{
   const pid=makePid(p);
   const ex=byPid.get(pid);
   const synced={...propertyToCustomer(p,ex),source:'Properties/Excel Sync',syncedAt:new Date().toISOString()};
   if(ex){Object.assign(ex,synced);updated++;}
   else{customers.push(synced);byPid.set(pid,synced);added++;}
 });
 // Persist BOTH collections explicitly so refresh/reopen cannot lose synced customers.
 localStorage.setItem(PK,JSON.stringify(properties));
 localStorage.setItem(CK,JSON.stringify(customers));
 populateCustomerSelect(); renderCustomers(); renderProperties(); dash(); backupStats();
 if(!silent)alert(`Property → Customer sync complete. Added: ${added.toLocaleString()} | Updated: ${updated.toLocaleString()} | Total Customers: ${customers.length.toLocaleString()}`);
 return {added,updated};
}
function confirmPropertyImport(){
 if(!pendingPropertyRows||!pendingPropertyRows.length)return;
 const mode=$('importMode').value,byId=new Map(properties.map(p=>[String(p.propertyId||'').trim(),p]));let added=0,updated=0,skipped=0;
 pendingPropertyRows.forEach(p=>{let id=String(p.propertyId||'').trim();if(id&&byId.has(id)){if(mode==='upsert'){Object.assign(byId.get(id),p);updated++;}else skipped++;}else{if(!id)p.propertyId='IMP-'+Date.now()+'-'+(added+1);properties.push(p);if(id)byId.set(id,p);added++;}});
 localStorage.setItem(PK,JSON.stringify(properties));fillPropertyTypeFilter();renderProperties();
 const sync=syncPropertiesToCustomers(true);
 $('importMessage').innerHTML='<div class="notice">✅ Import + Customer Sync complete — Properties Added: <b>'+added.toLocaleString()+'</b> | Updated: <b>'+updated.toLocaleString()+'</b> | Skipped: <b>'+skipped.toLocaleString()+'</b> | Customers Added/Updated: <b>'+sync.added.toLocaleString()+'/'+sync.updated.toLocaleString()+'</b> | Total Customers: <b>'+customers.length.toLocaleString()+'</b> | Total Properties: <b>'+properties.length.toLocaleString()+'</b><br><small>Synced Customers are permanently saved in local storage and will remain after refresh/reopen.</small></div>';
 $('importActions').style.display='none';pendingPropertyRows=null;
}

function importPropertiesFile(input){openImportForm();$('excelFile').files=input.files;readSelectedImportFile();}
function parseDelimited(text,sep){
 text=String(text??'').replace(/^\uFEFF/,''); const rows=[]; let row=[],cur='',q=false;
 for(let i=0;i<text.length;i++){const ch=text[i],n=text[i+1];
  if(ch==='"'){if(q&&n==='"'){cur+='"';i++;}else q=!q;}
  else if(ch===sep&&!q){row.push(cur);cur='';}
  else if((ch==='\n'||ch==='\r')&&!q){if(ch==='\r'&&n==='\n')i++;row.push(cur);cur='';if(row.some(x=>String(x).trim()!==''))rows.push(row);row=[];}
  else cur+=ch;
 }
 if(cur!==''||row.length){row.push(cur);if(row.some(x=>String(x).trim()!==''))rows.push(row);}
 return rows;
}
async function readXlsxFirstSheet(file){
 const buf=await file.arrayBuffer(),dv=new DataView(buf),bytes=new Uint8Array(buf),dec=new TextDecoder('utf-8');let eocd=-1;for(let i=bytes.length-22;i>=Math.max(0,bytes.length-65558);i--){if(dv.getUint32(i,true)===0x06054b50){eocd=i;break;}}if(eocd<0)throw Error('Invalid XLSX ZIP file');const cdOff=dv.getUint32(eocd+16,true),cdSize=dv.getUint32(eocd+12,true);let pos=cdOff,entries={};while(pos<cdOff+cdSize){if(dv.getUint32(pos,true)!==0x02014b50)break;const method=dv.getUint16(pos+10,true),csize=dv.getUint32(pos+20,true),nl=dv.getUint16(pos+28,true),xl=dv.getUint16(pos+30,true),cl=dv.getUint16(pos+32,true),name=dec.decode(bytes.slice(pos+46,pos+46+nl));entries[name]={method,csize,offset:dv.getUint32(pos+42,true)};pos+=46+nl+xl+cl;}async function unzip(name){const en=entries[name];if(!en)throw Error('Missing '+name);const o=en.offset,nl=dv.getUint16(o+26,true),xl=dv.getUint16(o+28,true),data=bytes.slice(o+30+nl+xl,o+30+nl+xl+en.csize);if(en.method===0)return data;if(en.method===8){const ds=new DecompressionStream('deflate-raw');return new Uint8Array(await new Response(new Blob([data]).stream().pipeThrough(ds)).arrayBuffer());}throw Error('Unsupported ZIP compression');}let shared=[];if(entries['xl/sharedStrings.xml']){const xml=dec.decode(await unzip('xl/sharedStrings.xml')),doc=new DOMParser().parseFromString(xml,'application/xml');shared=[...doc.getElementsByTagName('si')].map(si=>[...si.getElementsByTagName('t')].map(t=>t.textContent).join(''));}const sheet=entries['xl/worksheets/sheet1.xml']?'xl/worksheets/sheet1.xml':Object.keys(entries).find(x=>/^xl\/worksheets\/sheet\d+\.xml$/.test(x));if(!sheet)throw Error('No worksheet found');const doc=new DOMParser().parseFromString(dec.decode(await unzip(sheet)),'application/xml'),out=[];for(const r of [...doc.getElementsByTagName('row')]){const cells=[];for(const c of [...r.getElementsByTagName('c')]){const ref=c.getAttribute('r')||'',letters=(ref.match(/[A-Z]+/)||[''])[0];let col=0;for(const ch of letters)col=col*26+ch.charCodeAt(0)-64;col--;const typ=c.getAttribute('t'),v=c.getElementsByTagName('v')[0]?.textContent??'';let val=v;if(typ==='s')val=shared[Number(v)]??'';else if(typ==='inlineStr')val=[...c.getElementsByTagName('t')].map(t=>t.textContent).join('');cells[col]=val;}out.push(cells);}return out;
}
function finishImportedProperties(rows){pendingPropertyRows=rows.slice(1).map(r=>mapPropertyRow(r,rows[0])).filter(p=>p.propertyId||p.ownerName||p.houseNo);renderImportPreview(rows[0],pendingPropertyRows);$('importActions').style.display=pendingPropertyRows.length?'flex':'none';}
function exportPropertiesCSV(){const rows=[['Property ID','Property Name','Owner Name','Phone No.','District','SubDistrict','Zone','Sub-Zone','House No','Plot No','Property Type / License Type','Height (m)','Width (m)','Area (m²)','Balance','Supply No'],...properties.map(p=>[p.propertyId,p.propertyName,p.ownerName,p.phone,p.district,p.subDistrict,p.zone,p.subZone,p.houseNo,p.plotNo,displayPropertyType(p.propertyType||p.licenseType),p.height,p.width,(Number(p.height||0)*Number(p.width||0)||Number(p.size)||0),p.balance,p.supplyNo])];const csv=rows.map(a=>a.map(x=>`"${String(x??'').replaceAll('"','""')}"`).join(',')).join('\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='DHHMH_Property_Database.csv';a.click();}
function addPropertyToCustomers(pid){const p=properties.find(x=>String(x.propertyId)===String(pid));if(!p)return;const existing=customers.find(c=>String(c.propertyId||'')===String(pid));if(existing){Object.assign(existing,propertyToCustomer(p,existing));persistC();renderCustomers();alert('Customer-ka hore ayaa lagu update gareeyey xogta Property-ga.');return;}customers.push(propertyToCustomer(p));persistC();populateCustomerSelect();renderCustomers();findCustomerIds();alert('Property-ga waxaa lagu daray Customers.');}
function tick(){$('clock').textContent=new Date().toLocaleString()}setInterval(tick,1000);tick();setToday();migrateCustomerIds();initProperties();
if(!bills.length){const lb=localStorage.getItem('dhhmh_last_bill');if(lb){try{const x=JSON.parse(lb);if(x&&x.billNo){x.id=x.id||crypto.randomUUID();bills=[x];localStorage.setItem(BK,JSON.stringify(bills));}}catch(e){}}}populateCustomerSelect();dash();renderRecords();renderCustomers();renderProperties();backupStats();initTariffForm();initTaxpayerSearch();


(function(){
  const q=id=>document.getElementById(id);
  const clean=v=>String(v??'').trim();
  const norm=s=>clean(s).toLowerCase().replace(/[\s_\-\/().]/g,'');
  const get=(o,names)=>{
    const m={}; Object.keys(o||{}).forEach(k=>m[norm(k)]=o[k]);
    for(const n of names){ const v=m[norm(n)]; if(v!==undefined && clean(v)!=='') return clean(v); }
    return '';
  };

  function parseCSV(text){
    const rows=[]; let row=[], cell='', quote=false;
    for(let i=0;i<text.length;i++){
      const c=text[i], n=text[i+1];
      if(c==='"'){ if(quote && n==='"'){cell+='"';i++;} else quote=!quote; }
      else if(c===','&&!quote){row.push(cell);cell='';}
      else if((c==='\n'||c==='\r')&&!quote){
        if(c==='\r'&&n==='\n')i++;
        row.push(cell);cell='';
        if(row.some(x=>clean(x)!=='')) rows.push(row);
        row=[];
      } else cell+=c;
    }
    if(cell!==''||row.length){row.push(cell);if(row.some(x=>clean(x)!==''))rows.push(row);}
    if(!rows.length)return [];
    const headers=rows[0].map(x=>clean(x).replace(/^\uFEFF/,''));
    return rows.slice(1).map(r=>Object.fromEntries(headers.map((h,i)=>[h,r[i]??''])));
  }

  function makeCustomer(o,index){
    return {
      id:get(o,['Customer ID','CustomerID','ID','id']),
      name:get(o,['Name','Customer Name','CustomerName']),
      phone:get(o,['Phone','Mobile','Telephone']),
      district:get(o,['District'])||'Hargeisa',
      zone:get(o,['Zone'])||'Maxamuud Haybe',
      xaafadda:get(o,['Xaafadda','Xaafad','Sub Zone','SubZone','Neighborhood']),
      gis:get(o,['GIS / Supply No','GIS/Supply No','GIS No','GIS','Supply No','SupplyNo']),
      revenueType:get(o,['Revenue Type','RevenueType','Type']),
      licenseGrade:get(o,['Business License Grade','License Grade','LicenseGrade']),
      property:get(o,['Property Type','Property','PropertyType']),
      size:get(o,['Size (m²)','Size','Size M2','Square Meter']),
      date:get(o,['Date','Registration Date','RegistrationDate']),
      status:get(o,['Status'])||'Active',
      notes:get(o,['Notes','Note'])
    };
  }

  function parseJSONData(data){
    if(Array.isArray(data)) return data;
    if(data && Array.isArray(data.customers)) return data.customers;
    if(data && Array.isArray(data.records)) return data.records;
    if(data && Array.isArray(data.data)) return data.data;
    return [];
  }

  function findExistingCustomer(c){
    const id=clean(c.id).toLowerCase();
    const phone=clean(c.phone).toLowerCase();
    return (window.customers||[]).find(x =>
      (id && clean(x.id).toLowerCase()===id) ||
      (!id && phone && clean(x.phone).toLowerCase()===phone && clean(x.name).toLowerCase()===clean(c.name).toLowerCase())
    );
  }

  function generateId(){
    let n=(window.customers||[]).length+1, id;
    do { id='CUST-'+String(n++).padStart(6,'0'); }
    while((window.customers||[]).some(c=>clean(c.id)===id));
    return id;
  }

  function saveEverything(){
    if(typeof saveCustomers==='function') saveCustomers();
    if(typeof renderCustomers==='function') renderCustomers();
    if(typeof updateBackupStats==='function') updateBackupStats();

    // Refresh any customer/profile search lists in the current application.
    ['customerSearch','analysisCustomerId','findCustomerSearch','customerIdSearch'].forEach(id=>{
      const e=q(id);
      if(e && typeof e.dispatchEvent==='function')
        e.dispatchEvent(new Event('change',{bubbles:true}));
    });
  }

  q('customerUploadBtn')?.addEventListener('click', async ()=>{
    const status=q('customerUploadStatus');
    const file=q('customerUploadFile')?.files?.[0];
    if(!file){status.innerHTML='<span style="color:#b00">Fadlan dooro CSV ama JSON file.</span>';return;}
    try{
      const text=await file.text();
      let rows;
      if(file.name.toLowerCase().endsWith('.json')) rows=parseJSONData(JSON.parse(text));
      else rows=parseCSV(text);
      if(!rows.length) throw new Error('File-ku xog Customer ah kuma jiro.');

      if(!Array.isArray(window.customers)) window.customers=[];
      let added=0, updated=0, skipped=0;

      rows.forEach((raw,idx)=>{
        const c=makeCustomer(raw,idx);
        if(!c.name){skipped++;return;}
        if(!c.id) c.id=generateId();

        const old=findExistingCustomer(c);
        if(old){
          // Update only fields supplied by the uploaded row, preserving existing values.
          Object.keys(c).forEach(k=>{
            if(k==='id') return;
            if(clean(c[k])!=='') old[k]=c[k];
          });
          updated++;
        }else{
          window.customers.push(c);
          added++;
        }
      });

      saveEverything();

      status.innerHTML='<b>Upload successful.</b> '+
        added+' Customer cusub ayaa lagu daray, '+
        updated+' Customer waa la cusboonaysiiyay, '+
        skipped+' rows waa la dhaafay.<br>'+
        '<small>Xogta hadda waxay ka muuqanaysaa Customer Management/Add Customer iyo Customer Analysis Profile.</small>';

      q('customerUploadFile').value='';
    }catch(err){
      status.innerHTML='<span style="color:#b00">Upload failed: '+String(err.message||err)+'</span>';
    }
  });
})();

window.addEventListener('error',function(e){console.error('DHHMH UI error:',e.error||e.message)});window.addEventListener('unhandledrejection',function(e){console.error('DHHMH async error:',e.reason)});

(function(){
  function $(id){return document.getElementById(id)}
  function fillYears(){
    var fy=$('billFromYear'),ty=$('billToYear'); if(!fy||!ty)return;
    var current=new Date().getFullYear(), years=[];
    for(var y=1990;y<=current;y++) years.push(y);
    var opts=years.map(function(y){return '<option value="'+y+'">'+y+'</option>'}).join('');
    var oldF=fy.value,oldT=ty.value, oldY=$('billYear')&&$('billYear').value;
    fy.innerHTML=opts; ty.innerHTML=opts;
    fy.value=years.indexOf(Number(oldF))>=0?oldF:(years.indexOf(Number(oldY))>=0?oldY:String(current));
    ty.value=years.indexOf(Number(oldT))>=0?oldT:fy.value;
    syncYears();
  }
  function syncYears(){
    var fy=$('billFromYear'),ty=$('billToYear'),y=$('billYear'),n=$('billNoYears');if(!fy||!ty)return;
    var f=Number(fy.value),t=Number(ty.value);if(!f)f=new Date().getFullYear();if(!t||t<f)t=f;
    ty.value=String(t);fy.value=String(f);if(y)y.value=String(f);if(n)n.value=String(t-f+1);
  }
  window.initMergedBillYears=fillYears;
  document.addEventListener('change',function(e){if(e.target&&(e.target.id==='billFromYear'||e.target.id==='billToYear'))syncYears()});
  var oldInit=window.initBillForm;
  window.initBillForm=function(){if(typeof oldInit==='function')oldInit();setTimeout(fillYears,0)};
  setTimeout(fillYears,80);
})();


window.DHHMH_MOBILE_DATA_URL='data:text/html;base64,PCEtLSBESEhNSCB2MS4yLjk2OiBNdWx0aS15ZWFyIHRhcmlmZiBjYWxjdWxhdGlvbiBmcm9tIHYxLjIuNzc7IGRhdGEtc2FmZSAtLT4KPCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9InNvIj4KPGhlYWQ+CjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSx2aWV3cG9ydC1maXQ9Y292ZXIiPgo8bWV0YSBuYW1lPSJ0aGVtZS1jb2xvciIgY29udGVudD0iIzA2MmY1NSI+PG1ldGEgbmFtZT0iYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZSIgY29udGVudD0ieWVzIj48bWV0YSBuYW1lPSJhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlIiBjb250ZW50PSJkZWZhdWx0Ij4KPGxpbmsgcmVsPSJtYW5pZmVzdCIgaHJlZj0ibW9iaWxlLW1hbmlmZXN0Lmpzb24iPjx0aXRsZT5ESEhNSCBNb2JpbGUgdjEuMi45NiBDb2xsZWN0b3I8L3RpdGxlPgo8c3R5bGU+Cjpyb290ey0tbmF2OiMwNjJmNTU7LS1uYXYyOiMwNzNhNjg7LS1iZzojZjNmNmY1Oy0tY2FyZDojZmZmOy0tdGV4dDojMTcyMDJhOy0tbXV0ZWQ6IzY0NzQ4YjstLW9rOiMwODc0NDM7LS1kYW5nZXI6I2I0MjMxOH0KKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Ym9keXttYXJnaW46MDtiYWNrZ3JvdW5kOnZhcigtLWJnKTtmb250LWZhbWlseTpBcmlhbCxzYW5zLXNlcmlmO2NvbG9yOnZhcigtLXRleHQpO3BhZGRpbmctYm90dG9tOjc4cHh9YnV0dG9uLGlucHV0LHNlbGVjdHtmb250OmluaGVyaXR9YnV0dG9ue2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MTBweDtwYWRkaW5nOjExcHggMTRweDtiYWNrZ3JvdW5kOnZhcigtLW9rKTtjb2xvcjojZmZmO2ZvbnQtd2VpZ2h0OjcwMH1idXR0b24uc2Vjb25kYXJ5e2JhY2tncm91bmQ6IzY0NzQ4Yn1idXR0b24uZGFuZ2Vye2JhY2tncm91bmQ6dmFyKC0tZGFuZ2VyKX1idXR0b24ubGlnaHR7YmFja2dyb3VuZDojZThlZWYyO2NvbG9yOiMxNzMyNDd9LmFwcGJhcntwb3NpdGlvbjpzdGlja3k7dG9wOjA7ei1pbmRleDoyMDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsdmFyKC0tbmF2KSx2YXIoLS1uYXYyKSk7Y29sb3I6I2ZmZjtwYWRkaW5nOjEycHggMTRweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMHB4O2JveC1zaGFkb3c6MCAycHggMTJweCAjMDAwMn0uYXBwYmFyIGltZ3t3aWR0aDo0OHB4O2hlaWdodDo0OHB4O21pbi13aWR0aDo0OHB4O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6I2ZmZjtwYWRkaW5nOjJweDtvYmplY3QtZml0OmNvbnRhaW47ZGlzcGxheTpibG9jazt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxO2JveC1zaGFkb3c6MCAycHggOHB4ICMwMDA0fS5hcHBiYXIgaDF7Zm9udC1zaXplOjE1cHg7bWFyZ2luOjB9LmFwcGJhciBzbWFsbHtvcGFjaXR5Oi43NX0ud3JhcHttYXgtd2lkdGg6NzIwcHg7bWFyZ2luOmF1dG87cGFkZGluZzoxMnB4fS5wYWdle2Rpc3BsYXk6bm9uZX0ucGFnZS5hY3RpdmV7ZGlzcGxheTpibG9ja30uY2FyZHtiYWNrZ3JvdW5kOnZhcigtLWNhcmQpO2JvcmRlci1yYWRpdXM6MTRweDtwYWRkaW5nOjE0cHg7bWFyZ2luLWJvdHRvbToxMnB4O2JveC1zaGFkb3c6MCAycHggMTBweCAjMDAwMDAwMGN9LmdyaWR7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO2dhcDoxMHB4fS5maWVsZHttYXJnaW4tYm90dG9tOjEwcHh9LmZpZWxkIGxhYmVse2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6NzAwO21hcmdpbi1ib3R0b206NXB4O2NvbG9yOiM0MjU0NjZ9LmZpZWxkIGlucHV0LC5maWVsZCBzZWxlY3R7d2lkdGg6MTAwJTtwYWRkaW5nOjExcHg7Ym9yZGVyOjFweCBzb2xpZCAjZDVkZGUyO2JvcmRlci1yYWRpdXM6OXB4O2JhY2tncm91bmQ6I2ZmZn0udG9vbGJhcntkaXNwbGF5OmZsZXg7Z2FwOjhweDtmbGV4LXdyYXA6d3JhcH0udG9vbGJhcj4qe2ZsZXg6MTttaW4td2lkdGg6MTIwcHh9LnN0YXRncmlke2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsMWZyKTtnYXA6MTBweH0uc3RhdHtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czoxMnB4O3BhZGRpbmc6MTNweDtib3gtc2hhZG93OjAgMnB4IDhweCAjMDAwMDAwMGJ9LnN0YXQgYntkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZToyMHB4O21hcmdpbi10b3A6NXB4fS5tdXRlZHtjb2xvcjp2YXIoLS1tdXRlZCk7Zm9udC1zaXplOjEycHh9LnJlc3VsdHtwYWRkaW5nOjEycHg7Ym9yZGVyOjFweCBzb2xpZCAjZTBlN2UzO2JvcmRlci1yYWRpdXM6MTBweDttYXJnaW4tdG9wOjhweDtiYWNrZ3JvdW5kOiNmZmZ9LnJlc3VsdCBoM3ttYXJnaW46MCAwIDRweDtmb250LXNpemU6MTRweH0ucmVzdWx0IHB7bWFyZ2luOjNweCAwO2NvbG9yOiM2NDc0OGI7Zm9udC1zaXplOjEycHh9LnJvd3tkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Z2FwOjhweDthbGlnbi1pdGVtczpjZW50ZXJ9LmJhZGdle2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6NHB4IDhweDtib3JkZXItcmFkaXVzOjIwcHg7Zm9udC1zaXplOjExcHg7Zm9udC13ZWlnaHQ6NzAwfS5wYWlke2JhY2tncm91bmQ6I2RjZmNlNztjb2xvcjojMTY2NTM0fS51bnBhaWR7YmFja2dyb3VuZDojZmVlMmUyO2NvbG9yOiM5OTFiMWJ9LnpvbmV7YmFja2dyb3VuZDojZTBmMmZlO2NvbG9yOiMwNzU5ODV9LmVtcHR5e3BhZGRpbmc6MjVweDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojNjQ3NDhifS5ib3R0b217cG9zaXRpb246Zml4ZWQ7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7ei1pbmRleDozMDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsI2ZmZmZmZiwjZjRmOGZiKTtib3JkZXItdG9wOjFweCBzb2xpZCAjY2JkOGUzO2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDQsMWZyKTtwYWRkaW5nOjhweCBtYXgoN3B4LGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkpIGNhbGMoOHB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKSBtYXgoN3B4LGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpKTtib3gtc2hhZG93OjAgLTVweCAyMHB4ICMwYjM1NTAxZn0uYm90dG9tIGJ1dHRvbntiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOiMwNzU5ODU7cGFkZGluZzo5cHggM3B4O2ZvbnQtc2l6ZToxNXB4O2xpbmUtaGVpZ2h0OjEuMzU7Zm9udC13ZWlnaHQ6OTAwO2JvcmRlci1yYWRpdXM6MTJweDttaW4taGVpZ2h0OjU4cHg7dGV4dC1zaGFkb3c6MCAxcHggMCAjZmZmfS5ib3R0b20gYnV0dG9uOmZpcnN0LWxpbmV7Zm9udC1zaXplOjIycHh9LmJvdHRvbSBidXR0b24uYWN0aXZle2NvbG9yOiNmZmZmZmY7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMwNzU5ODUsIzBmNzY2ZSk7Zm9udC13ZWlnaHQ6OTAwO2JveC1zaGFkb3c6MCA1cHggMTRweCAjMDc1OTg1MzN9LmJvdHRvbSBidXR0b246aG92ZXJ7Y29sb3I6IzBmNzY2ZTtiYWNrZ3JvdW5kOiNlY2ZlZmZ9Lmhlcm97YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMwNjM1NWYgMCUsIzBiNmI4ZiA1NSUsIzBmNzY2ZSAxMDAlKTtjb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6MjBweDtwYWRkaW5nOjIwcHg7bWFyZ2luLWJvdHRvbToxMnB4O2JveC1zaGFkb3c6MCAxMHB4IDI4cHggIzA2MzU1ZjJlO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0uaGVybzphZnRlcntjb250ZW50Oifil4gnO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjE4cHg7dG9wOjhweDtmb250LXNpemU6NzhweDtvcGFjaXR5Oi4wOX0uaGVybyBoMnttYXJnaW46MCAwIDVweDtmb250LXNpemU6MjRweH0uaGVybyBwe21hcmdpbjowO2NvbG9yOiNkZmY2ZmY7Zm9udC1zaXplOjEzcHh9LnpvbmUtcGlsbHtkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NnB4O21hcmdpbi10b3A6MTJweDtwYWRkaW5nOjdweCAxMXB4O2JvcmRlci1yYWRpdXM6OTk5cHg7YmFja2dyb3VuZDojZmZmZmZmMWM7Ym9yZGVyOjFweCBzb2xpZCAjZmZmZmZmMzM7Zm9udC13ZWlnaHQ6ODAwO2ZvbnQtc2l6ZToxMnB4fS5tb2RhbHtkaXNwbGF5Om5vbmU7cG9zaXRpb246Zml4ZWQ7aW5zZXQ6MDtiYWNrZ3JvdW5kOiMwMDA4O3otaW5kZXg6NTA7YWxpZ24taXRlbXM6ZmxleC1lbmR9Lm1vZGFsLm9wZW57ZGlzcGxheTpmbGV4fS5tb2RhbGJveHtiYWNrZ3JvdW5kOiNmZmY7d2lkdGg6MTAwJTttYXgtaGVpZ2h0Ojkwdmg7b3ZlcmZsb3c6YXV0bztib3JkZXItcmFkaXVzOjE4cHggMThweCAwIDA7cGFkZGluZzoxNnB4fS5jaGFyZ2V7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoyNHB4IDFmciBhdXRvO2dhcDo3cHg7YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmc6OXB4IDA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VkZjFlZjtmb250LXNpemU6MTJweH0ubm90aWNle3BhZGRpbmc6MTBweDtib3JkZXItcmFkaXVzOjlweDtiYWNrZ3JvdW5kOiNlY2ZkZjU7Y29sb3I6IzA2NWY0Njtmb250LXNpemU6MTJweDttYXJnaW46OHB4IDB9Lndhcm57YmFja2dyb3VuZDojZmZmN2VkO2NvbG9yOiM5YTM0MTJ9LmxvZ2lue21pbi1oZWlnaHQ6MTAwdmg7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6MThweH0ubG9naW4gLmNhcmR7d2lkdGg6bWluKDQzMHB4LDEwMCUpfUBtZWRpYShtYXgtd2lkdGg6NDMwcHgpey5ncmlke2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnJ9LnN0YXRncmlke2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyfS53cmFwe3BhZGRpbmc6OXB4fX0KPC9zdHlsZT48c3R5bGU+LmRoaG1oLWxvZ297ZGlzcGxheTpibG9jayFpbXBvcnRhbnQ7dmlzaWJpbGl0eTp2aXNpYmxlIWltcG9ydGFudDtvYmplY3QtZml0OmNvbnRhaW4haW1wb3J0YW50fTwvc3R5bGU+PC9oZWFkPgo8Ym9keT4KPGRpdiBpZD0ibG9naW4iIGNsYXNzPSJsb2dpbiI+PGRpdiBjbGFzcz0iY2FyZCI+PGRpdiBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPjxpbWcgc3JjPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlNQUFBQ0RDQU1BQUFDWlExaFVBQUFCWEZCTVZFWC8vLy80K1BnaGtRY05RZ3IvL1A4Vm5CTDA5UFFadFJZVmx4TUFqUUFBaXdBQVBnQUFPUUQ4Ky93V2hCRUFRQUFUYVE0WnNCWGM0TnNXcEJRQXJnQVRjUkFBTXdBQWxRQUFzd0FYcXhVQXFnQVJZdzRBblFBQU1BQUFLZ0FBcFFBVGZROEFKUURzNnV3QWhBQU9TZ3JiMjlzQUlRQUFBQURJeU1nQVRnQUFid0FSV2d2UzB0SUFld0FBYVFBQVJRQUFHZ0M3dTd2bTdlZVJ1WktHaG9ZQUZnQnVibTVYWjFkN3lYdko1OFBOMU0zcDgrWXVpaTdDMzhLcnM2dTd4THR2ZG0rbnFLZVRrNU15TWpKUFQwL1Y2ODVGV1VXWnRabTZ5N3FtdHFadHVtNXBuV2xCbjBHbXlhWitzSDUwcjNUbjNPaUd6M0tzeGF4a3cxa3hvekd1M0tOOWhuMGNRUnlab3BsWm8xYzJTalpaWDFscWVtcEpWRWtyUEN0RWlFTjZubnBoc1ZlTnlvMVdpbFk0dHpsRWswS05vNDJXMUlsT3ZpbGV3a0lyZHlwZW5WNWlpR0oyajNaTmNrMDdZVHMxY1RWZmVsOHRYaTBlSGg3a1lJQm9BQUFXOGtsRVFWUjRuTzJiaVZmYTJ0YkFUeVJHZ1VRVUtRRU1wQnlNRFFyYUFHVklpaEFxaU1pZ0RBRnhwczdXOXJidi8xL3IyeWRvYXkyMjF0NzczbHJmdXJ0V0E4YWNuM3ZlSnhHaGYrVmYrVmYrWHdwRmNmK3JsV1BPOHZyUjllSGg0ZHVyMDhQRDY4MzFzalBHL0JmWGR6YVBydCtHYkZaZUVJUlpFRkVVQllIbkowODMxOVgvaGxLWTh0SExLS3crZmllenQrTDFlbjB1SDIvYjNJajl3d0Nic1A3azVPUWR3SzBpUUJQZVc1a0JqdFBtUDRZUld6OE44ZVBmQ05ydDhlTktCU0RFOW5FYnRPQURBbE5jWW52VCtVOFl4WGtVdFJJQUlPQ0pCcW9hcGJacEpQR3o0Z0Q0QkRFemNNSHk4SDhDeE1OZnEzODd3V2FVMkdCeUV2eXdtbTBMd01Cc1hMWFJlNnNvbmxDcm9VMHhqYkE0NDBxblhSTkQ4UWlIdWIrVGdEbTZJK0FyRGI2T3lzTDQ3TGptekZaam9BQmZoVGwxK1h4YWhCRmNMWVJuUERNbm5pR0ZlTzM4MnhES1Y5WWh3R1J0aHpyaUJ4SmRFV2RGRGV0dGJlTmE5RlhvcXM5MVRNZGpncXNvNFptWllpd3o0ZkVNTGJKTy9TMEVzZmVoOGFFS2RxeG9uVG9WQnBGc1RKZ1ZzdVgwc2FabFdyNFRTdXRVaWpSaTJnTmN4NzRCWFk4Y0YxdERDdC9idjhNdE5vWm00S3ZXR3JZMktYcEtHQ0NHcm9saURlR3ptaXBYWjF3VmFldU1QdHloS2h4R2tpdU5La0lMYlhqVHQ2bzQrbE5WY0I5c1pqUUtEYTVXWlJvVmptR3FBL3cydmlWNDI0ZnRXVkVRU1N4Q2hxcTZUcHJsU0xXR1QyYktNVzhtSW1SUjVWWVZPMy9tRmJGRE15UHhQSVFCS21aamZLenBSRVhGSjA1Q09nSkhkQTNGNHlITHdidWU5RlkybThYSDZMcEYwNU1ubmFFcWJKRS9RRkJmOENRZnRMTkZucTlKWlJvMUJyVHRLQ3FhYVZrY3J6YnE4Wm9wZzBwMWxwQ0E2bzhqVzBkRmlkZGs2U1NHNGdSaVpvTGZlRGJDUm9nM2MrSmtqTmJhazZpeHlhanRRMGpMUG5IMk9KN2JjcXE1Wmp4ZXI5Zmo4V1paZFVaeThXTXZnTGpHVzFnZE9NczVEVzhKSGc5Sm5CUENFZjFjaEdGSkdPZWJPYWZXcnNWbXE2ZWdBbkYySitlVW1vM2pXZEUzTkFPczZ4Sm5XNDJtNU16dEVJeDJWZHNzMGh2TXB1Y2trL1VSQ3VIb1dibjdMR29XaFd5REYzWm9jS3ZLYWx2MGlyNTJjMHV1dHdXZjd5VGR5V1NMV2l5bUZZdVp6cUFGUEw3MklMTFZiQU9VY01JY1pTTkNTOE9TT0FPRnhDdCtlQWJFMlZBTEZack96bzR6NnN2bW9jOHJDaFVaeDNtZnF6V0FmRUNERE0rbFRkRTZ4eE11ejJ3Y1J5cWdDNzZGcXdOMHBCNzVabzVKVlJYZi96WkVtV2dCeWdLdmJUaTE0Mndab3RBckhxdHFRL1MxT2hvRlMxSWEvUHJuMjBRR21Zekd3RnNjcEN5UGE2YWhxc2N1ejBTN2h0VVlZL1ZsVU5ybm5mVUtaNytKa0l2T0VpVm9WYUhCT0RGWHZvWlFHQy9qaHVCTEZ5bnpkMDYzTGxybm5jeFFPdHVYbDl2blJWTWI1MkNUeGxaNTNPVnBud3F4bkZCak5sQlZoQ2JqTjZQRGFTSzAwYXJ0ZURZV2lXNU9nUjNxVzNFZzBCQ050TUhsWmFmSUVCTndwaFhnTStLS25lMkxkSVlvYUFBdUd0K3FpeTdYQ2JQVG9kL3pxQzRTaU5EdkZGTG1CZlJxczBJRnR5SGJ4YkVYd3JHdHFtMWZTNE1WTXExV0o4YlJIUFZBQUlRcXBpODdjRTdzM09jeWYyQ21Xa2Z2aFFGOU9sc2hWNXo2amVMeEFYNUFtSnlzMHBYbUdkYzRBb1FkcVNaNE03QnlwclZkNU9pSDY5OEpNVkxySEw0VVQzeGlYTnFCZW9xTEdYVFRMcUpqY3Mycko3ZmVHelpnNXJXeVVFYU5EbjN0OG9xTnJSMnhGYU5SOGRKVXhjK0Vwam9USFFRR0VYMDdZQSt4cWlnZjJ0cFdMZ2JwYnBMLzhFUUVOUVMyRTJyNDdhQzZqakZvUVd4dThTNjRicXdGQkQvWVlBVEYrUW00WjNGVzVIRlRnTWIvR0NuUlkzcUhsSjVRODBrSTlLSFpLMWRqR3YyMjNTWjVxYXdLRTNEUlRLdnp1QlcrOXd6dGNrRFIyckVvcURsQmFETlNxSzFKVTJZbjl2SkpSYlRIazA0WkNvUVRIMU1WbjlkWFZrVVBXS0J6cVQySndGUUZkMDdPUGhiNVhJNFhUcEVXdzRkV2EzVnN6QnA2aWpWaUw0a1dOSGx5SURiUmh1RDFOVlhSRzZPcFZ2b0pacmhIa1ptQlZIb3M4R29USURiT2xpdFpocXZhcGtMUlgyY0o3Z09KNUxiS0ZDUGpsYzNaR1Y5TkZVODBPbmJaZWJJU2JpRzBrd3lOS2p5dnJsdDVpSEZPeHBFWG9hbXAwUFF2UzZqcGtLSlhpS1B5WUV1WWNUV2tXWmRHTXhlWjMwUWdFQzM0b1IzZUp0WDV0cnpCbEprcjJ4VElyeFh4M2djSUE4ajdWWXlPWEs3eHJiYXJTRE9lMzBjQUNPYWlTTWNtK1ZQODFocUtPdEY3RTJGcWFoci9IRUhob1RBY281eUtCc0tST0NGdTdiaHFpTHA4RGdMRUJ3VVFtcFYvajZkQzEraUdHQ0pLRkhIemM0WXJVbVkxU1JEcXFPMmFjVFhMdmpSTmIvK3VMM3lGMEM0MTFBeUZjaHVocVpzb0VCeVdUNk12bzFjL2pjOElUMmJuT3RiU0xsU2Q4RlN3ZUJLak85dlBSQ0RSY1VuVGpkQ1V0QmtLaGFLblRRcS9qNzU4dWZqVEt2N0JSUmhjZkpQV3BOa0ozMWJGVjZTTEY4OUdBSWhPR2pGdmJlKzNGa09uWldnSndvdlJseThXd3o5QndGR3ZPYjlQdU5ybFRZOG5YdmFkMDlTbDlqdDU0UWVJVmdabFgwYkxaOUZENmZNWmR4VGJXSHl4dUx6Nk9NT1o2QjJPN3pNZW4yL0N1M1V5RTZQUG4rc01Rd0dYWU5CaDZBcGZSUmNYNDRoV1BpNitlTEg0OFZFRTZ2M0V6SXkzZFRJRC9US01KdkdtcXdPWmYrU1ZRZTRPS1BOd2VEQkNZM1RuSEtuUjZNYkdZalNHbEk5emk4RHdZa1Y2M0NOQkMxQWZJWkZwNHNRSm5qMWgwR1Z4aEJxWWNybWNqY0dDZExsY2pHWGhrQ3RtczB3Mk85SnNFQnViMFJmNGNMSDM2ZXB3OCtnSUlLWWY5Y29qR0I1ZGJleXNveVBpRFVRTnhkWUlCQzcyTWhxTlRsMXpGRm9NVmJNOG4rWG9DdC9XUXRZNkdxR0l6RGIwaG91clo0c2ZnRjZpME5MeTlQTEh4d2JoS3hqTEpqeXpaU1Q1UEJPaWRPeWl1TllvTlhDeHQ2RjZQTG9ZNDFDSXIyWUZJY3R4RGNKZ2k0OWdvS2dUamR0Y2ZDOU52L2ljazNLY01qYzlQYjMwaURFaVBCQzBabHhpbmE2NVBCVlZITkRGeTFFWEJZWm92QnlOcWh5Q1lmaU9vYXBGUXlNWjZNdzVLaTh2cXplTHl4OFFaWVNYcDZmbmx2VFJES3UraVFtWEUwRkhXS2w3UE9XR3A0aTJSeVpwazZFV3NnR0RNQXREQ0U4WWJLSFExR2dHQ2wwdzNOWGlqYno4SHNuaHBhdWJ2K2JtNWxLakdUNlFZR2hmWTVwaEJNaFAzaE9rdFVaZDByUkZQTVB6R3VoaHZIM01td3locWV0b2REUURmWjVCUjh0WFcwdFh4c2QxbFVFM2MzUFQzZEVPOFJJRzlWYkxoNDdhUnpPZUhWWHNRRmlOekExY2JJcXZad1JCb3hIUEgyZXR0aXhOYjRaT1k0dVBNSERGYmFRdVQ2dWY1M0tJb2ZKcWJtbHVibjVrOGNRaFVNTUE0ckxXOGt5NG1uRXdSV3QwaXVTMHRqRG9DSHkyR0xQeXA5bFFLS3M2Nno5aEFOZlcwTnowVFc3dUw4c3FjcUxWOE5KU2VPUzhvd2hrdjZLOW1YUGlpc2ZubkR5aHFCOU1nY3RPaGpDUVRXSitzaGFxaFVLbjJXaTB1WHk0R1gzcmZKVEJOQWJFd3R5U2s5dGI3YzB2QWNQSWROMGpleVl3dHZ2R0crT2VreTB4alRMcEI2YkExN1lwREYrWmJLMVd5OFppTldleldZNDFtODVtdVd3ZXFLYmVNQjVoalBKU0dIOE1TNmt2TnpjbXc4Z200Z1lZdkoyc1JpRmFCSGVBaERsNEVCVk0zRFptM1NFTERLZE15aHczT2ZMQmNjTURRdEJzTk1yTTl4RGFKZTJjbnBNL3o3RmsybU0rQWNPbkVRamNlOCtFWnhzeEc3R05LTlNLR3JSd0Q5eUJ3Mk1ndHRxRDZ6ODBWOE5tdGRvZVFyUzAyRjl6dlY3NGpEUHlYYXlzTEMyeEl4aVlVOUREVEYyS29UckFsQnN1amJ0NGNIVlFBeEgxSjdXY0EzT1JjNnI0dTVQb2RJYjd1SFNqMkRmd1oyUlJKY2RTMkQxaTlNUlR3ejNtaG9RR0hsRTlucUdvNzVzWHBtWTFFZUQ2anpQY25XUlR2MU1FM2VtZ0QrSFBFZnRuV0duUFNJWERZZitJNE1UVzIvMTJjWDNISXpyYkxWcjdyb2RqbWtNdHdLejBPQVJURHQyZVUvK09uODRNMEUzNGl4UU85N3NMODE4K2hzUHpidmxIQnNsR1FoUGlZb2FyZUdhZFFoclMvUDNycUxkYUlBdnNQQWFodHUvTytmNFVUa3VqamZCSzVNdFN6SHpwbjU5blJ5UUlreUdyRll0WnV1SnBPL2tCbmJuZlFUSDFid3hqMXNab0NOejRkcEw2SFVPc0JRejJ5S2N3MHFWSUQ3SHo4L1lSQ2NKa2FHeHNiQ2h5MVZNbERKMTdEQnplR1J1N0R6RnErR1NhaittS2kxMmlzb09WU2l0b3I2ZDh4SFpnNkQzQzRMb2NETkl1bDRzd29Qc011R3k5enpCbWkvK29DYVpzdTM5RytmNzNiaGxTNFU4V2U3QnJXQjVuOEtRNWpPbWkxL2VRQVRmYlk5K0w5VnA5a0FMdWE0SElLWDdJNEFhR2o1OC81eGl1dXpMUGptYVltZEZVbTdWQ1YzemYyd0tYRzdheGgySnROekZ6enlDNCtlQ0UrNm9pdHNnNS9NUVdJUHIreXZ4b2hoQzA5SnJ6NUtSRzc3amFxaFY4Y2pCa2tIWitKREFYMldsS05DbGhITVBnOG84bjJiNGxNMDREbjNTNEk2VVZkemNmUVU3d1NYYWtUMEpEZTR4cERtOElYb2lMeWwxczRsT2lZNnR0QkloMXJGRXJxNnJhckZldFAzNTNyT3BrdmpLazBabDlKZEoxcEQ2eEMzM0ZQVDhmR0JHYjBEN01lSDNqMTV2WGJhOVhjRmFQZ1oybXZ1YW1lcm0yTS9ialFsYWJkYXc5Wmh0QlFONmFjdDZhdzh4UmprOFI5ak9YTHpuVnZzTmlDWTY0c1lMZlRuaTlKNE8yaGxCZDVLV2RjUmdNNks5QktaVWJqYVk2d2kwZUVXc2ozZ1lLYTF3eVZVRnk5V2RIS2hJMGNJbkJPQkt3V0Y2UEdMN3hvY3ZyNitBcWRWWjJDa0s1enNlR05jdFpKUlZpQjRxaGRheFoyL24xOHJjUU95cEpXRlpyelVtWlRReFhjaGl5djg4ZzZyVWlCUzJXTnlOcUZnY3p0MjlBVnphdk5WVVExNXZXMjlvTnRkaW0zbFpNYTdYNlZBYVFack5xSTU1TElGb2E3dHA3UGRZdzhuMjJsN2VETFg1RVFNaUF1Vi9BU0FPTkNNSzF6TmZRT2VsaE9HZTdySDR0VjZOYzczRjdsT1BnTDZFeTZXRlFoR1dWUFFpR1hOL3ZaeTBXZTJrVVE4SGMzNjl2SEVXRjhmSHFscTJDaG9FQjlvdnZmSlhUS3BHeDlsY202ME94M1IyTWpZWHFFa1FOTm51NVZUYUlTNDVYQ29OV1M2QUcxaGpGb05qSXhpUjVvb0hjUm5PK3JjYW95OXZZd3FQRStVc2haNW16T0gzZVFTbDdWN0owRFN6ckNNeGljWThjdFBDaWQvYjJ5WWJKU2I1OFpGTlJxOGlSblMyWWJTa09EVzhGY1p6NVFkNUY1aFlBT1NUZkhSNlNFNFl2eUdubXozQm1iMDkxV1VNSkdnaGpLYUw3TFpaUjdRUEkzRGVFU1g1VGhjSE5uSEYwckZBSnBDZVFrcEFTdXM0a1pFbm5HQjFGa2d4T3loRUZEamtwR1pHU2tzN29la0pPU0FWSlVTUmRTaFRnczU1UUVGZHNvUnpyVi9Kc3R4dFllTE1BQ0k3ZzZBM0NtK0ZETHJ4NWZ6dTA5WFlLWmozNEpaSnczVmM0bVN3a1pXbE5UdXBKcHJBR3F6Tnd2Q3RUK1hkTUVxRjNpdlJPWGtzb2lUVzVVRWk4U3lZU3lUVmxUVW5zSnFWMzJCd3ZETGFMSVN1QUo1aGk3NDlFUURwdnFxRFJhUE1rMlIrRlZIUG1UU1lUaFZmSzdqczlrZERYbENRREZPOGtKb2wzMGU0dWhkYmVSUklJcmVtSk5TYXAvQ2V5cHV2dmxPUzdRdUxWcmc1dkp0ZW9OUVF6YjR4aTJienNKNHNQS2R3alhSSm0veWhCeUNLa2hXd2gyNllhclNOUUlwWEVDVkF3S0haM1RWOHJKQlZRaUs1ei95a2sxaFI5dDVBbzZHc0psTmhORk5aMC9BNnZ3WG1KcEZKSUpBdms1TWd1TU5DWk5Nb0ZBakxKQ3F6YjRpWU0vdEh1Z05DWDhVbCtoeHpFWVl5UFNvZFJCdElVSlVmazRRZjVCMStWMnlNNGlDaHl4SHdQM2lBdnpSUE1sOFAzelJNbGRLbFJLYllrTFpDSVpBQUgzS0gvMkg1eHp6WnBOUm5XeWJidStzYmlPaWlDWnY1UXlGNlFIUERyUGJmRjBTVlhOMWlMUGY4SUFoZ0QwZ29NWS9nS0dLYXVwQmR2WTJqa1p0RHZDUXpkS2RZdFFiRWNKa2NJelFYbE1RYnVNeDhLUmMvT1RJUXBzcDFuS3VMUENNeTlRYmRiWHlVZTZTZUZxbVMzQng1L05rU1BnZzFDb2VFVy84dEYvT0tsRS8zeEh1a0ZoYnIyTHZZN3pKQlU1RHhyWVJPUElpQm02WFo5SUhqNU1ucVdXOTVFMm0vY3hocWxobFlHcmZyZFNzODl6QXR1Tnp1NmYva3FSdWdyQWNpeTlHRzZqSXFYejkrdnhtVFQzOG15S1pLZnZzcGpDZXJXSytlK0VwQnQ1US9TOURTRHprZnZTajFCT0huOVdsSjJ1d0VKRFBCTi9JOTZwQ21wMEZjQ2tPV04zTndIRHJXZTZ4S29VSTFJdmYzK3FuNWZEWTc5bnordEpDK2JDQytHc25pRlA4K3RJNmIxekh0SnpPR1oxT3YzazFMWGNZOGgrTWorNkRkRlJMOFNFRVY4WWY1YUtpTnQ0amxaZ3FNdVZDeDFMZnRjLzc0bEhQMWYzWGlQaE84aFRFOVAzK0Nsc0lxbzU5eGJaQzR5cEYzcFNzWjlCTXZybjNzRGtjVGlQWUxwNmJrTmVXbEpoU3IrKy9kWUNVS0o5Y3VrWmZrbTdPNHZFUkRqV1B4R01EMDN0NlFvWVlDSXRjNUgzU0Y1SEtGNFVVVE1KK2hjRkwvOUhvSTk4SlNIeHZTNWV3UWdZVmtKTzFSRXAxdFBUMVljZlg0SkRYcVhEU2h5MEdHL0IrSC9TWXE4SjZubGJ3QWdTeXVLUEwreXdhSE1SZWVKdDkxcDdmS2NReklneUVyUXd1N3RRY204VmNQKzA1NEVrYjRzZjBWWSttTHU2MHJ6S3pjVTByYTNuL1FNQmpPNExOTGNxcHZ0U3JyYndYN0tjNGEvMnpVZGMrR3BqKzhwSzNjRTRVL1VSNEJZNllGbFB6bWhJN3BNVTcrZ29FRmY1eFJpOWdMdUVpNzRIV3lKTXZKY0lwYmFBd2gvNFlrSUNDWHZFRDRpdzBFZ3dpbmNjN3ZQSUw5bExyYUw5S01ZTkIzclhLVGh0TldBTzFEQUtUOFlZcldBU2dkTW9RQ3QzRk5pNHF2MENRRWd4S1RjRGY0U1hncUhQOG1SVCt3WEdTYU5UT3N5bzQzQTRBQ2d1TjA2aDhGZFRmbjlmVm1HMUFUbEtSOHdtRjQza1NjdmZuSEgvenVSdW9DdzlQRk1EMHBVM3ZIeFN6Z2NkaFN3d2ZwVDBJdHkydm5sOXZCNU5mcnVFUzFBMGpMcHkrME02TUM1eDdyZEJiQ0RPZEpKQzQ0RmFCb1M0SlpQQ3N0dklnY0I0cWJuL296eWJBNnRPc0x6ODQ1UENrNEZnNlVjTEVNWE82Mkx5L1Nna3lrV3lWT0RuZlBXUld0QUFGQnViOEc5a01KeTMyMngrdzJwai9iY3pvTjhBYWI5VjQvMTBvOURnQzMyZW1mR0hxTmd3MzZ6c2pLL1lpOUprZ0ZUczZFeTVGbEJwdGc1UDA4VE9lOWtZdVRPTEJYcHVmMStmMTZTVW42SDNiM1g4MGVVUEljVUl4R0F5ZXBYcGVwSDBWbUErTndyT1dVSmR3MlVzNnpNejYrd2U3SmtsQllDcGIxVkovTmRCZVlZWjg0b3NRRi8zNURrUFRDRG81dlNrVk9oOHYzOWhFRU04ZnNJQUJFQVZ5enAvV0JFc2FOZGJMaFpCeGdra0ZLd25BOEVYd2U2S2FPM0tzTnNyK1p5UFdPdjVGOElCUHg1R1N1cElObGZjS2ZRdnFUQVpCcm81YUZndkhrT0FxU0pCWERGYmkrbDlDT1lrdlp6emg3cmdQN2MvUm9XaXVqNS91czNDd3NMcjErL1hsZ0lCb052RnZwNVBRSjRyOTEyaTMzaFRZOTVwVVFPVVA3Vm1sNWlMWTVuSW9CUEJGYm13eXVHa1pKMnBRTlZ6a3Y1dmE3YlFRYTJicWtnUjZTSW9odEdQcDgzREYyQlYzS3YxSVdPMWNHeWUxamF4WVVEbkRmMGxONEZwbDkwYnorRk9BQW5zTy8xOWxNU2FIWjEvd0JobzB1VTRYQ3dRWGRwMXlqb3VxSW91bDR3ZGt2dUlQbU9oZTBhWGF5RDI2QVVOdnlHQWREMmd6OTV3QnF1QXZIUTdSbTdLZlNPSytpUlpCNnRMblRCeTJFMXFJY3NTK0lBK25YVzdoak8xUFlTaC9PNHYwRGxkYVR2NmlWbzZkMEh2NU9hUm9qT0FnUzcyMHYxRUQ1Z3NOTG5rZ3lUODVlNmQydVNna2lxYzRDMTdJSGFvVksrY3VQVkE4cDR2VlpJQkVGbEMwK3ZFWStKdE91ZXQ5aTcrVjYrYjZEZEEwWFpRL3Q1ZHdUYVZNZW5GR3Z2N29NRGxQYTZGaFZ5VVlHMUJITHlHM2VlZ1J4bEZDQk5XZGlENTd2Q04rRUtRZkFxdHB2b3BYUnNRUHFQTUc4TXpQUWQ3aDUrVTVLUWsreG5HQ1VrQlZkbE41bW9WeVdqQzY2eUQ5T2RJNWo4UXp2Y2liUzdBSmNEWit2bDgzSWlZcUFEUmtmN0RuOU9lWk9UZ2xoM0ZsNEZEQVhuOHpqb3Q3Z05XYy8zQ24xQzRELzQzZlQ4RTFINkFRZlJSVW8zVW5xa3NJcGxWSElFY3ZvclZYK1ZVNlM4UDdqS01mZzF3dkpyTUl5ZVAyQk5nai8zaFB2QzZBZGtjTGE3Uy9tZTBUZjJYK0U5K3dJa1pkMlpvb3dJN3ZWa1pWZks2NFY4RHloWmxnQUhFMytUR2I0SnBSOHMyRWtJK0x1R1VlZ1pKZnViZ2lLL2xwRVM3SU1tOHZ2ZEZMeWI2QWRZRXJhQmY0REFGRGtmaEhJSUlRbFpvV1RBYnd5eWw5d2pYM3A2b1pEcStsa1R3TDJ3cS85emY3ZUg5VjFZeUV3SkxLVGxicjlFcE4rSGp0WE4yczJ0UDc5N1B5SDlQWCtOOUtoSSt1NUNBQlkwVjNUY2lUbElzcXgvWVYrUC9IZitoREtpSi9ZRGI5NEFDaVJwa3JGWi8rczN3WDVTbC85aEJYd3ZIQWYxdTVCSUpFR01SQUdLMVAvczcxbi9sWC9sWC9sWC9sSDVQNVJYZVZJemVrcm1BQUFBQUVsRlRrU3VRbUNDIiBhbHQ9IkRISE1IIExvZ28iIHN0eWxlPSJ3aWR0aDo5MHB4O2hlaWdodDo5MHB4O29iamVjdC1maXQ6Y29udGFpbjtkaXNwbGF5OmJsb2NrO21hcmdpbjowIGF1dG87dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MSI+PGgyIHN0eWxlPSJtYXJnaW46OHB4IDAgMnB4Ij5ESEhNSCBNb2JpbGUgdjEuMi42MTwvaDI+PGRpdiBjbGFzcz0ibXV0ZWQiPkJpbGwgQ29sbGVjdG9yIEFwcGxpY2F0aW9uPC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0iZmllbGQiIHN0eWxlPSJtYXJnaW4tdG9wOjE4cHgiPjxsYWJlbD5TZWxlY3QgVXNlcjwvbGFiZWw+PHNlbGVjdCBpZD0ibG9naW5Vc2VyIj48L3NlbGVjdD48L2Rpdj48YnV0dG9uIHN0eWxlPSJ3aWR0aDoxMDAlIiBvbmNsaWNrPSJtb2JpbGVMb2dpbigpIj5Mb2dpbjwvYnV0dG9uPjxkaXYgaWQ9ImxvZ2luTm90aWNlIj48L2Rpdj48L2Rpdj48L2Rpdj4KPGRpdiBpZD0iYXBwIiBzdHlsZT0iZGlzcGxheTpub25lIj48aGVhZGVyIGNsYXNzPSJhcHBiYXIiPjxpbWcgc3JjPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlNQUFBQ0RDQU1BQUFDWlExaFVBQUFCWEZCTVZFWC8vLy80K1BnaGtRY05RZ3IvL1A4Vm5CTDA5UFFadFJZVmx4TUFqUUFBaXdBQVBnQUFPUUQ4Ky93V2hCRUFRQUFUYVE0WnNCWGM0TnNXcEJRQXJnQVRjUkFBTXdBQWxRQUFzd0FYcXhVQXFnQVJZdzRBblFBQU1BQUFLZ0FBcFFBVGZROEFKUURzNnV3QWhBQU9TZ3JiMjlzQUlRQUFBQURJeU1nQVRnQUFid0FSV2d2UzB0SUFld0FBYVFBQVJRQUFHZ0M3dTd2bTdlZVJ1WktHaG9ZQUZnQnVibTVYWjFkN3lYdko1OFBOMU0zcDgrWXVpaTdDMzhLcnM2dTd4THR2ZG0rbnFLZVRrNU15TWpKUFQwL1Y2ODVGV1VXWnRabTZ5N3FtdHFadHVtNXBuV2xCbjBHbXlhWitzSDUwcjNUbjNPaUd6M0tzeGF4a3cxa3hvekd1M0tOOWhuMGNRUnlab3BsWm8xYzJTalpaWDFscWVtcEpWRWtyUEN0RWlFTjZubnBoc1ZlTnlvMVdpbFk0dHpsRWswS05vNDJXMUlsT3ZpbGV3a0lyZHlwZW5WNWlpR0oyajNaTmNrMDdZVHMxY1RWZmVsOHRYaTBlSGg3a1lJQm9BQUFXOGtsRVFWUjRuTzJiaVZmYTJ0YkFUeVJHZ1VRVUtRRU1wQnlNRFFyYUFHVklpaEFxaU1pZ0RBRnhwczdXOXJidi8xL3IyeWRvYXkyMjF0NzczbHJmdXJ0V0E4YWNuM3ZlSnhHaGYrVmYrVmYrWHdwRmNmK3JsV1BPOHZyUjllSGg0ZHVyMDhQRDY4MzFzalBHL0JmWGR6YVBydCtHYkZaZUVJUlpFRkVVQllIbkowODMxOVgvaGxLWTh0SExLS3crZmllenQrTDFlbjB1SDIvYjNJajl3d0Nic1A3azVPUWR3SzBpUUJQZVc1a0JqdFBtUDRZUld6OE44ZVBmQ05ydDhlTktCU0RFOW5FYnRPQURBbE5jWW52VCtVOFl4WGtVdFJJQUlPQ0pCcW9hcGJacEpQR3o0Z0Q0QkRFemNNSHk4SDhDeE1OZnEzODd3V2FVMkdCeUV2eXdtbTBMd01Cc1hMWFJlNnNvbmxDcm9VMHhqYkE0NDBxblhSTkQ4UWlIdWIrVGdEbTZJK0FyRGI2T3lzTDQ3TGptekZaam9BQmZoVGwxK1h4YWhCRmNMWVJuUERNbm5pR0ZlTzM4MnhES1Y5WWh3R1J0aHpyaUJ4SmRFV2RGRGV0dGJlTmE5RlhvcXM5MVRNZGpncXNvNFptWllpd3o0ZkVNTGJKTy9TMEVzZmVoOGFFS2RxeG9uVG9WQnBGc1RKZ1ZzdVgwc2FabFdyNFRTdXRVaWpSaTJnTmN4NzRCWFk4Y0YxdERDdC9idjhNdE5vWm00S3ZXR3JZMktYcEtHQ0NHcm9saURlR3ptaXBYWjF3VmFldU1QdHloS2h4R2tpdU5La0lMYlhqVHQ2bzQrbE5WY0I5c1pqUUtEYTVXWlJvVmptR3FBL3cydmlWNDI0ZnRXVkVRU1N4Q2hxcTZUcHJsU0xXR1QyYktNVzhtSW1SUjVWWVZPMy9tRmJGRE15UHhQSVFCS21aamZLenBSRVhGSjA1Q09nSkhkQTNGNHlITHdidWU5RlkybThYSDZMcEYwNU1ubmFFcWJKRS9RRkJmOENRZnRMTkZucTlKWlJvMUJyVHRLQ3FhYVZrY3J6YnE4Wm9wZzBwMWxwQ0E2bzhqVzBkRmlkZGs2U1NHNGdSaVpvTGZlRGJDUm9nM2MrSmtqTmJhazZpeHlhanRRMGpMUG5IMk9KN2JjcXE1Wmp4ZXI5Zmo4V1paZFVaeThXTXZnTGpHVzFnZE9NczVEVzhKSGc5Sm5CUENFZjFjaEdGSkdPZWJPYWZXcnNWbXE2ZWdBbkYySitlVW1vM2pXZEUzTkFPczZ4Sm5XNDJtNU16dEVJeDJWZHNzMGh2TXB1Y2trL1VSQ3VIb1dibjdMR29XaFd5REYzWm9jS3ZLYWx2MGlyNTJjMHV1dHdXZjd5VGR5V1NMV2l5bUZZdVp6cUFGUEw3MklMTFZiQU9VY01JY1pTTkNTOE9TT0FPRnhDdCtlQWJFMlZBTEZack96bzR6NnN2bW9jOHJDaFVaeDNtZnF6V0FmRUNERE0rbFRkRTZ4eE11ejJ3Y1J5cWdDNzZGcXdOMHBCNzVabzVKVlJYZi96WkVtV2dCeWdLdmJUaTE0Mndab3RBckhxdHFRL1MxT2hvRlMxSWEvUHJuMjBRR21Zekd3RnNjcEN5UGE2YWhxc2N1ejBTN2h0VVlZL1ZsVU5ybm5mVUtaNytKa0l2T0VpVm9WYUhCT0RGWHZvWlFHQy9qaHVCTEZ5bnpkMDYzTGxybm5jeFFPdHVYbDl2blJWTWI1MkNUeGxaNTNPVnBud3F4bkZCak5sQlZoQ2JqTjZQRGFTSzAwYXJ0ZURZV2lXNU9nUjNxVzNFZzBCQ050TUhsWmFmSUVCTndwaFhnTStLS25lMkxkSVlvYUFBdUd0K3FpeTdYQ2JQVG9kL3pxQzRTaU5EdkZGTG1CZlJxczBJRnR5SGJ4YkVYd3JHdHFtMWZTNE1WTXExV0o4YlJIUFZBQUlRcXBpODdjRTdzM09jeWYyQ21Xa2Z2aFFGOU9sc2hWNXo2amVMeEFYNUFtSnlzMHBYbUdkYzRBb1FkcVNaNE03QnlwclZkNU9pSDY5OEpNVkxySEw0VVQzeGlYTnFCZW9xTEdYVFRMcUpqY3Mycko3ZmVHelpnNXJXeVVFYU5EbjN0OG9xTnJSMnhGYU5SOGRKVXhjK0Vwam9USFFRR0VYMDdZQSt4cWlnZjJ0cFdMZ2JwYnBMLzhFUUVOUVMyRTJyNDdhQzZqakZvUVd4dThTNjRicXdGQkQvWVlBVEYrUW00WjNGVzVIRlRnTWIvR0NuUlkzcUhsSjVRODBrSTlLSFpLMWRqR3YyMjNTWjVxYXdLRTNEUlRLdnp1QlcrOXd6dGNrRFIyckVvcURsQmFETlNxSzFKVTJZbjl2SkpSYlRIazA0WkNvUVRIMU1WbjlkWFZrVVBXS0J6cVQySndGUUZkMDdPUGhiNVhJNFhUcEVXdzRkV2EzVnN6QnA2aWpWaUw0a1dOSGx5SURiUmh1RDFOVlhSRzZPcFZ2b0pacmhIa1ptQlZIb3M4R29USURiT2xpdFpocXZhcGtMUlgyY0o3Z09KNUxiS0ZDUGpsYzNaR1Y5TkZVODBPbmJaZWJJU2JpRzBrd3lOS2p5dnJsdDVpSEZPeHBFWG9hbXAwUFF2UzZqcGtLSlhpS1B5WUV1WWNUV2tXWmRHTXhlWjMwUWdFQzM0b1IzZUp0WDV0cnpCbEprcjJ4VElyeFh4M2djSUE4ajdWWXlPWEs3eHJiYXJTRE9lMzBjQUNPYWlTTWNtK1ZQODFocUtPdEY3RTJGcWFoci9IRUhob1RBY281eUtCc0tST0NGdTdiaHFpTHA4RGdMRUJ3VVFtcFYvajZkQzEraUdHQ0pLRkhIemM0WXJVbVkxU1JEcXFPMmFjVFhMdmpSTmIvK3VMM3lGMEM0MTFBeUZjaHVocVpzb0VCeVdUNk12bzFjL2pjOElUMmJuT3RiU0xsU2Q4RlN3ZUJLak85dlBSQ0RSY1VuVGpkQ1V0QmtLaGFLblRRcS9qNzU4dWZqVEt2N0JSUmhjZkpQV3BOa0ozMWJGVjZTTEY4OUdBSWhPR2pGdmJlKzNGa09uWldnSndvdlJseThXd3o5QndGR3ZPYjlQdU5ybFRZOG5YdmFkMDlTbDlqdDU0UWVJVmdabFgwYkxaOUZENmZNWmR4VGJXSHl4dUx6Nk9NT1o2QjJPN3pNZW4yL0N1M1V5RTZQUG4rc01Rd0dYWU5CaDZBcGZSUmNYNDRoV1BpNitlTEg0OFZFRTZ2M0V6SXkzZFRJRC9US01KdkdtcXdPWmYrU1ZRZTRPS1BOd2VEQkNZM1RuSEtuUjZNYkdZalNHbEk5emk4RHdZa1Y2M0NOQkMxQWZJWkZwNHNRSm5qMWgwR1Z4aEJxWWNybWNqY0dDZExsY2pHWGhrQ3RtczB3Mk85SnNFQnViMFJmNGNMSDM2ZXB3OCtnSUlLWWY5Y29qR0I1ZGJleXNveVBpRFVRTnhkWUlCQzcyTWhxTlRsMXpGRm9NVmJNOG4rWG9DdC9XUXRZNkdxR0l6RGIwaG91clo0c2ZnRjZpME5MeTlQTEh4d2JoS3hqTEpqeXpaU1Q1UEJPaWRPeWl1TllvTlhDeHQ2RjZQTG9ZNDFDSXIyWUZJY3R4RGNKZ2k0OWdvS2dUamR0Y2ZDOU52L2ljazNLY01qYzlQYjMwaURFaVBCQzBabHhpbmE2NVBCVlZITkRGeTFFWEJZWm92QnlOcWh5Q1lmaU9vYXBGUXlNWjZNdzVLaTh2cXplTHl4OFFaWVNYcDZmbmx2VFJES3UraVFtWEUwRkhXS2w3UE9XR3A0aTJSeVpwazZFV3NnR0RNQXREQ0U4WWJLSFExR2dHQ2wwdzNOWGlqYno4SHNuaHBhdWJ2K2JtNWxLakdUNlFZR2hmWTVwaEJNaFAzaE9rdFVaZDByUkZQTVB6R3VoaHZIM01td3locWV0b2REUURmWjVCUjh0WFcwdFh4c2QxbFVFM2MzUFQzZEVPOFJJRzlWYkxoNDdhUnpPZUhWWHNRRmlOekExY2JJcXZad1JCb3hIUEgyZXR0aXhOYjRaT1k0dVBNSERGYmFRdVQ2dWY1M0tJb2ZKcWJtbHVibjVrOGNRaFVNTUE0ckxXOGt5NG1uRXdSV3QwaXVTMHRqRG9DSHkyR0xQeXA5bFFLS3M2Nno5aEFOZlcwTnowVFc3dUw4c3FjcUxWOE5KU2VPUzhvd2hrdjZLOW1YUGlpc2ZubkR5aHFCOU1nY3RPaGpDUVRXSitzaGFxaFVLbjJXaTB1WHk0R1gzcmZKVEJOQWJFd3R5U2s5dGI3YzB2QWNQSWROMGpleVl3dHZ2R0crT2VreTB4alRMcEI2YkExN1lwREYrWmJLMVd5OFppTldleldZNDFtODVtdVd3ZXFLYmVNQjVoalBKU0dIOE1TNmt2TnpjbXc4Z200Z1lZdkoyc1JpRmFCSGVBaERsNEVCVk0zRFptM1NFTERLZE15aHczT2ZMQmNjTURRdEJzTk1yTTl4RGFKZTJjbnBNL3o3RmsybU0rQWNPbkVRamNlOCtFWnhzeEc3R05LTlNLR3JSd0Q5eUJ3Mk1ndHRxRDZ6ODBWOE5tdGRvZVFyUzAyRjl6dlY3NGpEUHlYYXlzTEMyeEl4aVlVOUREVEYyS29UckFsQnN1amJ0NGNIVlFBeEgxSjdXY0EzT1JjNnI0dTVQb2RJYjd1SFNqMkRmd1oyUlJKY2RTMkQxaTlNUlR3ejNtaG9RR0hsRTlucUdvNzVzWHBtWTFFZUQ2anpQY25XUlR2MU1FM2VtZ0QrSFBFZnRuV0duUFNJWERZZitJNE1UVzIvMTJjWDNISXpyYkxWcjdyb2RqbWtNdHdLejBPQVJURHQyZVUvK09uODRNMEUzNGl4UU85N3NMODE4K2hzUHpidmxIQnNsR1FoUGlZb2FyZUdhZFFoclMvUDNycUxkYUlBdnNQQWFodHUvTytmNFVUa3VqamZCSzVNdFN6SHpwbjU5blJ5UUlreUdyRll0WnV1SnBPL2tCbmJuZlFUSDFid3hqMXNab0NOejRkcEw2SFVPc0JRejJ5S2N3MHFWSUQ3SHo4L1lSQ2NKa2FHeHNiQ2h5MVZNbERKMTdEQnplR1J1N0R6RnErR1NhaittS2kxMmlzb09WU2l0b3I2ZDh4SFpnNkQzQzRMb2NETkl1bDRzd29Qc011R3k5enpCbWkvK29DYVpzdTM5RytmNzNiaGxTNFU4V2U3QnJXQjVuOEtRNWpPbWkxL2VRQVRmYlk5K0w5VnA5a0FMdWE0SElLWDdJNEFhR2o1OC81eGl1dXpMUGptYVltZEZVbTdWQ1YzemYyd0tYRzdheGgySnROekZ6enlDNCtlQ0UrNm9pdHNnNS9NUVdJUHIreXZ4b2hoQzA5SnJ6NUtSRzc3amFxaFY4Y2pCa2tIWitKREFYMldsS05DbGhITVBnOG84bjJiNGxNMDREbjNTNEk2VVZkemNmUVU3d1NYYWtUMEpEZTR4cERtOElYb2lMeWwxczRsT2lZNnR0QkloMXJGRXJxNnJhckZldFAzNTNyT3BrdmpLazBabDlKZEoxcEQ2eEMzM0ZQVDhmR0JHYjBEN01lSDNqMTV2WGJhOVhjRmFQZ1oybXZ1YW1lcm0yTS9ialFsYWJkYXc5Wmh0QlFONmFjdDZhdzh4UmprOFI5ak9YTHpuVnZzTmlDWTY0c1lMZlRuaTlKNE8yaGxCZDVLV2RjUmdNNks5QktaVWJqYVk2d2kwZUVXc2ozZ1lLYTF3eVZVRnk5V2RIS2hJMGNJbkJPQkt3V0Y2UEdMN3hvY3ZyNitBcWRWWjJDa0s1enNlR05jdFpKUlZpQjRxaGRheFoyL24xOHJjUU95cEpXRlpyelVtWlRReFhjaGl5djg4ZzZyVWlCUzJXTnlOcUZnY3p0MjlBVnphdk5WVVExNXZXMjlvTnRkaW0zbFpNYTdYNlZBYVFack5xSTU1TElGb2E3dHA3UGRZdzhuMjJsN2VETFg1RVFNaUF1Vi9BU0FPTkNNSzF6TmZRT2VsaE9HZTdySDR0VjZOYzczRjdsT1BnTDZFeTZXRlFoR1dWUFFpR1hOL3ZaeTBXZTJrVVE4SGMzNjl2SEVXRjhmSHFscTJDaG9FQjlvdnZmSlhUS3BHeDlsY202ME94M1IyTWpZWHFFa1FOTm51NVZUYUlTNDVYQ29OV1M2QUcxaGpGb05qSXhpUjVvb0hjUm5PK3JjYW95OXZZd3FQRStVc2haNW16T0gzZVFTbDdWN0owRFN6ckNNeGljWThjdFBDaWQvYjJ5WWJKU2I1OFpGTlJxOGlSblMyWWJTa09EVzhGY1p6NVFkNUY1aFlBT1NUZkhSNlNFNFl2eUdubXozQm1iMDkxV1VNSkdnaGpLYUw3TFpaUjdRUEkzRGVFU1g1VGhjSE5uSEYwckZBSnBDZVFrcEFTdXM0a1pFbm5HQjFGa2d4T3loRUZEamtwR1pHU2tzN29la0pPU0FWSlVTUmRTaFRnczU1UUVGZHNvUnpyVi9Kc3R4dFllTE1BQ0k3ZzZBM0NtK0ZETHJ4NWZ6dTA5WFlLWmozNEpaSnczVmM0bVN3a1pXbE5UdXBKcHJBR3F6Tnd2Q3RUK1hkTUVxRjNpdlJPWGtzb2lUVzVVRWk4U3lZU3lUVmxUVW5zSnFWMzJCd3ZETGFMSVN1QUo1aGk3NDlFUURwdnFxRFJhUE1rMlIrRlZIUG1UU1lUaFZmSzdqczlrZERYbENRREZPOGtKb2wzMGU0dWhkYmVSUklJcmVtSk5TYXAvQ2V5cHV2dmxPUzdRdUxWcmc1dkp0ZW9OUVF6YjR4aTJienNKNHNQS2R3alhSSm0veWhCeUNLa2hXd2gyNllhclNOUUlwWEVDVkF3S0haM1RWOHJKQlZRaUs1ei95a2sxaFI5dDVBbzZHc0psTmhORk5aMC9BNnZ3WG1KcEZKSUpBdms1TWd1TU5DWk5Nb0ZBakxKQ3F6YjRpWU0vdEh1Z05DWDhVbCtoeHpFWVl5UFNvZFJCdElVSlVmazRRZjVCMStWMnlNNGlDaHl4SHdQM2lBdnpSUE1sOFAzelJNbGRLbFJLYllrTFpDSVpBQUgzS0gvMkg1eHp6WnBOUm5XeWJidStzYmlPaWlDWnY1UXlGNlFIUERyUGJmRjBTVlhOMWlMUGY4SUFoZ0QwZ29NWS9nS0dLYXVwQmR2WTJqa1p0RHZDUXpkS2RZdFFiRWNKa2NJelFYbE1RYnVNeDhLUmMvT1RJUXBzcDFuS3VMUENNeTlRYmRiWHlVZTZTZUZxbVMzQng1L05rU1BnZzFDb2VFVy84dEYvT0tsRS8zeEh1a0ZoYnIyTHZZN3pKQlU1RHhyWVJPUElpQm02WFo5SUhqNU1ucVdXOTVFMm0vY3hocWxobFlHcmZyZFNzODl6QXR1Tnp1NmYva3FSdWdyQWNpeTlHRzZqSXFYejkrdnhtVFQzOG15S1pLZnZzcGpDZXJXSytlK0VwQnQ1US9TOURTRHprZnZTajFCT0huOVdsSjJ1d0VKRFBCTi9JOTZwQ21wMEZjQ2tPV04zTndIRHJXZTZ4S29VSTFJdmYzK3FuNWZEWTc5bnordEpDK2JDQytHc25pRlA4K3RJNmIxekh0SnpPR1oxT3YzazFMWGNZOGgrTWorNkRkRlJMOFNFRVY4WWY1YUtpTnQ0amxaZ3FNdVZDeDFMZnRjLzc0bEhQMWYzWGlQaE84aFRFOVAzK0Nsc0lxbzU5eGJaQzR5cEYzcFNzWjlCTXZybjNzRGtjVGlQWUxwNmJrTmVXbEpoU3IrKy9kWUNVS0o5Y3VrWmZrbTdPNHZFUkRqV1B4R01EMDN0NlFvWVlDSXRjNUgzU0Y1SEtGNFVVVE1KK2hjRkwvOUhvSTk4SlNIeHZTNWV3UWdZVmtKTzFSRXAxdFBUMVljZlg0SkRYcVhEU2h5MEdHL0IrSC9TWXE4SjZubGJ3QWdTeXVLUEwreXdhSE1SZWVKdDkxcDdmS2NReklneUVyUXd1N3RRY204VmNQKzA1NEVrYjRzZjBWWSttTHU2MHJ6S3pjVTByYTNuL1FNQmpPNExOTGNxcHZ0U3JyYndYN0tjNGEvMnpVZGMrR3BqKzhwSzNjRTRVL1VSNEJZNllGbFB6bWhJN3BNVTcrZ29FRmY1eFJpOWdMdUVpNzRIV3lKTXZKY0lwYmFBd2gvNFlrSUNDWHZFRDRpdzBFZ3dpbmNjN3ZQSUw5bExyYUw5S01ZTkIzclhLVGh0TldBTzFEQUtUOFlZcldBU2dkTW9RQ3QzRk5pNHF2MENRRWd4S1RjRGY0U1hncUhQOG1SVCt3WEdTYU5UT3N5bzQzQTRBQ2d1TjA2aDhGZFRmbjlmVm1HMUFUbEtSOHdtRjQza1NjdmZuSEgvenVSdW9DdzlQRk1EMHBVM3ZIeFN6Z2NkaFN3d2ZwVDBJdHkydm5sOXZCNU5mcnVFUzFBMGpMcHkrME02TUM1eDdyZEJiQ0RPZEpKQzQ0RmFCb1M0SlpQQ3N0dklnY0I0cWJuL296eWJBNnRPc0x6ODQ1UENrNEZnNlVjTEVNWE82Mkx5L1Nna3lrV3lWT0RuZlBXUld0QUFGQnViOEc5a01KeTMyMngrdzJwai9iY3pvTjhBYWI5VjQvMTBvOURnQzMyZW1mR0hxTmd3MzZ6c2pLL1lpOUprZ0ZUczZFeTVGbEJwdGc1UDA4VE9lOWtZdVRPTEJYcHVmMStmMTZTVW42SDNiM1g4MGVVUEljVUl4R0F5ZXBYcGVwSDBWbUErTndyT1dVSmR3MlVzNnpNejYrd2U3SmtsQllDcGIxVkovTmRCZVlZWjg0b3NRRi8zNURrUFRDRG81dlNrVk9oOHYzOWhFRU04ZnNJQUJFQVZ5enAvV0JFc2FOZGJMaFpCeGdra0ZLd25BOEVYd2U2S2FPM0tzTnNyK1p5UFdPdjVGOElCUHg1R1N1cElObGZjS2ZRdnFUQVpCcm81YUZndkhrT0FxU0pCWERGYmkrbDlDT1lrdlp6emg3cmdQN2MvUm9XaXVqNS91czNDd3NMcjErL1hsZ0lCb052RnZwNVBRSjRyOTEyaTMzaFRZOTVwVVFPVVA3Vm1sNWlMWTVuSW9CUEJGYm13eXVHa1pKMnBRTlZ6a3Y1dmE3YlFRYTJicWtnUjZTSW9odEdQcDgzREYyQlYzS3YxSVdPMWNHeWUxamF4WVVEbkRmMGxONEZwbDkwYnorRk9BQW5zTy8xOWxNU2FIWjEvd0JobzB1VTRYQ3dRWGRwMXlqb3VxSW91bDR3ZGt2dUlQbU9oZTBhWGF5RDI2QVVOdnlHQWREMmd6OTV3QnF1QXZIUTdSbTdLZlNPSytpUlpCNnRMblRCeTJFMXFJY3NTK0lBK25YVzdoak8xUFlTaC9PNHYwRGxkYVR2NmlWbzZkMEh2NU9hUm9qT0FnUzcyMHYxRUQ1Z3NOTG5rZ3lUODVlNmQydVNna2lxYzRDMTdJSGFvVksrY3VQVkE4cDR2VlpJQkVGbEMwK3ZFWStKdE91ZXQ5aTcrVjYrYjZEZEEwWFpRL3Q1ZHdUYVZNZW5GR3Z2N29NRGxQYTZGaFZ5VVlHMUJITHlHM2VlZ1J4bEZDQk5XZGlENTd2Q04rRUtRZkFxdHB2b3BYUnNRUHFQTUc4TXpQUWQ3aDUrVTVLUWsreG5HQ1VrQlZkbE41bW9WeVdqQzY2eUQ5T2RJNWo4UXp2Y2liUzdBSmNEWit2bDgzSWlZcUFEUmtmN0RuOU9lWk9UZ2xoM0ZsNEZEQVhuOHpqb3Q3Z05XYy8zQ24xQzRELzQzZlQ4RTFINkFRZlJSVW8zVW5xa3NJcGxWSElFY3ZvclZYK1ZVNlM4UDdqS01mZzF3dkpyTUl5ZVAyQk5nai8zaFB2QzZBZGtjTGE3Uy9tZTBUZjJYK0U5K3dJa1pkMlpvb3dJN3ZWa1pWZks2NFY4RHloWmxnQUhFMytUR2I0SnBSOHMyRWtJK0x1R1VlZ1pKZnViZ2lLL2xwRVM3SU1tOHZ2ZEZMeWI2QWRZRXJhQmY0REFGRGtmaEhJSUlRbFpvV1RBYnd5eWw5d2pYM3A2b1pEcStsa1R3TDJ3cS85emY3ZUg5VjFZeUV3SkxLVGxicjlFcE4rSGp0WE4yczJ0UDc5N1B5SDlQWCtOOUtoSSt1NUNBQlkwVjNUY2lUbElzcXgvWVYrUC9IZitoREtpSi9ZRGI5NEFDaVJwa3JGWi8rczN3WDVTbC85aEJYd3ZIQWYxdTVCSUpFR01SQUdLMVAvczcxbi9sWC9sWC9sWC9sSDVQNVJYZVZJemVrcm1BQUFBQUVsRlRrU3VRbUNDIiBhbHQ9IkRISE1IIExvZ28iPjxkaXYgc3R5bGU9ImZsZXg6MSI+PGgxPk1heGFtdXVkIEhheWJlIERpc3RyaWN0PC9oMT48c21hbGwgaWQ9InVzZXJMYWJlbCI+QmlsbCBDb2xsZWN0b3I8L3NtYWxsPjwvZGl2PjxidXR0b24gY2xhc3M9ImxpZ2h0IiBzdHlsZT0icGFkZGluZzo3cHggOXB4IiBvbmNsaWNrPSJtb2JpbGVMb2dvdXQoKSI+4oaqPC9idXR0b24+PC9oZWFkZXI+CjxtYWluIGNsYXNzPSJ3cmFwIj4KPHNlY3Rpb24gaWQ9ImhvbWUiIGNsYXNzPSJwYWdlIGFjdGl2ZSI+PGRpdiBjbGFzcz0iaGVybyI+PGgyPkRISE1IIENvbGxlY3RvcjwvaDI+PHA+VGF4cGF5ZXIgJiBCaWxscyBtYW5hZ2VtZW50PC9wPjxkaXYgY2xhc3M9InpvbmUtcGlsbCI+8J+TjSA8c3BhbiBpZD0iem9uZUxhYmVsIj5BbGwgWm9uZXM8L3NwYW4+IMK3IDxzcGFuIGlkPSJyb2xlTGFiZWwiPkNvbGxlY3Rvcjwvc3Bhbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJjYXJkIiBzdHlsZT0ibWFyZ2luLXRvcDoxMnB4Ij48ZGl2IGNsYXNzPSJmaWVsZCIgc3R5bGU9Im1hcmdpbjowIj48bGFiZWw+Q3VzdG9tZXIgWm9uZSBWaWV3PC9sYWJlbD48c2VsZWN0IGlkPSJob21lQ3VzdG9tZXJab25lIiBvbmNoYW5nZT0icmVuZGVyQ3VzdG9tZXJTdGF0cygpIj48L3NlbGVjdD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJzdGF0Z3JpZCI+PGRpdiBjbGFzcz0ic3RhdCI+PHNwYW4gY2xhc3M9Im11dGVkIj5Ub3RhbCBDdXN0b21lcnM8L3NwYW4+PGIgaWQ9InNDdXN0b21lcnMiPjA8L2I+PC9kaXY+PGRpdiBjbGFzcz0ic3RhdCI+PHNwYW4gY2xhc3M9Im11dGVkIj5HZW5lcmF0ZWQgQ3VzdG9tZXJzPC9zcGFuPjxiIGlkPSJzR2VuZXJhdGVkQ3VzdG9tZXJzIj4wPC9iPjwvZGl2PjxkaXYgY2xhc3M9InN0YXQiPjxzcGFuIGNsYXNzPSJtdXRlZCI+Tm9uLUdlbmVyYXRlZCBDdXN0b21lcnM8L3NwYW4+PGIgaWQ9InNOb25HZW5lcmF0ZWRDdXN0b21lcnMiPjA8L2I+PC9kaXY+PGRpdiBjbGFzcz0ic3RhdCI+PHNwYW4gY2xhc3M9Im11dGVkIj5VbnBhaWQgQmlsbHM8L3NwYW4+PGIgaWQ9InNCaWxscyI+MDwvYj48L2Rpdj48ZGl2IGNsYXNzPSJzdGF0Ij48c3BhbiBjbGFzcz0ibXV0ZWQiPlBhaWQgQmlsbHM8L3NwYW4+PGIgaWQ9InNQYWlkQmlsbHMiPjA8L2I+PC9kaXY+PGRpdiBjbGFzcz0ic3RhdCI+PHNwYW4gY2xhc3M9Im11dGVkIj5Ub2RheSBQYWlkPC9zcGFuPjxiIGlkPSJzVG9kYXlQYWlkIj4wPC9iPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImNhcmQiPjxoMyBzdHlsZT0ibWFyZ2luLXRvcDowIj5RdWljayBBY3Rpb25zPC9oMz48ZGl2IGNsYXNzPSJ0b29sYmFyIj48YnV0dG9uIG9uY2xpY2s9ImdvKCdzZWFyY2gnKSI+8J+UjiBTZWFyY2ggQ3VzdG9tZXI8L2J1dHRvbj48YnV0dG9uIG9uY2xpY2s9ImdvKCdiaWxscycpIj7wn6e+IEJpbGxzPC9idXR0b24+PGJ1dHRvbiBjbGFzcz0ic2Vjb25kYXJ5IiBvbmNsaWNrPSJnbygncHJvZmlsZScpIj7wn5GkIE15IFByb2ZpbGU8L2J1dHRvbj48L2Rpdj48L2Rpdj48ZGl2IGlkPSJob21lTm90aWNlIj48L2Rpdj48L3NlY3Rpb24+CjxzZWN0aW9uIGlkPSJzZWFyY2giIGNsYXNzPSJwYWdlIj48ZGl2IGNsYXNzPSJjYXJkIj48aDIgc3R5bGU9Im1hcmdpbi10b3A6MCI+U2VhcmNoIEN1c3RvbWVyPC9oMj48ZGl2IGNsYXNzPSJmaWVsZCI+PGlucHV0IGlkPSJjdXN0U2VhcmNoIiBwbGFjZWhvbGRlcj0iTmFtZSAvIEN1c3RvbWVyIElEIC8gUGhvbmUgLyBTdXBwbHkgTm8gLyBHSVMiIG9uaW5wdXQ9InJlbmRlckN1c3RvbWVyUmVzdWx0cygpIj48L2Rpdj48ZGl2IGNsYXNzPSJmaWVsZCI+PGxhYmVsPlpvbmU8L2xhYmVsPjxzZWxlY3QgaWQ9ImN1c3Rab25lIiBvbmNoYW5nZT0icmVuZGVyQ3VzdG9tZXJSZXN1bHRzKCkiPjwvc2VsZWN0PjwvZGl2PjxkaXYgaWQ9ImN1c3RvbWVyUmVzdWx0cyI+PC9kaXY+PC9kaXY+PC9zZWN0aW9uPgo8c2VjdGlvbiBpZD0iYmlsbHMiIGNsYXNzPSJwYWdlIj48ZGl2IGNsYXNzPSJjYXJkIj48aDIgc3R5bGU9Im1hcmdpbi10b3A6MCI+QmlsbHM8L2gyPjxkaXYgY2xhc3M9ImdyaWQiPjxkaXYgY2xhc3M9ImZpZWxkIj48bGFiZWw+U3RhdHVzPC9sYWJlbD48c2VsZWN0IGlkPSJiaWxsRmlsdGVyIiBvbmNoYW5nZT0icmVuZGVyTW9iaWxlQmlsbHMoKSI+PG9wdGlvbiB2YWx1ZT0iVW5wYWlkIj5VbnBhaWQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPSJQYWlkIj5QYWlkPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iQWxsIj5BbGw8L29wdGlvbj48L3NlbGVjdD48L2Rpdj48ZGl2IGNsYXNzPSJmaWVsZCI+PGxhYmVsPlpvbmU8L2xhYmVsPjxzZWxlY3QgaWQ9ImJpbGxab25lIiBvbmNoYW5nZT0icmVuZGVyTW9iaWxlQmlsbHMoKSI+PC9zZWxlY3Q+PC9kaXY+PC9kaXY+PGRpdiBpZD0ibW9iaWxlQmlsbHMiPjwvZGl2PjwvZGl2Pjwvc2VjdGlvbj4KCjxzZWN0aW9uIGlkPSJ0YXhwYXllcnMiIGNsYXNzPSJwYWdlIj48ZGl2IGNsYXNzPSJjYXJkIj48aDIgc3R5bGU9Im1hcmdpbi10b3A6MCI+VGF4cGF5ZXJzPC9oMj48cCBjbGFzcz0ibXV0ZWQiPkRoYW1tYWFuIHRheHBheWVycy1rYSBrdSBqaXJhIHpvbmUteWFkYSB1dSB1c2VyLWthbiBsb28gb2dnb2xhYWRheS48L3A+PGRpdiBjbGFzcz0iZ3JpZCI+PGRpdiBjbGFzcz0iZmllbGQiPjxsYWJlbD5TZWxlY3QgWm9uZTwvbGFiZWw+PHNlbGVjdCBpZD0idGF4cGF5ZXJab25lIiBvbmNoYW5nZT0icmVuZGVyVGF4cGF5ZXJzKCkiPjwvc2VsZWN0PjwvZGl2PjxkaXYgY2xhc3M9ImZpZWxkIj48bGFiZWw+U2VhcmNoIFRheHBheWVyPC9sYWJlbD48aW5wdXQgaWQ9InRheHBheWVyU2VhcmNoIiBwbGFjZWhvbGRlcj0iTmFtZSAvIElEIC8gUGhvbmUgLyBTdXBwbHkgTm8gLyBHSVMiIG9uaW5wdXQ9InJlbmRlclRheHBheWVycygpIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSJmaWVsZCI+PGxhYmVsPlNlbGVjdCBMaWNlbnNlPC9sYWJlbD48c2VsZWN0IGlkPSJ0YXhwYXllckxpY2Vuc2UiIG9uY2hhbmdlPSJyZW5kZXJUYXhwYXllcnMoKSI+PG9wdGlvbiB2YWx1ZT0iQUxMIj5BbGwgTGljZW5zZXM8L29wdGlvbj48L3NlbGVjdD48L2Rpdj48ZGl2IGlkPSJ0YXhwYXllclN0YXRzIiBjbGFzcz0ibm90aWNlIj48L2Rpdj48ZGl2IGlkPSJ0YXhwYXllckxpc3QiPjwvZGl2PjwvZGl2Pjwvc2VjdGlvbj4KCjxzZWN0aW9uIGlkPSJwcm9maWxlIiBjbGFzcz0icGFnZSI+PGRpdiBjbGFzcz0iY2FyZCI+PGgyIHN0eWxlPSJtYXJnaW4tdG9wOjAiPk15IFByb2ZpbGU8L2gyPjxkaXYgaWQ9InByb2ZpbGVCb3giPjwvZGl2PjxidXR0b24gY2xhc3M9ImRhbmdlciIgb25jbGljaz0ibW9iaWxlTG9nb3V0KCkiPkxvZ291dDwvYnV0dG9uPjwvZGl2Pjwvc2VjdGlvbj4KPC9tYWluPgo8bmF2IGNsYXNzPSJib3R0b20iPjxidXR0b24gZGF0YS1wYWdlPSJob21lIiBvbmNsaWNrPSJnbygnaG9tZScpIj7ijII8YnI+SG9tZTwvYnV0dG9uPjxidXR0b24gZGF0YS1wYWdlPSJzZWFyY2giIG9uY2xpY2s9ImdvKCdzZWFyY2gnKSI+4oyVPGJyPkN1c3RvbWVyczwvYnV0dG9uPjxidXR0b24gZGF0YS1wYWdlPSJ0YXhwYXllcnMiIG9uY2xpY2s9ImdvKCd0YXhwYXllcnMnKSI+4pakPGJyPlRheHBheWVyczwvYnV0dG9uPjxidXR0b24gZGF0YS1wYWdlPSJiaWxscyIgb25jbGljaz0iZ28oJ2JpbGxzJykiPuKWozxicj5CaWxsczwvYnV0dG9uPjxidXR0b24gZGF0YS1wYWdlPSJwcm9maWxlIiBvbmNsaWNrPSJnbygncHJvZmlsZScpIj7wn5GkPGJyPlByb2ZpbGU8L2J1dHRvbj48L25hdj48L2Rpdj4KPGJ1dHRvbiBzdHlsZT0id2lkdGg6MTAwJSIgb25jbGljaz0ibW9iaWxlUGF5QmlsbCgpIj5Db25maXJtIFBheW1lbnQ8L2J1dHRvbj48ZGl2IGlkPSJwYXlOb3RpY2UiPjwvZGl2PjwvZGl2PjwvZGl2Pgo8ZGl2IGlkPSJjdXN0TW9kYWwiIGNsYXNzPSJtb2RhbCI+PGRpdiBjbGFzcz0ibW9kYWxib3giPjxkaXYgY2xhc3M9InJvdyI+PGgyIHN0eWxlPSJtYXJnaW46MCI+Q3VzdG9tZXI8L2gyPjxidXR0b24gY2xhc3M9ImxpZ2h0IiBvbmNsaWNrPSJjbG9zZU1vZGFsKCdjdXN0TW9kYWwnKSI+4pyVPC9idXR0b24+PC9kaXY+PGRpdiBpZD0iY3VzdEluZm8iPjwvZGl2PjxidXR0b24gc3R5bGU9IndpZHRoOjEwMCUiIG9uY2xpY2s9Im9wZW5DdXN0b21lckJpbGwoKSI+VmlldyBDdXN0b21lciBCaWxsczwvYnV0dG9uPjwvZGl2PjwvZGl2Pgo8ZGl2IGlkPSJiaWxsTW9kYWwiIGNsYXNzPSJtb2RhbCI+PGRpdiBjbGFzcz0ibW9kYWxib3giPjxkaXYgY2xhc3M9InJvdyI+PGgyIHN0eWxlPSJtYXJnaW46MCI+QmlsbCBEZXRhaWxzPC9oMj48YnV0dG9uIGNsYXNzPSJsaWdodCIgb25jbGljaz0iY2xvc2VNb2RhbCgnYmlsbE1vZGFsJykiPuKclTwvYnV0dG9uPjwvZGl2PjxkaXYgaWQ9ImJpbGxJbmZvIj48L2Rpdj48L2Rpdj48L2Rpdj4KPHNjcmlwdD4KY29uc3QgSz17dXNlcnM6J2RoaG1oX2FwcF91c2Vyc192MScsY3VzdG9tZXJzOidkaGhtaF9jdXN0b21lcnNfdjEnLGJpbGxzOidkaGhtaF9iaWxsc192MScscmVjb3JkczonZGhobWhfcmV2ZW51ZV92MScsdGFyaWZmczonZGhobWhfdGFyaWZmc192MScscHJvcGVydGllczonZGhobWhfcHJvcGVydGllc192MScsY3VycmVudDonZGhobWhfY3VycmVudF9hcHBfdXNlcl92MSd9OwpsZXQgbWU9bnVsbCxwYXlJZD1udWxsLHNlbGVjdGVkQ3VzdG9tZXI9bnVsbDsKY29uc3QgJD1pZD0+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO2NvbnN0IGFycj1rPT57dHJ5e2NvbnN0IHg9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrKXx8J1tdJyk7cmV0dXJuIEFycmF5LmlzQXJyYXkoeCk/eDpbXX1jYXRjaChlKXtyZXR1cm4gW119fTtjb25zdCBzYXZlPShrLHYpPT5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrLEpTT04uc3RyaW5naWZ5KHYpKTsKZnVuY3Rpb24gZXNjKHMpe3JldHVybiBTdHJpbmcocz8/JycpLnJlcGxhY2UoL1smPD4iJ10vZyxtPT4oeycmJzonJmFtcDsnLCc8JzonJmx0OycsJz4nOicmZ3Q7JywnIic6JyZxdW90OycsIiciOicmIzM5Oyd9W21dKSl9CmZ1bmN0aW9uIG1vbmV5KG4sYyl7cmV0dXJuIChjPT09J1VTRCc/JyQgJzonU2wuU2ggJykrTnVtYmVyKG58fDApLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCx7bWluaW11bUZyYWN0aW9uRGlnaXRzOjIsbWF4aW11bUZyYWN0aW9uRGlnaXRzOjJ9KX0KZnVuY3Rpb24gdXNlcnMoKXtyZXR1cm4gYXJyKEsudXNlcnMpfQpmdW5jdGlvbiB6b25lcygpe2NvbnN0IG91dD1uZXcgU2V0KCk7dHJ5e2NvbnN0IGQ9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGhobWhfc3lzdGVtX2xvY2F0aW9uc192MScpfHwne30nKTsoZC56b25lc3x8W10pLmZvckVhY2goej0+b3V0LmFkZChTdHJpbmcoei5uYW1lfHx6KSkpfWNhdGNoKGUpe31hcnIoSy5jdXN0b21lcnMpLmZvckVhY2goYz0+e2lmKGMuem9uZSlvdXQuYWRkKFN0cmluZyhjLnpvbmUpKX0pO2FycihLLmJpbGxzKS5mb3JFYWNoKGI9PntpZihiLnpvbmUpb3V0LmFkZChTdHJpbmcoYi56b25lKSl9KTtyZXR1cm4gWy4uLm91dF0uc29ydCgpfQpmdW5jdGlvbiBhbGxvd2VkWm9uZXMoKXtyZXR1cm4gbWU/LnpvbmVzPy5pbmNsdWRlcygnQUxMJyk/WydBTEwnXToobWU/LnpvbmVzfHxbXSl9CmNvbnN0IExJQ0VOU0VfT1BUSU9OUz1bJ0RhcmFqYWRhIDFhYWQnLCdEYXJhamFkYSAyYWFkIEInLCdEYXJhamFkYSAyYWFkJywnRGFyYWphZGEgM2FhZCcsJ0RhcmFqYWRhIDRhYWQnLCdEYXJhamFkYSA1YWFkJywnRGFyYWphZGEgNmFhZCcsJ0RhcmFqYWRhIDdhYWQnXTsKZnVuY3Rpb24gYWxsb3dlZExpY2Vuc2VzKCl7cmV0dXJuIG1lPy5saWNlbnNlcz8uaW5jbHVkZXMoJ0FMTCcpfHwhQXJyYXkuaXNBcnJheShtZT8ubGljZW5zZXMpfHwhbWUubGljZW5zZXMubGVuZ3RoP1snQUxMJ106KG1lLmxpY2Vuc2VzfHxbXSl9CmZ1bmN0aW9uIGluTGljZW5zZSh4KXtjb25zdCBscz1hbGxvd2VkTGljZW5zZXMoKTtpZihscy5pbmNsdWRlcygnQUxMJykpcmV0dXJuIHRydWU7Y29uc3QgZz1TdHJpbmcoeC5saWNlbnNlR3JhZGV8fHguZ3JhZGV8fHgubGljZW5zZVR5cGV8fCcnKS50cmltKCkudG9Mb3dlckNhc2UoKTtyZXR1cm4gbHMuc29tZSh2PT5TdHJpbmcodikudG9Mb3dlckNhc2UoKT09PWcpfQpmdW5jdGlvbiBzZXR1cFRheHBheWVyTGljZW5zZSgpe2NvbnN0IGVsPSQoJ3RheHBheWVyTGljZW5zZScpO2lmKCFlbClyZXR1cm47Y29uc3QgbHM9YWxsb3dlZExpY2Vuc2VzKCk7ZWwuaW5uZXJIVE1MPSc8b3B0aW9uIHZhbHVlPSJBTEwiPkFsbCBMaWNlbnNlczwvb3B0aW9uPicrTElDRU5TRV9PUFRJT05TLmZpbHRlcih4PT5scy5pbmNsdWRlcygnQUxMJyl8fGxzLmluY2x1ZGVzKHgpKS5tYXAoeD0+YDxvcHRpb24gdmFsdWU9IiR7ZXNjKHgpfSI+JHtlc2MoeCl9PC9vcHRpb24+YCkuam9pbignJyk7fQoKZnVuY3Rpb24gY2FuKG1vZHVsZSl7cmV0dXJuIG1lPy5yb2xlPT09J01hbmFnZW1lbnQnfHwhIW1lPy5wZXJtaXNzaW9ucz8uW21vZHVsZV19CmZ1bmN0aW9uIGluWm9uZSh4KXtjb25zdCB6PWFsbG93ZWRab25lcygpO3JldHVybiB6LmluY2x1ZGVzKCdBTEwnKXx8IXoubGVuZ3RofHx6LmluY2x1ZGVzKFN0cmluZyh4LnpvbmV8fCcnKSl9CmZ1bmN0aW9uIG1vYmlsZUxvZ2luKCl7Y29uc3QgaWQ9JCgnbG9naW5Vc2VyJykudmFsdWU7bWU9dXNlcnMoKS5maW5kKHU9PnUuaWQ9PT1pZCk7aWYoIW1lKXskKCdsb2dpbk5vdGljZScpLmlubmVySFRNTD0nPGRpdiBjbGFzcz0ibm90aWNlIHdhcm4iPlVzZXIgbGFtYSBoZWxpbi48L2Rpdj4nO3JldHVybn1sb2NhbFN0b3JhZ2Uuc2V0SXRlbShLLmN1cnJlbnQsbWUuaWQpO3N5bmNQcm9wZXJ0eUN1c3RvbWVyc09uTG9hZCgpO3Nob3dBcHAoKX0KZnVuY3Rpb24gbW9iaWxlTG9nb3V0KCl7bWU9bnVsbDtsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShLLmN1cnJlbnQpOyQoJ2FwcCcpLnN0eWxlLmRpc3BsYXk9J25vbmUnOyQoJ2xvZ2luJykuc3R5bGUuZGlzcGxheT0nZmxleCc7aW5pdExvZ2luKCl9CmZ1bmN0aW9uIGluaXRMb2dpbigpe2NvbnN0IHVzPXVzZXJzKCk7JCgnbG9naW5Vc2VyJykuaW5uZXJIVE1MPXVzLm1hcCh1PT5gPG9wdGlvbiB2YWx1ZT0iJHtlc2ModS5pZCl9Ij4ke2VzYyh1Lm5hbWUpfSDigJQgJHtlc2ModS5yb2xlKX08L29wdGlvbj5gKS5qb2luKCcnKXx8JzxvcHRpb24gdmFsdWU9IiI+Tm8gdXNlcnM8L29wdGlvbj4nfQpmdW5jdGlvbiBjdXN0b21lclpvbmVMaXN0KCl7Y29uc3Qgej1bLi4ubmV3IFNldChhcnIoSy5jdXN0b21lcnMpLm1hcChjPT5TdHJpbmcoYy56b25lfHxjLlpvbmV8fCcnKS50cmltKCkpLmZpbHRlcihCb29sZWFuKSldLnNvcnQoKTtyZXR1cm4gen0KZnVuY3Rpb24gc2V0dXBDdXN0b21lclN0YXRzWm9uZSgpe2NvbnN0IGVsPSQoJ2hvbWVDdXN0b21lclpvbmUnKTtpZighZWwpcmV0dXJuO2NvbnN0IGFsbG93ZWQ9YWxsb3dlZFpvbmVzKCk7Y29uc3Qgem9uZXM9Y3VzdG9tZXJab25lTGlzdCgpLmZpbHRlcih6PT5hbGxvd2VkLmluY2x1ZGVzKCdBTEwnKXx8YWxsb3dlZC5zb21lKGE9PlN0cmluZyhhKS50b0xvd2VyQ2FzZSgpPT09ei50b0xvd2VyQ2FzZSgpKSk7ZWwuaW5uZXJIVE1MPSc8b3B0aW9uIHZhbHVlPSJBTEwiPkFsbCBab25lczwvb3B0aW9uPicrem9uZXMubWFwKHo9PmA8b3B0aW9uIHZhbHVlPSIke2VzYyh6KX0iPiR7ZXNjKHopfTwvb3B0aW9uPmApLmpvaW4oJycpO30KZnVuY3Rpb24gcmVuZGVyQ3VzdG9tZXJTdGF0cygpe2NvbnN0IHNlbD0kKCdob21lQ3VzdG9tZXJab25lJyk/LnZhbHVlfHwnQUxMJztsZXQgY3M9YXJyKEsuY3VzdG9tZXJzKS5maWx0ZXIoaW5ab25lKTtpZihzZWwhPT0nQUxMJyljcz1jcy5maWx0ZXIoYz0+U3RyaW5nKGMuem9uZXx8JycpLnRvTG93ZXJDYXNlKCk9PT1zZWwudG9Mb3dlckNhc2UoKSk7Y29uc3QgYnM9YXJyKEsuYmlsbHMpLmZpbHRlcihpblpvbmUpO2NvbnN0IGlkcz1uZXcgU2V0KGJzLm1hcChiPT5TdHJpbmcoYi5jdXN0b21lcklkfHxiLmN1c3RvbWVySUR8fGIudGF4Q29kZXx8JycpKS5maWx0ZXIoQm9vbGVhbikpO2NvbnN0IGdlbmVyYXRlZD1jcy5maWx0ZXIoYz0+aWRzLmhhcyhTdHJpbmcoYy5jdXN0b21lcklkfHxjLmlkfHxjLnRheENvZGV8fCcnKSkpLmxlbmd0aDtjb25zdCBub249Y3MubGVuZ3RoLWdlbmVyYXRlZDskKCdzQ3VzdG9tZXJzJykudGV4dENvbnRlbnQ9Y3MubGVuZ3RoOyQoJ3NHZW5lcmF0ZWRDdXN0b21lcnMnKS50ZXh0Q29udGVudD1nZW5lcmF0ZWQ7JCgnc05vbkdlbmVyYXRlZEN1c3RvbWVycycpLnRleHRDb250ZW50PW5vbjtsZXQgdWI9YnMuZmlsdGVyKGI9PlN0cmluZyhiLnN0YXR1c3x8J1VucGFpZCcpLnRvTG93ZXJDYXNlKCk9PT0ndW5wYWlkJyk7bGV0IHBiPWJzLmZpbHRlcihiPT5TdHJpbmcoYi5zdGF0dXN8fCcnKS50b0xvd2VyQ2FzZSgpPT09J3BhaWQnKTtpZihzZWwhPT0nQUxMJyl7dWI9dWIuZmlsdGVyKGI9PlN0cmluZyhiLnpvbmV8fCcnKS50b0xvd2VyQ2FzZSgpPT09c2VsLnRvTG93ZXJDYXNlKCkpO3BiPXBiLmZpbHRlcihiPT5TdHJpbmcoYi56b25lfHwnJykudG9Mb3dlckNhc2UoKT09PXNlbC50b0xvd2VyQ2FzZSgpKX0kKCdzQmlsbHMnKS50ZXh0Q29udGVudD11Yi5sZW5ndGg7JCgnc1BhaWRCaWxscycpLnRleHRDb250ZW50PXBiLmxlbmd0aDtjb25zdCB0b2RheT1uZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCk7JCgnc1RvZGF5UGFpZCcpLnRleHRDb250ZW50PXBiLmZpbHRlcihiPT5TdHJpbmcoYi5nckRhdGV8fGIubGFzdEdyRGF0ZXx8Yi5kYXRlfHwnJykuc2xpY2UoMCwxMCk9PT10b2RheSkubGVuZ3RoO30KZnVuY3Rpb24gc3luY1Byb3BlcnR5Q3VzdG9tZXJzT25Mb2FkKCl7CiBjb25zdCBwcm9wcz1hcnIoSy5wcm9wZXJ0aWVzKTsgaWYoIXByb3BzLmxlbmd0aClyZXR1cm47CiBjb25zdCBjcz1hcnIoSy5jdXN0b21lcnMpOyBjb25zdCBieVBpZD1uZXcgTWFwKGNzLmZpbHRlcihjPT5jLnByb3BlcnR5SWQpLm1hcChjPT5bU3RyaW5nKGMucHJvcGVydHlJZCkudHJpbSgpLGNdKSk7IGxldCBjaGFuZ2VkPWZhbHNlOwogcHJvcHMuZm9yRWFjaChwPT57Y29uc3QgcGlkPVN0cmluZyhwLnByb3BlcnR5SWR8fCcnKS50cmltKCk7aWYoIXBpZHx8YnlQaWQuaGFzKHBpZCkpcmV0dXJuOyBjb25zdCBoPXAuaGVpZ2h0Pz8nJztjb25zdCB3PXAud2lkdGg/PycnO2NvbnN0IGFyZWE9cC5hcmVhPz9wLnNpemU/PygoTnVtYmVyKGgpfHwwKSooTnVtYmVyKHcpfHwwKXx8JycpOyBjb25zdCBjPXtjdXN0b21lcklkOnAuY3VzdG9tZXJJZHx8cC50YXhDb2RlfHxwaWQscHJvcGVydHlJZDpwaWQsbmFtZTpwLm93bmVyTmFtZXx8cC5uYW1lfHwnJyxwaG9uZTpwLnBob25lfHwnJyxkaXN0cmljdDpwLmRpc3RyaWN0fHwnSGFyZ2Vpc2EnLHpvbmU6cC56b25lfHwnJyxzdWJab25lOnAuc3ViWm9uZXx8JycsYmxvY2s6cC5ibG9ja3x8JycscGxvdDpwLnBsb3ROb3x8cC5wbG90fHwnJyxwcm9wZXJ0eVR5cGU6cC5wcm9wZXJ0eVR5cGV8fCcnLGhlaWdodDpoLHdpZHRoOncsYXJlYTphcmVhLHN1cHBseU5vOnAuc3VwcGx5Tm98fHAuaG91c2VOb3x8JycsZ2lzUmVmOnAuZ2lzUmVmfHxwLmdpc3x8JycsbGljZW5zZUdyYWRlOnAubGljZW5zZUdyYWRlfHxwLmdyYWRlfHwnJyxzdGF0dXM6cC5zdGF0dXN8fCdBY3RpdmUnLHNvdXJjZTonUHJvcGVydGllcyd9OyBpZighYy5uYW1lKXJldHVybjsgY3MucHVzaChjKTtieVBpZC5zZXQocGlkLGMpO2NoYW5nZWQ9dHJ1ZTt9KTsgaWYoY2hhbmdlZClzYXZlKEsuY3VzdG9tZXJzLGNzKTsKfQoKZnVuY3Rpb24gc2hvd0FwcCgpe2lmKCFjYW4oJ2N1c3RvbWVycycpJiYhY2FuKCdiaWxscycpJiYhY2FuKCdjb2xsZWN0aW9ucycpJiYhY2FuKCd0YXhwYXllcicpKXskKCdsb2dpbk5vdGljZScpLmlubmVySFRNTD0nPGRpdiBjbGFzcz0ibm90aWNlIHdhcm4iPlVzZXIta2FuIG1hIGxhaGEgbW9iaWxlIHBlcm1pc3Npb25zLjwvZGl2Pic7cmV0dXJufSAkKCdsb2dpbicpLnN0eWxlLmRpc3BsYXk9J25vbmUnOyQoJ2FwcCcpLnN0eWxlLmRpc3BsYXk9J2Jsb2NrJzskKCd1c2VyTGFiZWwnKS50ZXh0Q29udGVudD0obWUubmFtZXx8JycpKycgwrcgJysobWUucm9sZXx8JycpOyQoJ3JvbGVMYWJlbCcpLnRleHRDb250ZW50PW1lLnJvbGV8fCdDb2xsZWN0b3InO2NvbnN0IHo9YWxsb3dlZFpvbmVzKCk7JCgnem9uZUxhYmVsJykudGV4dENvbnRlbnQ9ei5pbmNsdWRlcygnQUxMJyk/J0FsbCBab25lcyc6KHoubGVuZ3RoP3ouam9pbignLCAnKTonTm8gWm9uZScpO2NvbnN0IHA9T2JqZWN0LmVudHJpZXMobWUucGVybWlzc2lvbnN8fHt9KS5maWx0ZXIoeD0+eFsxXSkubWFwKHg9PnhbMF0pLmpvaW4oJywgJyl8fCdOb25lJztpZigkKCdwZXJtaXNzaW9uU3VtbWFyeVRleHQnKSkkKCdwZXJtaXNzaW9uU3VtbWFyeVRleHQnKS50ZXh0Q29udGVudD0nWm9uZXM6ICcrKHouaW5jbHVkZXMoJ0FMTCcpPydBbGwgWm9uZXMnOih6LmpvaW4oJywgJyl8fCdObyBab25lJykpKycgwrcgVmlldzogJytwO3NldHVwU2VsZWN0b3JzKCk7c2V0dXBDdXN0b21lclN0YXRzWm9uZSgpO3NldHVwVGF4cGF5ZXJab25lKCk7c2V0dXBUYXhwYXllckxpY2Vuc2UoKTtyZWZyZXNoKCk7cmVuZGVyQ3VzdG9tZXJTdGF0cygpO2dvKCdob21lJyl9CmZ1bmN0aW9uIHNldHVwU2VsZWN0b3JzKCl7Y29uc3QgenM9WydBTEwnLC4uLnpvbmVzKCkuZmlsdGVyKHo9PiFhbGxvd2VkWm9uZXMoKS5sZW5ndGh8fGFsbG93ZWRab25lcygpLmluY2x1ZGVzKCdBTEwnKXx8YWxsb3dlZFpvbmVzKCkuaW5jbHVkZXMoeikpXTskKCdjdXN0Wm9uZScpLmlubmVySFRNTD16cy5tYXAoej0+YDxvcHRpb24gdmFsdWU9IiR7ZXNjKHopfSI+JHt6PT09J0FMTCc/J0FsbCBab25lcyc6ZXNjKHopfTwvb3B0aW9uPmApLmpvaW4oJycpOyQoJ2JpbGxab25lJykuaW5uZXJIVE1MPSQoJ2N1c3Rab25lJykuaW5uZXJIVE1MfQpmdW5jdGlvbiBzZXR1cFRheHBheWVyWm9uZSgpe2NvbnN0IGVsPSQoJ3RheHBheWVyWm9uZScpO2lmKCFlbClyZXR1cm47Y29uc3QgYXo9YWxsb3dlZFpvbmVzKCk7Y29uc3Qgb3B0cz1hei5pbmNsdWRlcygnQUxMJyk/WydBTEwnLC4uLmN1c3RvbWVyWm9uZUxpc3QoKV06YXo7ZWwuaW5uZXJIVE1MPVsuLi5uZXcgU2V0KG9wdHMpXS5tYXAoej0+YDxvcHRpb24gdmFsdWU9IiR7ZXNjKHopfSI+JHt6PT09J0FMTCc/J0FsbCBab25lcyc6ZXNjKHopfTwvb3B0aW9uPmApLmpvaW4oJycpO30KZnVuY3Rpb24gcmVuZGVyVGF4cGF5ZXJzKCl7aWYoIWNhbignY3VzdG9tZXJzJykmJiFjYW4oJ3RheHBheWVyJykpcmV0dXJuICQoJ3RheHBheWVyTGlzdCcpLmlubmVySFRNTD0nPGRpdiBjbGFzcz0iZW1wdHkiPlBlcm1pc3Npb24gbWEgbGloaWQuPC9kaXY+Jztjb25zdCBhej1hbGxvd2VkWm9uZXMoKSxzZWw9JCgndGF4cGF5ZXJab25lJyk/LnZhbHVlfHwnQUxMJyxxPSgkKCd0YXhwYXllclNlYXJjaCcpPy52YWx1ZXx8JycpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO2xldCBjcz1hcnIoSy5jdXN0b21lcnMpLmZpbHRlcihpblpvbmUpO2lmKHNlbCE9PSdBTEwnKWNzPWNzLmZpbHRlcihjPT5TdHJpbmcoYy56b25lfHxjLlpvbmV8fCcnKS50b0xvd2VyQ2FzZSgpPT09c2VsLnRvTG93ZXJDYXNlKCkpO2NvbnN0IGxzZWw9JCgndGF4cGF5ZXJMaWNlbnNlJyk/LnZhbHVlfHwnQUxMJztpZihsc2VsIT09J0FMTCcpY3M9Y3MuZmlsdGVyKGM9PlN0cmluZyhjLmxpY2Vuc2VHcmFkZXx8Yy5ncmFkZXx8Yy5saWNlbnNlVHlwZXx8JycpLnRvTG93ZXJDYXNlKCk9PT1sc2VsLnRvTG93ZXJDYXNlKCkpO2lmKHEpY3M9Y3MuZmlsdGVyKGM9Pk9iamVjdC52YWx1ZXMoY3x8e30pLnNvbWUodj0+U3RyaW5nKHY/PycnKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHEpKSk7JCgndGF4cGF5ZXJTdGF0cycpLmlubmVySFRNTD1gPGI+VG90YWwgVGF4cGF5ZXJzOjwvYj4gJHtjcy5sZW5ndGh9ICZuYnNwOyDCtyAmbmJzcDsgPGI+Wm9uZTo8L2I+ICR7ZXNjKHNlbD09PSdBTEwnPydBbGwgWm9uZXMnOnNlbCl9YDskKCd0YXhwYXllckxpc3QnKS5pbm5lckhUTUw9Y3MubGVuZ3RoP2NzLm1hcCgoYyxpKT0+e2NvbnN0IGxwPWxhc3RQYXltZW50KGMpO2NvbnN0IGg9TnVtYmVyKGMuaGVpZ2h0fHxjLmxlbmd0aHx8MCksdz1OdW1iZXIoYy53aWR0aHx8Yy5icmVhZHRofHwwKTtjb25zdCBzaXplPShoJiZ3KT9gJHtofSDDlyAke3d9IG0ke2MuYXJlYT9gIMK3ICR7Yy5hcmVhfSBtwrJgOicnfWA6KGMuc2l6ZXx8Yy5hcmVhfHwn4oCUJyk7Y29uc3Qgcm93cz1PYmplY3QuZW50cmllcyhjfHx7fSkuZmlsdGVyKChbayx2XSk9PnYhPT11bmRlZmluZWQmJnYhPT1udWxsJiZTdHJpbmcodikhPT0nJykubWFwKChbayx2XSk9PmA8dHI+PHRoPiR7ZXNjKGspfTwvdGg+PHRkPiR7ZXNjKHR5cGVvZiB2PT09J29iamVjdCc/SlNPTi5zdHJpbmdpZnkodik6dil9PC90ZD48L3RyPmApLmpvaW4oJycpO3JldHVybiBgPGRpdiBjbGFzcz0icmVzdWx0IiBzdHlsZT0ibWFyZ2luLWJvdHRvbToxMHB4Ij48ZGl2IGNsYXNzPSJyb3ciPjxkaXYgc3R5bGU9ImZsZXg6MSI+PGgzPiR7aSsxfS4gJHtlc2MoYy5uYW1lfHwnVW5uYW1lZCcpfTwvaDM+PHA+PGI+SUQ6PC9iPiAke2VzYyhjLmN1c3RvbWVySWR8fGMudGF4Q29kZXx8Yy5pZHx8J+KAlCcpfSDCtyA8Yj5ab25lOjwvYj4gJHtlc2MoYy56b25lfHwn4oCUJyl9PC9wPjxwPjxiPlByb3BlcnR5OjwvYj4gJHtlc2MoYy5wcm9wZXJ0eVR5cGV8fGMudHlwZXx8J+KAlCcpfSDCtyA8Yj5TaXplOjwvYj4gJHtlc2Moc2l6ZSl9PC9wPjxwPjxiPkxhc3QgR1I6PC9iPiAke2VzYyhscC5ncil9IMK3IDxiPkRhdGU6PC9iPiAke2VzYyhscC5kYXRlKX08L3A+PC9kaXY+PC9kaXY+PGRldGFpbHM+PHN1bW1hcnk+VmlldyBhbGwgdGF4cGF5ZXIgZGF0YTwvc3VtbWFyeT48ZGl2IHN0eWxlPSJvdmVyZmxvdzphdXRvO21hcmdpbi10b3A6OHB4Ij48dGFibGUgY2xhc3M9ImRhdGEtdGFibGUiPjx0Ym9keT4ke3Jvd3N9PC90Ym9keT48L3RhYmxlPjwvZGl2PjwvZGV0YWlscz48L2Rpdj5gfSkuam9pbignJyk6JzxkaXYgY2xhc3M9ImVtcHR5Ij5UYXhwYXllciBsYW1hIGhlbGluIHpvbmUta2FuLjwvZGl2Pic7fQpmdW5jdGlvbiBnbyhpZCl7ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2UnKS5mb3JFYWNoKHA9PnAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpOyQoaWQpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3R0b20gYnV0dG9uJykuZm9yRWFjaChiPT5iLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsYi5kYXRhc2V0LnBhZ2U9PT1pZCkpO2lmKGlkPT09J3NlYXJjaCcpcmVuZGVyQ3VzdG9tZXJSZXN1bHRzKCk7aWYoaWQ9PT0ndGF4cGF5ZXJzJyl7c2V0dXBUYXhwYXllclpvbmUoKTtzZXR1cFRheHBheWVyTGljZW5zZSgpO3JlbmRlclRheHBheWVycygpO31pZihpZD09PSdiaWxscycpcmVuZGVyTW9iaWxlQmlsbHMoKTtpZihpZD09PSdwcm9maWxlJylyZW5kZXJQcm9maWxlKCl9CmZ1bmN0aW9uIGxhc3RQYXltZW50KGMpe2NvbnN0IGNpZD1TdHJpbmcoYy5jdXN0b21lcklkfHxjLmlkfHwnJyk7Y29uc3QgcnM9YXJyKEsucmVjb3JkcykuZmlsdGVyKHI9PlN0cmluZyhyLmN1c3RvbWVySWR8fCcnKT09PWNpZCYmU3RyaW5nKHIuc3RhdHVzfHwnJykudG9Mb3dlckNhc2UoKT09PSdwYWlkJyk7cnMuc29ydCgoYSxiKT0+U3RyaW5nKGIuZGF0ZXx8Yi5jcmVhdGVkQXR8fCcnKS5sb2NhbGVDb21wYXJlKFN0cmluZyhhLmRhdGV8fGEuY3JlYXRlZEF0fHwnJykpKTtjb25zdCByPXJzWzBdO2lmKHIpcmV0dXJuIHtncjpyLmdyTm98fHIubGFzdEdyTm98fCfigJQnLGRhdGU6ci5kYXRlfHxyLmdyRGF0ZXx8J+KAlCd9O2NvbnN0IGJzPWFycihLLmJpbGxzKS5maWx0ZXIoYj0+U3RyaW5nKGIuY3VzdG9tZXJJZHx8JycpPT09Y2lkJiZTdHJpbmcoYi5zdGF0dXN8fCcnKS50b0xvd2VyQ2FzZSgpPT09J3BhaWQnKTticy5zb3J0KChhLGIpPT5TdHJpbmcoYi5sYXN0R3JEYXRlfHxiLmdyRGF0ZXx8JycpLmxvY2FsZUNvbXBhcmUoU3RyaW5nKGEubGFzdEdyRGF0ZXx8YS5nckRhdGV8fCcnKSkpO2NvbnN0IGI9YnNbMF07cmV0dXJuIGI/e2dyOmIubGFzdEdyTm98fGIuZ3JOb3x8J+KAlCcsZGF0ZTpiLmxhc3RHckRhdGV8fGIuZ3JEYXRlfHwn4oCUJ306e2dyOifigJQnLGRhdGU6J+KAlCd9fQpmdW5jdGlvbiByZW5kZXJDdXN0b21lclJlc3VsdHMoKXtpZighY2FuKCdjdXN0b21lcnMnKSYmIWNhbigndGF4cGF5ZXInKSl7cmV0dXJuICQoJ2N1c3RvbWVyUmVzdWx0cycpLmlubmVySFRNTD0nPGRpdiBjbGFzcz0iZW1wdHkiPlBlcm1pc3Npb24gbWEgbGloaWQuPC9kaXY+J31jb25zdCBxPSQoJ2N1c3RTZWFyY2gnKS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSx6PSQoJ2N1c3Rab25lJykudmFsdWU7bGV0IGNzPWFycihLLmN1c3RvbWVycykuZmlsdGVyKGluWm9uZSk7aWYoeiYmeiE9PSdBTEwnKWNzPWNzLmZpbHRlcihjPT5TdHJpbmcoYy56b25lfHwnJyk9PT16KTtpZihxKWNzPWNzLmZpbHRlcihjPT5bYy5uYW1lLGMuY3VzdG9tZXJJZCxjLnRheENvZGUsYy5waG9uZSxjLm1vYmlsZSxjLmdpcyxjLnN1cHBseU5vLGMucHJvcGVydHlJZF0uc29tZSh2PT5TdHJpbmcodnx8JycpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocSkpKTtjcz1jcy5zbGljZSgwLDUwKTskKCdjdXN0b21lclJlc3VsdHMnKS5pbm5lckhUTUw9Y3MubGVuZ3RoP2NzLm1hcChjPT57Y29uc3QgbHA9bGFzdFBheW1lbnQoYyk7Y29uc3QgaD1OdW1iZXIoYy5oZWlnaHR8fGMubGVuZ3RofHwwKSx3PU51bWJlcihjLndpZHRofHxjLmJyZWFkdGh8fDApO2NvbnN0IHNpemU9KGgmJncpP2Ake2h9IMOXICR7d30gbSR7Yy5hcmVhP2AgwrcgQXJlYSAke2VzYyhjLmFyZWEpfSBtwrJgOicnfWA6KGMuc2l6ZXx8J+KAlCcpO3JldHVybiBgPGRpdiBjbGFzcz0icmVzdWx0Ij48ZGl2IGNsYXNzPSJyb3ciPjxkaXYgc3R5bGU9ImZsZXg6MSI+PGgzPiR7ZXNjKGMubmFtZXx8J1VubmFtZWQnKX08L2gzPjxwPiR7ZXNjKGMuY3VzdG9tZXJJZHx8Yy50YXhDb2RlfHwnJyl9IMK3ICR7ZXNjKGMucGhvbmV8fGMubW9iaWxlfHwnJyl9PC9wPjxwPiR7ZXNjKGMuem9uZXx8JycpfSDCtyAke2VzYyhjLnByb3BlcnR5VHlwZXx8Yy50eXBlfHwnJyl9PC9wPjxwPjxiPlByb3BlcnR5IFNpemU6PC9iPiAke2VzYyhzaXplKX08L3A+PHA+PGI+TGFzdCBHUjo8L2I+ICR7ZXNjKGxwLmdyKX0gJm5ic3A7IDxiPkRhdGU6PC9iPiAke2VzYyhscC5kYXRlKX08L3A+PC9kaXY+PGJ1dHRvbiBvbmNsaWNrPSJ2aWV3Q3VzdG9tZXIoJyR7ZXNjKGMuY3VzdG9tZXJJZHx8Yy5pZHx8JycpfScpIj5WaWV3PC9idXR0b24+PC9kaXY+PC9kaXY+YH0pLmpvaW4oJycpOic8ZGl2IGNsYXNzPSJlbXB0eSI+Q3VzdG9tZXIgbGFtYSBoZWxpbi48L2Rpdj4nfQpmdW5jdGlvbiB2aWV3Q3VzdG9tZXIoaWQpe3NlbGVjdGVkQ3VzdG9tZXI9YXJyKEsuY3VzdG9tZXJzKS5maW5kKGM9PlN0cmluZyhjLmN1c3RvbWVySWR8fGMuaWQpPT09U3RyaW5nKGlkKSk7aWYoIXNlbGVjdGVkQ3VzdG9tZXIpcmV0dXJuO2NvbnN0IGxwPWxhc3RQYXltZW50KHNlbGVjdGVkQ3VzdG9tZXIpO2NvbnN0IGg9TnVtYmVyKHNlbGVjdGVkQ3VzdG9tZXIuaGVpZ2h0fHxzZWxlY3RlZEN1c3RvbWVyLmxlbmd0aHx8MCksdz1OdW1iZXIoc2VsZWN0ZWRDdXN0b21lci53aWR0aHx8c2VsZWN0ZWRDdXN0b21lci5icmVhZHRofHwwKTtjb25zdCBzaXplPShoJiZ3KT9gJHtofSDDlyAke3d9IG0ke3NlbGVjdGVkQ3VzdG9tZXIuYXJlYT9gIMK3ICR7c2VsZWN0ZWRDdXN0b21lci5hcmVhfSBtwrJgOicnfWA6KHNlbGVjdGVkQ3VzdG9tZXIuc2l6ZXx8J+KAlCcpOyQoJ2N1c3RJbmZvJykuaW5uZXJIVE1MPWA8ZGl2IGNsYXNzPSJjYXJkIiBzdHlsZT0iYm94LXNoYWRvdzpub25lO3BhZGRpbmc6MCI+PGgzPiR7ZXNjKHNlbGVjdGVkQ3VzdG9tZXIubmFtZXx8JycpfTwvaDM+PHA+SUQ6ICR7ZXNjKHNlbGVjdGVkQ3VzdG9tZXIuY3VzdG9tZXJJZHx8JycpfTwvcD48cD5ab25lOiAke2VzYyhzZWxlY3RlZEN1c3RvbWVyLnpvbmV8fCcnKX0gwrcgVHlwZTogJHtlc2Moc2VsZWN0ZWRDdXN0b21lci50eXBlfHwnJyl9PC9wPjxwPlByb3BlcnR5OiAke2VzYyhzZWxlY3RlZEN1c3RvbWVyLnByb3BlcnR5VHlwZXx8J+KAlCcpfSDCtyBHcmFkZTogJHtlc2Moc2VsZWN0ZWRDdXN0b21lci5saWNlbnNlR3JhZGV8fHNlbGVjdGVkQ3VzdG9tZXIuZ3JhZGV8fCfigJQnKX08L3A+PGRpdiBjbGFzcz0ibm90aWNlIj48Yj5SZWdpc3RlcmVkIFByb3BlcnR5IFNpemU6PC9iPiAke2VzYyhzaXplKX08YnI+PGI+TGFzdCBHUiBObzo8L2I+ICR7ZXNjKGxwLmdyKX08YnI+PGI+TGFzdCBHUiBEYXRlOjwvYj4gJHtlc2MobHAuZGF0ZSl9PC9kaXY+PC9kaXY+YDskKCdjdXN0TW9kYWwnKS5jbGFzc0xpc3QuYWRkKCdvcGVuJyl9CmZ1bmN0aW9uIG9wZW5DdXN0b21lckJpbGwoKXtjbG9zZU1vZGFsKCdjdXN0TW9kYWwnKTtnbygnYmlsbHMnKTtzZXRUaW1lb3V0KCgpPT57Y29uc3QgYj1hcnIoSy5iaWxscykuZmlsdGVyKHg9PlN0cmluZyh4LmN1c3RvbWVySWQpPT09U3RyaW5nKHNlbGVjdGVkQ3VzdG9tZXIuY3VzdG9tZXJJZCkmJmluWm9uZSh4KSk7JCgnYmlsbEZpbHRlcicpLnZhbHVlPSdBbGwnO3JlbmRlck1vYmlsZUJpbGxzKGIpfSwzMCl9CmZ1bmN0aW9uIHJlbmRlck1vYmlsZUJpbGxzKHByZSl7aWYoIWNhbignYmlsbHMnKSYmIWNhbigndGF4cGF5ZXInKSlyZXR1cm4gJCgnbW9iaWxlQmlsbHMnKS5pbm5lckhUTUw9JzxkaXYgY2xhc3M9ImVtcHR5Ij5QZXJtaXNzaW9uIG1hIGxpaGlkLjwvZGl2Pic7bGV0IGJzPXByZXx8YXJyKEsuYmlsbHMpLmZpbHRlcihpblpvbmUpO2NvbnN0IGY9JCgnYmlsbEZpbHRlcicpLnZhbHVlLHo9JCgnYmlsbFpvbmUnKS52YWx1ZTtpZighcHJlKXtpZihmIT09J0FsbCcpYnM9YnMuZmlsdGVyKGI9PlN0cmluZyhiLnN0YXR1c3x8J1VucGFpZCcpPT09Zik7aWYoeiYmeiE9PSdBTEwnKWJzPWJzLmZpbHRlcihiPT5TdHJpbmcoYi56b25lfHwnJyk9PT16KX1icz1icy5zbGljZSgwLDEwMCk7JCgnbW9iaWxlQmlsbHMnKS5pbm5lckhUTUw9YnMubGVuZ3RoP2JzLm1hcChiPT57Y29uc3QgcGFpZD1TdHJpbmcoYi5zdGF0dXN8fCdVbnBhaWQnKS50b0xvd2VyQ2FzZSgpPT09J3BhaWQnO2NvbnN0IGN1c3RvbWVyPWFycihLLmN1c3RvbWVycykuZmluZChjPT5TdHJpbmcoYy5jdXN0b21lcklkfHxjLmlkKT09PVN0cmluZyhiLmN1c3RvbWVySWQpKTtyZXR1cm4gYDxkaXYgY2xhc3M9InJlc3VsdCI+PGRpdiBjbGFzcz0icm93Ij48ZGl2IHN0eWxlPSJmbGV4OjEiPjxoMz4ke2VzYyhiLmJpbGxOb3x8J0JpbGwnKX08L2gzPjxwPiR7ZXNjKGIuY3VzdG9tZXJOYW1lfHxjdXN0b21lcj8ubmFtZXx8JycpfSDCtyAke2VzYyhiLnR5cGV8fGIuY2F0ZWdvcnl8fCcnKX08L3A+PHA+JHtlc2MoYi56b25lfHxjdXN0b21lcj8uem9uZXx8JycpfSDCtyAke2VzYyhiLnRhcmlmZlllYXJ8fGIubW9udGh8fCcnKX08L3A+PHA+PGI+QW1vdW50OjwvYj4gJHttb25leShiLmFtb3VudCxiLmN1cnJlbmN5KX08L3A+JHtwYWlkP2A8cCBzdHlsZT0ibWFyZ2luLXRvcDo4cHg7Y29sb3I6IzE2NjUzNDtmb250LXdlaWdodDo4MDAiPkdSIE5vOiAke2VzYyhiLmxhc3RHck5vfHxiLmdyTm98fCfigJQnKX0gwrcgR1IgRGF0ZTogJHtlc2MoYi5sYXN0R3JEYXRlfHxiLmdyRGF0ZXx8J+KAlCcpfTwvcD5gOmA8cCBzdHlsZT0ibWFyZ2luLXRvcDo4cHg7Y29sb3I6Izk5MWIxYjtmb250LXdlaWdodDo4MDAiPlBlbmRpbmc6ICR7bW9uZXkoYi5hbW91bnQsYi5jdXJyZW5jeSl9PC9wPmB9PC9kaXY+PGRpdj48c3BhbiBjbGFzcz0iYmFkZ2UgJHtwYWlkPydwYWlkJzondW5wYWlkJ30iPiR7cGFpZD8nUGFpZCc6J1VucGFpZCd9PC9zcGFuPjxicj48YnV0dG9uIHN0eWxlPSJtYXJnaW4tdG9wOjhweCIgb25jbGljaz0idmlld0JpbGwoJyR7ZXNjKGIuaWQpfScpIj5WaWV3PC9idXR0b24+PC9kaXY+PC9kaXY+PC9kaXY+YH0pLmpvaW4oJycpOic8ZGl2IGNsYXNzPSJlbXB0eSI+QmlsbCBsYW1hIGhlbGluLjwvZGl2Pid9CmZ1bmN0aW9uIHZpZXdCaWxsKGlkKXtjb25zdCBiPWFycihLLmJpbGxzKS5maW5kKHg9PlN0cmluZyh4LmlkKT09PVN0cmluZyhpZCkpO2lmKCFiKXJldHVybjtjb25zdCBjPWFycihLLmN1c3RvbWVycykuZmluZCh4PT5TdHJpbmcoeC5jdXN0b21lcklkfHx4LmlkKT09PVN0cmluZyhiLmN1c3RvbWVySWQpKXx8e307Y29uc3QgcGFpZD1TdHJpbmcoYi5zdGF0dXN8fCdVbnBhaWQnKS50b0xvd2VyQ2FzZSgpPT09J3BhaWQnO2NvbnN0IGg9TnVtYmVyKGMuaGVpZ2h0fHxjLmxlbmd0aHx8MCksdz1OdW1iZXIoYy53aWR0aHx8Yy5icmVhZHRofHwwKTtjb25zdCBzaXplPShoJiZ3KT9gJHtofSDDlyAke3d9IG0ke2MuYXJlYT9gIMK3IEFyZWEgJHtlc2MoYy5hcmVhKX0gbcKyYDonJ31gOihjLnNpemV8fCfigJQnKTtjb25zdCBwZW5kaW5nPXBhaWQ/MDpOdW1iZXIoYi5hbW91bnR8fDApOyQoJ2JpbGxJbmZvJykuaW5uZXJIVE1MPWA8ZGl2IGNsYXNzPSJjYXJkIiBzdHlsZT0iYm94LXNoYWRvdzpub25lO3BhZGRpbmc6MCI+PGRpdiBjbGFzcz0ibm90aWNlICR7cGFpZD8nJzond2Fybid9Ij48Yj5TdGF0dXM6ICR7cGFpZD8nUEFJRCc6J1VOUEFJRCd9PC9iPjxicj4ke3BhaWQ/YEdSIE5vOiAke2VzYyhiLmxhc3RHck5vfHxiLmdyTm98fCfigJQnKX0gwrcgR1IgRGF0ZTogJHtlc2MoYi5sYXN0R3JEYXRlfHxiLmdyRGF0ZXx8J+KAlCcpfWA6YFBlbmRpbmc6IDxiPiR7bW9uZXkocGVuZGluZyxiLmN1cnJlbmN5KX08L2I+YH08L2Rpdj48aDM+JHtlc2MoYy5uYW1lfHxiLmN1c3RvbWVyTmFtZXx8JycpfTwvaDM+PHA+PGI+Q3VzdG9tZXIgSUQ6PC9iPiAke2VzYyhjLmN1c3RvbWVySWR8fGIuY3VzdG9tZXJJZHx8J+KAlCcpfTwvcD48cD48Yj5QaG9uZTo8L2I+ICR7ZXNjKGMucGhvbmV8fGMubW9iaWxlfHwn4oCUJyl9PC9wPjxwPjxiPkRpc3RyaWN0OjwvYj4gJHtlc2MoYy5kaXN0cmljdHx8Yi5kaXN0cmljdHx8J+KAlCcpfTwvcD48cD48Yj5ab25lOjwvYj4gJHtlc2MoYy56b25lfHxiLnpvbmV8fCfigJQnKX08L3A+PHA+PGI+UHJvcGVydHkgVHlwZTo8L2I+ICR7ZXNjKGMucHJvcGVydHlUeXBlfHxjLnR5cGV8fCfigJQnKX08L3A+PHA+PGI+TGljZW5zZSBHcmFkZTo8L2I+ICR7ZXNjKGMubGljZW5zZUdyYWRlfHxjLmdyYWRlfHxiLmdyYWRlfHwn4oCUJyl9PC9wPjxwPjxiPlJlZ2lzdGVyZWQgUHJvcGVydHkgU2l6ZTo8L2I+ICR7ZXNjKHNpemUpfTwvcD48aHI+PHA+PGI+QmlsbCBObzo8L2I+ICR7ZXNjKGIuYmlsbE5vfHwn4oCUJyl9PC9wPjxwPjxiPkJpbGwgVHlwZTo8L2I+ICR7ZXNjKGIudHlwZXx8Yi5jYXRlZ29yeXx8J+KAlCcpfTwvcD48cD48Yj5CaWxsIFllYXI6PC9iPiAke2VzYyhiLnRhcmlmZlllYXJ8fGIubW9udGh8fCfigJQnKX08L3A+PHA+PGI+QmlsbCBBbW91bnQ6PC9iPiAke21vbmV5KGIuYW1vdW50LGIuY3VycmVuY3kpfTwvcD48cD48Yj5QZW5kaW5nIEFtb3VudDo8L2I+ICR7bW9uZXkocGVuZGluZyxiLmN1cnJlbmN5KX08L3A+PC9kaXY+YDskKCdiaWxsTW9kYWwnKS5jbGFzc0xpc3QuYWRkKCdvcGVuJyl9CmZ1bmN0aW9uIHJlbmRlclByb2ZpbGUoKXtjb25zdCB6PWFsbG93ZWRab25lcygpOyQoJ3Byb2ZpbGVCb3gnKS5pbm5lckhUTUw9YDxwPjxiPk5hbWU6PC9iPiAke2VzYyhtZS5uYW1lfHwnJyl9PC9wPjxwPjxiPlVzZXJuYW1lOjwvYj4gJHtlc2MobWUudXNlcm5hbWV8fCcnKX08L3A+PHA+PGI+Um9sZTo8L2I+ICR7ZXNjKG1lLnJvbGV8fCcnKX08L3A+PHA+PGI+Wm9uZXM6PC9iPiAke3ouaW5jbHVkZXMoJ0FMTCcpPydBbGwgWm9uZXMnOmVzYyh6LmpvaW4oJywgJyl8fCdObyBab25lJyl9PC9wPjxwPjxiPlBlcm1pc3Npb25zOjwvYj4gJHtPYmplY3QuZW50cmllcyhtZS5wZXJtaXNzaW9uc3x8e30pLmZpbHRlcih4PT54WzFdKS5tYXAoeD0+ZXNjKHhbMF0pKS5qb2luKCcsICcpfHwnTm9uZSd9PC9wPmB9CmZ1bmN0aW9uIHJlZnJlc2goKXtzeW5jUHJvcGVydHlDdXN0b21lcnNPbkxvYWQoKTtjb25zdCBjcz1hcnIoSy5jdXN0b21lcnMpLmZpbHRlcihpblpvbmUpLGJzPWFycihLLmJpbGxzKS5maWx0ZXIoaW5ab25lKSxycz1hcnIoSy5yZWNvcmRzKS5maWx0ZXIoaW5ab25lKTtjb25zdCBwYWlkPWJzLmZpbHRlcihiPT5TdHJpbmcoYi5zdGF0dXN8fCcnKS50b0xvd2VyQ2FzZSgpPT09J3BhaWQnKTskKCdzQ3VzdG9tZXJzJykudGV4dENvbnRlbnQ9Y3MubGVuZ3RoOyQoJ3NCaWxscycpLnRleHRDb250ZW50PWJzLmZpbHRlcihiPT5TdHJpbmcoYi5zdGF0dXN8fCcnKS50b0xvd2VyQ2FzZSgpIT09J3BhaWQnKS5sZW5ndGg7JCgnc1BhaWRCaWxscycpLnRleHRDb250ZW50PXBhaWQubGVuZ3RoO2NvbnN0IHRvZGF5PW5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKTskKCdzVG9kYXlQYWlkJykudGV4dENvbnRlbnQ9cGFpZC5maWx0ZXIoYj0+U3RyaW5nKGIubGFzdEdyRGF0ZXx8Yi5nckRhdGV8fGIuZGF0ZXx8JycpLnNsaWNlKDAsMTApPT09dG9kYXkpLnJlZHVjZSgoYSxiKT0+YStOdW1iZXIoYi5hbW91bnR8fDApLDApLnRvTG9jYWxlU3RyaW5nKCk7c2V0dXBDdXN0b21lclN0YXRzWm9uZSgpO3JlbmRlckN1c3RvbWVyU3RhdHMoKX0KZnVuY3Rpb24gY2xvc2VNb2RhbChpZCl7JChpZCkuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpfQp3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsKCk9PntpZihtZSl7c2V0dXBTZWxlY3RvcnMoKTtyZWZyZXNoKCk7cmVuZGVyQ3VzdG9tZXJSZXN1bHRzKCk7cmVuZGVyTW9iaWxlQmlsbHMoKX19KTsKaW5pdExvZ2luKCk7Y29uc3Qgc2F2ZWQ9bG9jYWxTdG9yYWdlLmdldEl0ZW0oSy5jdXJyZW50KTtpZihzYXZlZCl7bWU9dXNlcnMoKS5maW5kKHU9PnUuaWQ9PT1zYXZlZCk7aWYobWUpe3N5bmNQcm9wZXJ0eUN1c3RvbWVyc09uTG9hZCgpO3Nob3dBcHAoKX19CndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJyxhc3luYygpPT57dHJ5e2lmKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3Ipe2NvbnN0IHJlZ3M9YXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9ucygpO2Zvcihjb25zdCByIG9mIHJlZ3Mpe2F3YWl0IHIudW5yZWdpc3RlcigpO319aWYoJ2NhY2hlcycgaW4gd2luZG93KXtjb25zdCBrcz1hd2FpdCBjYWNoZXMua2V5cygpO2Zvcihjb25zdCBrIG9mIGtzKXtpZihTdHJpbmcoaykudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZGhobWgtbW9iaWxlJykpYXdhaXQgY2FjaGVzLmRlbGV0ZShrKTt9fX1jYXRjaChlKXt9fSk7Cjwvc2NyaXB0PjxzY3JpcHQ+d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJyxmdW5jdGlvbihlKXt2YXIgbj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwRXJyb3InKTtpZighbil7bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtuLmlkPSdhcHBFcnJvcic7bi5zdHlsZT0ncG9zaXRpb246Zml4ZWQ7bGVmdDoxMHB4O3JpZ2h0OjEwcHg7Ym90dG9tOjg4cHg7ei1pbmRleDo5OTk7YmFja2dyb3VuZDojZmZmN2VkO2NvbG9yOiM5YTM0MTI7Ym9yZGVyOjFweCBzb2xpZCAjZmRiYTc0O2JvcmRlci1yYWRpdXM6MTBweDtwYWRkaW5nOjEwcHg7Zm9udDoxMnB4IEFyaWFsO2JveC1zaGFkb3c6MCA0cHggMjBweCAjMDAwMyc7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuKX1uLnRleHRDb250ZW50PSdBcHAgZXJyb3I6ICcrKGUubWVzc2FnZXx8J1Vua25vd24gZXJyb3InKSsnIOKAlCByZWZyZXNoIGFnYWluLid9KTs8L3NjcmlwdD48L2JvZHk+PC9odG1sPgo=';


(function(){
  function frame(){return document.getElementById('dhhmhMobileFrame');}
  window.openMobileApp=function(){
    var o=document.getElementById('dhhmhMobileOverlay'),f=frame();
    if(!o||!f)return;
    // Always use the real same-folder mobile.html so it can share localStorage
    // with index.html when the DHHMH ZIP is opened locally.
    var src='mobile.html';
    if(f.getAttribute('src')!==src) f.src=src;
    o.classList.add('open'); o.setAttribute('aria-hidden','false');
  };
  window.closeMobileApp=function(){
    var o=document.getElementById('dhhmhMobileOverlay');
    if(!o)return;
    o.classList.remove('open'); o.setAttribute('aria-hidden','true');
  };
  window.openMobileNewWindow=function(){
    var w=window.open('mobile.html','_blank');
    if(!w){alert('Browser-ka wuxuu xannibay New Window. Fadlan oggolow pop-up-ka DHHMH.');}
  };
  document.addEventListener('keydown',function(e){if(e.key==='Escape')window.closeMobileApp();});
})();


function sideGo(id,el){
  document.querySelectorAll('.side-btn').forEach(b=>b.classList.remove('active'));
  if(el)el.classList.add('active');
  try{page(id);}catch(e){console.error(e)}
  if(id==='tariff'&&typeof initTariffForm==='function')initTariffForm();
  if(id==='bill'&&typeof initBillForm==='function')initBillForm();
  if(id==='taxpayer'&&typeof initTaxpayerWorkspace==='function')initTaxpayerWorkspace();
  if(id==='billhistory'&&typeof initBillHistory==='function')initBillHistory();
  if(id==='accessimport'&&typeof initAccessImport==='function')initAccessImport();
  if(id==='taxlist'&&typeof initTaxpayerSearch==='function')initTaxpayerSearch();
  if(window.innerWidth<=900)document.getElementById('appSidebar')?.classList.remove('open');
}


(function(){
  const KEY='dhhmh_system_locations_v1';
  const DEFAULT_ZONES=['Sheekh Shukri','Masalaha','Kalabaydh','Jameeco Weyn','Qudhac Dheer','Burco Duurey'];
  const DEFAULT_SUBZONES=['Sheekh Shukri','Masalaha','Kalabaydh','Jameeco Weyn','Qudhac Dheer','Burco Duurey'];
  const $s=id=>document.getElementById(id);
  function read(){try{const x=JSON.parse(localStorage.getItem(KEY)||'{}');return {zones:Array.isArray(x.zones)&&x.zones.length?x.zones:DEFAULT_ZONES,subzones:Array.isArray(x.subzones)&&x.subzones.length?x.subzones:DEFAULT_SUBZONES}}catch(e){return {zones:DEFAULT_ZONES,subzones:DEFAULT_SUBZONES}}}
  function save(x){localStorage.setItem(KEY,JSON.stringify(x))}
  window.getSystemLocations=read;
  window.getSystemZones=function(){return read().zones.slice()};
  window.getSystemSubZones=function(){return read().subzones.slice()};
  function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
  window.openLocationForm=function(type,id){const data=read(),list=type==='zone'?data.zones:data.subzones,item=id?list.find(x=>x.id===id||String(x.name||x).toLowerCase()===String(id).toLowerCase()):null;$s('locationType').value=type;$s('locationId').value=item?.id||'';$s('locationName').value=item?.name||item||'';$s('locationFormTitle').textContent=item?'Edit '+(type==='zone'?'Zone':'Xaafad'):'Add '+(type==='zone'?'Zone':'Xaafad');$s('locationModal').classList.add('open');};
  window.closeLocationForm=function(){$s('locationModal')?.classList.remove('open')};
  function normalizeList(list){return list.map((x,i)=>typeof x==='string'?{id:'LOC-'+i+'-'+x.toLowerCase().replace(/[^a-z0-9]+/g,'-'),name:x,status:'Active'}:x).filter(x=>x&&String(x.name||'').trim())}
  window.renderSystemLocations=function(){const d=read();d.zones=normalizeList(d.zones);d.subzones=normalizeList(d.subzones);save(d);const zq=($s('settingsZoneSearch')?.value||'').toLowerCase(),sq=($s('settingsSubZoneSearch')?.value||'').toLowerCase();const z=d.zones.filter(x=>String(x.name).toLowerCase().includes(zq)),q=d.subzones.filter(x=>String(x.name).toLowerCase().includes(sq));if($s('settingsZonesBody'))$s('settingsZonesBody').innerHTML=z.map((x,i)=>'<tr><td>'+(i+1)+'</td><td><b>'+esc(x.name)+'</b></td><td><span class="app-zone-chip">'+esc(x.status||'Active')+'</span></td><td><button type="button" onclick="openLocationForm(\'zone\',\''+esc(x.id)+'\')">Edit</button> <button type="button" class="danger" onclick="deleteLocation(\'zone\',\''+esc(x.id)+'\')">Delete</button></td></tr>').join('')||'<tr><td colspan="4">No zones.</td></tr>';if($s('settingsSubZonesBody'))$s('settingsSubZonesBody').innerHTML=q.map((x,i)=>'<tr><td>'+(i+1)+'</td><td><b>'+esc(x.name)+'</b></td><td><span class="app-zone-chip">'+esc(x.status||'Active')+'</span></td><td><button type="button" onclick="openLocationForm(\'subzone\',\''+esc(x.id)+'\')">Edit</button> <button type="button" class="danger" onclick="deleteLocation(\'subzone\',\''+esc(x.id)+'\')">Delete</button></td></tr>').join('')||'<tr><td colspan="4">No xaafado.</td></tr>';}
  window.deleteLocation=function(type,id){const d=read(),key=type==='zone'?'zones':'subzones';const item=d[key].find(x=>String(x.id)===String(id));if(!item)return;if(!confirm('Ma hubtaa inaad ka saarayso '+item.name+'?'))return;d[key]=normalizeList(d[key]).filter(x=>String(x.id)!==String(id));if(type==='zone'){try{const uk='dhhmh_app_users_v1',u=JSON.parse(localStorage.getItem(uk)||'[]');u.forEach(x=>{if(Array.isArray(x.zones))x.zones=x.zones.filter(z=>String(z).toLowerCase()!==String(item.name).toLowerCase())});localStorage.setItem(uk,JSON.stringify(u))}catch(e){}}save(d);renderSystemLocations();refreshSystemLocationSelects();if($s('systemSettingsNotice'))$s('systemSettingsNotice').innerHTML='<div class="notice">✅ '+esc(item.name)+' waa laga saaray.</div>';}
  $s('locationForm')?.addEventListener('submit',function(e){e.preventDefault();const d=read(),type=$s('locationType').value,key=type==='zone'?'zones':'subzones',name=$s('locationName').value.trim();if(!name)return;d[key]=normalizeList(d[key]);const id=$s('locationId').value;if(id){const i=d[key].findIndex(x=>String(x.id)===String(id));if(i>=0)d[key][i].name=name}else{if(d[key].some(x=>String(x.name).toLowerCase()===name.toLowerCase()))return alert('Magacan hore ayuu u jiraa.');d[key].push({id:'LOC-'+Date.now(),name,status:'Active'})}save(d);closeLocationForm();renderSystemLocations();refreshSystemLocationSelects();if($s('systemSettingsNotice'))$s('systemSettingsNotice').innerHTML='<div class="notice">✅ '+esc(name)+' waa la kaydiyey.</div>';});
  window.initSystemSettings=function(){renderSystemLocations();refreshSystemLocationSelects()};
  window.refreshSystemLocationSelects=function(){const d=read();const zs=d.zones.map(x=>typeof x==='string'?x:x.name),ss=d.subzones.map(x=>typeof x==='string'?x:x.name);const ids=[['propZone',zs],['profileSubZone',ss],['custXaafadda',ss],['xaafadda',ss],['appZoneGrid',zs]];function setSelect(id,items,all){const el=$s(id);if(!el||el.tagName!=='SELECT')return;const old=el.value;el.innerHTML=(all?'<option value="ALL">All Zones</option>':'<option value="">Select...</option>')+items.map(x=>'<option value="'+esc(x)+'">'+esc(x)+'</option>').join('');if([...el.options].some(o=>o.value===old))el.value=old}setSelect('propZone',zs,true);setSelect('profileSubZone',ss,true);setSelect('custXaafadda',ss,false);setSelect('xaafadda',ss,false);if(typeof window.renderZones==='function'){try{window.renderZones(window.appGetCurrentUser?.()?.zones||[])}catch(e){}}};
  const origSideGo=window.sideGo;window.sideGo=function(id,el){if(typeof origSideGo==='function')origSideGo(id,el);if(id==='settings')initSystemSettings()};
  setTimeout(()=>{try{const d=read();save({zones:normalizeList(d.zones),subzones:normalizeList(d.subzones)});refreshSystemLocationSelects()}catch(e){}},80);
})();


(function(){
  const KEY='dhhmh_app_users_v1', CUR='dhhmh_current_user_v1';
  const MODULES=[['dashboard','Dashboard'],['entry','Revenue Entry'],['customers','Customers'],['taxpayer','Taxpayer Info'],['bill','Generate Bill'],['tariff','Tacriifadaha'],['records','Collections'],['billhistory','Bill History / Print'],['properties','Properties / Excel'],['reports','Reports'],['backup','Backup'],['taxlist','Taxpayer Search']];
  const $a=id=>document.getElementById(id);
  const roleDefaults={Management:Object.fromEntries(MODULES.map(x=>[x[0],true])),BillCollector:Object.fromEntries(MODULES.map(x=>[x[0],['dashboard','entry','customers','taxpayer','bill','records','billhistory','taxlist'].includes(x[0])]))};
  function escA(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
  const PERMISSION_ZONES=['Sheekh Shukri','Masalaha','Kalabaydh','Jameeco Weyn','Qudhac Dheer','Burco Duurey']; function getZones(){try{const raw=window.getSystemZones?window.getSystemZones():[...PERMISSION_ZONES];return (Array.isArray(raw)?raw:[]).map(z=>typeof z==='string'?z:String(z?.name||z?.label||z?.zone||'')).map(z=>z.trim()).filter(Boolean)}catch(e){return [...PERMISSION_ZONES]}}
  function defaultAdmin(){return {id:'USR-0001',name:'System Administrator',username:'admin',role:'Management',status:'Active',permissions:Object.fromEntries(MODULES.map(x=>[x[0],true])),zones:['ALL'],licenses:['ALL'],createdAt:new Date().toISOString()}}
  function users(){let u=[];try{u=JSON.parse(localStorage.getItem(KEY)||'[]')}catch(e){}if(!Array.isArray(u)||!u.length){u=[defaultAdmin()]}const seed=[['C/xakiin','Jameeco Weyn'],['Guuleed','Qudhac Dheer'],['Aamiin','Sheikh Shukri']];seed.forEach((row,i)=>{if(!u.some(x=>x.role==='Bill Collector'&&String(x.name).toLowerCase()===row[0].toLowerCase())){u.push({id:'BC-000'+(i+1),name:row[0],username:row[0].toLowerCase().replace(/[^a-z0-9]/g,'')||('collector'+(i+1)),role:'Bill Collector',status:'Active',permissions:roleDefaults.BillCollector,zones:[row[1]],licenses:['ALL'],createdAt:new Date().toISOString()})}});u.forEach(x=>{if(!Array.isArray(x.licenses))x.licenses=['ALL']});localStorage.setItem(KEY,JSON.stringify(u));return u}
  function saveUsers(u){localStorage.setItem(KEY,JSON.stringify(u))}
  function currentUser(){const u=users(),id=localStorage.getItem(CUR)||u[0].id;return u.find(x=>x.id===id)||u[0]}
  function setCurrentUser(id){localStorage.setItem(CUR,id);render();applyUI();}
  window.appSetCurrentUser=setCurrentUser;
  window.appGetCurrentUser=currentUser;
  function renderPermissions(perms){const el=$a('appPermissionGrid');if(!el)return;el.innerHTML=MODULES.map(([id,label])=>'<label class="app-check"><input type="checkbox" data-perm="'+id+'" '+(perms&&perms[id]?'checked':'')+'> <span>'+label+'</span></label>').join('')}
  function renderZones(selected){const el=$a('appZoneGrid');if(!el)return;const all=(selected||[]).includes('ALL');el.innerHTML=getZones().map(z=>'<label class="app-zone"><input type="checkbox" data-zone="'+escA(z)+'" '+(all||(selected||[]).includes(z)?'checked':'')+'> '+escA(z)+'</label>').join('')||'<span class="muted">No zones found.</span>'}
  const LICENSE_OPTIONS=['Darajada 1aad','Darajada 2aad B','Darajada 2aad','Darajada 3aad','Darajada 4aad','Darajada 5aad','Darajada 6aad','Darajada 7aad'];
  function renderLicenses(selected){const el=$a('appLicenseGrid');if(!el)return;const all=(selected||[]).includes('ALL');el.innerHTML='<label class=\"app-zone\"><input type=\"checkbox\" data-license=\"ALL\" '+(all?'checked':'')+'> All Licenses</label>'+LICENSE_OPTIONS.map(z=>'<label class=\"app-zone\"><input type=\"checkbox\" data-license=\"'+escA(z)+'\" '+(all||(selected||[]).includes(z)?'checked':'')+'> '+escA(z)+'</label>').join('');}
  function appLicenseSelection(){return [...document.querySelectorAll('#appLicenseGrid input[data-license]:checked')].map(x=>x.dataset.license)}
  window.appOpenLicenseSelector=function(){const el=$a('appLicenseGrid');if(!el)return;el.scrollIntoView({behavior:'smooth',block:'center'});el.classList.add('zone-focus');setTimeout(()=>el.classList.remove('zone-focus'),1400)};
  window.appSelectAllLicenses=function(){document.querySelectorAll('#appLicenseGrid input[data-license]').forEach(x=>x.checked=true);};
  window.appClearLicenses=function(){document.querySelectorAll('#appLicenseGrid input[data-license]').forEach(x=>x.checked=false);};
  function loadForm(u){$a('appUserId').value=u.id||'';$a('appUserName').value=u.name||'';$a('appUsername').value=u.username||'';$a('appRole').value=u.role==='Management'?'Management':'Bill Collector';$a('appStatus').value=u.status||'Active';$a('appFormTitle').textContent='Edit User Permissions';renderPermissions(u.permissions||{});renderZones(u.zones||[]);renderLicenses(u.licenses||[])}
  window.appNewUser=function(){$a('appUserId').value='';$a('appUserName').value='';$a('appUsername').value='';$a('appRole').value='Bill Collector';$a('appStatus').value='Active';$a('appFormTitle').textContent='Add User / Collector';renderPermissions(roleDefaults.BillCollector);renderZones([]);renderLicenses([])};
  window.appEditUser=function(id){const u=users().find(x=>x.id===id);if(u)loadForm(u)};
  window.appGrantAllPerms=function(){document.querySelectorAll('#appPermissionGrid input[data-perm]').forEach(x=>x.checked=true)};
  window.appClearAllPerms=function(){document.querySelectorAll('#appPermissionGrid input[data-perm]').forEach(x=>x.checked=false)};
  window.appApplyRoleDefaults=function(){const r=$a('appRole').value==='Management'?'Management':'BillCollector';renderPermissions(roleDefaults[r]);renderZones(r==='Management'?['ALL']:[])};
  window.appOpenZoneSelector=function(){const el=$a('appZoneGrid');if(!el)return;el.scrollIntoView({behavior:'smooth',block:'center'});el.classList.add('zone-focus');setTimeout(()=>el.classList.remove('zone-focus'),1400);};
  window.appSelectAllZones=function(){document.querySelectorAll('#appZoneGrid input[data-zone]').forEach(x=>x.checked=true);updateZonePermissionSummary()};
  window.appClearZones=function(){document.querySelectorAll('#appZoneGrid input[data-zone]').forEach(x=>x.checked=false);updateZonePermissionSummary()};
  window.appDeleteUser=function(){const id=$a('appUserId')?.value;if(!id||id==='USR-0001')return alert('System Administrator lama tirtiri karo.');if(!confirm('Delete this user?'))return;const u=users().filter(x=>x.id!==id);saveUsers(u);localStorage.setItem(CUR,u[0].id);window.appNewUser();render();applyUI()};
  function renderPermissionTable(u){const body=$a('appPermissionTableBody');if(!body)return;const collectors=u.filter(x=>x.role==='Bill Collector');if(!collectors.length){body.innerHTML='<tr><td colspan="5" style="text-align:center;color:#64748b">No Bill Collectors yet. Click + Add Bill Collector.</td></tr>';return}body.innerHTML=collectors.map((x,i)=>{const zs=(x.zones||[]).length?(x.zones||[]).map(z=>'<span class="app-zone-chip">'+escA(z==='ALL'?'All Zones':z)+'</span>').join(''):'<span class="app-zone-chip" style="background:#fff1f2;color:#be123c">No Zone</span>';const mods=MODULES.filter(([id])=>x.permissions?.[id]).map(([,label])=>'<span class="app-module-chip">'+escA(label)+'</span>').join('')||'<span class="app-module-chip off">No View Permissions</span>';const lic=(x.licenses||[]).length?(x.licenses||[]).map(z=>'<span class="app-module-chip">'+escA(z==='ALL'?'All Licenses':z)+'</span>').join(''):'<span class="app-module-chip off">No License Access</span>';return '<tr><td><b>'+(i+1)+'</b></td><td><b>'+escA(x.name)+'</b><br><small>'+escA(x.username)+' · '+escA(x.status)+'</small></td><td>'+zs+'</td><td>'+mods+'<br><small>License: </small>'+lic+'</td><td><button type="button" onclick="appEditUser(\''+escA(x.id)+'\')">Edit</button></td></tr>'}).join('')}
  function render(){const u=users(),cur=currentUser();if($a('appCurrentUser'))$a('appCurrentUser').innerHTML=u.map(x=>'<option value="'+escA(x.id)+'" '+(x.id===cur.id?'selected':'')+'>'+escA(x.name)+' — '+escA(x.role)+'</option>').join('');if($a('appCurrentUserLabel'))$a('appCurrentUserLabel').textContent=cur.name+' ('+cur.role+')';if($a('appUserList'))$a('appUserList').innerHTML=u.map(x=>'<div class="app-user-row '+(x.id===cur.id?'active':'')+'" onclick="appEditUser(\''+escA(x.id)+'\')"><div><b>'+escA(x.name)+'</b><small>'+escA(x.username)+' · '+escA(x.status)+'</small></div><span class="app-badge '+(x.role==='Bill Collector'?'collector':'management')+'">'+escA(x.role)+'</span></div>').join('');renderPermissionTable(u);if($a('appUserId')&&!$a('appUserId').value)loadForm(cur)}
  function hasPermission(id){const u=currentUser();return !!u&&u.status==='Active'&&(u.role==='Management'||u.permissions?.[id]===true)}
  function allowedZone(zone){const u=currentUser();if(!u||u.role==='Management')return true;const zs=u.zones||[];if(zs.includes('ALL'))return true;if(!zs.length)return false;return zs.some(z=>String(z).trim().toLowerCase()===String(zone||'').trim().toLowerCase())}
  window.appHasPermission=hasPermission;window.appAllowedZone=allowedZone;window.appFilterByZone=function(arr){const u=currentUser();if(!u||u.role==='Management'||(u.zones||[]).includes('ALL'))return arr||[];return (arr||[]).filter(x=>allowedZone(x.zone||x.Zone))};
  function applyUI(){document.querySelectorAll('.app-sidebar .side-btn[data-module]').forEach(b=>b.classList.toggle('app-hidden',!hasPermission(b.dataset.module)))}
  const sideMap={'Dashboard':'dashboard','Revenue Entry':'entry','Customers':'customers','Taxpayer Info':'taxpayer','Generate Bill':'bill','Tacriifadaha':'tariff','Manage Tacriifad':'tariff','Collections':'records','Bill History / Print':'billhistory','Properties / Excel':'properties','Reports':'reports','Backup':'backup'};
  document.querySelectorAll('.app-sidebar .side-btn').forEach(b=>{const key=sideMap[b.textContent.trim()];if(key)b.dataset.module=key});
  const originalSideGo=window.sideGo;
  window.sideGo=function(id,el){if(id!=='applications'&&!hasPermission(id)){alert('Permission denied — user-kan ma haysto View permission-ka qaybtaan.');return}if(id==='applications'){document.querySelectorAll('.side-btn').forEach(b=>b.classList.remove('active'));el?.classList.add('active');page('applications');render();applyUI();return}if(typeof originalSideGo==='function')originalSideGo(id,el);else page(id)};
  // Enforce zone on common lists/selects without changing stored master data.
  const oldPopulate=window.populateCustomerSelect;if(typeof oldPopulate==='function'){window.populateCustomerSelect=function(selected){const all=window.customers||[],allowed=window.appFilterByZone(all),sel=document.getElementById('customerSelect');if(!sel)return oldPopulate(selected);sel.innerHTML='<option value="">Select Customer...</option>'+allowed.filter(c=>c.status!=='Inactive').map(c=>'<option value="'+escA(c.customerId||'')+'" '+(String(c.customerId||'')===String(selected||'')?'selected':'')+'>'+escA(c.customerId||'')+' — '+escA(c.name||'')+'</option>').join('')}}
  const oldSearchBill=window.searchBillCustomers;if(typeof oldSearchBill==='function'){window.searchBillCustomers=function(){const u=currentUser();if(u.role==='Management'||(u.zones||[]).includes('ALL'))return oldSearchBill();const original=window.customers;window.customers=window.appFilterByZone(original);try{return oldSearchBill()}finally{window.customers=original}}}
  const oldRenderCustomers=window.renderCustomers;if(typeof oldRenderCustomers==='function'){window.renderCustomers=function(){const u=currentUser();if(u.role==='Management'||(u.zones||[]).includes('ALL'))return oldRenderCustomers();const original=window.customers;window.customers=window.appFilterByZone(original);try{return oldRenderCustomers()}finally{window.customers=original}}}
  const oldRenderTax=window.renderTaxpayerSearch;if(typeof oldRenderTax==='function'){window.renderTaxpayerSearch=function(){const u=currentUser();if(u.role==='Management'||(u.zones||[]).includes('ALL'))return oldRenderTax();const original=window.customers;window.customers=window.appFilterByZone(original);try{return oldRenderTax()}finally{window.customers=original}}}
  document.addEventListener('change',e=>{if(e.target.matches('#appZoneGrid input[data-zone]'))updateZonePermissionSummary();if(e.target.matches('#appLicenseGrid input[data-license]')&&e.target.dataset.license==='ALL'&&e.target.checked){document.querySelectorAll('#appLicenseGrid input[data-license]').forEach(x=>x.checked=true)}});
  $a('appUserForm')?.addEventListener('submit',function(e){e.preventDefault();const u=users(),id=$a('appUserId').value||('USR-'+Date.now().toString().slice(-8)),perms={};document.querySelectorAll('#appPermissionGrid input[data-perm]').forEach(x=>perms[x.dataset.perm]=x.checked);let zs=[...document.querySelectorAll('#appZoneGrid input[data-zone]:checked')].map(x=>x.dataset.zone);let licenses=appLicenseSelection();if($a('appRole').value==='Management'){zs=['ALL'];licenses=['ALL'];}const obj={id,name:$a('appUserName').value.trim(),username:$a('appUsername').value.trim(),role:$a('appRole').value,status:$a('appStatus').value,permissions:perms,zones:zs,licenses:licenses,updatedAt:new Date().toISOString()};if(!obj.name||!obj.username)return alert('Geli magaca iyo username-ka.');const i=u.findIndex(x=>x.id===id);if(i>=0)u[i]={...u[i],...obj};else u.push({...obj,createdAt:new Date().toISOString()});saveUsers(u);localStorage.setItem(CUR,id);if($a('appNotice'))$a('appNotice').innerHTML='<div class="notice">✅ User-ka iyo permissions-kiisa waa la kaydiyey.</div>';render();applyUI()});
  window.renderApplications=function(){render();applyUI()};
  setTimeout(function(){render();applyUI()},50);
})();


// DHHMH v1.2.79 — Multi-Year Generate from v1.2.77 (data-safe)
(function(){
  const originalInitBillForm = window.initBillForm;
  window.initBillForm = function(){
    if(typeof originalInitBillForm==='function') originalInitBillForm();
    const n=document.getElementById('billNoYears'); if(n && !n.value)n.value='1';
  };
  function moneyRound(v){return Math.round((Number(v||0)+Number.EPSILON)*100)/100;}
  function tariffsForYear(year,category,propType,grade,zone,licenseType){
    const match=t=>(t.active!==false&&String(t.type||'').toLowerCase()===category.toLowerCase()&&(!t.zone||t.zone==='ALL'||String(t.zone).toLowerCase()===String(zone||'').toLowerCase())&&(category==='License'?((!t.grade||t.grade==='ALL'||String(t.grade)===String(grade))&&(!t.licenseType||t.licenseType==='ALL'||t.licenseType===licenseType)):(!t.propertyType||t.propertyType==='ALL'||String(t.propertyType)===String(propType))));
    const all=tariffs.filter(match); if(!all.length)return [];
    const exact=all.filter(t=>Number(t.year)===Number(year)); if(exact.length)return exact.sort((a,b)=>Number(a.sequence||999)-Number(b.sequence||999));
    const prior=all.filter(t=>Number(t.year)<=Number(year)).sort((a,b)=>Number(b.year)-Number(a.year));
    if(prior.length){const y=Number(prior[0].year);return all.filter(t=>Number(t.year)===y).sort((a,b)=>Number(a.sequence||999)-Number(b.sequence||999));}
    const nearest=all.slice().sort((a,b)=>Math.abs(Number(a.year)-Number(year))-Math.abs(Number(b.year)-Number(year))); const y=Number(nearest[0].year);
    return all.filter(t=>Number(t.year)===y).sort((a,b)=>Number(a.sequence||999)-Number(b.sequence||999));
  }
  function billBreakdownArea(customer, propType, fallbackArea){
    const mix=customer?.measurementBreakdown;
    if(!mix || typeof mix!=="object" || !Object.keys(mix).length) return {area:Number(fallbackArea||0), split:false, label:""};
    const n=String(propType||"").toLowerCase();
    let key=n.includes("vacant")||n.includes("banaan")||n.includes("land")?"Banaan":n.includes("wall")||n.includes("deyr")?"Deyr":"Dhisan";
    const part=mix[key];
    const a=parseAreaExpression(part?.areaInput ?? part?.area ?? 0);
    return {area:a>0?a:0,split:true,label:key};
  }
  window.calculateBillFromTariff=function(){
    const $=window.$||function(id){return document.getElementById(id)};
    const cid=$('billCustomer')?.value?.trim()||'';
    const customer=customers.find(x=>String(x.customerId||'').toUpperCase()===cid.toUpperCase());
    if(!customer){alert('Dooro Customer marka hore.');return 0;}
    const p=properties.find(x=>String(x.customerId||x.customerID||'').toUpperCase()===String(customer.customerId||'').toUpperCase()||String(x.propertyId||'').toUpperCase()===String(customer.propertyId||'').toUpperCase())||{};
    const from=Number($('billFromYear')?.value||$('billYear')?.value||new Date().getFullYear());
    const to=Number($('billToYear')?.value||from);
    const start=Math.min(from,to), finish=Math.max(from,to), years=finish-start+1;
    if(!start||!finish||years<1){alert('Dooro From Year iyo To Year sax ah.');return 0;}
    if($('billYear'))$('billYear').value=String(start);
    if($('billNoYears'))$('billNoYears').value=String(years);
    const zone=String($('billZone')?.value||customer.zone||'').trim();
    const typeRaw=String($('billType')?.value||customer.type||customer.propertyType||customer.property||'');
    const isLicense=/license|liisan|ruqso|business/i.test(typeRaw)||!!(customer.licenseGrade||customer.grade);
    const category=isLicense?'License':'Property';
    const propType=typeof normalizePropertyCategory==='function'?normalizePropertyCategory(p.propertyType||p.propertyName||customer.propertyType||customer.property||typeRaw):String(p.propertyType||customer.propertyType||customer.property||'');
    const grade=$('billGrade')?.value||customer.licenseGrade||customer.grade||p.licenseGrade||p.grade||'';
    if(category==='Property'&&!propType){$('billTariffStatus').value='Select Property Type';alert('Customer-kan Property Type-kiisa lama aqoonsan.');return 0;}
    if(category==='License'&&!grade){$('billTariffStatus').value='Select License Grade';alert('Customer-kan License Grade-kiisa lama aqoonsan.');return 0;}
    const baseArea=Number(p.area||customer.area||0)>0?Number(p.area||customer.area):((Number(p.height||customer.height||0)>0&&Number(p.width||customer.width||0)>0)?Number(p.height||customer.height)*Number(p.width||customer.width):Number(p.size||customer.size||0)||0);
    const breakdownInfo=category==='Property'?billBreakdownArea(customer,propType,baseArea):{area:baseArea,split:false,label:''};
    const area=breakdownInfo.area;
    const manualRate=Number($('billManualRate')?.value||0);
    const discountPctRaw=String($('billDiscountPercent')?.value??'').trim();
    const discountPct=discountPctRaw===''?0:Math.max(0,Math.min(100,Number(discountPctRaw)||0));
    const primaryHeadAmountRaw=String($('billPrimaryHeadAmount')?.value??'').trim();
    const primaryHeadAmount=primaryHeadAmountRaw===''?0:Math.max(0,Number(primaryHeadAmountRaw)||0);
    let grandTotal=0, allDetails=[], yearSummaries=[];

    if(category==='Property'){
      // ISKUJARKA: each part uses its own Head #1 tariff; Head #1 amounts are
      // combined into ONE primary tariff, then Heads #2+ are calculated ONCE.
      const mix=customer?.measurementBreakdown;
      const hasSplit=!!(mix && typeof mix==='object' && Object.keys(mix).some(k=>parseAreaExpression(mix[k]?.areaInput??mix[k]?.area??0)>0));
      const splitParts=hasSplit
        ? Object.entries(mix).map(([partName,part])=>({partName,area:parseAreaExpression(part?.areaInput??part?.area??0)})).filter(x=>x.area>0)
        : [];
      if(hasSplit){
        let combinedPrimary=0, splitError='', primaryParts=[], tariffSets=[];
        splitParts.forEach(part=>{
          const partType=normalizePropertyCategory(part.partName)||part.partName||propType;
          const partArea=Number(part.area||0);
          const tariffs=tariffsForYear(start,category,partType,grade,zone,'Business License');
          if(!tariffs.length){splitError=`Ma jiro Tacriifad ku habboon ${partType}, Year ${start}.`;return;}
          const baseT=tariffs.find(t=>t.method==='area_rate'&&String(t.propertyType||'').toLowerCase()===String(partType||'').toLowerCase())||tariffs.find(t=>t.method==='area_rate');
          if(!baseT && !(manualRate>0)){splitError=`Tacriifada ${partType} ee ${start} lama helin.`;return;}
          const rate=manualRate>0?manualRate:Number(baseT?.rate||0);
          const amount=moneyRound(partArea*rate);
          combinedPrimary=moneyRound(combinedPrimary+amount);
          primaryParts.push({partName:part.partName,partType,area:partArea,rate,amount,tariff:baseT});
          tariffSets.push(tariffs);
        });
        if(splitError){$('billTariffStatus').value='No matching tariff';alert(splitError);return 0;}
        const primaryAnnual=primaryHeadAmount>0?moneyRound(primaryHeadAmount):combinedPrimary;
        const primaryBeforeDiscount=moneyRound(primaryAnnual*years);
        const primaryTotal=discountPct>0?moneyRound(primaryBeforeDiscount*(1-discountPct/100)):primaryBeforeDiscount;
        const primarySub=primaryParts.map(x=>`${x.partName}: ${Number(x.area).toLocaleString(undefined,{maximumFractionDigits:2})} m² × ${Number(x.rate).toLocaleString(undefined,{maximumFractionDigits:2})} = ${moneyRound(x.amount).toLocaleString(undefined,{maximumFractionDigits:2})} SLSh`).join(' • ');
        const firstPrimary=primaryParts[0].tariff||{};
        allDetails.push({code:String(firstPrimary.code||'1130101'),head:'Head 1 — Iskujarka Dhulka',subHead:primarySub,amount:primaryTotal,baseAmount:combinedPrimary,rate:0,percent:0,fixed:0,method:'area_rate',currency:firstPrimary.currency||'SLSH',propertyType:'Iskujarka',area:primaryParts.reduce((s,x)=>s+x.area,0),partName:'Iskujarka',sequence:1,year:start,years,annualAmount:primaryAnnual});

        // Common secondary heads: one row/calculation per code, based on the combined Head #1.
        const secondary=[]; const seen=new Set();
        tariffSets.forEach(ts=>ts.forEach(t=>{const code=String(t.code||''); if(!code||['1130101','1130101-B','1130101-D'].includes(code)||seen.has(code))return; seen.add(code); secondary.push(t);}));
        secondary.sort((a,b)=>Number(a.sequence||999)-Number(b.sequence||999));
        let running=primaryTotal;
        secondary.forEach(t=>{
          const code=String(t.code||''); let v=0;
          if(code==='1140935') v=running*Number(t.percent||10)/100;
          else if(code==='1410609') v=Number(t.fixed||20000);
          else if(code==='1140922') v=Number(t.fixed||5000);
          else if(t.method==='fixed'||t.method==='manual') v=Number(t.fixed||t.rate||0);
          else if(t.method==='percentage') v=running*Number(t.percent||0)/100;
          else if(t.method==='percent_fixed'||t.method==='area_percent_fixed') v=running*Number(t.percent||0)/100+Number(t.fixed||0);
          else if(t.method==='area_rate') v=0;
          v=moneyRound(v); running=moneyRound(running+v);
          allDetails.push({code:t.code,head:t.head,subHead:t.subHead||t.subhead||t.chargeName||t.head||'',amount:v,baseAmount:v,rate:Number(t.rate||0),percent:Number(t.percent||0),fixed:Number(t.fixed||0),method:t.method,currency:t.currency||'SLSH',propertyType:'Iskujarka',area:primaryParts.reduce((s,x)=>s+x.area,0),partName:'',sequence:t.sequence,year:start,years,annualAmount:v});
        });
        grandTotal=moneyRound(running);
        yearSummaries=[{year:start,total:grandTotal,details:allDetails.length}];
        window._currentBillSplitSummary=primaryParts.map(x=>`${x.partName}: ${Number(x.area).toLocaleString(undefined,{maximumFractionDigits:2})} m²`).join(' • ');
        window._currentBillSplitParts=primaryParts.map(x=>({...x}));
      }else{
        const partType=propType||'Dhisan', partArea=Number(area||0);
        const tariffs=tariffsForYear(start,category,partType,grade,zone,'Business License');
        if(!tariffs.length){$('billTariffStatus').value='No matching tariff';alert(`Ma jiro Tacriifad ku habboon ${partType}, Year ${start}.`);return 0;}
        let baseT=tariffs.find(t=>t.method==='area_rate'&&String(t.propertyType||'')===String(partType))||tariffs.find(t=>t.method==='area_rate');
        if(!baseT && !(manualRate>0)){alert(`Tacriifada ${partType} ee ${start} lama helin.`);return 0;}
        const baseRate=manualRate>0?manualRate:Number(baseT?.rate||0), normalAnnualBase=partArea*baseRate, annualPrimary=primaryHeadAmount>0?primaryHeadAmount:normalAnnualBase;
        const primaryBeforeDiscount=moneyRound(annualPrimary*years), primaryTotal=discountPct>0?moneyRound(primaryBeforeDiscount*(1-discountPct/100)):primaryBeforeDiscount;
        const ordered=[...tariffs.filter(t=>['1130101','1140935','1410609','1140922'].includes(String(t.code||''))),...tariffs.filter(t=>!['1130101','1140935','1410609','1140922'].includes(String(t.code||'')))];
        const seen=new Set(); let totalOne=0;
        ordered.forEach(t=>{const code=String(t.code||'');if(seen.has(code))return;seen.add(code);let v=0;if((baseT&&t.id===baseT.id)||code==='1130101')v=primaryTotal;else if(code==='1140935')v=totalOne*Number(t.percent||10)/100;else if(code==='1410609')v=Number(t.fixed||20000);else if(code==='1140922')v=Number(t.fixed||5000);else if(t.method==='fixed'||t.method==='manual')v=Number(t.fixed||t.rate||0);else if(t.method==='percentage')v=totalOne*Number(t.percent||0)/100;else if(t.method==='area_rate')v=partArea*Number(t.rate||0);else if(t.method==='percent_fixed')v=totalOne*Number(t.percent||0)/100+Number(t.fixed||0);else if(t.method==='area_percent_fixed'){const bb=partArea*Number(t.rate||0);v=bb+bb*Number(t.percent||0)/100+Number(t.fixed||0);}v=moneyRound(v);totalOne+=v;allDetails.push({code:t.code,head:t.head,subHead:t.subHead||t.subhead||t.chargeName||t.head||'',amount:v,baseAmount:v,rate:code==='1130101'?baseRate:Number(t.rate||0),percent:Number(t.percent||0),fixed:Number(t.fixed||0),method:t.method,currency:t.currency||'SLSH',propertyType:partType,area:partArea,partName:'',sequence:t.sequence,year:start,years,annualAmount:code==='1130101'?moneyRound(annualPrimary):moneyRound(v)});});
        grandTotal=moneyRound(totalOne);yearSummaries=[{year:start,total:grandTotal,details:allDetails.length}];window._currentBillSplitSummary='';window._currentBillSplitParts=[];
      }
    }else{
      // License: preserve the normal tariff calculation and do not apply the property Head #1 rule.
      // Multi-year license calculations remain the existing per-year tariff behavior.
      for(let yr=start;yr<=finish;yr++){
        const tariffs=tariffsForYear(yr,category,propType,grade,zone,'Business License');
        if(!tariffs.length){$('billTariffStatus').value='No matching tariff';alert(`Ma jiro Tacriifad ku habboon License, Year ${yr} iyo Grade ${grade}.`);return 0;}
        const gradeT=tariffs.find(t=>t.grade&&t.grade!=='ALL'&&String(t.grade)===String(grade))||tariffs.find(t=>t.grade==='ALL'&&t.method==='fixed');
        if(!gradeT){alert(`Tacriifada License/Grade-ka ${grade} ee ${yr} lama helin.`);return 0;}
        const base=Number(gradeT.fixed||gradeT.rate||0); let totalOne=0; let running=0;
        tariffs.forEach(t=>{let v=0;if(t.id===gradeT.id)v=base;else if(t.method==='fixed'||t.method==='manual')v=Number(t.fixed||t.rate||0);else if(t.method==='percentage')v=running*Number(t.percent||0)/100;else if(t.method==='percent_fixed')v=running*Number(t.percent||0)/100+Number(t.fixed||0);else v=Number(t.fixed||0);v=moneyRound(v);running=moneyRound(running+v);totalOne=running;allDetails.push({code:t.code,head:t.head,subHead:t.subHead||t.subhead||t.chargeName||t.head||'',amount:v,baseAmount:v,rate:Number(t.rate||0),percent:Number(t.percent||0),fixed:Number(t.fixed||0),method:t.method,currency:t.currency||'SLSH',grade:t.grade||grade,sequence:t.sequence,year:yr,years:1});});
        grandTotal+=totalOne; yearSummaries.push({year:yr,total:totalOne,details:tariffs.length});
      }
      if(years>1){
        const merged=new Map();
        allDetails.forEach(d=>{const key=String(d.code||'')+'|'+String(d.head||d.subHead||'');if(!merged.has(key))merged.set(key,{...d,annualAmount:0,amount:0,years});const m=merged.get(key);m.amount=moneyRound(m.amount+d.amount);m.annualAmount=moneyRound(m.annualAmount+d.amount);});
        allDetails=[...merged.values()].map(d=>({...d,annualAmount:moneyRound(d.amount/years),amount:moneyRound(d.amount),years}));
        grandTotal=moneyRound(allDetails.reduce((s,d)=>s+Number(d.amount||0),0));
      }else grandTotal=moneyRound(grandTotal);
    }

    $('billAmount').value=moneyRound(grandTotal).toFixed(2);
    let cp=$('billCalculationPreview'); if(!cp){cp=document.createElement('div');cp.id='billCalculationPreview';cp.className='notice';$('billForm').insertBefore(cp,$('billForm').querySelector('.toolbar'));}
    const first=allDetails[0]; const calcRate=first?Number(first.rate||0):0;
    const splitPartsForPreview=Array.isArray(window._currentBillSplitParts)?window._currentBillSplitParts:[];
    const isSplitBill=splitPartsForPreview.length>0;
    const normalPrimaryDisplay=moneyRound((primaryHeadAmount>0?primaryHeadAmount:area*calcRate)*years);
    const primaryDisplay=isSplitBill?moneyRound(Number(allDetails[0]?.amount||0)):normalPrimaryDisplay;
    const discountValue=discountPct>0?(isSplitBill?moneyRound(primaryDisplay*discountPct/100):moneyRound((primaryHeadAmount>0?primaryHeadAmount:area*calcRate)*years*discountPct/100)):0;
    const splitLines=isSplitBill?splitPartsForPreview.map(x=>`${x.partName}: ${Number(x.area||0).toLocaleString(undefined,{maximumFractionDigits:2})} m² × ${Number(x.rate||0).toLocaleString(undefined,{maximumFractionDigits:2})} = ${moneyRound(x.amount||0).toLocaleString(undefined,{maximumFractionDigits:2})} SLSh`).join(' • '):'';
    cp.innerHTML=isSplitBill
      ? `<b>Iskujarka:</b> ${esc(splitLines)}<br><small><b>Head #1 Combined:</b> ${primaryDisplay.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})} SLSh${discountPct>0?` — Discount ${discountPct}%: ${discountValue.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})} SLSh`:''}</small><br><small>Heads #2+: <b>hal mar</b> ayaa lagu xisaabiyey iyadoo lagu salaynayo Head #1-ka la isku daray.</small><br><small>Bill Amount (all heads): <b>${moneyRound(grandTotal).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})} SLSh</b></small>`
      : `<b>Calculation:</b> Head #1: ${calcRate.toLocaleString()} × ${area.toLocaleString()} m²${breakdownInfo.split?` <span class=\"muted\">(${esc(breakdownInfo.label)} area — Iskujarka)</span>`:''} × ${years} year(s) = <b>${normalPrimaryDisplay.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})} SLSh</b>${primaryHeadAmount>0?`<br><small>Primary Head Amount: <b>${moneyRound(primaryHeadAmount).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})} SLSh / year</b></small>`:''}${discountPct>0?`<br><small>Discount: <b>${discountPct}%</b> — Head #1 only; Discount Total: <b>${discountValue.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})} SLSh</b></small>`:''}<br><small>Heads #2+: normal tariff/percentage/fixed calculation — <b>not multiplied by ${years} years</b></small><br><small>Bill Amount (all heads): <b>${moneyRound(grandTotal).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})} SLSh</b></small>`;
    $('billCurrency').value=allDetails[0]?.currency||'SLSH';
    $('billTariffStatus').value=`${category} • ${category==='Property'?propType:grade} • ${category==='Property'?(manualRate>0?'Manual Rate '+manualRate:'Tariff Rate'):''} • ${start}-${finish} • ${years} year(s) • ${allDetails.length} heads${primaryHeadAmount>0?' • Primary Head '+primaryHeadAmount:''}${discountPct>0?' • Discount '+discountPct+'% (Head 1)':''}`;
    window.lastCalculatedBill={category,propertyCategory:propType,grade,fromYear:start,toYear:finish,year:start,area,base:category==='Property'?area*(manualRate>0?manualRate:Number(tariffsForYear(start,category,propType,grade,zone,'Business License').find(t=>t.method==='area_rate')?.rate||0)):0,total:moneyRound(grandTotal),details:allDetails,yearSummaries,customerId:customer.customerId,manualRate:manualRate||null,primaryHeadAmount:primaryHeadAmount||null,discountPercent:discountPct||null,years};
    window.currentBillCharges=allDetails.map(x=>({...x,annualAmount:x.annualAmount,amount:x.amount,years}));
    return moneyRound(grandTotal);
  };
})();

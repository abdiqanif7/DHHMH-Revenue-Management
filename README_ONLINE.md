# DHHMH Online v1.0

This package keeps the existing DHHMH v1.3.167 UI and adds a shared online state API.

## Run on Windows
1. Install Node.js 20+.
2. Open Command Prompt in this folder.
3. Run: `node server.js`
4. Open: `http://127.0.0.1:3037/`
5. Health check: `http://127.0.0.1:3037/health`

## Deploy
Upload this folder to a Node.js host that supports a long-running Node process and set the PORT supplied by the host.

## Important
The current bridge synchronizes the DHHMH browser storage as a shared key/value state. Before public production use, add real user authentication, per-user permissions, database transactions, HTTPS, and automated off-site backups.

# DHHMH Online — Render Free Deployment

This package is prepared for Render Web Service deployment.

## Render settings
- Type: Web Service
- Runtime: Node
- Build Command: `npm install`
- Start Command: `npm start`
- Plan: Free
- Health Check Path: `/health`

## Important data note
The current bridge syncs browser localStorage to `/api/state`, but this starter package uses `server/data.json`. Render Free web services have ephemeral filesystems, so this JSON file is NOT a permanent production database.

For real municipal use, connect the API to a persistent database (recommended: Supabase/Postgres) before importing the full 16,355 customer dataset.

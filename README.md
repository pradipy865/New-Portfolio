# Pradip Yadav: Portfolio

```
portfolio/
  frontend/   React + Vite + Tailwind (no TypeScript)
  backend/    Node + Express + MongoDB (Mongoose)
```

## Run locally
1. `npm install` (root, installs concurrently), then `npm run install:all`
2. `cp backend/.env.example backend/.env` and add your MongoDB Atlas URI
3. `cp frontend/.env.example frontend/.env`
4. `npm run dev` (web on http://localhost:5173, API on http://localhost:5000)

Or run each separately: `cd backend && npm run dev` and `cd frontend && npm run dev`.

## Customize
Edit `frontend/src/data.js`: replace every `YOUR_*` link, add live demo URLs, add `frontend/public/resume.pdf`.

## Deploy on Vercel (two projects, one repo)
**Backend first**
1. Vercel > Add New Project > import the repo, set **Root Directory = `backend`**, Framework: Other
2. Env vars: `MONGODB_URI`, `CLIENT_URL` (add after the frontend is live)
3. Atlas > Network Access: allow `0.0.0.0/0`
4. Deploy and copy the URL, e.g. `https://pradip-api.vercel.app`. Test `/api/health`

**Frontend**
1. Add another project from the same repo, **Root Directory = `frontend`**, Framework: Vite
2. Env var: `VITE_API_URL` = your backend URL (no trailing slash)
3. Deploy, then set `CLIENT_URL` on the backend to the frontend URL and redeploy it

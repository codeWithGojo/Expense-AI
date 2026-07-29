# ExpenseAI

A full-stack expense tracker with an AI financial coach.

- **Backend:** Node.js + Express + Prisma (SQLite locally, Postgres-ready for production) + JWT auth
- **Frontend:** React + Vite + Tailwind + Recharts
- **AI:** Rule-based coach out of the box (no API key needed) — swap in a real LLM call in `backend/src/routes/ai.js` when ready

## Features (MVP)

- Register / login (JWT)
- Add / edit / delete / search expenses
- Track income
- Set savings goals and track progress
- Pie chart of spend by category
- AI insights + simple chat endpoint

## Run locally

**Backend**
```bash
cd backend
cp .env.example .env
npm install
npx prisma migrate dev --name init
npm run dev
```
Runs on http://localhost:5000

**Frontend**
```bash
cd frontend
npm install
npm run dev
```
Runs on http://localhost:5173 (proxies `/api` to the backend)

## Run with Docker

```bash
docker-compose up --build
```

## Push to your own GitHub repo

From the project root:

```bash
git init
git add .
git commit -m "Initial ExpenseAI build"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Roadmap (next phases)

- Swap SQLite → Postgres for production (`schema.prisma` provider)
- Replace rule-based AI with a real LLM call (OpenAI/Anthropic) in `ai.js`
- Add fraud/anomaly detection on expenses
- Add recurring expenses + budgets
- Add tests + deploy pipeline (Railway/Render/Vercel)

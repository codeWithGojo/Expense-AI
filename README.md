# ExpenseAI

A Naira-first personal finance dashboard built to make spending patterns easier to understand before the month is over.

**Live demo:** https://expenseai-redesign.imegufavour30.chatgpt.site

## Current redesign

- Home view with total balance, card reference, monthly spending analytics, and recent transactions
- Expenses view with a calendar strip, salary-versus-expense cards, and category budget progress
- Total Expense view with income percentage, category chart, totals, and a plain-language insight
- Responsive mobile navigation and add-expense sheet
- Purple and coral visual system with Naira formatting throughout
- JWT authentication and per-user isolation in the original API architecture

## Why I built it

Most budgeting apps I found showed what had already happened but did not explain what to do next, and very few felt made for everyday spending in Naira. ExpenseAI is my attempt to make the important part obvious without turning money management into accounting homework.

## Project structure

- `frontend/` — the current React + Next.js responsive redesign
- Root JavaScript files — the original Express, Prisma, and JWT backend work

## Run the redesigned frontend

```bash
cd frontend
npm install
npm run dev
```

Then open http://localhost:3000.

## Backend note

The original backend files have been preserved at the repository root. Configure the values in `env.example` and finish consolidating the API entrypoint before connecting it to real financial data.

## Next steps

- Connect the redesigned screens to the authenticated API
- Complete recurring expense and budget persistence
- Add tests for per-user access rules
- Move production data from local SQLite to managed Postgres

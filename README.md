# India Fintech Sector Scan 2025

**Strategy & Transformation CoE — Sector Scan**  
*Prepared by Navya Behl | May 2025*

---

## Overview

A consulting-grade, interactive sector scan of India's fintech industry — structured to mirror the deliverables produced by Bain's Strategy & Transformation Centre of Excellence. Covers market sizing, segment dynamics, funding trends, competitive landscape, disruption themes, and strategic implications.

> **Live demo:** [india-fintech-sector-scan.vercel.app](https://india-fintech-sector-scan.vercel.app) *(deploy instructions below)*

---

## What's inside

| Tab | Content |
|-----|---------|
| **Market overview** | KPI metrics, market size trajectory 2021–2032, structural growth drivers |
| **Segment breakdown** | Market share by segment, CAGR, revenue 2025 vs 2030, investor deal-share shift |
| **Funding & M&A** | Annual funding 2019–2025, key deals (Groww–Fisdom, Zolve, MUFG–DMI), 2025 IPOs |
| **Key players** | 8 major players with valuation, metrics, and strategic insight per player |
| **Disruption themes** | 6 high-conviction themes with signals, horizon, and conviction rating |
| **Strategic implications** | 5 strategic questions for incumbents + risk landscape matrix + executive summary |

---

## Data sources

All data is sourced from public disclosures — no paywalled data required:

| Source | Used for |
|--------|----------|
| [KPMG India Fintech Evolution Report 2025](https://kpmg.com/in/en/insights/2025/10/indias-fintech-evolution-from-growth-to-resilience.html) | Funding trends, segment analysis |
| [Inc42 State of Indian Fintech H1 2025](https://inc42.com) | Deal data, unicorn counts, lending projections |
| [Tracxn Geo Annual India Fintech 2025](https://tracxn.com) | Total funding, M&A, early-stage data |
| [PwC India Payments Handbook 2025–30](https://www.pwc.in/assets/pdfs/indian-payments-handbook-2025-2030.pdf) | UPI data, payments market |
| [Mordor Intelligence Fintech India 2025](https://www.mordorintelligence.com/industry-reports/india-fintech-market) | Market sizing, segment CAGR |
| [RBI Annual Report FY25](https://www.rbi.org.in) | FI Index, fraud data, regulatory context |
| [Statista India Fintech](https://www.statista.com/topics/5666/fintech-in-india/) | Segment sizing cross-checks |

---

## Tech stack

- **Pure HTML/CSS/JS** — no build tools, no framework required
- **Chart.js 4.4** — all charts via CDN
- Zero dependencies to install

---

## Project structure

```
india-fintech-sector-scan/
├── index.html          # Main entry point
├── src/
│   ├── style.css       # All styling
│   ├── data.js         # All sector data (sourced & cited)
│   ├── charts.js       # Chart.js initialisation
│   └── app.js          # Tab logic, dynamic rendering
├── README.md
└── LICENSE
```

---

## Running locally

```bash
git clone https://github.com/YOUR_USERNAME/india-fintech-sector-scan.git
cd india-fintech-sector-scan

# Option A — Python (no install)
python3 -m http.server 8000
# Open: http://localhost:8000

# Option B — Node
npx serve .
# Open: http://localhost:3000
```

---

## Deploying to Vercel (free, 30 seconds)

```bash
npm i -g vercel
vercel --prod
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new) — auto-deploys on every push.

---

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source → Deploy from branch → main / root**
3. Your live URL: `https://YOUR_USERNAME.github.io/india-fintech-sector-scan`

---

## Methodology notes

- Market size estimates aggregated across Mordor Intelligence, KPMG, and Inc42 — figures triangulated where sources diverge
- Funding data (2025): Tracxn as primary source; cross-checked against KPMG and Inc42
- Segment CAGR figures: Mordor Intelligence 2025 projections (2026–2031 period)
- Player valuations: latest publicly reported rounds or listed market cap (May 2025)
- All projections clearly labelled as projected with dashed chart styling

---

## Author

**Navya Behl**  
M.Sc. Economics, Dr. B.R. Ambedkar School of Economics, Bengaluru (2021–2026)  
[LinkedIn](https://linkedin.com) · [GitHub](https://github.com)

*This project was independently produced as part of a portfolio demonstrating consulting-oriented sector analysis skills.*

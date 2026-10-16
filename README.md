# AI Crude Dashboard

An AI-powered dashboard for monitoring crude futures and options activity, with support for:
- live WTI data source tile (FRED / EIA friendly)
- user-configured Groww access token
- buy/sell signal analysis
- event and macro triggers
- shareable dashboard URL concept

## Features included in the initial MVP
- Dashboard overview with summary cards
- WTI price tile with simple chart
- AI signal card for buy/sell/neutral detection
- Event trigger panel
- Groww token form with encrypted local storage (demo secure pattern)
- Fallback WTI data and signal logic so the app works even without API keys

## Tech stack
- Next.js 14
- TypeScript
- App Router API routes
- Encrypted token storage for local demo usage

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Environment variables

Optional, for real WTI data integration:

```bash
FRED_API_KEY=your_key_here
TOKEN_SECRET=your_secure_secret_here
```

## Notes
- The Groww token is not a real trading integration yet; it is a secure local placeholder implementation for the MVP.
- If you want real Groww API calls, a production version would require official Groww partner/API access and request scopes.
- The event and signal logic is intentionally rule-based for the first version and is a foundation for future ML enhancements.

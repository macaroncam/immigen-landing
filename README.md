# Immigen Landing

A modern, scalable landing page and early access system for Immigen.ai.

## 🚀 Project Overview
- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express
- **Cloud Storage:** Google Drive (for CV uploads)
- **CSV Storage:** Local CSV for submissions and duplicate email checking

## 📁 Directory Structure

```
immigen-landing-1/
├── client/
│   ├── components/
│   │   ├── landing/           # Landing-specific components, hooks, and UI
│   │   │   ├── FloatingElements.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── PageWrapper.tsx
│   │   │   ├── hooks/
│   │   │   └── ui/
│   │   └── ui/                # Global UI components
│   ├── constants/             # Centralized constants (branding, text, etc.)
│   ├── hooks/                 # (Legacy) global hooks
│   ├── pages/                 # Top-level pages (routes)
│   └── global.css             # Global styles
├── server/
│   ├── routes/                # API route handlers
│   ├── googleDrive.ts         # Google Drive integration
│   └── index.ts               # Express app entry
├── early-access.csv           # Local CSV for submissions
├── google-service-account.json# Google Drive credentials (not committed)
├── package.json               # Project scripts and dependencies
└── README.md                  # This file
```

## 🛠️ Development Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the frontend (Vite):**
   ```sh
   npm run dev
   ```
3. **Start the backend (recommended for dev):**
   ```sh
   npx ts-node server/node-build.ts
   ```
   Or use `nodemon` for auto-reload:
   ```sh
   npm install -D nodemon
   npx nodemon --watch server --ext ts --exec 'npx ts-node' server/node-build.ts
   ```

## 🚢 Production Build

1. **Build the project:**
   ```sh
   npm run build
   ```
2. **Start the production server:**
   ```sh
   npm run start
   ```

## 🧩 Adding New Features/Sections
- Place new landing-specific components in `client/components/landing/`.
- Add new constants to `client/constants/landing.ts`.
- For new pages, add to `client/pages/` and update routes in `client/App.tsx`.
- For backend routes, add to `server/routes/` and register in `server/index.ts`.

## 📝 Conventions
- **No hardcoded values:** Use variables/constants for colors, text, etc.
- **Organize by feature:** Group related components, hooks, and UI.
- **Keep code modular:** Use reusable components for buttons, forms, etc.
- **Document as you go:** Add comments and update this README as needed.

---

For any questions or onboarding, see the code comments or reach out to the project maintainer. 
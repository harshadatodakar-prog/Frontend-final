# DabbaCartel — Vercel Frontend

This is the frontend-only/static version of DabbaCartel.

## Deploy on Vercel

- Import this folder into Vercel.
- Framework Preset: Other
- Build Command: leave empty
- Output Directory: leave empty
- Install Command: leave empty
- Deploy.

No PHP, MySQL, Node server, or environment variables are required.

## Notes

- The original UI and page structure are preserved.
- Frontend interactions use browser localStorage where backend persistence was previously required.
- Authentication is demo-only and is not secure real authentication.
- Data stored in localStorage is local to the browser/device and is not shared between users.

## Impact dashboard

The Dashboard now includes seven frontend-only impact metrics:
- Kg of Food Rescued
- Meals Redistributed
- Number of Donors
- Receiving Organizations
- Successful Donations
- Food Waste Reduced
- Estimated Beneficiaries Reached

The displayed impact values are stored in `localStorage` under `dabbacartel_state.impact`, so they remain compatible with a static Vercel deployment.

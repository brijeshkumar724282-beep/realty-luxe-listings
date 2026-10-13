# Realty Luxe Listings Template

A calm real estate listings template. Light theme, one solid green accent, soft motion, fully responsive.

## Features

1. Hero with search — filter 9 local homes by location, max price and min beds with live result count
2. Listings grid — 9 properties with Picsum photos, price, beds, baths, area and agent on each card
3. Property detail modal — photo gallery with thumbs, feature list, mock mortgage calculator and Book A Tour link
4. Agents plus Sell CTA plus testimonials — 3 agent cards, solid green sell panel, 3 client stories
5. Contact form plus footer — validated local form with success state, office info and full footer

## Run

```bash
npm install && npm run dev
```

Then open the URL shown in the terminal, usually `http://localhost:5173`.

Build for hosting:

```bash
npm install && npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customize

* Edit homes in `src/data/listings.js` — price, beds, baths, area, agent, photos, features
* Edit agents and quotes in the same file under `agents` and `testimonials`
* Change colors in `src/index.css` under `@theme` — `accent`, `accentdeep`, `paper`, `ink`
* Swap photos — replace any `picsum.photos/seed/...` URL with your own image URL
* Mortgage math lives in `src/components/PropertyModal.jsx` in `monthlyPayment`. Mock only, not financial advice

## Assumptions

* Listing photos use Picsum placeholder images so the template runs with zero setup
* Mortgage calculator is mock math for planning only, taxes and fees not included
* Contact form stores nothing and shows a local success message, wire it to your backend when ready

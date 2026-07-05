# 🚛 Trucksales - Auto Market Project

A modern, highly responsive, and premium vehicle marketplace web application inspired by [trucksales.com.au](https://www.trucksales.com.au/). This project allows users to browse commercial vehicles (heavy-duty, medium-duty, and light-duty trucks), perform dynamic filtering and sorting, view detailed vehicle specifications, and directly send enquiries to sellers.

🚀 **Live Demo URL:** [https://auto-market-project-zaq4.vercel.app/](https://auto-market-project-zaq4.vercel.app/)

---

## 🌟 Key Features

- **Dynamic Search & Filtering:** Filter trucks instantly by keyword search, category, location/state, and price using the interactive sidebar filters.
- **Advanced Sorting:** Sort listings dynamically by price (high to low, low to high) or odometer readings.
- **Detailed Vehicle Profiles:** Click into any listing to see:
  - **Image Gallery:** Visual gallery with mockups of the truck.
  - **Overview Stats:** Quick-glance cards showing GVW, configuration, odometer, power, and state.
  - **Technical Specifications:** Comprehensive specifications grouped into Engine & Drivetrain, Chassis & Suspension, and Cab Features.
  - **Seller Contact & Quick Enquiry:** Sidebar module to reveal the seller's phone number or submit a quick enquiry.
- **Interactive Enquiry Modals:** Contextual popup modal allows prospective buyers to fill in their name, email, phone number, and query to reach out directly to private sellers or premium dealers.
- **Premium Dark/Light Accents:** Fully styled with a custom brand theme including a rich navy header (`--color-primary-dark`) and a signature yellow accent (`--color-highlight-yellow`).

---

## 🛠️ Technology Stack

- **Core Framework:** [React 19](https://react.dev/) & [React DOM](https://react.dev/reference/react-dom)
- **Bundler & Dev Server:** [Vite 8](https://vite.dev/) (with fast Hot Module Replacement)
- **Styling Engine:** [Tailwind CSS v4](https://tailwindcss.com/) (using the new `@tailwindcss/vite` plugin and `@theme` configurations)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (for smooth modal transitions and listing hover interactions)
- **Icons:** [Lucide React](https://lucide.dev/) (for clean, lightweight vector icons)
- **Linting:** [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) (an ultra-fast JavaScript/TypeScript linter)
- **Package Manager:** [pnpm](https://pnpm.io/)

---

## 📁 Project Architecture & Components

The application is modularized into clean, reusable React components:

```
src/
├── App.jsx                 # Main application controller, handles state & routing
├── index.css               # Global Tailwind directives, custom fonts, animations & theme
├── main.jsx                # Application mounting point
├── components/             # Reusable UI components
│   ├── Header.jsx          # Top navigation bar with branding and links
│   ├── Hero.jsx            # Dynamic search bar header
│   ├── Filters.jsx         # Left sidebar filters (Category, State, Price slider)
│   ├── ListingsPanel.jsx   # Results grid with sorting options
│   ├── ListingCard.jsx     # Individual vehicle listing card
│   ├── DetailView.jsx      # Unified layout for a selected truck
│   ├── DetailGallery.jsx   # Media slider/gallery
│   ├── DetailOverview.jsx  # Key specs overview cards
│   ├── DetailSpecs.jsx     # Grouped technical specifications list
│   ├── DetailSidebar.jsx   # Quick contact widget and quick query form
│   └── EnquiryModal.jsx    # Standalone modal for general/detailed enquiries
└── data/
    └── listingsData.js     # Structured dataset containing mock truck listings
```

---

## 🚀 Getting Started

To get a local copy of this project up and running, follow these simple steps.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (LTS version recommended) and [pnpm](https://pnpm.io/) package manager.

If you don't have `pnpm` installed, you can install it globally via npm:
```bash
npm install -g pnpm
```

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   cd AutoMarketProject
   ```

2. Install all dependencies:
   ```bash
   pnpm install
   ```

3. Launch the development server:
   ```bash
   pnpm run dev
   ```
   Open your browser to `http://localhost:5173/` (or the address printed by Vite) to view the application.

---

## 📜 Available Scripts

In the project directory, you can run the following scripts:

| Command | Action |
|:---|:---|
| `pnpm run dev` | Runs the app in development mode with HMR. |
| `pnpm run build` | Builds the production bundle in the `dist` directory. |
| `pnpm run preview` | Runs a local web server to preview the production build. |
| `pnpm run lint` | Runs `oxlint` to lint codebase files for issues. |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a pull request or report issues.

---

## 👤 Author

Developed by **Satyasandhya Biswal** (© 2026 Auto Market Project).
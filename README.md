# SJ Softwares (`sj.co.tz`)

> **Next-Gen IT Solutions for the Digital Era** — Custom software, web & mobile applications, AI integration, and IT consultancy services.

`sj.co.tz` is a modern, responsive single-page web application built with **React** featuring a sleek futuristic dark glassmorphism design, dynamic particle animations (`particles.js`), interactive project showcases, testimonials, and contact features.

---

## 🚀 Features

- 🎨 **Futuristic UI/UX**: Dark mode styling with cyan/teal neon accents, glassmorphism containers, and reactive particle background effects.
- 📱 **Fully Responsive**: Mobile-first architecture with custom mobile navigation drawer and dynamic touch layouts.
- ⚡ **Interactive Components**:
  - **Hero Section**: Dynamic call-to-action buttons and floating service cards.
  - **Services Overview**: Interactive service cards detailing Web Development, Mobile Apps, Cloud Solutions, and Consultancy.
  - **Projects Showcase**: Filterable portfolio showcase with project details and live preview triggers.
  - **About & Milestones**: Company timeline counter animation showcasing history and core values.
  - **Testimonials & Contact**: Interactive client feedback slider/cards and contact form integration.
  - **Floating Action / Chat**: Quick access contact button with options for direct WhatsApp message or email inquiry.

---

## 🛠️ Technology Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool / Scripting**: `react-scripts` (Create React App workflow)
- **Styling**: Modular Vanilla CSS with CSS custom properties (variables)
- **Icons**: [`react-icons`](https://react-icons.github.io/react-icons/) (FontAwesome / Material icons)
- **Interactive Visuals**: [`particles.js`](https://vincentgarreau.com/particles.js/) background interactive network animation

---

## 📂 Project Structure

```text
sj.co.tz/
├── public/               # Static assets & HTML template
├── src/
│   ├── components/       # React UI Components
│   │   ├── Header.jsx       # Navigation bar & mobile drawer menu
│   │   ├── Hero.jsx         # Hero section & interactive cards
│   │   ├── Services.jsx     # Service offerings grid
│   │   ├── Projects.jsx     # Portfolio & project highlights
│   │   ├── About.jsx        # Company background, stats & timeline
│   │   ├── Testimonials.jsx # Client reviews & ratings
│   │   ├── Contact.jsx      # Contact form & location information
│   │   ├── ChatButton.jsx   # Floating interactive quick action button
│   │   └── Footer.jsx       # Footer links & copyright details
│   ├── styles/           # Modular CSS files corresponding to components
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── Services.css
│   │   ├── Projects.css
│   │   ├── About.css
│   │   ├── Testimonials.css
│   │   └── Contact.css
│   ├── images/           # Local graphics, logos, and image assets
│   ├── App.js            # Main application wrapper & particles initialization
│   ├── index.js          # React DOM entry point
│   └── index.css         # Global design tokens and reset styles
├── package.json          # Project metadata & npm dependencies
└── README.md             # Project documentation
```

---

## 🏁 Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your system:
- **Node.js**: v16.0.0 or higher
- **npm**: v8.0.0 or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/joshhy12/sj.co.tz.git
   cd sj.co.tz
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page reloads automatically when code changes are saved.

### `npm run build`
Builds the app for production to the `build` folder.\
Optimizes and minifies the code for production deployment.

### `npm test`
Launches the test runner in interactive watch mode.

---

## 📄 License

This project is proprietary and maintained by **SJ Softwares**. All rights reserved.

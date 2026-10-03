# Raheel Youssef Elishaa — Personal Portfolio (بورتفوليو راحيل يوسف إليشع)

Modern, minimalist, and fully responsive personal portfolio website built with **React.js**, **Tailwind CSS**, and **Vite**.

Designed according to editorial grid UI aesthetics inspired by the "folio" design style:
- **Color Scheme**: Warm Cream (`#F4EFEA`), Deep Charcoal (`#1E1E1E`), and Vibrant Coral (`#FF3B30`).
- **Typography**: `Outfit` / `Inter` for English & `Cairo` / `Tajawal` for Arabic.
- **Zero Personal Photos**: Built using crisp typography, technical code badges, and geometric wireframe cards.
- **Bilingual (Arabic & English)**: Complete instant toggle between English (LTR) and Arabic (RTL) across all components.
- **Theme Switcher**: Smooth Dark Mode & Light Mode toggling with persistent user preference in `localStorage`.
- **CV Data Integration**: Tailored specifically for **Raheel Youssef Elishaa** (Front-End Developer Trainee at DEPI & Computer Science Student at the Higher Institute of CS, 6th of October).

---

## 📁 Project Structure

```
test4/
├── index.html                   # HTML template with Outfit & Cairo Google Fonts
├── package.json                 # Project dependencies (React, Tailwind, Lucide, Vite)
├── tailwind.config.js           # Custom cream, charcoal, and coral color palette
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite build and dev server config
└── src/
    ├── main.jsx                 # Application entry point
    ├── App.jsx                  # Root layout with Theme & Language providers
    ├── index.css                # Tailwind directives and grid pattern styles
    ├── context/
    │   ├── ThemeContext.jsx     # Dark/Light mode state & localStorage persistence
    │   └── LanguageContext.jsx  # English/Arabic state & dynamic LTR/RTL switching
    ├── data/
    │   ├── translations.js      # Full bilingual text dictionaries (EN & AR)
    │   └── portfolioData.js     # CV information, projects, and skills data
    └── components/
        ├── Navbar.jsx           # Sticky nav, brand, language & theme toggles, mobile drawer
        ├── Hero.jsx             # Editorial grid hero, developer.config.json card, stats
        ├── About.jsx            # Professional summary and 4 core development pillars
        ├── ExperienceEducation.jsx # DEPI Trainee timeline & CS Bachelor degree
        ├── Projects.jsx         # 5+ filterable projects showcase
        ├── ProjectModal.jsx     # Deep-dive project modal with architecture details
        ├── Skills.jsx           # Categorized skills with proficiency bars
        ├── Contact.jsx          # Email copy, LinkedIn, GitHub, and contact form
        └── Footer.jsx           # Sleek footer, back-to-top button, copyright
```

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized, production-ready build in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🎨 Key Features & Customizations

1. **Language Switching**:
   Clicking the **Globe / Language button** toggles between English and Arabic, updating `dir="ltr"` or `dir="rtl"` and switching between Outfit and Cairo fonts dynamically.
2. **Dark & Light Modes**:
   Clicking the **Sun / Moon button** toggles between the Warm Cream light theme and the Obsidian Charcoal dark theme.
3. **Copy Email**:
   Clicking "Copy Email" in the Hero or Contact sections copies `Raheelyoussef25@gmail.com` to the clipboard with real-time visual feedback.
4. **Project Inspection**:
   Clicking "View Details" on any project card opens a modal explaining the architecture, features, and key tech stack components.

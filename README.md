# Web Development Internship — Week 1 Assignments

**Organization:** WeIntern Pvt Ltd  
**Track:** Frontend Web Development  
**Author:** Ayushi Rathi ([Ayushiiiii13](https://github.com/Ayushiiiii13))  
**LinkedIn:** [linkedin.com/in/ayushi-rathi-5a8116327](https://www.linkedin.com/in/ayushi-rathi-5a8116327/)  
**Education:** BCA 3rd Year, Christ University, Bengaluru  
**Batch:** Fall 2026  

---

## 🌐 Live Production Deployments (Vercel)

| Project | Live Production URL | Deployment Status |
| :--- | :--- | :--- |
| **🚀 Portfolio Website (Montgomery Edition)** | **[portfolio-website-nine-peach-11.vercel.app](https://portfolio-website-nine-peach-11.vercel.app)** | 🟢 Active |
| **📄 Printable Resume View** | **[portfolio-website-nine-peach-11.vercel.app/assets/resume-view.html](https://portfolio-website-nine-peach-11.vercel.app/assets/resume-view.html)** | 🟢 Active |
| **💼 Business Landing Page** | **[business-landing-page-three-mu.vercel.app](https://business-landing-page-three-mu.vercel.app)** | 🟢 Active |
| **🎨 CSS Challenge Lab** | **[css-challenge-phi.vercel.app](https://css-challenge-phi.vercel.app)** | 🟢 Active |

---

## 📌 Repository Overview

This repository contains the complete set of deliverables for **Week 1 of the WeIntern Web Development Internship**. The objective of this week's assignments is to build a rock-solid foundation in semantic HTML5 markup, responsive CSS3 architectures (Flexbox & CSS Grid), fluid layout systems, subtle micro-interactions, and vanilla JavaScript functionality without reliance on external UI frameworks.

### Assignments Included
1. **Task 1: Professional Portfolio Website** — Multi-page developer portfolio for **Ayushi Rathi** (Christ University) featuring theme switching, responsive navigation, real-world project showcase ([BridgeAble](https://bridge-able-production.vercel.app), [ResumeIQ AI](https://github.com/Ayushiiiii13/resumeiq-ai), [OrbitShare](https://github.com/Ayushiiiii13/OrbitShare)), and validated contact channels.
2. **Task 2: Responsive Business Landing Page** — High-converting commercial landing page for *Lumina Creative Agency* featuring mobile-first layouts, value propositions, client reviews, and an interactive inquiry form.
3. **Task 3: CSS Challenge** — Practical layout and animation lab demonstrating a 3-card Flexbox row, a 6-item CSS Grid analytics dashboard, and subtle keyframe micro-interactions.

---

## 🗂️ Project Directory Structure

```text
week1-assignments/
├── portfolio-website/              # Task 1: Personal Developer Portfolio (Ayushi Rathi)
│   ├── index.html                  # Home page (Hero, skills, featured projects, footer)
│   ├── about.html                  # Christ University BCA, milestones & career goals
│   ├── projects.html               # Filterable real GitHub projects showcase
│   ├── contact.html                # Direct contact channels (ayushirathi2912@gmail.com) & form
│   ├── css/
│   │   └── style.css               # Design tokens, dark mode, responsive media queries
│   ├── js/
│   │   └── script.js               # Theme toggle, mobile burger, filters & form handling
│   └── assets/
│       ├── images/                 # Avatars & project preview vector graphics
│       │   ├── ayushi-photo.jpg    # Ayushi's profile photo
│       │   ├── project-1.svg       # BridgeAble preview
│       │   ├── project-2.svg       # ResumeIQ AI preview
│       │   ├── project-3.svg       # OrbitShare preview
│       │   └── project-4.svg       # GrubRush preview
│       └── resume-view.html        # Interactive & printable CV document
│
├── business-landing-page/          # Task 2: Commercial Landing Page (Lumina Creative)
│   ├── index.html                  # Full landing page with sticky nav, hero, services, why-us, testimonials, form
│   ├── css/
│   │   └── style.css               # Typography scale, grid cards, sticky glassmorphic nav
│   ├── js/
│   │   └── script.js               # Mobile menu toggle, scroll observer, inquiry validation
│   └── assets/
│       └── hero-graphic.svg        # Custom vector dashboard preview graphic
│
├── css-challenge/                  # Task 3: CSS Layout & Animation Lab
│   ├── index.html                  # Interactive lab demonstrating all 3 mini-exercises
│   ├── css/
│   │   └── style.css               # Flexbox row/column rules, CSS grid auto-fit, keyframe animations
│   └── js/
│       └── script.js               # Interactive mobile-stack simulation toggle
│
├── screenshots/                    # Complete capture suite for evaluation rubric
│   ├── portfolio-home-desktop.png
│   ├── portfolio-home-mobile.png
│   ├── portfolio-projects.png
│   ├── portfolio-contact.png
│   ├── landing-desktop.png
│   ├── landing-hero-mobile.png
│   ├── landing-services.png
│   ├── landing-contact-form.png
│   ├── flex-desktop.png
│   ├── flex-mobile.png
│   ├── grid-layout.png
│   └── animation-demo.png
│
├── .gitignore                      # Excludes node_modules, OS metadata & IDE artifacts
└── README.md                       # Comprehensive documentation & review guide
```

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), SEO metadata, accessible landmark roles |
| **CSS3** | Vanilla CSS variables, responsive Flexbox, 2D CSS Grid, `@media` queries, `@keyframes`, cubic-bezier transitions |
| **Vanilla JavaScript** | DOM manipulation, `localStorage` theme state, client-side input validation, mobile navigation toggling |
| **SVG Vector Graphics** | Scalable, high-resolution imagery and icons with zero external CDN dependencies |

> **Note on Frameworks:** In strict accordance with the assignment guidelines, **no external UI frameworks** (such as Tailwind, Bootstrap, or React) were used in these assignment submissions. All styling, layout calculations, and animations are 100% hand-crafted vanilla CSS.

---

## 🚀 Detailed Task Breakdown

### 1. Professional Portfolio Website (`/portfolio-website`)
- **Pages:**
  - `index.html`: Hero banner for Ayushi Rathi, core technical skill cards, featured project highlights (BridgeAble, ResumeIQ AI, OrbitShare), and quick contact callout.
  - `about.html`: Detailed summary of BCA education at Christ University, Bengaluru, development journey, and downloadable resume.
  - `projects.html`: Interactive project gallery equipped with category filter tabs (*All*, *Web Apps*, *AI & Tools*, *Community Impact*).
  - `contact.html`: Contact email (ayushirathi2912@gmail.com), LinkedIn, GitHub, and an accessible contact form with client-side email pattern validation.
- **Bonus Features Implemented:**
  - 🌓 **Dark / Light Mode Toggle:** Automatically respects user OS system preference and saves state in `localStorage`.
  - 📱 **Responsive Mobile Menu:** Accessible hamburger drawer for mobile viewports.
  - 🎨 **Modern Design Tokens:** Strict token-based styling via CSS custom properties.

### 2. Responsive Business Landing Page (`/business-landing-page`)
- **Brand:** *Lumina Creative Agency* (Boutique UI/UX & Web Development Studio).
- **Key Sections:**
  - **Sticky Header:** Translucent glassmorphism navbar with blur filter and primary CTA.
  - **Hero Section:** Value proposition headline, proof badges (*95+ Projects*, *99.4% Satisfaction*), and hero mockup visual.
  - **Services Grid:** 6 tailored service cards with consistent spacing, alignment, and SVG icons.
  - **Value Proposition ("Why Lumina"):** 3-pillar breakdown paired with a high-contrast dark stats card box.
  - **Client Testimonials:** Verified reviews highlighting real business impacts and star ratings.
  - **Interactive Project Inquiry Form:** Fields for Name, Work Email, Phone, Service Selection, and Project Scope with instant error/success alert banners.

### 3. CSS Challenge (`/css-challenge`)
- **Flexbox Layout Task:**
  - Horizontal 3-card testimonial row using `display: flex`, `justify-content: space-between`, `align-items: stretch`, and `gap: 2rem`.
  - Seamlessly reflows into a single vertical column on mobile screens under `820px`.
  - Includes an interactive button to test the column/row stack on any viewport size.
- **CSS Grid Layout Task:**
  - 6-item analytics dashboard grid using `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`.
  - Equal spacing, progress bar indicators, metric highlights, and responsive column wrapping without layout breaks.
- **Animation & Micro-Interactions Lab:**
  - Button shimmer & lift effect with transform translation.
  - Smooth dual-tone keyframe circular loading spinner.
  - 3D card tilt & elevation lift using `cubic-bezier(0.34, 1.56, 0.64, 1)`.
  - Animated underline navigation link using `::after` pseudo-element width transitions.
  - Live pulse radar indicator badge with infinite ripple keyframe.

---

## 💻 Local Setup & Running Instructions

The local web server is running on **port 3000**:

```bash
# Clone the repository
git clone https://github.com/Ayushiiiii13/week1-assignments.git
cd week1-assignments

# Start local server via Python 3:
python -m http.server 3000
```

Visit:
- Portfolio: `http://localhost:3000/portfolio-website/`
- Business Landing: `http://localhost:3000/business-landing-page/`
- CSS Challenge: `http://localhost:3000/css-challenge/`

---

## 👤 Author & Acknowledgments

- **Intern Name:** Ayushi Rathi
- **College:** Christ University, Bengaluru (BCA 3rd Year)
- **Role:** Web Development Intern
- **Company:** WeIntern Pvt Ltd
- **GitHub:** [Ayushiiiii13](https://github.com/Ayushiiiii13)
- **LinkedIn:** [Ayushi Rathi](https://www.linkedin.com/in/ayushi-rathi-5a8116327/)

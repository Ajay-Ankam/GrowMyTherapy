# Front-End Developer Internship Assignment — Grow My Therapy
**Candidate Name:** Ajay Ankam  
**Role:** Front-End Developer Intern  
**Project:** Creative Redesign & Clone for Dr. Maya Reynolds, PsyD  
**Live Demo:** [Insert Vercel / Netlify Link Here]  
**Video Walkthrough:** [Insert Loom Video Link Here]  

---

## 📌 Project Overview
This repository contains a full-stack Next.js and Tailwind CSS web application built as Stage 2 of the Grow My Therapy hiring process. 

The project objective was twofold:
1. **Clone & Replicate Structure:** Faithfully mirror the layout, grid systems, typography hierarchy, and section flow of the reference website ([Conejo Valley Counseling](https://www.conejovalleycounseling.com/home)).
2. **Creative Redesign & Content Re-skin:** Redesign the experience around a fictional therapist profile—**Dr. Maya Reynolds, PsyD**—using custom cohesive design themes, location-based SEO copywriting, tailored image selections, and a newly built custom section highlighting her physical practice space.

---

## 🛠️ Tech Stack & Tools Used
* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (v4)
* **Icons:** Lucide React (`lucide-react`)
* **Deployment:** Vercel

---

## 🧩 Assignment Requirements & Feature Breakdown

### 1. UI Cloning & Layout Accuracy (Part 1)
* **Structure Alignment:** Cloned the core layout structure, section ordering, and component flow from `conejovalleycounseling.com/home`.
* **Mobile Responsiveness:** Fully responsive design built mobile-first, ensuring smooth layout shifts across desktop, tablet, and mobile screen sizes.
* **Component Architecture:** Refactored into modular, maintainable React components (`Navbar`, `Hero`, `About`, `Specialties`, `OurOffice`, `Faqs`, `ContactFooter`).

### 2. Theme & Color Palette (Part 2)
Replaced the default color scheme with a calm, aesthetic, and professional palette designed for a modern mental health practice:
* **Primary (Warm Sage):** `#2d5a4c` / `#23473c` — Conveys grounding, trust, and calm.
* **Secondary (Warm Cream):** `#fdfbf7` / `#f7f2ea` — Provides soft contrast and uncluttered readability.
* **Accent (Terracotta):** `#d97742` / `#c2622e` — Highlights high-priority action items and buttons.

### 3. Copywriting & Local SEO Optimization (Part 2)
All copy is directly extracted and refined from **Dr. Maya Reynolds, PsyD's** profile:
* **SEO Target Region:** Santa Monica, CA & California-wide Telehealth.
* **Keywords Integrated:** *Santa Monica anxiety therapist, EMDR trauma recovery, panic relief, high-achieving burnout, Licensed Clinical Psychologist CA*.
* **Specialties Featured:**
  1. *Anxiety & Panic Relief*
  2. *Trauma Recovery & EMDR*
  3. *Burnout & Perfectionism*

### 4. Custom Section: "Our Office" (Part 3)
* Designed a completely new section that integrates naturally into the page flow.
* Showcases Dr. Maya's physical practice located at **123th Street 45 W, Santa Monica, CA 90401**.
* Highlights key features: natural light, uncluttered calm space, privacy, and hybrid/in-person availability.

---

## 📁 Project Folder Structure

```text
grow-my-therapy-assignment/
├── public/
│   └── Dr Maya Reynolds.png              # Local image asset for Dr. Maya Reynolds
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind v4 theme configurations
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Page assembler referencing components
│   └── components/
│       ├── Navbar.tsx         # Top navigation header & mobile menu trigger
│       ├── Hero.tsx           # Primary H1 headline, local photo, and CTAs
│       ├── About.tsx          # Practice bio & "Who We Help" section
│       ├── Specialties.tsx    # 3 specialized clinical focus cards
│       ├── OurOffice.tsx      # Part 3 Custom Section (Santa Monica sanctuary)
│       ├── Faqs.tsx           # Frequently asked questions accordion
│       └── ContactFooter.tsx  # Consultation booking form & footer info
├── package.json
├── README.md
└── tailwind.config.ts / postcss.config.mjs
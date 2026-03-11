# Portfolio Website Plan

## Overview

A minimalist software developer portfolio built with \*\*React \*\*and deployed as a **static site**. The design emphasizes clarity, restrained visuals, and professional presentation of work.

---

# Site Architecture

### Pages

- Home
- Projects
- About

### Resume

The resume is a **PDF opened in a new tab**.

---

# Navigation

### Navbar

Sticky navigation visible across all pages.

Links:

- Home
- Projects
- About
- Resume

### Mobile

Navbar collapses to a hamburger menu.

---

# Home Page

The homepage will remain **very minimal** and likely fit within a single screen height.

Purpose:

- Introduce myself
- Provide direct contact links

### Content

- Name
- Short professional title
- Brief introduction

### Contact Links

Displayed directly on the homepage:

- Email
- LinkedIn
- GitHub

These links will also appear in the footer.

The homepage will **not include projects initially**. Featured projects may be added later.

---

# Projects Page

Purpose:

- Showcase professional work
- Present projects in a clean, structured format

Expected structure:

- Project grid
- Individual project pages may be added later (`/projects/[slug]`).

The portfolio will prioritize **professional/production work**.

---

# About Page

Purpose:

- Provide background information
- Outline experience and skills

Expected content:

- Short biography
- Experience summary
- Technical skills

---

# Design Direction

### Visual Style

- Tasteful minimalist layout
- Limited on‑screen clutter
- Strong typography and spacing

### Motion

Subtle animations only:

- Fade‑ins
- Small slide transitions

### Color

- Mostly neutral palette
- Possibly one accent color used sparingly

---

# Future Additions

Possible expansions as the portfolio grows:

- Featured projects section on the homepage
- Individual project case study pages
- Contact page with form

---

# Implementation Plan

Recommended order for building the site:

## 1. Project Setup

- Create base folder structure (components, pages, assets, styles)

## 2. Shared Layout

Build elements used across the entire site:

- Sticky navbar
- Global layout wrapper
- Resume link that opens the PDF in a new tab

## 3. Design System / Global Styling

Define the visual foundation before building pages:

- Color palette
- Typography scale
- Spacing rules
- Base styles for links, buttons, and sections

## 4. Home Page

Implement the minimalist landing page:

- Name
- Professional title
- Short introduction
- Email, LinkedIn, and GitHub links

## 5. Projects Page

Create the project showcase structure:

- Project grid layout
- Reusable project card component
- Project data structure

## 6. About Page

Add background information:

- Short biography
- Experience summary
- Technical skills section

## 7. Responsive Pass

Ensure the site works well on smaller screens:

- Mobile navbar
- Responsive grid layouts
- Adjust typography and spacing

## 8. Animations

Add polish:

- Fade in and slide in animations
- Small hover and transition effects

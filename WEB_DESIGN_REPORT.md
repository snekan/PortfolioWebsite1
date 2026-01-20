# Web Design Specification & Reconstruction Guide (Offline Master)
**Project:** Personal Portfolio Website (Multi-Page Offline Edition)
**Author:** Snekanth Babu
**Date:** 2026-01-18
**Location:** `C:\Anti gravity Ai\website 2\for new account\`

---

## 1. Executive Summary
This document serves as the **Master Blueprint** for the Snekanth Babu Portfolio Website. It contains all design rules, technical specifications, and content strategies.
**Purpose**: To allow any developer or AI Agent to strictly recreate or maintain the website with 100% fidelity using this document alone.
**Status**: This version is strictly configured for **Offline/Local** use (Relative paths, Local assets).

---

## 2. Technical Architecture

### 2.1 Technology Stack
*   **Structure**: HTML5 (Semantic)
*   **Styling**: Vanilla CSS (Variables, Flexbox, Grid, Responsive Media Queries)
*   **Logic**: Vanilla JavaScript (ES6+ for navigation, scroll observations)
*   **Hosting/Environment**: Local File System / GitHub Pages compatible.

### 2.2 Directory Structure
The application MUST follow this exact file structure:
```text
/ (Root)
│
├── css/
│   └── style.css          # Main stylesheet (Global styles)
│
├── js/
│   └── main.js            # Main interaction logic (Nav, Animations)
│
├── assets/
│   └── images/            # Project SVGs, Profile JPGs
│
├── games/                 # Sub-applications
│   ├── snake-game/
│   │   ├── index.html
│   │   ├── snake.css
│   │   └── snake.js
│   └── mini-game/
│       └── index.html
│
├── index.html             # Home / About Me
├── projects-research.html # Projects Portfolio
├── education.html         # Education & Certifications
├── experience.html        # Work Experience Timeline
├── skills.html            # Categorized Skills
├── purpose.html           # Personal Blog/Vision
├── games.html             # Games Landing Page
├── contact.html           # Contact Information
└── DEPLOYMENT_GUIDE.md    # User Instructions
```

---

## 3. Visual Identity (Design System)

### 3.1 Color Palette (CSS Variables)
The design uses a **"Warm Minimalist"** theme with beige tones and dark grey text.

```css
:root {
    /* Backgrounds */
    --bg-body: #fdfbf7;      /* Warm Off-White / Light Beige */
    --bg-card: #ffffff;      /* Pure White for depth */
    --bg-accent: #f2f0e9;    /* Slightly darker beige for hover */

    /* Typography */
    --text-primary: #1c1917; /* Warm Black (Main Text) */
    --text-secondary: #57534e; /* Warm Grey (Descriptions) */
    --text-light: #a8a29e;   /* Light Grey (Tags/Meta) */

    /* Accents */
    --primary-color: #57534e; /* Warm Stone Grey */
    --primary-hover: #292524; /* Darker Stone */
    --highlight: #e7e5e4;     /* Geometric Accent */
    --accent-orange: #d97706; /* Optional hover highlights */
}
```

### 3.2 Typography
*   **Primary Font**: 'Outfit', sans-serif (Clean, Modern, Geometric)
*   **Headings**: 'Outfit' (Weights: 600, 700)
*   **Body**: 'Outfit' (Weights: 300, 400)
*   *Note*: Import via Google Fonts (CDN link allowed in HTML head).

### 3.3 UI Components
1.  **Cards**:
    *   Background: White (`--bg-card`)
    *   Border Radius: `16px` (`--radius-md`)
    *   Shadow: Soft diffusion (`0 10px 40px -10px rgba(0,0,0,0.05)`)
    *   Hover Effect: Slight lift `translateY(-5px)` and increased shadow.

2.  **Navigation Bar**:
    *   Fixed height (`80px`), Flexbox layout.
    *   Logo: "Snekanth." (Bold, Text Primary).
    *   Links: Simple text, active state has underline or color change.
    *   Mobile: Hamburger menu (`☰`) toggles a full-width vertical list.

3.  **Buttons**:
    *   **Primary**: Dark background (`#1c1917`), White text, rounded corners.
    *   **Outline**: Transparent background, Dark border (`1px solid #1c1917`).

---

## 4. Page Specifications

### 4.1 Global Elements
*   **Navbar**: Present on ALL pages. Links: About, Projects, Education, Experience, Skills, Purpose, Games, Contact.
*   **Footer**: Simple copyright text.

### 4.2 Home / About (`index.html`)
*   **Hero Section**:
    *   Left: Text ("Bridging Engineering with Business Strategy").
    *   Right: Profile Image (`assets/images/profile.jpg`).
*   **About Section**: "My Background" vs "Personal Details" (Nationality, Work Permit, Languages).

### 4.3 Projects (`projects-research.html`)
*   **Layout**: `grid-auto` (Responsive Grid).
*   **Project Card**:
    *   Top: Image (height 220px, object-fit cover).
    *   Bottom: Title, Description, "View Project" Button.
    *   *Key Content*: RSSI Indoor Positioning, Power BI, Organisational Development, Accident Informer.

### 4.4 Experience (`experience.html`)
*   **Layout**: Vertical Timeline.
*   **Item Structure**:
    *   Date Badge (`01/06/2024 – Current`).
    *   Role ("Warehouse & Fulfillment Associate") & Company ("Acut Fulfillment").
    *   Bullet points of responsibilities.
    *   *Images*: Optional images for Clubs/Leadership roles.

### 4.5 Skills (`skills.html`)
*   **Layout**: Categorized Cards.
*   **Categories**: Management, Operations, Engineering, Tools.
*   **Tags**: Rounded pill-shaped tags for individual skills (e.g., "Python", "Kaizen", "Strategic Thinking").

### 4.6 Education (`education.html`)
*   **Layout**: Timeline-style cards.
*   **Content**: MSc International Business (UE Germany), BE Mechatronics (Sathyabama), Diploma (CSC).
*   **Certifications**: A dedicated section listing 17+ certifications via bullet points.

---

## 5. Implementation Rules (Master AI Instructions)

**Prompt to Backup AI:**
"Recreate the portfolio website following this specification exactly."

1.  **Relative Paths Only**:
    *   ALWAYS use `./css/style.css`, `css/style.css`, or relative file names strictly.
    *   NEVER use key paths like `/css/style.css`.
2.  **CSS Methodology**:
    *   Use the `:root` variables defined in Section 3.1.
    *   Use `class="container"` for max-width centering (1150px).
    *   Use `grid-2` and `grid-3` classes for layout grids.
3.  **JavaScript Requirement**:
    *   Implement an `IntersectionObserver` to animate elements (fade-in + slide-up) as they scroll into view.
    *   Implement a Mobile Menu toggle.
4.  **Responsiveness**:
    *   Media Query `@media (max-width: 850px)`: Switch Grid to 1 column, convert Navbar to Hamburger menu.

---

## 6. How to Use for New Account
1.  Open this directory in the new AI/Comp env.
2.  Read this file first.
3.  Verify the existence of `assets/images` and `games/` folders (User must manually copy these from backup).
4.  The HTML/CSS files present are the Source of Truth.

*(End of Report)*

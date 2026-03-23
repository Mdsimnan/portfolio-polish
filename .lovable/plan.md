

# Export Portfolio as Static HTML/CSS/JS Files

## Summary
Generate standalone HTML, CSS, and JS files that replicate your entire React portfolio as a static website you can host anywhere (GitHub Pages, Netlify, etc.).

## What will be created

### 1. `index.html`
- Complete single-page HTML with all sections (Hero, About, Experience, Education, Projects, Skills, Contact)
- Sidebar with navigation, profile photo, social links, download resume button, and dark/light toggle
- Google Fonts (Orbitron, Rajdhani, Share Tech Mono) loaded via CDN
- Lucide Icons via CDN
- Profile image referenced from your GitHub hosted assets

### 2. `style.css`
- All CSS variables for dark/light themes
- Gradient text, glow borders, card hover effects
- Responsive layout with sidebar (desktop) and hamburger menu (mobile)
- CSS Grid for skills section with `repeat(auto-fit, minmax(250px, 1fr))`
- Media queries for mobile breakpoints

### 3. `script.js`
- Sidebar toggle (mobile hamburger menu)
- Dark/light theme toggle
- Smooth scroll navigation
- Active section highlighting
- Particle background animation (canvas-based connected dots)
- Custom cursor trail animation (cyan dot trail)

### Output
Three files written to `/mnt/documents/` for download:
- `index.html`
- `style.css`
- `script.js`

## Technical Notes
- Profile image will use the uploaded `profile.jpeg` path — you'll need to place `profile.jpeg` in the same folder when deploying
- All Lucide icons replaced with inline SVGs for zero dependencies
- Fully self-contained — no build tools needed


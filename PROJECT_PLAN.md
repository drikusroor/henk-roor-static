# Project Plan: Henk Roor Static Site Conversion

## Project Overview
Convert the WordPress-based henkroor.nl website to a static site using Eleventy SSG and deploy to GitHub Pages.

**Original Site:** https://www.henkroor.nl/  
**Target Deployment:** GitHub Pages  
**SSG Framework:** Eleventy (11ty)  
**Runtime:** Bun

---

## Phase 1: Analysis & Planning ✅

### 1.1 Site Structure Analysis
- [x] Identify all pages on henkroor.nl
- [x] Document navigation structure
- [x] Identify reusable components (header, footer, sidebar)
- [x] Map out content hierarchy

### 1.2 Asset Inventory
- [x] WordPress theme assets (CSS, JS, images, fonts)
- [x] Plugin assets
- [x] Core WordPress assets needed for styling
- [x] Custom styles and scripts

---

## Phase 2: Technical Setup ✅

### 2.1 Project Initialization
- [x] Initialize Git repository
- [x] Set up Eleventy with Bun
- [x] Configure GitHub Pages deployment
- [x] Set up GitHub Actions workflow

### 2.2 Directory Structure
- [x] Create `src/` directory for source files
- [x] Create `src/_includes/` for templates
- [x] Create `src/_data/` for global data
- [x] Copy WordPress assets to appropriate locations

---

## Phase 3: Content Conversion ✅

### 3.1 Page Templates
- [x] Homepage (`/`)
- [x] Over Ons (`/over-ons/`)
- [x] Financiële Administratie (`/financiele-administratie/`)
- [x] Salarisadministratie (`/salarisadministratie/`)
- [x] Netwerken (`/netwerken/`)
- [x] Startende Ondernemers (`/startende-ondernemers/`)

### 3.2 Component Development
- [x] Base layout template (`base.njk`)
- [x] Header component (`header.njk`)
- [x] Footer component (`footer.njk`)
- [x] Sidebar components (`sidebar-default.njk`, `sidebar-photo.njk`)

---

## Phase 4: Styling & Layout ⚠️ INCOMPLETE

### 4.1 CSS Integration
- [x] Import WordPress theme CSS
- [x] Configure path handling for GitHub Pages
- [✓] Custom layout fixes (added `custom-layout.css`)

### 4.2 Responsive Design
- [✓] Desktop layout (2/3 content + 1/3 sidebar)
- [❌] **MISSING: Mobile menu implementation**
- [❌] **MISSING: Hamburger menu button**
- [❌] **MISSING: Mobile navigation JavaScript**
- [⚠️] Tablet breakpoints (partially working)

### 4.3 Visual Consistency
- [⚠️] Compare all pages with original site
- [❌] **MISSING: Verify mobile menu matches original**
- [⚠️] Fix any layout discrepancies
- [⚠️] Ensure proper spacing and alignment

---

## Phase 5: Functionality ❌ INCOMPLETE

### 5.1 Navigation
- [x] Desktop navigation menu
- [❌] **MISSING: Mobile hamburger menu**
- [❌] **MISSING: Menu toggle JavaScript**
- [x] Active page highlighting
- [❌] **MISSING: Submenu functionality (if exists on original)**

### 5.2 Interactive Elements
- [❌] **TODO: Check for any forms on original site**
- [❌] **TODO: Check for any interactive widgets**
- [❌] **TODO: Verify all links work correctly**

### 5.3 SEO & Meta
- [x] Basic meta tags (title, description)
- [x] Open Graph tags
- [x] robots.txt
- [❌] **TODO: Verify sitemap if needed**
- [❌] **TODO: Check for any schema.org markup on original**

---

## Phase 6: Assets & Media ⚠️ INCOMPLETE

### 6.1 Images
- [x] Logo and branding images
- [x] Content images
- [❌] **TODO: Verify all images are optimized**
- [❌] **TODO: Add alt text to all images**
- [❌] **TODO: Check for WebP support on original site**

### 6.2 Fonts & Icons
- [x] Custom fonts (Lato)
- [x] Icon fonts (henk-roor-icons)
- [❌] **TODO: Verify font loading strategy**

---

## Phase 7: Testing & Quality Assurance ❌ NOT STARTED

### 7.1 Cross-Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### 7.2 Responsive Testing
- [ ] Desktop (1920px, 1440px, 1024px)
- [ ] Tablet (768px, 834px)
- [ ] Mobile (375px, 390px, 428px)
- [ ] Mobile menu functionality

### 7.3 Performance Testing
- [ ] Page load times
- [ ] Asset optimization
- [ ] Lighthouse audit scores

### 7.4 Functionality Testing
- [ ] All navigation links
- [ ] Mobile menu toggle
- [ ] Contact information links (phone, email)
- [ ] External links (maps, etc.)

---

## Phase 8: Deployment & Monitoring ✅

### 8.1 Initial Deployment
- [x] GitHub Actions workflow
- [x] Deploy to GitHub Pages
- [x] Verify live site

### 8.2 Post-Deployment
- [❌] **TODO: Compare live site with original henkroor.nl**
- [❌] **TODO: Test all features on live site**
- [❌] **TODO: Monitor for any issues**

---

## Phase 9: Documentation ⚠️ INCOMPLETE

### 9.1 Technical Documentation
- [x] README.md with basic info
- [✓] Updated README with layout and workflow info
- [❌] **MISSING: This PROJECT_PLAN.md document**
- [❌] **TODO: Document any custom modifications**
- [❌] **TODO: Create maintenance guide**

### 9.2 Code Documentation
- [⚠️] Comments in templates (sparse)
- [❌] Comments in custom CSS
- [❌] Document any JavaScript if added

---

## Critical Issues to Address

### High Priority
1. **❌ Mobile Menu Missing** - The hamburger menu and mobile navigation is not implemented
2. **❌ Menu Toggle JavaScript** - No JavaScript for menu interactions
3. **⚠️ Visual Consistency** - Need thorough comparison with original site
4. **❌ Testing** - No systematic testing has been done

### Medium Priority
5. **⚠️ Image Optimization** - Images may not be optimized
6. **❌ Alt Text** - Not all images have proper alt text
7. **❌ Forms** - Haven't checked if original site has forms
8. **❌ Performance** - No performance optimization done

### Low Priority
9. **❌ Sitemap** - May need XML sitemap
10. **❌ Analytics** - May need to add analytics if original has it

---

## Next Steps

1. **Implement Mobile Menu** (URGENT)
   - Add hamburger icon/button to header
   - Implement menu toggle JavaScript
   - Style mobile menu to match original
   - Test on actual mobile devices

2. **Complete Visual Audit**
   - Compare every page with original site
   - Fix any layout/styling discrepancies
   - Ensure responsive behavior matches

3. **Add Missing Functionality**
   - Check for any interactive elements on original
   - Implement any missing features

4. **Testing & QA**
   - Cross-browser testing
   - Mobile testing
   - Performance testing

5. **Documentation**
   - Complete this project plan
   - Document all custom code
   - Create troubleshooting guide

---

## Lessons Learned

- **Plan thoroughly before starting** - Should have created this document at project start
- **Compare regularly with original** - Should validate each component against original site
- **Don't skip mobile testing** - Mobile menu is critical functionality
- **Document as you go** - Easier than documenting after the fact
- **Test incrementally** - Test each feature as it's built, not at the end

---

## Timeline (Estimated)

- **Phase 1-3:** Completed
- **Phase 4-6:** Partially complete, needs ~4-6 hours
- **Phase 7:** Not started, needs ~3-4 hours
- **Phase 8-9:** Partially complete, needs ~2 hours

**Total remaining work:** ~10-12 hours

---

## Success Criteria

The project will be considered complete when:
- [ ] All pages match original site visually
- [ ] Mobile menu works exactly like original
- [ ] All responsive breakpoints work correctly
- [ ] All links and interactions work
- [ ] Performance is acceptable (Lighthouse score >90)
- [ ] Documentation is complete
- [ ] No console errors or warnings
- [ ] Site is fully tested across browsers and devices

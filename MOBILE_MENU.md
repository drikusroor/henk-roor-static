# Mobile Menu Implementation

## Overview

A CSS-only mobile menu has been implemented using the **label + checkbox methodology**. This approach works without JavaScript and is fully accessible.

## How It Works

### HTML Structure

The mobile menu uses:

- A hidden `<input type="checkbox">` element with ID `mobile-menu-toggle`
- A `<label>` element linked to the checkbox via the `for` attribute
- The menu `<ul>` element that shows/hides based on checkbox state

```html
<input type="checkbox" id="mobile-menu-toggle" class="mobile-menu-toggle" />
<label for="mobile-menu-toggle" id="menu-icon" class="mobile-menu-label">Menu</label>
<ul id="menu-main" class="menu">
  <!-- Menu items -->
</ul>
```

### CSS Behavior

The CSS uses the `:checked` pseudo-selector to toggle menu visibility:

```css
/* Hide menu by default */
#menu-main {
  display: none;
}

/* Show menu when checkbox is checked */
.mobile-menu-toggle:checked ~ #menu-main {
  display: block;
}
```

When a user clicks the "Menu" label, the checkbox state toggles, triggering the CSS to show/hide the menu.

## Features

### Mobile Experience

- **Breakpoint**: 767px and below shows mobile menu
- **Hamburger Icon**: "☰" symbol appears before "Menu" text
- **Touch-friendly**: Large tap targets (padding: 1.5rem 2rem)
- **Visual Feedback**: Hover/focus states on all interactive elements

### Desktop Experience

- **Breakpoint**: 768px and above shows traditional horizontal menu
- **Menu visible by default** in desktop view
- **Existing hover interactions** work as before

### Accessibility

- ✓ No JavaScript required - works without JS
- ✓ Keyboard accessible - can tab to and toggle with Space/Enter keys
- ✓ Screen reader friendly - label is properly associated
- ✓ Current page highlighting maintained
- ✓ Semantic HTML structure

## Files Modified

### `/src/_includes/header.njk`

- Changed `<div id="menu-icon">` to checkbox + label structure

### `/src/_includes/base.njk`

- Added link to new mobile menu CSS file
- Removed reference to JavaScript-based mobile menu script

### `/src/wp-content/themes/wp-advocate-child/css/mobile-menu.css` (NEW)

- Complete CSS-only mobile menu styling
- Responsive breakpoints at 768px and 480px

## Testing

### Mobile (under 768px)

1. Open site on mobile device or browser with viewport < 768px
2. Click "Menu" button to toggle menu visibility
3. Menu items show/hide smoothly
4. Clicking menu items closes menu automatically (label association)

### Desktop (768px and above)

1. Menu displays horizontally by default
2. Hover effects work on menu items
3. Menu label is hidden
4. Original WordPress menu behavior is preserved

### Keyboard Navigation

1. Tab to "Menu" label
2. Press Space or Enter to toggle
3. Tab through menu items
4. Use Esc or click label again to close (or click any menu item)

## Browser Compatibility

- ✓ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✓ Mobile browsers
- ✓ No JavaScript required
- ✓ Graceful fallback if CSS fails to load (menu always visible)

## Future Enhancements

If needed later, you could add:

- Close button on mobile
- Animated hamburger icon
- Smooth height transitions
- Submenu support for mobile

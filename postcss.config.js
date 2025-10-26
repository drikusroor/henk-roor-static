import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    purgeCSSPlugin({
      content: ['./_site/**/*.html'],
      safelist: {
        // Preserve dynamic classes that might be added by JavaScript
        standard: [
          'active',
          'current-menu-item',
          'current_page_item',
          'current-page-parent',
          'nav-mobile',
        ],
        // Preserve classes with these patterns
        greedy: [
          /^menu-/,
          /^widget-/,
          /^icon-/,
          /^post-/,
          /^page-/,
          /^entry-/,
          /^col\d+/,
          /^gallery-/,
        ],
      },
      // Extract class names from all attributes, not just class
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
        return broadMatches.concat(innerMatches);
      },
    }),
  ],
};

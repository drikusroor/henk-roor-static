const fs = require('fs');

const pages = [
  { path: 'index.html', title: 'Administratiekantoor Henk Roor | Voor de kleine ondernemer', output: 'src/index.njk', permalink: '/' },
  { path: 'over-ons/index.html', title: 'Over ons', output: 'src/over-ons.njk', permalink: '/over-ons/' },
  { path: 'financiele-administratie/index.html', title: 'Financiële administratie', output: 'src/financiele-administratie.njk', permalink: '/financiele-administratie/' },
  { path: 'salarisadministratie/index.html', title: 'Salarisadministratie', output: 'src/salarisadministratie.njk', permalink: '/salarisadministratie/' },
  { path: 'startende-ondernemers/index.html', title: 'Startende ondernemers', output: 'src/startende-ondernemers.njk', permalink: '/startende-ondernemers/' },
  { path: 'netwerken/index.html', title: 'Netwerken', output: 'src/netwerken.njk', permalink: '/netwerken/' }
];

pages.forEach(page => {
  try {
    const html = fs.readFileSync(page.path, 'utf8');
    
    // Extract content between article tags
    const articleMatch = html.match(/<article[\s\S]*?>([\s\S]*?)<\/article>/);
    
    if (articleMatch) {
      let content = articleMatch[0];
      
      // Fix image paths - preserve original src, wrap with url filter
      content = content.replace(/src="([^"]*wp-content\/[^"]*)"/g, (match, p1) => {
        return `src="{{ "/${p1}" | url }}"`;
      });
      content = content.replace(/src="([^"]*wp-includes\/[^"]*)"/g, (match, p1) => {
        return `src="{{ "/${p1}" | url }}"`;
      });
      
      // Fix href paths
      content = content.replace(/href="([^"]*wp-content\/[^"]*)"/g, (match, p1) => {
        return `href="{{ "/${p1}" | url }}"`;
      });
      
      const frontMatter = `---
layout: base.njk
title: "${page.title}"
permalink: "${page.permalink}"
---

`;
      
      fs.writeFileSync(page.output, frontMatter + content);
      console.log(`Created ${page.output}`);
    } else {
      console.log(`No article found in ${page.path}`);
    }
  } catch (err) {
    console.error(`Error processing ${page.path}:`, err.message);
  }
});

# Henk Roor Static Website

This is a static version of [henkroor.nl](https://www.henkroor.nl/), converted from WordPress and built with **Astro** SSG framework, deployed to GitHub Pages.

> **Note:** This site is based on the original henkroor.nl WordPress site. Always validate design and layout changes against the original site to maintain consistency.

## 🏗️ Built With

- **SSG:** [Astro](https://astro.build/) v5.15.5
- **CMS:** [Decap CMS](https://decapcms.org/) (formerly Netlify CMS)
- **Runtime:** [Bun](https://bun.sh/) v1.3.0
- **Hosting:** GitHub Pages
- **Deployment:** GitHub Actions (automated)

## 📁 Project Structure

```
├── src/                                      # Source files
│   ├── layouts/                              # Astro layouts
│   │   └── BaseLayout.astro                 # Base layout with header, footer, and sidebar
│   ├── pages/                                # Astro pages (auto-routed)
│   │   ├── index.astro                      # Homepage
│   │   ├── over-ons.astro                   # About page
│   │   ├── financiele-administratie.astro   # Financial services page
│   │   ├── salarisadministratie.astro       # Payroll services page
│   │   ├── startende-ondernemers.astro      # Starting entrepreneurs page
│   │   └── netwerken.astro                  # Networks page
│   └── content/                              # Content collections for Decap CMS
│       ├── config.ts                        # Content collection schema
│       └── pages/                           # Markdown content files
│           ├── index.md
│           ├── over-ons.md
│           ├── financiele-administratie.md
│           ├── salarisadministratie.md
│           ├── startende-ondernemers.md
│           └── netwerken.md
├── public/                                   # Static assets (served as-is)
│   ├── wp-content/                          # WordPress theme assets
│   │   └── themes/wp-advocate-child/
│   │       └── css/
│   │           ├── style.css               # Main theme styles
│   │           ├── custom-layout.css       # Custom flexbox layout
│   │           └── mobile-menu.css         # Mobile menu styles
│   ├── wp-includes/                         # WordPress core assets
│   ├── admin/                               # Decap CMS admin interface
│   │   ├── index.html                      # CMS interface
│   │   └── config.yml                      # CMS configuration
│   └── robots.txt                          # SEO robots file
├── _site/                                   # Generated static site (gitignored)
├── astro.config.mjs                        # Astro configuration
├── postcss.config.js                       # PostCSS configuration
└── package.json                            # Project dependencies & scripts
```

## 🚀 Development

### Prerequisites

- [Bun](https://bun.sh/) installed

### Install Dependencies

```bash
bun install
```

### Development Server

```bash
bun start
# or
bun dev
```

This starts Astro's dev server with hot reload at `http://localhost:4321`

### Build for Production

```bash
bun run build
```

Generates the static site in the `_site` directory and optimizes CSS.

### Preview Production Build

```bash
bun run preview
```

Previews the production build locally.

### Clean Build

```bash
bun run clean
```

Removes the `_site` directory.

## 📄 Site Pages

- **Homepage** (`/`) - Main landing page
- **Over Ons** (`/over-ons/`) - About us page
- **Financiële Administratie** (`/financiele-administratie/`) - Financial administration services
- **Salarisadministratie** (`/salarisadministratie/`) - Payroll administration services
- **Netwerken** (`/netwerken/`) - Networks page
- **Startende Ondernemers** (`/startende-ondernemers/`) - Starting entrepreneurs page

## 🎨 Features

- ✅ **Content Management System** with Decap CMS for easy editing
- ✅ **Astro-powered** with component-based architecture
- ✅ **Type-safe content collections** for structured content
- ✅ **Proper path handling** for GitHub Pages deployment
- ✅ **Active navigation state** highlighting
- ✅ **Responsive design** from original WordPress theme
- ✅ **Two-column layout** with sidebar (2/3 content, 1/3 sidebar on desktop)
- ✅ **Mobile-responsive** stacking layout for small screens
- ✅ **SEO-friendly** meta tags and structure with automatic sitemap
- ✅ **Lightning-fast builds** with Astro and Bun
- ✅ **Automated deployment** via GitHub Actions

## 🌐 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

**Live URL:** <https://drikusroor.github.io/henk-roor-static/>

### GitHub Actions Workflow

The deployment workflow:

1. Checks out the repository
2. Sets up Bun
3. Installs dependencies
4. Builds the site with Astro
5. Optimizes CSS with PostCSS
6. Deploys to GitHub Pages

## 📝 Original Site

The original WordPress site was located at <https://www.henkroor.nl/>

## 🔧 Configuration

### Path Prefix

The site is configured with a base path for GitHub Pages in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://drikusroor.github.io',
  base: '/henk-roor-static',
  // ...
});
```

This ensures all links work correctly when deployed to GitHub Pages.

### Content Collections

Astro's content collections provide type-safe content management:

```typescript
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    sidebar: z.enum(['default', 'photo']).optional().default('default'),
  }),
});
```

## 📦 Assets

All WordPress assets (CSS, JavaScript, images, fonts) are preserved in the `public/` directory:

- `public/wp-content/` - Theme and plugin assets
- `public/wp-includes/` - WordPress core assets
- `public/admin/` - Decap CMS admin interface

These are served as-is from the public directory.

## 🛠️ Maintenance

### Content Management with Decap CMS

The site includes Decap CMS for easy content editing:

1. **Access the CMS**: Visit `/admin/` on your deployed site
2. **Authenticate**: Log in with GitHub OAuth
3. **Edit content**: Use the visual editor to update pages
4. **Publish**: Changes are committed directly to GitHub

For detailed setup instructions, see [DECAP_CMS_SETUP.md](DECAP_CMS_SETUP.md)

### Manual Content Updates

To update content manually:

1. Edit the markdown files in `src/content/pages/`
2. Run `bun run build` to verify changes locally
3. Commit and push to `main` branch
4. GitHub Actions will automatically rebuild and deploy

To update page structure or layouts:

1. Edit Astro components in `src/pages/` or `src/layouts/`
2. Astro's component syntax is similar to JSX with frontmatter
3. All pages using the base layout will be updated on next build

To update styles:

1. Edit CSS files in `public/wp-content/themes/wp-advocate-child/css/`
2. `custom-layout.css` contains custom flexbox layout overrides
3. Always test against the original henkroor.nl site for consistency

### Workflow Best Practices

When making changes to this site:
1. **Validate** against the original site (henkroor.nl)
2. **Build** locally with `bun run build`
3. **Test** the changes in `_site/`
4. **Commit** with descriptive messages
5. **Deploy** automatically via push to main
6. **Update** this README if adding new features or changing structure

## 📊 Benefits Over WordPress

- 🚀 **Faster load times** - No database queries, pure static HTML
- 🔒 **Better security** - No server-side code execution
- 💰 **Lower costs** - Free hosting on GitHub Pages
- 📝 **Modern CMS** - Decap CMS for user-friendly content management
- 🔄 **Version control** - All changes tracked in Git
- � **Easier maintenance** - Component-based architecture
- ⚡ **Quick builds** - Astro + Bun for fast development

## 📅 Conversion Date

October 25, 2025

## 📄 License

This project maintains the content from the original henkroor.nl website.

# Henk Roor Static Website

This is a static version of [henkroor.nl](https://www.henkroor.nl/), converted from WordPress and built with Eleventy (11ty) SSG framework, deployed to GitHub Pages.

> **Note:** This site is based on the original henkroor.nl WordPress site. Always validate design and layout changes against the original site to maintain consistency.

## 🏗️ Built With

- **SSG:** [Eleventy (11ty)](https://www.11ty.dev/) v3.1.2
- **Runtime:** [Bun](https://bun.sh/) v1.3.0
- **Hosting:** GitHub Pages
- **Deployment:** GitHub Actions (automated)

## 📁 Project Structure

```
├── src/                                      # Source files
│   ├── _includes/                            # Eleventy templates & components
│   │   ├── base.njk                         # Base layout template
│   │   ├── header.njk                       # Reusable header component
│   │   ├── footer.njk                       # Reusable footer component
│   │   ├── sidebar-default.njk              # Default sidebar widget
│   │   └── sidebar-photo.njk                # Alternative sidebar with photo
│   ├── _data/                                # Global data files
│   ├── wp-content/                           # WordPress static assets
│   │   └── themes/wp-advocate-child/
│   │       └── css/
│   │           ├── style.css                # Main theme styles
│   │           └── custom-layout.css        # Custom flexbox layout for sidebar
│   ├── wp-includes/                          # WordPress core assets
│   ├── *.njk                                 # Page templates
│   └── robots.txt                           # SEO robots file
├── _site/                                    # Generated static site (gitignored)
├── eleventy.config.js                       # Eleventy configuration
└── package.json                             # Project dependencies & scripts
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
```

This starts Eleventy's dev server with hot reload at `http://localhost:8080`

### Build for Production

```bash
bun run build
```

Generates the static site in the `_site` directory.

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

- ✅ **Component-based architecture** with reusable header and footer
- ✅ **Proper path handling** for GitHub Pages deployment
- ✅ **Active navigation state** highlighting
- ✅ **Responsive design** from original WordPress theme
- ✅ **Two-column layout** with sidebar (2/3 content, 1/3 sidebar on desktop)
- ✅ **Mobile-responsive** stacking layout for small screens
- ✅ **SEO-friendly** meta tags and structure
- ✅ **Fast builds** with Eleventy and Bun
- ✅ **Automated deployment** via GitHub Actions

## 🌐 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

**Live URL:** https://drikusroor.github.io/henk-roor-static/

### GitHub Actions Workflow

The deployment workflow:
1. Checks out the repository
2. Sets up Bun
3. Installs dependencies
4. Builds the site with Eleventy
5. Deploys to GitHub Pages

## 📝 Original Site

The original WordPress site was located at https://www.henkroor.nl/

## 🔧 Configuration

### Path Prefix

The site is configured with a path prefix for GitHub Pages in `eleventy.config.js`:

```javascript
pathPrefix: "/henk-roor-static/"
```

This ensures all links work correctly when deployed to GitHub Pages.

### Template Engine

Uses Nunjucks (`.njk`) for templating, which provides:
- Template inheritance with `layout`
- Reusable components with `include`
- URL filters for proper path handling
- Conditional rendering

## 📦 Assets

All WordPress assets (CSS, JavaScript, images, fonts) are preserved in:
- `src/wp-content/` - Theme and plugin assets
- `src/wp-includes/` - WordPress core assets

These are copied to the output directory during build via `addPassthroughCopy`.

## 🛠️ Maintenance

To update content:
1. Edit the `.njk` files in `src/`
2. Run `bun run build` to verify changes locally
3. Commit and push to `main` branch
4. GitHub Actions will automatically rebuild and deploy

To update shared components (header, footer, sidebar):
1. Edit files in `src/_includes/`
2. All pages using these components will be updated on next build

To update styles:
1. Edit CSS files in `src/wp-content/themes/wp-advocate-child/css/`
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
- �� **Version control** - All changes tracked in Git
- 🔄 **Easier maintenance** - Component-based architecture
- ⚡ **Quick builds** - Eleventy + Bun for fast development

## 📅 Conversion Date

October 25, 2025

## 📄 License

This project maintains the content from the original henkroor.nl website.

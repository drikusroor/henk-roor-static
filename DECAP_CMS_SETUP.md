# Decap CMS Setup for GitHub Pages

This site now has Decap CMS (formerly Netlify CMS) integrated for content management.

## Accessing the CMS

Once set up, you can access the CMS at:
- Production: `https://drikusroor.github.io/henk-roor-static/admin/`
- Local: `http://localhost:8080/admin/`

## GitHub OAuth Setup

For authentication to work with GitHub Pages, you need to set up GitHub OAuth. There are two recommended approaches:

### Option 1: Using Netlify (Recommended for simplicity)

Even if your site is hosted on GitHub Pages, you can use Netlify's OAuth service:

1. **Create a Netlify account** (if you don't have one): https://app.netlify.com/signup

2. **Create a new site on Netlify**:
   - You can link it to your GitHub repo or just create a dummy site
   - Go to Site settings > Access control > OAuth

3. **Install an OAuth provider**:
   - Under Access control, click "Install provider"
   - Select GitHub
   - Follow the instructions to create a GitHub OAuth app

4. **Create a GitHub OAuth App**:
   - Go to GitHub Settings > Developer settings > OAuth Apps > New OAuth App
   - Application name: `Henk Roor CMS`
   - Homepage URL: `https://drikusroor.github.io/henk-roor-static/`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
   - Copy the Client ID and Client Secret to Netlify

5. The `config.yml` is already configured to use Netlify's auth endpoint.

### Option 2: Using a Custom OAuth Backend

If you prefer to self-host the OAuth backend:

1. **Deploy an OAuth server**:
   - Use a service like Vercel, Railway, or your own server
   - Popular options:
     - [netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider)
     - [decap-cms-github-backend](https://github.com/i40west/netlify-cms-github-oauth-provider)

2. **Create a GitHub OAuth App**:
   - Go to GitHub Settings > Developer settings > OAuth Apps > New OAuth App
   - Application name: `Henk Roor CMS`
   - Homepage URL: `https://drikusroor.github.io/henk-roor-static/`
   - Authorization callback URL: `https://your-oauth-server.com/callback`

3. **Update `src/admin/config.yml`**:
   ```yaml
   backend:
     name: github
     repo: drikusroor/henk-roor-static
     branch: main
     base_url: https://your-oauth-server.com
   ```

## Local Development

For local development without OAuth:

1. **Enable local backend** in `src/admin/config.yml`:
   ```yaml
   local_backend: true
   ```

2. **Install and run the proxy server**:
   ```bash
   bunx decap-server
   ```

3. **Run your Eleventy site**:
   ```bash
   bun run start
   ```

4. **Access the CMS**: Visit `http://localhost:8080/admin/`

The local backend allows you to work with your local Git repository without needing OAuth.

## Content Management

The CMS is configured to manage:
- **Home Page** - Main landing page content
- **Financiële Administratie** - Financial administration services
- **Netwerken** - Networking services
- **Over Ons** - About us page
- **Salarisadministratie** - Payroll administration
- **Startende Ondernemers** - Services for starting entrepreneurs

### Editing Content

1. Log in to the CMS at `/admin/`
2. Navigate to "Pages" in the sidebar
3. Select the page you want to edit
4. Make your changes in the editor
5. Click "Save" to save as a draft
6. Click "Publish" to commit changes to GitHub

### Editorial Workflow

The CMS is configured with `editorial_workflow` which provides:
- **Drafts**: Save work in progress
- **In Review**: Submit for review
- **Ready**: Approved and ready to publish

Each status creates a separate pull request in your GitHub repository.

## GitHub Actions

Your existing GitHub Actions workflow will automatically build and deploy the site when changes are pushed or merged to the main branch.

## Media Files

Uploaded images and media files are stored in `src/wp-content/uploads/` and will be available at `/wp-content/uploads/` on the published site.

## Troubleshooting

### "Error: Failed to load config.yml"
- Check that the admin folder is being copied correctly by Eleventy
- Verify the config.yml syntax is valid YAML

### "Authentication Failed"
- Verify your GitHub OAuth app credentials
- Check that the callback URL matches exactly
- Ensure you're using the correct OAuth provider setup

### "Not Found" on /admin/
- Run `bun run build` to ensure the admin folder is copied to `_site`
- Check that `pathPrefix` in eleventy.config.cjs matches your GitHub Pages URL

## Security Notes

- The admin interface is publicly accessible, but requires GitHub authentication
- Only users with write access to your GitHub repository can edit content
- All changes are tracked in Git and can be reverted
- Consider adding branch protection rules in GitHub for additional safety

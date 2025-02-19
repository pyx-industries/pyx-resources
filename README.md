# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator designed to help you create documentation websites quickly and easily.

### Prerequisites

Before you can run the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16.x or above)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

Once you have cloned or downloaded the repository, navigate to the project directory and install the necessary dependencies by running:

```bash
npm install
```

This command reads the `package.json` file and installs all required packages into the `node_modules` folder. Make sure you're in the root directory of the project when you run this command.

### Local Development

To start a local development server and preview the website, use the following command:

```bash
npm start
```

This will start a local web server, and your browser should automatically open to the development version of the website (usually at `http://localhost:3000`). Most changes you make to the source files will be reflected live without needing to restart the server.

### Build

When you're ready to create the production-ready static site (i.e., all content converted to HTML/CSS/JS), use the following command:

```bash
npm run build
```

This will generate the static content into a `build` directory in the root of your project. You can serve the content of this folder using any static hosting service, such as GitHub Pages, Netlify, or your own web server.

### Deployment

To deploy the website, Docusaurus provides a built-in mechanism to deploy directly to GitHub Pages.

#### Deploying Using SSH

If you have configured SSH access for GitHub, you can deploy by running:

```bash
USE_SSH=true npm run deploy
```

This command will automatically build the website and push the `build` directory content to the `gh-pages` branch of your GitHub repository.

#### Deploying Without SSH (using HTTPS)

If you're using HTTPS instead of SSH for GitHub authentication, you can deploy with the following command:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

Replace `<Your GitHub username>` with your actual GitHub username. This command will build the website and push the static content to the `gh-pages` branch of your repository using HTTPS.

### GitHub Pages Hosting

If you are using [GitHub Pages](https://pages.github.com/) for hosting, this deployment method is a convenient way to build and push the site to GitHub. The site will be accessible from your GitHub Pages URL once the push completes.

For example, if your repository is named `example-repo`, and your GitHub username is `yourusername`, your site will be available at:
```
https://yourusername.github.io/example-repo
```

# pyxdocu

PYX Knowledge Base and Articles


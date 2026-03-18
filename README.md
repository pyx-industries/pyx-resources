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
npm run start
```

This will start a local web server, and your browser should automatically open to the development version of the website (usually at `http://localhost:3000`). Most changes you make to the source files will be reflected live without needing to restart the server.

### Known Issues

#### Docusaurus version pinned to ^3.7.0

Do not upgrade Docusaurus packages beyond `^3.7.0` in `package.json`. Versions above 3.7.0 introduce dependencies (`cheerio@1.2.0`, `undici@7.24.4`) that require Node `>=20.18.1`, which is newer than what the production deploy server runs. Additionally, the deploy script uses `npm install --prefer-offline`, so newer versions may fail to resolve against the server's stale registry cache. The deploy will fail with `ETARGET No matching version found`.

Before upgrading, ensure the production server's Node version and npm cache are updated to match.

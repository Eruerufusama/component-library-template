# Svelte Library Template

This template is still a work in progress, and is not ready for production use.

## Features needed before release

- [x] Svelte library development environment with Vite and Typescript.
- [x] Story development environment with Histoire.
- [x] CI/CD pipeline for publishing to NPM.
- [ ] Unit-testing setup with Vitest.
- [ ] Improve quality of example library.
- [ ] Create a `CHANGELOG.md` file.

> This column is to be removed before release.

## Learn more about the tools used in this template
___

- [Svelte](https://svelte.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [pnpm](https://pnpm.io/)
- [Histoire](histoire.dev)
- [LightningCSS](https://lightningcss.dev/)
<!-- - [Vitest](https://vitest.dev/) -->

___
## Setup dev-environment from this template
___
### **Create a new repository from this template**

Press the green `Use this template` button on the top of this page.

### **Clone the repository you created to your local machine**

1. Press the green `Code` button on the top of your repository page, and copy the link.
2. Run `git clone [YOUR_REPO_LINK]` in your terminal.

### **3. Install `pnpm` globally**
`npm install -g pnpm`

### 4. **Install dependencies**
`pnpm install`

### 5. **Run the dev-server**
`pnpm story:dev`

Now you can start developing your library.

___
## Setup CI to publish to NPM
___
### 1. **Create a new secret in Github with your NPM token**

Go to your Github repository > `Settings` > `Secrets` > `New repository secret`. It's name should be `NPM_ACCESS_TOKEN` and should have your NPM token as its value.

> If you are unsure how to create a NPM token, follow [this guide](https://docs.npmjs.com/creating-and-viewing-access-tokens).

> You can update the registry you wanna publish to in the `.github` / `npm-publish.yml` file. This template is set up to publish to the NPM-registry by default.

### 2. **Rename the library**

Under the `name` property in `package.json`, replace `[YOUR_ACCOUNT_NAME]` with your account-name, and `[YOUR_LIBRARY_NAME]` with your library name. (Also remove the brackets)

___
## Creating a new release of your library
___

1. Make some changes to your library, and commit them.
2. Update the version number in `package.json` (following [semver](https://semver.org/))
3. Push your changes to Github.
4. Create a new release on Github, with the version number you just updated in `package.json` as the tag.
5. Wait for the pipeline to finish, and your library will be published to NPM.
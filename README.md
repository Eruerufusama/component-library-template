# Svelte Library Template

A highly opinionated template for developing Svelte libraries with Typescript, Vite, Histoire, and LightningCSS.

This template is still a work in progress, and is not ready for production use.

## Features needed before release

- [x] Svelte library development environment with Vite and Typescript.
- [x] Story development environment with Histoire.
- [x] CI/CD pipeline for publishing to NPM.
- [ ] Unit-testing setup with Vitest.
- [ ] Improve quality of example library.
- [ ] Create a `CHANGELOG.md` file.
- [ ] Set up formating and linting with `eslint` and `prettier`. Remove `rome`-support.

> This column is to be removed before release.

## Learn more about the tools used in this template

- [Svelte](https://svelte.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [pnpm](https://pnpm.io/)
- [Histoire](histoire.dev)
- [LightningCSS](https://lightningcss.dev/)
<!-- - [Vitest](https://vitest.dev/) -->

## Setup dev-environment from this template

1. **Create an instance of the template** by pressing the green `Use this template` button on the top of this page.

2. **Clone the repository** you created to your local machine
   1. Press the green `Code` button on the top of your repository page, and copy the `HTTPS` link.

        > Alternatively, you can use SSH, but you will need to set up SSH-keys on your machine.

   2. Run `git clone [YOUR_REPO_LINK]` in your terminal.

3. **Install pnpm** by running `npm install -g pnpm`

4. **Install dependencies** with `pnpm install`

5. **Run the dev-server** with `pnpm story:dev`

Now you can start developing your library.

## Setup CI to publish to NPM

### 1. **Create a new secret in Github with your NPM token**

Go to your Github repository > `Settings` > `Secrets` > `New repository secret`. It's name should be `NPM_ACCESS_TOKEN` and should have your NPM token as its value.

> If you are unsure how to create a NPM token, follow [this guide](https://docs.npmjs.com/creating-and-viewing-access-tokens).
>
> You can update the registry you wanna publish to in the `.github` / `npm-publish.yml` file. This template is set up to publish to the NPM-registry by default.

### 2. **Rename the library**

Under the `name` property in `package.json`, replace `[YOUR_ACCOUNT_NAME]` with your account-name, and `[YOUR_LIBRARY_NAME]` with your library name. (Also remove the brackets)

## Creating a new release of your library

1. Make some changes to your library, and commit them.
2. Update the version number in `package.json` (following [semver](https://semver.org/))
3. Push your changes to Github.
4. Create a new release on Github, with the version number you just updated in `package.json` as the tag.
5. Wait for the pipeline to finish, and your library will be published to NPM.

## Q/A

### Why is this template using `pnpm`?

> It's just a bit faster, a bit more reliable, and uses less disk-space than npm. I don't really see a reason to not use it.

### Why is it using `Histoire` instead of `Storybook`?

> I found that configuring Storybook to work with Svelte was a bit of a hassle, and Histoire is just a bit easier to set up. I've also found it to be very enjoyable to work with.

### `LightningCSS`? Why not just `PostCSS`?

> LightningCSS is a bit more straightforward and more opinionated than PostCSS. The most useful plugins that is used in conjunction with PostCSS is `autoprefixer`, `postcss-preset-env`, and `postcss-nesting`, which are all present in LightningCSS as well.
>
> The future-css featuring in LightningCSS is quite a bit more mature than the one found in `postcss-preset-env`.
>
> Unfortunately, any performance-gains from using LightningCSS is lost by having to spin up an instance of LightningCSS for each CLI-command in the CI-pipeline, since the LightningCSS CLI tool currently doesn't support folder-conversion...

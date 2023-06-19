# Contributing

Hello! Thank you for taking the time to learn how to make a contribution to Octo!

These guidelines ensure the maintainers and contributors are working together respectfully on all projects related to Octo. The maintainers have a limited amount of time to devote to this project, so we ask contributors to be considerate. In return, the maintainers will reciprocate that respect and will consider, discuss, and support all acceptable contributions as appropriately identified in this document.

## Contributions

Octo is an Open Source project, and we love support from our community!

To help you out, we will list some examples of acceptable and unacceptable contributions so that you do not waste the valuable time or effort of yourself or our maintainers.

#### Is this your first time contributing to Open Source?

Here are a few resources to learn more about the process!

- https://makeapullrequest.com
- https://www.firsttimersonly.com
- https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github

### Acceptable Contributions

- [Open an Issue](https://github.com/davidmyersdev/octo/issues) for a newly discovered bug that is not yet reported.
- Comment on [Issues](https://github.com/davidmyersdev/octo/issues), [Discussions](https://github.com/davidmyersdev/octo/discussions), or [Pull Requests](https://github.com/davidmyersdev/octo/pulls) to provide constructive feedback or (functional) examples.
- [Start a Discussion](https://github.com/davidmyersdev/octo/discussions) about a feature idea that does not already exist as an [Issue](https://github.com/davidmyersdev/octo/issues) or a [Discussion](https://github.com/davidmyersdev/octo/discussions).
- Write or record an unofficial tutorial for how to use or contribute to Octo.
- [Submit a Pull Request](https://github.com/davidmyersdev/octo/pulls) that resolves a documented Issue.
- [Submit a Pull Request](https://github.com/davidmyersdev/octo/pulls) that improves the existing documentation.

### Unacceptable Contributions

- **Do not** open an Issue for support questions.
- **Do not** submit a Pull Request for an undocumented feature idea. All feature ideas should start as a [Discussion](https://github.com/davidmyersdev/octo/discussions) to ensure we have the chance to properly vet the idea.
- **Do not** submit a Pull Request purely for code quality (linting, refactoring, reorganizing, etc).
- **Do not** comment on an Issue, Discussion, or Pull Request to engage in arguments or promote harassment. See our [Code of Conduct](https://github.com/davidmyersdev/octo/blob/main/CODE_OF_CONDUCT.md).
- **Do not** disclose security vulnerabilities in public. Please email [hello@davidmyers.dev](mailto:hello@davidmyers.dev) instead.

## Set up the local dev environment

Install the dependencies.

```bash
pnpm install --shamefully-hoist
```

Copy `.env.example` to `.env`.

```bash
cp .env.example .env
```

### Launch the app

Run the app in `development` mode.

```bash
# binds to localhost:8888
pnpm dev
```

### Launch the Firebase Emulator

The emulator is not necessary for most changes. For more information about retrieving a Firebase access token, see the [docker-firebase-cli](https://github.com/davidmyersdev/docker-firebase-cli) project.

```bash
docker-compose up -d
```

The Firebase Emulator dashboard is available at [localhost:32777](http://localhost:32777).

### Build the production app

```bash
# compiles to ./dist
pnpm build
```

The build output will be available in the `.output` directory.

### Run the `production` preview

```bash
# binds to localhost:8889
pnpm preview
```

# vite-vitest-eslint-prettier-starter

A starter project using [Vite](https://vite.dev/), [Vitest](https://vitest.dev/), [ESLint](https://eslint.org/), and [Prettier](https://prettier.io/).

## Setup

Clone the repository:

```sh
git clone https://github.com/rtomrud/vite-vitest-eslint-prettier-started.git
```

Install dependencies:

```sh
npm install
```

## Usage

Run any script with `npm run <script>` (or `npm test` for the test script).

- `npm run dev`: Starts the Vite dev server with hot module replacement.
- `npm run build`: Builds the app for production into `dist/`.
- `npm run preview`: Serves the production build from `dist/` locally. Run `build` first.
- `npm test`: Runs the test suite once and exits.
- `npm run test:watch`: Runs tests in watch mode, re-running them when files change.
- `npm run test:coverage`: Runs the test suite once with a code coverage report.
- `npm run check`: Checks the code with ESLint and checks formatting with Prettier, without changing files.
- `npm run check:fix`: Fixes ESLint problems where possible and formats all files with Prettier.

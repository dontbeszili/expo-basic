# Welcome to bcr-ea app 👋

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Development

### Pre-commit Hooks

This project uses Husky and lint-staged to run ESLint and Prettier on staged files before committing. This ensures that only properly formatted and linted code is committed to the repository.

Configuration
ESLint configuration can be found in .eslintrc.js.
Prettier configuration can be found in .prettierrc.
Lint-staged configuration can be found in .lintstagedrc.js.

### Commitizen

This project uses [Commitizen](https://commitizen-tools.github.io/commitizen/) to standardize commit messages. Commitizen helps you and your team adhere to a consistent commit message format, which is crucial for automated changelog generation and better project management.

#### Installation

To install Commitizen, run the following command:

```bash
npm install -g commitizen
```

To initialize Commitizen in your project, run:

```bash
commitizen init cz-conventional-changelog --save-dev --save-exact
```

#### Example

Here is an example of how to use Commitizen to create a commit:

Make your changes to the codebase.
Stage your changes using git add.
Run

```bash
cz
```

or

```bash
git cz
```

to start the Commitizen prompt.
Follow the prompts to create a commit message.

## Code Quality

This project uses ESLint and Prettier to maintain code quality and consistency.

### ESLint

ESLint is a tool for identifying and fixing problems in your JavaScript code. It helps you follow best practices and catch potential issues early.

#### Usage

To run ESLint on your codebase, use the following command:

```bash
npm run lint
```

You can also automatically fix some issues by running:

```bash
npm run lint -- --fix
```

### Prettier

Prettier is an opinionated code formatter that ensures your code is styled consistently.

Usage
To check your code formatting with Prettier, use the following command:

```bash
npm run format
```

To automatically format your code, run:

```bash
npm run format:write
```

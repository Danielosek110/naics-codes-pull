# Node.js TypeScript Scripts Template

[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.0.0-339933?logo=nodedotjs)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Yarn](https://img.shields.io/badge/Yarn-1.22.22-2C8EBB?logo=yarn)](https://yarnpkg.com)
[![ESLint](https://img.shields.io/badge/ESLint-9.0.0-4B32C3?logo=eslint)](https://eslint.org)
[![Prettier](https://img.shields.io/badge/Prettier-3.0.0-F7B93E?logo=prettier)](https://prettier.io)
[![License](https://img.shields.io/badge/License-Private-red)](LICENSE)

A modern template for Node.js projects using TypeScript, ESLint, and Prettier.

## Prerequisites

- Node.js >= 20.0.0
- Yarn >= 1.22.0

## Version Information

### Core Dependencies

- Node.js: >= 20.0.0
- Yarn: 1.22.22

### Development Dependencies

- TypeScript: ^5.0.0
- ESLint: ^9.0.0
- Prettier: ^3.0.0
- ts-node: ^10.0.0
- @types/node: ^22.15.3

### ESLint Plugins

- @typescript-eslint/parser: ^6.0.0
- @typescript-eslint/eslint-plugin: ^6.0.0
- eslint-config-prettier: ^10.0.0

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   yarn install
   ```

## Testing the Setup

To verify that everything is working correctly:

1. Run the development server:

   ```bash
   yarn dev
   ```

   You should see the output: `Hello, TypeScript!`

2. Build and run the production version:
   ```bash
   yarn build
   yarn start
   ```
   You should see the same output: `Hello, TypeScript!`

If you see the message, your development environment is set up correctly!

## Available Scripts

- `yarn dev` - Run the development server using ts-node
- `yarn build` - Build the TypeScript project
- `yarn start` - Run the built JavaScript code
- `yarn lint` - Run ESLint to check for code issues
- `yarn lint:fix` - Run ESLint and automatically fix issues
- `yarn format` - Format code using Prettier
- `yarn check-format` - Check if files are properly formatted

## Code Quality Tools

### ESLint

This project uses ESLint for code linting with the following configuration:

- TypeScript support via `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`
- Integration with Prettier via `eslint-config-prettier`
- Custom rules:
  - Enforces arrow function body style
  - Disallows `var` declarations
  - Warns when `const` could be used
  - Warns on `console.log` (allows `console.warn` and `console.error`)
- Ignores common directories like `node_modules`, `dist`, and build outputs

### Prettier

Prettier is configured to format:

- TypeScript files (`.ts`)
- JavaScript files (`.js`)
- JSON files (`.json`)
- Markdown files (`.md`)

### TypeScript Configuration

The project uses modern TypeScript features:

- Latest JavaScript features (`ESNext`)
- ESM modules with Node.js resolution
- Path aliases (`@/*` maps to `src/*`)
- Strict type checking enabled
- Source maps for debugging
- Incremental builds for faster compilation
- Support for JavaScript and JSON imports

## VS Code Integration

This template includes VS Code settings for optimal development experience:

### Recommended Extensions

- **Code Quality**
  - Prettier formatter
  - ESLint support
  - Markdown linting
- **Development Experience**
  - Path IntelliSense (supports `@/` alias)
  - NPM IntelliSense
  - EditorConfig support
  - Environment file support
- **Git Integration**
  - GitLens for enhanced Git features
- **Visual Aids**
  - Indent rainbow
  - Rainbow brackets
  - Color highlighting
  - CSV editing support

### Editor Settings

- Format on save with Prettier
- ESLint auto-fix on save
- Consistent line endings
- Trailing whitespace trimming
- Inline suggestions enabled
- Quick string completions

## Project Structure

```
├── src/           # Source files
├── dist/          # Compiled output
├── .vscode/       # VS Code settings
├── package.json   # Project configuration
├── tsconfig.json  # TypeScript configuration
└── .eslintrc.mjs # ESLint configuration
```

## Development

1. Write your TypeScript code in the `src` directory
2. Use `yarn dev` during development
3. Build your project with `yarn build`
4. Run the production build with `yarn start`

## License

This project is private and not licensed for public use.

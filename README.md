# NAICS Codes Hierarchy Generator

[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20.0.0-339933?logo=nodedotjs)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-Private-red)](LICENSE)

A TypeScript script that generates a comprehensive CSV file containing the full hierarchy of NAICS (North American Industry Classification System) codes.

## What is NAICS?

The North American Industry Classification System (NAICS) is the standard used by Federal statistical agencies in classifying business establishments for the purpose of collecting, analyzing, and publishing statistical data related to the U.S. business economy.

## Output

The script generates a CSV file in the `data` directory (`data/naics_full_hierarchy_with_levels.csv`) containing:

- 2-digit sector codes and titles
- 3-digit subsector codes and titles
- 4-digit industry group codes and titles
- 5-digit NAICS industry codes and titles
- 6-digit national industry codes and titles

## Prerequisites

- Node.js >= 20.0.0
- Yarn >= 1.22.0

## Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   yarn install
   ```

## Usage

Run the script to generate the NAICS hierarchy CSV:

```bash
yarn dev
```

The script will:

1. Pull all NAICS entries (2-6 digits)
2. Filter to 6-digit national industry entries
3. Build the full hierarchy for each entry
4. Generate a CSV file with all levels
5. Save the output to `data/naics_full_hierarchy_with_levels.csv`

## Project Structure

```
├── src/
│   ├── index.ts        # Main script
│   └── types/          # TypeScript type definitions
│       └── naics.d.ts  # NAICS package type definitions
├── data/              # Output directory for generated files
├── package.json       # Project configuration
└── tsconfig.json     # TypeScript configuration
```

## Development

The project uses:

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting

Available commands:

- `yarn dev` - Run the script
- `yarn build` - Build TypeScript
- `yarn lint` - Check code quality
- `yarn format` - Format code

## License

This project is private and not licensed for public use.

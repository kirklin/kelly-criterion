# kelly-criterion

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]
[![javascript_code style][code-style-image]][code-style-url]

A Kelly Criterion calculator written in TypeScript

#  Kelly Criterion Calculator

## Introduction

The Kelly Criterion Calculator is a TypeScript class designed for calculating the Kelly Criterion, a formula used in probability theory and investing to determine the optimal size of a series of bets. This class provides methods to compute both the Kelly Criterion fraction and the optimal fraction to bet based on a given win probability and payoff ratio.

## Installation

Install the package using [pnpm](https://pnpm.io/):

```bash
npm install kelly-criterion
```

### Example

```typescript
import { KellyCriterion } from 'kelly-criterion';

// Create an instance of the KellyCriterion class
const kellyCalculator = new KellyCriterion();

// Set the win probability and payoff ratio
const winProbability = 0.6; // 60% chance of winning
const payoffRatio = 2; // 2:1 payoff ratio

// Calculate the Kelly Criterion fraction
const kellyFraction = kellyCalculator.calKellyCriterion(winProbability, payoffRatio);
console.log(`Kelly Criterion Fraction: ${kellyFraction}`);

// Calculate the optimal fraction to bet
const optimalFraction = kellyCalculator.calOptimalFraction(winProbability, payoffRatio);
console.log(`Optimal Fraction to Bet: ${optimalFraction}`);
```

## Methods

### `calKellyCriterion(winProbability: number, payoffRatio: number): number`

Calculates the Kelly Criterion fraction based on the given win probability and payoff ratio.

- `winProbability`: The probability of winning (a value between 0 and 1).
- `payoffRatio`: The ratio of the payoff (e.g., 2 for 2:1 odds).
- Returns: The calculated Kelly Criterion fraction.

### `calOptimalFraction(winProbability: number, payoffRatio: number): number`

Calculates the optimal fraction to bet based on the Kelly Criterion.

- `winProbability`: The probability of winning (a value between 0 and 1).
- `payoffRatio`: The ratio of the payoff (e.g., 2 for 2:1 odds).
- Returns: The calculated optimal fraction to bet.

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [Kirk Lin](https://github.com/kirklin)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/kelly-criterion?style=flat&colorA=080f12&colorB=3491fa
[npm-version-href]: https://npmjs.com/package/kelly-criterion
[npm-downloads-src]: https://img.shields.io/npm/dm/kelly-criterion?style=flat&colorA=080f12&colorB=3491fa
[npm-downloads-href]: https://npmjs.com/package/kelly-criterion
[bundle-src]: https://img.shields.io/bundlephobia/minzip/kelly-criterion?style=flat&colorA=080f12&colorB=3491fa&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=kelly-criterion
[license-src]: https://img.shields.io/github/license/kirklin/kelly-criterion.svg?style=flat&colorA=080f12&colorB=3491fa
[license-href]: https://github.com/kirklin/kelly-criterion/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=3491fa
[jsdocs-href]: https://www.jsdocs.io/package/kelly-criterion
[code-style-image]: https://img.shields.io/badge/code__style-%40kirklin%2Feslint--config-3491fa?style=flat&colorA=080f12&colorB=3491fa
[code-style-url]: https://github.com/kirklin/eslint-config/

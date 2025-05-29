# find-max-island

![CI](https://github.com/brian-gates/find-max-island/actions/workflows/test.yml/badge.svg) 

Find the size of the largest connected group of 1s (an "island") in a 2D grid.

## Usage

```ts
import { findMaxIsland } from "./index.ts"

const land = [
  [0, 0, 0, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 1],
]
console.log(findMaxIsland(land)) // 6
```

## API

`findMaxIsland(land: number[][]): number`
- Returns the size of the largest connected group of 1s in the grid.

## Running Tests

```sh
deno test
```
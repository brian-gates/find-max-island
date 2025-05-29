import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { findMaxIsland } from "./index.ts";

Deno.test("vertical island of size 3", () => {
  const land = [
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
  ];
  assertEquals(findMaxIsland(land), 3);
});

Deno.test("vertical island with a single branch", () => {
  const land = [
    [0, 0, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 0, 1],
  ];
  assertEquals(findMaxIsland(land), 3);
});

Deno.test("vertical island with a bottom right branch", () => {
  const land = [
    [0, 0, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 1],
  ];
  assertEquals(findMaxIsland(land), 6);
});

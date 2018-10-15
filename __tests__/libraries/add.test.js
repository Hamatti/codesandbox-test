import { sum } from "../../src/lib/add";

test("add sums up two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

test("add sums up three arguments", () => {
  expect(sum(1, 2, 3)).toBe(6);
});

test("no arguments return 0", () => {
  expect(sum()).toBe(0);
});

test("negative values add up correctly", () => {
  expect(sum(-1, -3)).toBe(-4);
});

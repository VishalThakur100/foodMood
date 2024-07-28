import { sum } from "../sum";
test(" sum function should return the addition of two numbers ", () => {
  const result = sum(4, 6);

  // Assertion
  expect(result).toBe(10);
});

const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("check that shuffle returns an array", () => {
    //array.isArray() ... to check if what shuffle returns is an array?
    const result = shuffle([1, 2, 3]);
    expect(Array.isArray(result)).toBe(true);
  });
  test("check that it returns an array of the same length as the argument sent in", () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    expect(result.length).toBe(input.length);
  });
});

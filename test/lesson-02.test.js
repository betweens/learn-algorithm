import matchBracket from "../src/lessons/lesson-02";

describe("matchBracket", () => {
  test("should return true", () => {
    expect(matchBracket("{[(){}]}")).toBe(true);
  });
  test("should return false", () => {
    expect(matchBracket("{[(){})]}")).toBe(false);
  });
});
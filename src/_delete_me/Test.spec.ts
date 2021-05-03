import { Test } from "./Test";

describe("Test", () => {
  it("should run the script", () => {
    const a = new Test(2, 5);
    expect(a.sum()).toBe(7);
  });
});

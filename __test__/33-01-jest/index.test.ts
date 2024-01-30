import { add } from "../../pages/section33/33-01-jest";

it("Test for add", () => {
  const result = add(3, 5);
  expect(result).toBe(8);
});

// describe("My test group", () => {
//   it("Add test", () => {});

//   it("Minus test", () => {});

//   it("Mutiplex test", () => {});
// });

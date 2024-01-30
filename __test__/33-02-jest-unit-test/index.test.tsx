import JestUnitTestPage from "../../pages/section33/33-02-jest-unit-test";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Test the drawing result what I want to", () => {
  render(<JestUnitTestPage />);

  const myText = screen.getByText("IU is 30 years old.");
  expect(myText).toBeInTheDocument();

  const myText2 = screen.getByText("IU's favorite color :");
  expect(myText).toBeInTheDocument();

  const myText3 = screen.getByText("Hang out with IU");
  expect(myText).toBeInTheDocument();
});

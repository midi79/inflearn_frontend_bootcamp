import JestUnitTestPage from "../../pages/section33/33-02-jest-unit-test";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Test whether there are changing items or not ", () => {
  const result = render(<JestUnitTestPage />);
  expect(result.container).toMatchSnapshot();
});

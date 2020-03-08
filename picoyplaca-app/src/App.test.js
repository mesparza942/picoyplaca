import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { text } from "./constants";

test("renders header and its text correctly", () => {
  const { getByText, container } = render(<App />);
  const headerComponent = container.querySelector(
    'header[class*="App-header"]'
  );
  const headerTxt = getByText(text.title);
  expect(headerComponent).toBeInTheDocument();
  expect(headerTxt).toBeInTheDocument();
});

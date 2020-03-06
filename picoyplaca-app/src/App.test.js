import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders header and its text correctly", () => {
  const { getByText, container } = render(<App />);
  const headerComponent = container.querySelector(
    'header[class*="App-header"]'
  );
  const headerTxt = getByText("Pico y Placa Exercise");
  expect(headerComponent).toBeInTheDocument();
  expect(headerTxt).toBeInTheDocument();
});

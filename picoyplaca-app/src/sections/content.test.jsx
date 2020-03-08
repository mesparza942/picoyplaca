import React from "react";
import { render } from "@testing-library/react";
import Content from "./content";
import { text } from "../constants";

test("render all text content on different components correctly", () => {
  const { getByText } = render(<Content />);

  expect(getByText(text.subtitle)).toBeInTheDocument();
  expect(getByText(`${text.plateNumber}:`)).toBeInTheDocument(); // labels add this : next to its text, that's why this is required
  expect(getByText(`${text.dateTxt}:`)).toBeInTheDocument();
  expect(getByText(`${text.timeTxt}:`)).toBeInTheDocument();
  expect(getByText(text.cancelBtn)).toBeInTheDocument();
  expect(getByText(text.predictBtn)).toBeInTheDocument();
});

test("clear and predict buttons should be disabled by default", () => {
  const { container } = render(<Content />);
  const buttons = container.querySelectorAll('div[class*="buttonContainer"]');
  buttons.forEach(btn => {
    const buttonComponent = btn.querySelector("button");
    expect(buttonComponent).toHaveAttribute("disabled", "");
  });
});

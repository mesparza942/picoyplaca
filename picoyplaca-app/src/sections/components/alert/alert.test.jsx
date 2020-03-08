import React from "react";
import { render } from "@testing-library/react";
import SimpleAlert from "./alert";
import { text } from "../../../constants";

test("render green alert", () => {
  const { getByText, container } = render(
    <SimpleAlert isAlert alertMsg={text.warningNegativeMsg} />
  );
  expect(
    container.querySelector('div[class*="MuiAlert-standardError"]')
  ).toBeInTheDocument();
  expect(getByText(text.warningNegativeMsg)).toBeInTheDocument();
});

test("render red alert", () => {
  const { container, getByText } = render(
    <SimpleAlert isAlert={false} alertMsg={text.warningPositiveMsg} />
  );
  expect(
    container.querySelector('div[class*="MuiAlert-standardSuccess"]')
  ).toBeInTheDocument();
  expect(getByText(text.warningPositiveMsg)).toBeInTheDocument();
});

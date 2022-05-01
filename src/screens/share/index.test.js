import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Share from "./index";

describe("<Share />", () => {
  test("renders form properly", () => {
    render(
      <Router>
        <Share />
      </Router>
    );
    const inputEl = screen.getByTestId("url");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");

    const buttonEl = screen.getByRole("button", "Share");
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveAttribute("type", "button");
  });
});

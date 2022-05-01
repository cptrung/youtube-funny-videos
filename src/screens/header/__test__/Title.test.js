import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import Title from "../Title";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<Title />", () => {
  test("header title renders with correct text", () => {
    const { getByTestId } = render(
      <Router>
        <Title />
      </Router>
    );
    const headerTitleEl = getByTestId("header-title");

    expect(headerTitleEl.textContent).toBe("Funny Movies");
  });

  // test("header icon renders with correct icon", () => {
  //   const header = render(
  //     <Router>
  //       <Title />
  //     </Router>
  //   );
  // });
});

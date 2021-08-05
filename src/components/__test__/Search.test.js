import React from "react";
import ReactDom from "react-dom";
import Search from "../Search";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Search></Search>, div);
});

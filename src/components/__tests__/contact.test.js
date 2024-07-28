import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us test cases", () => {
  // test("should load the contact us component", () => {
  //   render(<Contact />);
  //   const heading = screen.getByRole("heading");

  //   // assertion
  //   expect(heading).toBeInTheDocument();
  // });

  //   OR 

  it("should load the contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    // assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load the button", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    //  assertion
    expect(button).toBeInTheDocument();
  });

  it("should load the input name ", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  it("should load all the inputboxes", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");

    // assertion
    expect(inputBoxes.length).toBe(2);
  });
});

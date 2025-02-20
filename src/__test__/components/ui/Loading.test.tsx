import { render, screen } from "@testing-library/react";
import Loading from "../../../components/ui/Loading";

describe("Loading Component", () => {
  test("renders the loading spinner", () => {
    render(<Loading />);

    // Check if the spinner is rendered
    const spinner = document.querySelector(".spinner"); // Assuming the spinner class is rendered
    expect(spinner).toBeInTheDocument();
  });
});

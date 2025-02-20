// src/components/ui/Error.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Error from "../../../components/ui/Error";
import { vi } from "vitest";

// Mock function for onRetry
const mockOnRetry = vi.fn();

describe("Error Component", () => {
  test("renders error message", () => {
    const message = "Network error occurred.";
    render(<Error message={message} />);

    // Check if the error title is rendered
    const titleElement = screen.getByText(/oops! something went wrong/i);
    expect(titleElement).toBeInTheDocument();

    // Check if the provided message is shown
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });

  test("renders retry button if onRetry is provided", () => {
    render(<Error message="Something went wrong." onRetry={mockOnRetry} />);

    // Check if the retry button is rendered
    const retryButton = screen.getByRole("button", { name: /retry/i });
    expect(retryButton).toBeInTheDocument();

    // Check if the onRetry function is called when the button is clicked
    fireEvent.click(retryButton);
    expect(mockOnRetry).toHaveBeenCalled();
  });

  test("does not render retry button if onRetry is not provided", () => {
    render(<Error message="An error occurred." />);

    // Ensure no retry button is rendered
    const retryButton = screen.queryByRole("button", { name: /retry/i });
    expect(retryButton).not.toBeInTheDocument();
  });
});

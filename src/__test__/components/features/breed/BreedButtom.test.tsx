import { render, screen, fireEvent } from "@testing-library/react";
import BreedButton from "../../../../components/features/breed/BreedButton";
import useVote from "../../../../hooks/breed/useVote";
import { vi } from "vitest";
import { TypeVote } from "../../../../types";

// Mock the useVote hook
vi.mock("../../../../hooks/breed/useVote");

describe("BreedButton Component", () => {
  const mockSubmitVote = vi.fn();

  beforeEach(() => {
    (useVote as jest.Mock).mockReturnValue({
      submitVote: mockSubmitVote,
      isLoading: false,
    });
  });

  test("renders Like and Dislike buttons", () => {
    render(<BreedButton />);

    // Debug the rendered output
    screen.debug();

    const likeButton = screen.getByText(/^Like$/i);
    const dislikeButton = screen.getByText(/^DisLike$/i);

    expect(likeButton).toBeInTheDocument();
    expect(dislikeButton).toBeInTheDocument();
  });

  test("calls submitVote with TypeVote.Like when Like button is clicked", () => {
    render(<BreedButton />);

    const likeButton = screen.getByText(/^Like$/i);
    fireEvent.click(likeButton);

    expect(mockSubmitVote).toHaveBeenCalledWith(TypeVote.Like);
  });

  test("calls submitVote with TypeVote.DisLike when Dislike button is clicked", () => {
    render(<BreedButton />);

    const dislikeButton = screen.getByText(/^DisLike$/i);
    fireEvent.click(dislikeButton);

    expect(mockSubmitVote).toHaveBeenCalledWith(TypeVote.DisLike);
  });
});

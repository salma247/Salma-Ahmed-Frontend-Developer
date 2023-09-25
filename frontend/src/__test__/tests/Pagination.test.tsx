import { render } from "../test-utils";
import { screen } from "@testing-library/react";
import { Pagination } from "../../components/Pagination";
import { expect, it, describe, vi } from "vitest";

describe("Pagination", () => {
  it("renders correctly with pagination buttons", () => {
    const setPage = vi.fn();
    render(
      <Pagination
        pages={5}
        page={3}
        hasNextPage={true}
        hasPrevPage={true}
        setPage={setPage}
      />
    );

    // Ensure all page buttons are rendered
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();

    // Ensure next and previous buttons are rendered
    expect(screen.getByTestId("prev-button")).toBeInTheDocument();
    expect(screen.getByTestId("next-button")).toBeInTheDocument();
  });

  it("disables previous button when on the first page", () => {
    const setPage = vi.fn();
    render(
      <Pagination
        pages={5}
        page={1}
        hasNextPage={true}
        hasPrevPage={false}
        setPage={setPage}
      />
    );

    const prevButton = screen.getByTestId("prev-button");
    expect(prevButton).toBeInTheDocument();
    expect(prevButton).toBeDisabled();
  });

  it("disables next button when on the last page", () => {
    const setPage = vi.fn();
    render(
      <Pagination
        pages={5}
        page={5}
        hasNextPage={false}
        hasPrevPage={true}
        setPage={setPage}
      />
    );

    const nextButton = screen.getByTestId("next-button");
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeDisabled();
  });

  it("calls setPage when clicking a page button", () => {
    const setPage = vi.fn();
    render(
      <Pagination
        pages={5}
        page={3}
        hasNextPage={true}
        hasPrevPage={true}
        setPage={setPage}
      />
    );

    const pageButton = screen.getByText("2");
    pageButton.click();

    expect(setPage).toHaveBeenCalledWith(2);
  });

  it("calls setPage when clicking the previous button", () => {
    const setPage = vi.fn();
    render(
      <Pagination
        pages={5}
        page={3}
        hasNextPage={true}
        hasPrevPage={true}
        setPage={setPage}
      />
    );

    const prevButton = screen.getByTestId("prev-button");
    prevButton.click();

    expect(setPage).toHaveBeenCalledWith(2);
  });

  it("calls setPage when clicking the next button", () => {
    const setPage = vi.fn();
    render(
      <Pagination
        pages={5}
        page={3}
        hasNextPage={true}
        hasPrevPage={true}
        setPage={setPage}
      />
    );

    const nextButton = screen.getByTestId("next-button");
    nextButton.click();
    expect(setPage).toHaveBeenCalledWith(4);
  });
});


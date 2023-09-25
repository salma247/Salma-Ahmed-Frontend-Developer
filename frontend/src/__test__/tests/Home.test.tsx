import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Home } from "../../pages/Home";
import { render } from "../test-utils";

describe("Home page", () => {
  beforeEach(() => {
    window.scrollTo = vi.fn(() => {});
  });

  it("should render home page", () => {
    render(<Home />);
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });
});

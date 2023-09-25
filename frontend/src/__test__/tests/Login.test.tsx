import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "../../App";
import { Login } from "../../pages/Login";
import { render } from "../test-utils";

describe("Login page", () => {
  beforeEach(() => {
    window.scrollTo = vi.fn(() => {});
  });
  it("should render login page", () => {
    render(<Login />);
    expect(screen.getByTestId("login-page")).toBeInTheDocument();
  });

  it("should redirect to home page if token is present", () => {
    localStorage.setItem("token", "token");
    render(<App />);
    expect(screen.getByText("SpaceX Capsules")).toBeInTheDocument();
  });
});

import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RequireAuth } from "../../App";
import { render } from "../test-utils";

describe("RequireAuth component", () => {
  it("should redirect to login page if token is not present", () => {
    render(
      <RequireAuth redirectTo="/login">
        <div>Home</div>
      </RequireAuth>,
    );
    expect(screen.queryByText("Home")).not.toBeInTheDocument();
  });

  it("should render children if token is present", () => {
    localStorage.setItem("token", "token");
    render(
      <RequireAuth redirectTo="/login">
        <div>Home</div>
      </RequireAuth>,
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});

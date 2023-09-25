import { screen } from "@testing-library/react";
import { rest } from "msw";
import { describe, expect, it, vi } from "vitest";
import { CapsuleModal } from "../../components/Capsule/CapsuleModal";
import { server } from "../../setupTests";
import { render } from "../test-utils";

const capsule = {
  id: "1",
  water_landings: 1,
  land_landings: 0,
  original_launch: "2010-06-04T18:45:00.000Z",
  reuse_count: 1,
  status: "active",
  type: "Dragon 1.0",
  serial: "C101",
  last_update: "Reentered after three weeks in orbit",
  launches: ["5eb87cd9ffd86e000604b32a"],
};

describe("CapsuleModal component", () => {
  it("should render Loading... if data is loading", () => async () => {
    render(<CapsuleModal id="1" showModal={true} onClose={vi.fn()} />);
    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });

  it("should render error message if data is not present", () => async () => {
    server.use(
      rest.get("*", (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );
    render(<CapsuleModal id="1" showModal={true} onClose={vi.fn()} />);
    expect(await screen.findByText("Error")).toBeInTheDocument();
  });

  it("should render capsule modal data", () => async () => {
    server.use(
      rest.get("*", (req, res, ctx) => {
        return res(
          ctx.json({
            data: capsule,
          }),
        );
      }),
    );

    render(<CapsuleModal id="1" showModal={true} onClose={vi.fn()} />);
    expect(await screen.findByText("C101")).toBeInTheDocument();
    expect(await screen.findByText("Dragon 1.0")).toBeInTheDocument();
    expect(await screen.findByText("active")).toBeInTheDocument();
  });
});

import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CapsuleCard } from "../../components/Capsule/CapsuleCard";
import { CapsuleList } from "../../components/Capsule/CapsuleList";
import { render } from "../test-utils";

describe("Capsule components", () => {
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

  it("should render capsule card", () => {
    render(<CapsuleCard item={capsule} />);
    expect(screen.getByTestId("capsule-card")).toBeInTheDocument();
  });

  it("should render capsule list", () => {
    render(<CapsuleList data={[capsule]} />);
    expect(screen.getByTestId("capsule-list")).toBeInTheDocument();
  });
});

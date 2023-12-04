import { render, screen, fireEvent } from "@testing-library/react";
import { expect } from "vitest";
import Shoes from "./Shoes";

describe("Shoes Component", () => {
  it("allows a user to select shoe sizes for each player", async () => {
    const mockShoes = [{ id: "shoe1", size: "" }];
    render(
      <Shoes
        shoes={mockShoes}
        updateSize={() => {}}
        addShoe={() => {}}
        removeShoe={() => {}}
      />
    );
  });
});

import { render, screen } from "@testing-library/react";
import Shoes from "./Shoes";
import userEvent from "@testing-library/user-event";
import { expect, vi } from "vitest";

describe("Shoes", () => {
  it("should allow user to add a shoe size field", async () => {
    const updateSize = vi.fn();
    const addShoe = vi.fn();
    const removeShoe = vi.fn();
    const shoes = [];

    const { rerender } = render(
      <Shoes
        updateSize={updateSize}
        addShoe={addShoe}
        removeShoe={removeShoe}
        shoes={shoes}
      />
    );

    const addButton = screen.getByRole("button", { name: "+" });
    await userEvent.click(addButton);

    shoes.push({ id: vi.fn().mockReturnValue("1"), size: "" });
    rerender(
      <Shoes
        updateSize={updateSize}
        addShoe={addShoe}
        removeShoe={removeShoe}
        shoes={shoes}
      />
    );

    const shoeSizeInputs = screen.getAllByRole("textbox");
    expect(shoeSizeInputs).toHaveLength(shoes.length);
    expect(addShoe).toHaveBeenCalled();
  });

  it("should allow user to remove a shoe size field", async () => {
    const updateSize = vi.fn();
    const addShoe = vi.fn();
    const removeShoe = vi.fn();
    const shoes = [{ id: "1", size: "40" }];

    const { rerender } = render(
      <Shoes
        updateSize={updateSize}
        addShoe={addShoe}
        removeShoe={removeShoe}
        shoes={shoes}
      />
    );

    const removeButton = screen.getByRole("button", { name: "-" });
    await userEvent.click(removeButton);

    shoes.pop();
    rerender(
      <Shoes
        updateSize={updateSize}
        addShoe={addShoe}
        removeShoe={removeShoe}
        shoes={shoes}
      />
    );

    expect(removeShoe).toHaveBeenCalledWith("1");
    expect(shoes).toHaveLength(0);
  });

  // Lägg till fler tester här för att hantera unik skostorlek och bekräftelse av vald storlek
});

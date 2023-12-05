import { render, screen, fireEvent } from "@testing-library/react";
import Shoes from "./Shoes";

it("should allow user to select shoe size for each player", () => {
  let mockUpdateSizeCalled = false;
  const mockUpdateSize = () => {
    mockUpdateSizeCalled = true;
  };
  let mockAddShoeCalled = false;
  const mockAddShoe = () => {
    mockAddShoeCalled = true;
  };
  const mockRemoveShoe = () => {};
  const shoes = [{ id: "shoe1", size: "" }];

  render(
    <Shoes
      updateSize={mockUpdateSize}
      addShoe={mockAddShoe}
      removeShoe={mockRemoveShoe}
      shoes={shoes}
    />
  );

  const addButton = screen.getByText("+");
  fireEvent.click(addButton);

  expect(mockAddShoeCalled).toBe(true);
});

it("should allow user to remove a shoe size field", () => {
  let mockRemoveShoeCalled = false;
  const mockRemoveShoe = (id) => {
    if (id === "shoe1") {
      mockRemoveShoeCalled = true;
    }
  };
  const shoes = [
    { id: "shoe1", size: "" },
    { id: "shoe2", size: "" },
  ];

  render(<Shoes removeShoe={mockRemoveShoe} shoes={shoes} />);

  const removeButtons = screen.getAllByText("-");
  fireEvent.click(removeButtons[0]);
  expect(mockRemoveShoeCalled).toBe(true);
});

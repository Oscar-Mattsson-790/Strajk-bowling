import { render, screen, fireEvent } from "@testing-library/react";
import Shoes from "./Shoes";

it("should allow user to select shoe size for each player", () => {
  const mockUpdateSize = () => {};
  const mockAddShoe = () => {};
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
});

it("should allow user to remove a shoe size field", () => {
  const mockRemoveShoe = () => {};
  const shoes = [{ id: "shoe1", size: "" }];

  render(<Shoes removeShoe={mockRemoveShoe} shoes={shoes} />);

  const removeButton = screen.getByText("-");
  fireEvent.click(removeButton);
});

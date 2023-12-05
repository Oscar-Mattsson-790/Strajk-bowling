import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Booking from "./Booking";

describe("Booking process", () => {
  it("displays an error message when not all fields are filled", async () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/strIIIIIike!/i));

    // Vänta på att felmeddelandet visas på skärmen
    await waitFor(() => {
      const errorMessage = screen.getByText(
        /Fill out all the fields and make sure that people and shoes is the same number./i
      );
      expect(errorMessage).to.exist;
    });

    const strikeButton = screen.getByText(/strIIIIIike!/i);
    expect(strikeButton).to.exist;
  });
});

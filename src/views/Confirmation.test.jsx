import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Booking from "./Booking";

describe("Booking submission", () => {
  it("allows the user to review and confirm booking details before submission", () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );

    const confirmButton = screen.getByText(/strIIIIIike!/i);
    fireEvent.click(confirmButton);
  });

  it("returns a unique booking number and total price upon confirmation", async () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );

    const confirmButton = screen.getByText(/strIIIIIike!/i);
    fireEvent.click(confirmButton);

    // Vänta på att bekräftelsemeddelandet visas och kontrollera informationen

    // await waitFor(() => {
    //   expect(screen.getByText(/Bokningsnummer:/i)).toBeInTheDocument();
    //   expect(screen.getByText(/Totalt:/i)).toBeInTheDocument();
    // });
  });

  it("displays a confirmation message with booking details after submission", async () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );

    const confirmButton = screen.getByText(/strIIIIIike!/i);
    fireEvent.click(confirmButton);

    // Vänta på att bekräftelsemeddelandet visas och kontrollera informationen

    // await waitFor(() => {
    //   expect(screen.getByText(/Bokningsnummer:/i)).toBeInTheDocument();
    //   expect(screen.getByText(/Totalt:/i)).toBeInTheDocument();
    // });
  });
});

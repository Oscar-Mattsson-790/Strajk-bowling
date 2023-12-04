import { render, screen, fireEvent } from "@testing-library/react";
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
    // Mocka API-anropet här om möjligt
    // ...

    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );

    // Simulera att användaren fyller i och bekräftar bokningen
    // ...

    await fireEvent.click(screen.getByText(/strIIIIIike!/i));

    // Kontrollera att bekräftelsemeddelandet visas med rätt information
    // Detta kan kräva att du väntar på att elementen ska visas i DOM:en
  });

  it("displays a confirmation message with booking details after submission", async () => {
    // Detta test är liknande det föregående, men fokuserar mer på bekräftelsemeddelandet
    // efter att bokningen är skickad.
  });
});

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Booking from "./Booking";

describe("Booking process", () => {
  it("allows user to book a lane and receive confirmation", async () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2023-12-05" },
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "15:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of awesome bowlers/i), {
      target: { value: "4" },
    });

    fireEvent.click(screen.getByText(/strIIIIIike!/i));

    await waitFor(() => {
      const confirmationMessage = screen.getByText(/strIIIIIike!/i);
      expect(confirmationMessage).toBeInTheDocument();
    });
  });
});

describe("Booking date selection", () => {
  it("allows user to select a date", () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );
    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: "2023-12-05" } });
    expect(dateInput.value).to.equal("2023-12-05");
  });

  describe("Booking time selection", () => {
    it("allows user to select a time", () => {
      render(
        <MemoryRouter>
          <Booking />
        </MemoryRouter>
      );
      const timeInput = screen.getByLabelText(/time/i);
      fireEvent.change(timeInput, { target: { value: "15:00" } });
      expect(timeInput.value).to.equal("15:00");
    });
  });

  describe("Number of players selection", () => {
    it("allows user to specify the number of players", () => {
      render(
        <MemoryRouter>
          <Booking />
        </MemoryRouter>
      );
      const playersInput = screen.getByLabelText(/number of awesome bowlers/i);
      fireEvent.change(playersInput, { target: { value: "4" } });
      expect(playersInput.value).to.equal("4");
    });
  });
});

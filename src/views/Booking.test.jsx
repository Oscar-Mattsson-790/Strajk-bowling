import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Booking from "./Booking";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Booking process", () => {
  it("allows user to book a lane and receive confirmation", async () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );

    userEvent.type(screen.getByLabelText(/date/i), "2023-12-05");
    userEvent.type(screen.getByLabelText(/time/i), "15:00");
    userEvent.type(screen.getByLabelText(/number of awesome bowlers/i), "4");
    userEvent.type(screen.getByLabelText(/number of lanes/i), "2");

    await waitFor(() => {
      const confirmationMessage = screen.getByText(/strIIIIIike!/i);
      expect(confirmationMessage).toBeInTheDocument();
    });
  });
});

describe("Booking date and time selection", () => {
  it("allows user to select a date", () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );
    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: "2023-12-05" } });
    expect(dateInput.value).toBe("2023-12-05");
  });

  it("allows user to select a time", () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );
    const timeInput = screen.getByLabelText(/time/i);
    fireEvent.change(timeInput, { target: { value: "15:00" } });
    expect(timeInput.value).toBe("15:00");
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

  describe("Number of players and lanes selection", () => {
    it("allows user to specify the number of players and lanes", () => {
      render(
        <MemoryRouter>
          <Booking />
        </MemoryRouter>
      );
      const playersInput = screen.getByLabelText(/number of awesome bowlers/i);
      fireEvent.change(playersInput, { target: { value: "4" } });
      expect(playersInput.value).toBe("4");

      const lanesInput = screen.getByLabelText(/number of lanes/i);
      fireEvent.change(lanesInput, { target: { value: "2" } });
      expect(lanesInput.value).toBe("2");
    });
  });
});

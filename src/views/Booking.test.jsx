import { render, screen, fireEvent } from "@testing-library/react";
import { expect } from "chai";
import { MemoryRouter } from "react-router-dom";
import Booking from "./Booking";

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
      const timeInput = screen.getByLabelText(/time/i); // Nu bör detta fungera
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

  describe("Display of available lanes", () => {
    it("shows available lanes based on selected date, time, and number of players", () => {
      // Det här testet kan kräva att du mockar svaret från en API-anrop
      // som hämtar tillgängliga banor baserat på valda parametrar.
    });
  });

  describe("Booking confirmation", () => {
    it("allows user to confirm and proceed with the booking", async () => {
      render(
        <MemoryRouter>
          <Booking />
        </MemoryRouter>
      );
      // Antag att du har fyllt i alla nödvändiga fält här.
      const confirmButton = screen.getByText(/strIIIIIike!/i);
      fireEvent.click(confirmButton);

      // Här bör du verifiera att navigeringen till bekräftelsesidan sker.
      // Detta kan kräva ytterligare inställningar i din testmiljö.
    });
  });
});

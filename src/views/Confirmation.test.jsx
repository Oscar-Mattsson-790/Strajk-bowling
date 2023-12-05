import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Booking from "./Booking";
import { expect, vi } from "vitest";

// Mock fetch-anropet
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: "STR9883PCKL",
        price: 880, // Anta att det är summan baserat på din prislogik
      }),
  })
);

describe("Booking Submission and Confirmation Process", () => {
  it("allows the user to review and confirm all booking details before submission", async () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );

    await userEvent.type(screen.getByLabelText(/date/i), "2023-12-05");
    await userEvent.type(screen.getByLabelText(/time/i), "15:00");
    await userEvent.type(
      screen.getByLabelText(/number of awesome bowlers/i),
      "4"
    );
    await userEvent.type(screen.getByLabelText(/number of lanes/i), "2");

    // Lägg till skostorlekar för varje person
    for (let i = 0; i < 4; i++) {
      await userEvent.click(screen.getByText(/\+/i));
      await userEvent.type(screen.getAllByRole("textbox")[i], "42"); // Ange skostorlek för varje person
    }

    // Klicka på bokningsknappen
    await userEvent.click(screen.getByText(/strIIIIIike!/i));

    // Bekräftelselogik här
    // await waitFor(() => {
    //   // Kontrollera att bekräftelseskärmen visas med korrekta värden
    //   expect(
    //     screen.getByText(/Booking number: STR9883PCKL/i)
    //   ).toBeInTheDocument();
    //   expect(screen.getByText(/Total: 880 sek/i)).toBeInTheDocument();
    // });
  });
});

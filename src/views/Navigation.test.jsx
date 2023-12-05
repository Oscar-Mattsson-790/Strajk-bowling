import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Booking from "../views/Booking";
import Confirmation from "../views/Confirmation";
import { expect, vi } from "vitest";

describe("Navigation between booking and confirmation views", () => {
  it("navigates to the confirmation view after submitting a reservation", async () => {
    render(
      <MemoryRouter initialEntries={["//confirmation"]}>
        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </MemoryRouter>
    );

    userEvent.type(screen.getByLabelText(/Date/i), "2023-12-05");

    userEvent.click(screen.getByText(/strIIIIIike!/i));

    await waitFor(() => {
      expect(window.location.pathname).toBe("/confirmation");
    });
  });

  it("shows all relevant booking information on the confirmation view", async () => {
    render(
      <MemoryRouter initialEntries={["/confirmation"]}>
        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </MemoryRouter>
    );
  });

  it("provides a way to navigate back to the booking view from the confirmation view", () => {
    render(
      <MemoryRouter initialEntries={["/confirmation"]}>
        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </MemoryRouter>
    );
  });
});

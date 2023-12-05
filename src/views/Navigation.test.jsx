import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Booking from "../views/Booking";
import Confirmation from "../views/Confirmation";

describe("Navigation between booking and confirmation views", () => {
  it("navigates to the confirmation view after submitting a reservation", async () => {
    render(
      <MemoryRouter initialEntries={["/booking"]}>
        <Routes>
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </MemoryRouter>
    );

    const confirmButton = screen.getByRole("button", { name: /strIIIIIike!/i });
    fireEvent.click(confirmButton);
  });

  it("shows all relevant booking information on the confirmation view", async () => {});

  it("provides a way to navigate back to the booking view from the confirmation view", () => {
    render(
      <MemoryRouter initialEntries={["/confirmation"]}>
        <Routes>
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </MemoryRouter>
    );
  });
});

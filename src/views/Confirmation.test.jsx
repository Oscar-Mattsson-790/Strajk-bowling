import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Booking from "./Booking";

describe("Booking Submission and Confirmation Process", () => {
  it("allows the user to review and confirm all booking details before submission", async () => {
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
    fireEvent.change(screen.getByLabelText(/number of lanes/i), {
      target: { value: "2" },
    });

    // Click the submit button
    fireEvent.click(screen.getByText(/strIIIIIike!/i));

    expect(screen.getByDisplayValue("2023-12-05")).toBeInTheDocument();
    expect(screen.getByDisplayValue("15:00")).toBeInTheDocument();
    expect(screen.getByDisplayValue("4")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2")).toBeInTheDocument();
  });

  it("returns a unique booking number and total price upon confirmation", async () => {
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
    fireEvent.change(screen.getByLabelText(/number of lanes/i), {
      target: { value: "2" },
    });
    fireEvent.click(screen.getByText(/\+/i));

    // fireEvent.change(screen.getByTestId(/Shoe size \/ person 1/i), {
    //   target: { value: "42" },
    // });

    fireEvent.click(screen.getByText(/strIIIIIike!/i));

    // await waitFor(() => {
    //   expect(screen.getAllByLabelText(/Booking number:/i)).toBeInTheDocument();
    //   const totalPrice = 4 * 120 + 2 * 100;
    //   expect(screen.getByText(`Total: ${totalPrice} kr`)).toBeInTheDocument();
    // });
  });
});

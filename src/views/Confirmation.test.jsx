import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import Booking from "./Booking";
import { describe, it, vi, expect } from "vitest";
import router from "../router";

describe("Booking Submission and Confirmation Process", () => {
  it("allows the user to review and confirm all booking details before submission", async () => {
    render(
      <RouterProvider router={router}>
        <Booking />
      </RouterProvider>
    );
    const fetchSpy = vi.spyOn(window, "fetch");

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2023-11-27" },
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "212321" },
    });
    fireEvent.change(screen.getByLabelText(/number of awesome bowlers/i), {
      target: { value: 4 },
    });
    fireEvent.change(screen.getByLabelText(/number of lanes/i), {
      target: { value: 1 },
    });

    for (let index = 0; index < 4; index++) {
      fireEvent.click(screen.getByText("+"));
      const shoesFields = screen.queryAllByTestId("shoesid");
      fireEvent.change(shoesFields[index].querySelector('input[type="text"]'), {
        target: { value: 40 },
      });
    }

    fireEvent.click(screen.getByText(/strIIIIIike!/i));

    expect(fetchSpy).toHaveBeenCalled();

    await waitFor(() => {
      expect(screen.queryByText("See you soon!")).toBeInTheDocument();
    });
  });
});

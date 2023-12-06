import { beforeEach, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Testing navigation ", () => {
  beforeEach(() => {
    render(<App />);
    userEvent.click(screen.getByTestId("navigation-item"));
  });

  it("displays both booking and confirmation navigation links when the menu bar icon is clicked", () => {
    const navigationLinks = screen.getAllByTestId("navigation-link");
    expect(navigationLinks.length).toBe(2);
    expect(navigationLinks[0].textContent).toBe("Booking");
    expect(navigationLinks[1].textContent).toBe("Confirmation");
  });

  // it("navigates to the booking view when the booking navigation link is clicked", () => {
  //   const navigationLinks = screen.getAllByTestId("navigation-link");
  //   userEvent.click(navigationLinks[0]);
  //   expect(screen.queryByText("When, WHAT & Who")).toBeInTheDocument();
  // });

  // it("navigates to the confirmation view when the confirmation navigation link is clicked", async () => {
  //   const navigationLinks = screen.getAllByTestId("navigation-link");
  //   userEvent.click(navigationLinks[1]);
  //   await waitFor(() => {
  //     expect(screen.queryByText("Inga bokning gjord!")).toBeInTheDocument();
  //   });
  // });
});

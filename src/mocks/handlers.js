import { http, HttpResponse } from "msw";

let bookings = [];

export const handlers = [
  http.post(
    "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com",
    async ({ request }) => {
      const newBooking = await request.json();

      const totalPrice = newBooking.people * 120 + newBooking.lanes * 100;

      const bookingResponse = {
        ...newBooking,
        id: "1234",
        confirmation: "Bokad",
        price: totalPrice,
      };

      bookings.push(bookingResponse);

      return HttpResponse.json(bookingResponse);
    }
  ),
];

export default handlers;

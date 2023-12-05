import { http, HttpResponse } from "msw";

let bookings = [];

export const handlers = [
  // ...andra handlers...

  http.post(
    "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com",
    async ({ request }) => {
      const newBooking = await request.json();

      // Lägg till logik för att hantera bokningen baserat på datum, tid och antal spelare
      // Simulera en framgångsrik bokning
      const bookingResponse = {
        ...newBooking,
        id: "1234",
        confirmation: "Bokad",
      };
      bookings.push(bookingResponse);

      return HttpResponse.json(bookingResponse);
    }
  ),
];

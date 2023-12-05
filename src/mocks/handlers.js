import { http, HttpResponse } from "msw";

export const handlers = [
  http.post(
    "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com",
    async ({ request }) => {
      const body = await request.json();

      // Calculate the total price based on your pricing logic
      const totalPrice = body.people * 120 + body.lanes * 100;

      // Validate shoe sizes
      const shoeSizesAreValid = body.shoes.length === parseInt(body.people);

      // Create the booking response object
      const booking = {
        active: true,
        id: "STR9883PCKL", // Generate a unique ID as needed
        price: totalPrice,
        lanes: body.lanes,
        people: body.people,
        shoes: body.shoes,
        when: body.when,
      };

      return HttpResponse.json(booking);
    }
  ),
];

export default handlers;

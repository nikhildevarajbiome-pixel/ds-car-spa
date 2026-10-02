export const WA_NUMBER = "916361791479";

export const waLink = (text?: string) =>
  `https://wa.me/${WA_NUMBER}` + (text ? `?text=${encodeURIComponent(text)}` : "");

export const GENERIC_BOOKING = waLink(
  "Hello DS Car Spa! I would like to book a car wash appointment. Please share the available slots."
);

export const bookServiceLink = (name: string) =>
  waLink(`Hello DS Car Spa! I would like to book: ${name}. Please share the available slots.`);

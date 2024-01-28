/* ARRAY VIPS */
const vips = [
  "Dwayne Johnson",
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

/* ADD DETAILS WITH MAP */
const vipsSeats = vips.map((vip, seat) => {
  let objectTypography = {
    table: "Tavolo Vip",
    vip: vip,
    indexSeat: seat + 1,
  };

  return objectTypography;
});

/* PRINT WITH CONSOLE */

console.log(vipsSeats);

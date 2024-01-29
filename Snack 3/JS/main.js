/* ARRAY OF OBJECTS */
const bikes = [
  {
    name: "mountainBike",
    weight: 13,
  },
  {
    name: "roadBike",
    weight: 8,
  },
  {
    name: "downhillBike",
    weight: 21,
  },
  {
    name: "cityBike",
    weight: 15,
  },
  {
    name: "raceBike",
    weight: 7,
  },
  {
    name: "tandemBike",
    weight: 20,
  },
  {
    name: "childBike",
    weight: 5,
  },
];

let [observedBike] = bikes;

/* FOREACH */
bikes.forEach((bike) => {
  if (bike.weight < observedBike.weight) observedBike = bike;
});

/* FILTER */
const [lighterBike] = bikes.filter(
  (bike) => bike.weight == observedBike.weight
);

/* PRINT */
console.log(
  `La bicicletta ${observedBike.name} è la più leggera e pesa ${observedBike.weight} kg`
);

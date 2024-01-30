/* ARRAY OF OBJECTS */

const teams = [
  {
    name: "Team Turtle",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Frog",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Penguin",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Hippopotamus",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Seal",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Crocodile",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Dolphin",
    score: 0,
    foul: 0,
  },
];

/* RANDOMNUMBER-GO-TO-FUNCTIONS.JS */

/* GENERATE RANDOM NUMBERS */
teams.forEach((team) => {
  team.score = getRandomNumber(0, 10);
  team.foul = getRandomNumber(0, 30);
});

console.log(teams);

/* ARRAY OF TEAMS WITH ONLY FOULS */
const arrayTeamsFouls = teams.map((team) => {
  const { name, foul } = team;
  return {
    name,
    foul,
  };
});

console.log(arrayTeamsFouls);

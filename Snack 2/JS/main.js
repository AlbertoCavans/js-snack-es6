/* ARRAY OF OBJECTS */
const students = [
  {
    id: 213,
    name: "Marco della Rovere",
    grades: 78,
  },
  {
    id: 110,
    name: "Paola Cortellessa",
    grades: 96,
  },
  {
    id: 250,
    name: "Andrea Mantegna",
    grades: 48,
  },
  {
    id: 145,
    name: "Gaia Borromini",
    grades: 74,
  },
  {
    id: 196,
    name: "Luigi Grimaldello",
    grades: 68,
  },
  {
    id: 102,
    name: "Piero della Francesca",
    grades: 50,
  },
  {
    id: 120,
    name: "Francesca da Polenta",
    grades: 84,
  },
];

/* UPPERCASE NAMES */
let uppercaseStudents = students.map((students) => {
  let nameUppercase = students.name.toUpperCase();
  return nameUppercase;
});
console.log(uppercaseStudents);

/* STUDENTS WITH OVER70 GRADES */
const studentsOver70 = students.filter((student) => student.grades > 70);
console.log(studentsOver70);

/* STUDENTS WITH OVER70 GRADES + OVER120 ID */
const studentsOver70and120 = students.filter(
  (student) => student.grades > 70 && student.id > 120
);
console.log(studentsOver70and120);

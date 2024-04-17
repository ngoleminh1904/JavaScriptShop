const arrayName = [
  "Adrienne",
  "Amelia",
  "Aurora",
  "Alice",
  "Brooks",
  "Rachel",
  "Edwards",
  "Christopher",
  "Perez",
  "Thomas",
  "Baker",
  "Sara",
  "Moore",
  "Chris",
  "Bailey",
  "Roger",
  "Johnson",
  "Marilyn",
  "Thompson",
  "Anthony",
  "Evans",
  "Julie",
  "Hall",
  "Paula",
  "Phillips",
  "Annie",
  "Hernandez",
  "Dorothy",
  "Murphy",
  "Alice",
  "Howard",
];
const arrayGender = ["M", "F"];
const createProfile = () => {
  let arrayProfile = [];
  for (let i = 0; i < arrayName.length; i++) {
    const student = {
      name: arrayName[i],
      gender: arrayGender[Math.floor(Math.random() * 2)],
      rPoint: Math.floor(Math.random() * 350),
      wPoint: Math.floor(Math.random() * 350),
      mPoint: Math.floor(Math.random() * 700),
    };
    arrayProfile.push(student);
  }
  return arrayProfile;
};
console.log(createProfile());

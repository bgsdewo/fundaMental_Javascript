//cara elegan menggunakan for of

const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

const students = [
  ["John", "Doe", 30],
  ["Jane", "Doe", 25],
  ["Michael", "Jackson", 40],
];
for (const student of students) {
  console.log(`Nama: ${student[0]} ${student[1]}, Usia: ${student[2]}`);
}

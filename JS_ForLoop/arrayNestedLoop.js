//mendapatkan data array dengan nested loop
const animals = [
  ["cat", "dog", "rabbit"],
  ["bird", "fish"],
  ["tiger", "lion"],
];
for (let i = 0; i < animals.length; i++) {
  for (let j = 0; j < animals[i].length; j++) {
    console.log(i, j, animals[i][j]);
  }
}

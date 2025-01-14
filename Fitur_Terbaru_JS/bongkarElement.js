//destructing menggunakan spread operator

const nama = ["bagus", "felix", "nadia", "michi"];

const [gold, silver, bronse, ...perserta] = nama;
console.log(gold);
console.log(silver);
console.log(bronse);
console.log(perserta);

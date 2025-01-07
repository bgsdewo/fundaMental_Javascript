//array multidimensi
//array multidimensi adalah array yang berisi array di dalam array
//contoh array multidimensi
var buah = [
  ["apel", "mangga"],
  ["jeruk", "pisang"],
];
console.log(buah[0]); //output: ['apel', 'mangga']
console.log(buah[1]); //output: ['jeruk', 'pisang']
console.log(buah[0][0]); //output: apel
console.log(buah[0][1]); //output: mangga
console.log(buah[1][0]); //output: jeruk
console.log(buah[1][1]); //output: pisang

//array multidimensi bisa juga berisi tipe data lain
var buah = [
  ["apel", "mangga", 2],
  ["jeruk", "pisang", 3],
];
console.log(buah[0]); //output: ['apel', 'mangga', 2]
console.log(buah[1]); //output: ['jeruk', 'pisang', 3]
console.log(buah[0][0]); //output: apel
console.log(buah[0][1]); //output: mangga
console.log(buah[0][2]); //output: 2

//Mengenal struktur data array pada javascript
//Array adalah tipe data yang digunakan untuk menyimpan lebih dari satu nilai dalam satu variabel
//array di javascript bisa menyimpan lebih dari satu tipe data
//misalnya array bisa menyimpan string, number, boolean, object, array, dan sebagainya

//contoh array
var buah = ["apel", "mangga", "jeruk", "pisang"];
console.log(buah);

//mengakses nilai array
console.log(buah[0]); //output: apel

//mengubah nilai array
buah[0] = "semangka";
console.log(buah); //output: ['semangka', 'mangga', 'jeruk', 'pisang']

//menghitung panjang array
console.log(buah.length); //output: 4

//contoh array dengan tipe integer
var angka = [1, 2, 3, 4, 5];
console.log(angka); //output: [1, 2, 3, 4, 5]

//contoh array dengan tipe boolean
var benar = [true, true, false];
console.log(benar); //output: [true, true, false]

//contoh array dengan tipe object
var orang = [
  { nama: "John", umur: 20 },
  { nama: "Doe", umur: 22 },
];
console.log(orang); //output: [{nama: 'John', umur: 20}, {nama: 'Doe', umur: 22}]
console.log(orang[0].nama); //output: John

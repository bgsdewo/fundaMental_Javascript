// operator OR
// operator OR adalah operator yang digunakan untuk menggabungkan dua atau
// lebih kondisi, jika salah satu kondisi bernilai true maka hasilnya true
// jika semua kondisi bernilai false maka hasilnya false
// contoh penggunaan operator OR

let nilai1 = 10;
let nilai2 = 20;
let hasil = nilai1 > 5 || nilai2 < 10;
console.log(hasil); // true

if (nilai1 > 5 || nilai2 < 10) {
  console.log("salah satu kondisi bernilai true");
}

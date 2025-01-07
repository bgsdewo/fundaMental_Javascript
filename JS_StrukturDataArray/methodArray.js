// metthod array pada javascript
// method array pada javascript adalah fungsi yang dimiliki oleh array
// method array digunakan untuk mempermudah manipulasi array
// berikut beberapa method array pada javascript:

// 1. concat() => method ini digunakan untuk menggabungkan dua array atau lebih
var buah = ["apel", "mangga", "jeruk"];
var sayur = ["bayam", "kangkung", "wortel"];
var makanan = buah.concat(sayur);
console.log(makanan); //output: ['apel', 'mangga', 'jeruk', 'bayam', 'kangkung', 'wortel']

// 2. join() => method ini digunakan untuk menggabungkan semua elemen array menjadi string
var buah = ["apel", "mangga", "jeruk"];
var buahString = buah.join();
console.log(buahString); //output: apel,mangga,jeruk

// 3. reverse() => method ini digunakan untuk membalik urutan array
var buah = ["apel", "mangga", "jeruk"];
buah.reverse();
console.log(buah); //output: ['jeruk', 'mangga', 'apel']

// 4. slice() => method ini digunakan untuk mengambil sebagian array dan membuat array baru
var buah = ["apel", "mangga", "jeruk", "semangka", "pisang"];
var buahSlice = buah.slice(1, 3);
console.log(buahSlice); //output: ['mangga', 'jeruk']

// 5. sort() => method ini digunakan untuk mengurutkan array
var buah = ["apel", "mangga", "jeruk", "semangka", "pisang"];
buah.sort();
console.log(buah); //output: ['apel', 'jeruk', 'mangga', 'pisang', 'semangka']

// 6. splice() => method ini digunakan untuk menambah, menghapus,
// dan mengganti elemen array
var buah = ["apel", "mangga", "jeruk"];
buah.splice(2, 0, "semangka");
console.log(buah); //output: ['apel', 'mangga', 'semangka', 'jeruk']

// 7. indexOf() => method ini digunakan untuk mencari index dari elemen array
var buah = ["apel", "mangga", "jeruk"];
var index = buah.indexOf("mangga");
console.log(index); //output: 1

//8.includes() => method ini digunakan untuk mengecek apakah suatu elemen
// ada di dalam array
var buah = ["apel", "mangga", "jeruk"];
var check = buah.includes("mangga");
console.log(check); //output: true

//dan masih banyak lagi method array lainnya

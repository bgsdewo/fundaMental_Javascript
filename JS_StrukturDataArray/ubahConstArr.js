//Mengubah Nilai Const Dengan Array
//const dalam array tidak berarti nilai array tersebut tidak bisa diubah.
// Nilai array masih bisa diubah, hanya saja variabel const tidak bisa diubah.
// Berikut contoh mengubah nilai array dengan variabel const:
const buah = ["apel", "mangga", "jeruk"];
console.log(buah); //output: ['apel', 'mangga', 'jeruk']
buah[0] = "semangka";
console.log(buah); //output: ['semangka', 'mangga', 'jeruk']
//console.log(buah); //output: ['semangka', 'mangga', 'jeruk']

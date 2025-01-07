// method unshift dan shift pada array
// method unsift digunakan untuk menambahkan nilai baru pada array pada index ke-0
// method shift digunakan untuk menghapus nilai pertama pada array

//penggunaan method unshift
var buah = ["apel", "mangga", "jeruk"];
console.log(buah); //output: ['apel', 'mangga', 'jeruk']
buah.unshift("semangka");
console.log(buah); //output: ['semangka', 'apel', 'mangga', 'jeruk']

//penggunaan method shift
buah.shift();
console.log(buah); //output: ['apel', 'mangga', 'jeruk']

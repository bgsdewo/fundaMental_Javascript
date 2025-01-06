// sub topic pertama tipe data primitive pada JS
// 1. String
// string adalah tipe data yang berisi karakter atau teks
// 2. Number
// number adalah tipe data yang berisi angka
// 3. Boolean
// boolean adalah tipe data yang berisi nilai benar atau salah
// 4. Null
// null adalah tipe data yang berisi nilai kosong
// 5. Undefined
// undefined adalah tipe data yang berisi nilai yang belum didefinisikan
// 6. Symbol
// symbol adalah tipe data yang berisi nilai yang unik dan tidak bisa diubah
// 7. BigInt
// bigint adalah tipe data yang berisi angka yang sangat besar

// kepanjangan repl adalah read evaluate print loop

//contooh penggunaan tipe data string
let nama = "Dian";
console.log(nama);

//contoh penggunaan tipe data number
let angka = 10;
console.log(angka);

//contoh penggunaan tipe data boolean
let benar = true;
let salah = false;
console.log(benar);
console.log(salah);

//contoh penggunaan tipe data null
let kosong = null;
console.log(kosong);
kosong = "tidak kosong"; //asign nilai baru pada variabel kosong
console.log(kosong); //output tidak kosong

//contoh penggunaan tipe data undefined
let belumDidefinisikan;
console.log(belumDidefinisikan);
belumDidefinisikan = "Sudah didefinisikan";
console.log(belumDidefinisikan);

//contoh penggunaan tipe data symbol
let id = Symbol("id");
console.log(id);

//contoh penggunaan tipe data bigint
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);

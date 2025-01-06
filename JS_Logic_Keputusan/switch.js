//Pengkondisian Switch
//Switch adalah pengkondisian yang digunakan untuk
// membandingkan nilai dari sebuah variabel dengan beberapa
//  nilai yang telah ditentukan.

// Contoh penggunaan switch:
let nilai = 10;
switch (nilai) {
  case 10:
    console.log("sangat bagus");
    break;
  case 8:
    console.log("bagus");
    break;
  case 6:
    console.log("cukup");
    break;
  default:
    console.log("lainnya");
}
// Output:
// sangat bagus
// Pada contoh di atas, kita menggunakan variabel nilai
//  yang memiliki nilai 10. Kemudian kita membandingkan
//   nilai tersebut dengan beberapa nilai yang telah ditentukan
//    menggunakan switch. Karena nilai variabel nilai adalah 10,
//     maka output yang dihasilkan adalah sangat bagus.
// Perhatikan bahwa setiap case diakhiri dengan break.
//  Hal ini dilakukan agar proses pengecekan berhenti ketika
//   nilai sudah ditemukan. Jika tidak menggunakan break,
//    maka proses pengecekan akan dilanjutkan ke case selanjutnya.
//     Jika tidak ada case yang sesuai, maka akan dijalankan case default.
//      Case default bersifat opsional, artinya bisa tidak ditulis.
//       Jika tidak ada case yang sesuai dan tidak ada case default,
//        maka tidak akan ada output yang dihasilkan.

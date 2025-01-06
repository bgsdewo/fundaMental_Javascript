// Cek Kondisi Berlapis Lebih Aman(nested condition)
// Kondisi berlapis adalah kondisi yang bersarang satu sama lain.
// Kondisi berlapis dapat digunakan untuk mengecek beberapa kondisi sekaligus.
// Contoh:
const password = prompt("Masukkan password: ");

//password harus sepanjang 8 karakter
if (password.length >= 8) {
  if (password.indexOf(" ") === -1) {
    console.log(`password anda adalah ${password}`);
  } else {
    console.log("Password tidak boleh mengandung spasi");
  }
} else {
  console.log("Password harus 8 karakter");
}

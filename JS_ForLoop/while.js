//perulangan while
// while adalah perulangan yang akan terus berjalan selama kondisi yang ditentukan
// bernilai true

//contoh perulangan while
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//contoh lain perulangan while
const password = "12345";
let input = "";
while (input !== password) {
  input = prompt("Masukkan password: ");
}
alert("Password benar!");

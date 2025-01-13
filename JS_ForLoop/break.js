//break pada perulangan
//break adalah sebuah perintah untuk menghentikan seluruh proses perulangan
//contoh penggunaan break pada perulangan for
const animals = ["cat", "dog", "rabbit", "bird", "fish"];
for (let i = 0; i < animals.length; i++) {
  if (animals[i] === "rabbit") {
    break;
  }
  console.log(i, animals[i]);
}

//contoh penggunaan break pada perulangan while
let i = 0;
while (i < 5) {
  if (i === 3) {
    break;
  }
  console.log(i);
  i++;
}

let input = "";
const password = "12345";
while (true) {
  input = prompt("Masukkan password: ");
  if (input === password) {
    break;
  }
}
alert("Password benar!");

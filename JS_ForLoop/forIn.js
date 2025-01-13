//penggunaan for in
//for in adalah perulangan yang digunakan untuk mengulang setiap properti
// dari sebuah objek
//contoh penggunaan for in

const person = {
  name: "John Doe",
  age: 30,
  job: "teacher",
};

for (let key in person) {
  console.log(key, person[key]);
}

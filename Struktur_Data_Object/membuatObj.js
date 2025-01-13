//cara megakses objek

const dataJohn = {
  nama: "John",
  Usia: 30,
  hobby: ["reading", "cooking"],
  tempatLahir: {
    kota: "Jakarta",
    negara: "Indonesia",
  },
};

//cara mengakses objek
console.log(dataJohn.nama);
console.log(dataJohn.Usia);
console.log(dataJohn.hobby);
console.log(dataJohn.tempatLahir.kota);
console.log(dataJohn.tempatLahir.negara);

//cara mengubah nilai objek
dataJohn.nama = "John Doe";
console.log(dataJohn.nama);

//cara menambahkan key dan value baru
dataJohn.pekerjaan = "Guru";
console.log(dataJohn);

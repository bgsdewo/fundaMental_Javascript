// for each dalam javascript
// dapat menggunakan callback function yang berati dapat memanggil sebuah
//fungsi sebanyak jumlah elemen yang ada pada array

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//cara yg benar
angka.forEach(function (element) {
  if (element % 2 === 0) {
    console.log(element);
  }
});

//contoh lain
const animes = [
  {
    judul: "naruto",
    rating: 8.5,
    genre: "action",
  },
  {
    judul: "one piece",
    rating: 8.5,
    genre: "adventure",
  },
  {
    judul: "one punch",
    rating: 8.5,
    genre: "action",
  },
];

animes.forEach(function (anime) {
  console.log(`${anime.judul} - ${anime.rating} - ${anime.genre}`);
});

//ini cara yg salah karena memanggilnysa satu / satu
function print(element) {
  console.log(element);
}
print(angka[0]);
print(angka[1]);

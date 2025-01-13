//map pada javascript
//nilai baliknya adalah array baru yang sudah di modifikasi melalui callback function
//dari suatu array

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const angkaDouble = angka.map(function (num) {
  return num * 2;
});

console.log(angka);
console.log(angkaDouble);

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

const animeList = animes.map(function (anime) {
  return anime.judul.toUpperCase();
});

console.log(animes);
console.log(animeList);

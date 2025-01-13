//filter method pada javascript
//function yang akan mengembalikan nilai array lagi yang sudah
//dimanipulasi sesuai dengan kriteria yang ditetapkan

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const angkaGanjil = angka.filter((a) => {
  return a % 2 === 1;
});

console.log(angkaGanjil);

const animes = [
  {
    judul: "naruto",
    rating: 8.5,
    genre: "action",
    year: 2002,
  },
  {
    judul: "one piece",
    rating: 8.5,
    genre: "adventure",
    year: 1999,
  },
  {
    judul: "one punch",
    rating: 8.6,
    genre: "action",
    year: 2015,
  },
];

const animeBagus = animes.filter((anime) => {
  return anime.rating > 8.5;
});
const judulAnimeBagus = animeBagus.map((anime) => {
  return anime.judul;
});
const animeBaru = animes.filter((anime) => {
  return anime.year > 2010;
});
console.log(animeBagus);
console.log(judulAnimeBagus);
console.log(animeBaru);

//filter dan map bisa digabung penggunaanya!

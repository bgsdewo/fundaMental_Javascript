//Mendapatkan Satu Nilai Sesuai Kondisi Dari Sebuah Array Dengan Reduce
//melakukan proses sebanyaknya element milik suatu array.nilai baliknya
//single value

const examScore = [80, 70, 60, 50, 40];
const total = examScore.reduce((total, score) => {
  return total + score;
});

const animes = [
  {
    judul: "one punch",
    rating: 8.6,
    genre: "action",
    year: 2015,
  },
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
];

const bestAnime = animes.reduce((bestAnime, currAnime) => {
  if (currAnime.rating > bestAnime.rating) {
    return currAnime;
  }
  return bestAnime;
});

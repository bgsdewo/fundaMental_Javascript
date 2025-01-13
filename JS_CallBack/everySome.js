//Menentukan Benar Atau Salah Pada Array Dengan Every Dan Some Method
//every akan mengembalikan nilai boolean.true pada saat seluruh
//nilai yang ada pada suatu array memiliki kriteria yg sama
//false jika sebaliknya

//some method
//mirip dengan every,tapi lebih fleksibel.hasilnya akan akan true
//jika salah isi array memiliki kriteria nilai yg sama.akan false
//jika sama sekali tidak ada yg sesuai kriteria

const examScore = [80, 70, 60, 50, 40];
const isGraduate = examScore.every((score) => score >= 75);
const isGraduate2 = examScore.some((score) => score >= 75);

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

const isAnimeListNew = animes.some((anime) => anime.year > 2010);

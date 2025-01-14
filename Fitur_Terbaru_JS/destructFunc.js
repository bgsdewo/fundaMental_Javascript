//destructing pada function

const user = {
  nama: "bagus",
  role: "admin",
};

const userAndRole = ({ name, role }) => {
  return `${name} ${role}`;
};

console.log(userAndRole(user));

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

const animeTitles = animes.map(({ judul, year }) => {
  return `${judul} ${year}`;
});

console.log(animeTitles);

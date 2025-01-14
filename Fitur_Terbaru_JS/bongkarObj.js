const user = {
  nama: "Bagus",
  email: "bgs.com",
};

const { name: nama, email, phone = "08986312" } = user;

console.log(user.nama);

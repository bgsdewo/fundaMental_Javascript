//Menggabungkan Property Object Dengan Object Lainnya
//menggunakan spread operator

const user = {
  name: "john",
  emai: "johndoe@gmail.com",
};

const credentials = {
  password: "password",
  token: "123456",
};

const userBaru = { ...user, id: 123, password: "password" };
const userBaruu = { ...user, ...credentials };
console.log(userBaru);
console.log(userBaruu);

//arrow Function pada javascript
//arrow function adalah cara baru dalam penulisan function pada javascript

const perpangkatan = (x) => {
  return x * x;
};

console.log(perpangkatan(5));

//return function arrow secara eksplisit
const random = () => Math.floor(Math.random() * 10);

//bisa juga kaya gni
const add = (a, b) => a + b;

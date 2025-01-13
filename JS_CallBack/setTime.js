//setTimeout dan setInterval
//callback funtion yg bukan beraasal dari aarray
//fungsinya untuk memberi waktu jeda dan melakukan perulangan
//setiap waktu yang di tentukan

//contoh penggunaan setTimeout
console.log("mulai");
setTimeout(() => {
  console.log("selesai");
}, 2000);
console.log("proses");

//contoh penggunaan setInterval
const interval = setInterval(() => {
  console.log("Hello World");
}, 2000);
clearInterval(interval);

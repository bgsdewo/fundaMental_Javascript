//this keyword dalam javascript
//adalah keyword untuk memanggil suatu properti atau method dari object yang sama
//untuk mendapatkan nilainya, kita bisa menggunakan this

//contoh penggunaan this
const person = {
  name: "John",
  age: 30,
  sayHello: function () {
    return "Hello, my name is " + this.name;
  },
};

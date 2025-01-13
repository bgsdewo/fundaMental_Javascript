//definisi sebuah method dalam javascript
//method adalah sebuah function yang didefinisikan dalam object
//method dapat diakses dengan menggunakan operator titik
//method dapat memiliki parameter
//method dapat mengembalikan nilai

//contoh method
var person = {
  name: "John",
  age: 30,
  sayHello: function () {
    return "Hello";
  },
};

//memanggil method
console.log(person.sayHello()); //Hello
//output: Hello

//lingkup scope pada function
//lingkup scope pada function adalah variabel yang dideklarasikan di dalam function
//dan hanya bisa diakses di dalam function tersebut
//jika variabel dideklarasikan di luar function, maka variabel tersebut dapat
// diakses di dalam dan di luar function

//scope
var a = 1;
function myFunction() {
  var a = 2;
  console.log(a);
}
myFunction();
console.log(a);

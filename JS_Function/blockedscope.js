//lingkup blocked scope
//lingkup blocked scope adalah variabel yang dideklarasikan di dalam block
//dan hanya bisa diakses di dalam block tersebut
//jika variabel dideklarasikan di luar block, maka variabel tersebut dapat
// diakses di dalam dan di luar block

let tinggi = 170;

if (tinggi >= 165) {
  let berat = 70;
  console.log(berat);
}

//console.log(berat); //akan error karena berat hanya bisa diakses di dalam block if

//contoh lain
for (let index = 0; index < 5; index++) {
  const indexNumber = index;
  console.log(indexNumber); //akan menampilkan nilai index
}
//console.log(indexNumber); //akan error karena indexNumber hanya bisa diakses di dalam block for

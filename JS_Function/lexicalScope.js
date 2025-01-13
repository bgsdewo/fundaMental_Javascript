//lexical scope dalam javascript
//lexical scope adalah kemampuan function untuk mengakses
// svariabel di luar function tersebut
//lexical scope adalah fitur yang memungkinkan function
// untuk mengakses variabel di luar function tersebut

//contoh lexical scope
function lamarKerja() {
  const jabatan = "progammer";
  function orangDalam() {
    let kenalan = `Orang dalam misa memasukan ${jabatan}`;
    console.log(kenalan);
  }
  orangDalam();
}

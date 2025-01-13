//Try And Catch Adalah Penyelamat

// try {
//   // Ini akan menjalankan kode
//   console.log("Hello World");
// } catch (error) {
//   // Ini akan menjalankan kode jika terjadi error
//   console.log("Ada error");
// }

try {
  // Ini akan menjalankan kode
  Saya.kenalan();
} catch (error) {
  // Ini akan menjalankan kode jika terjadi error
  console.log("Ada error");
}

function teriak(msg) {
  try {
    console.log(msg.toupperCase());
  } catch (error) {
    console.log("Ada error");
    console.log("plis masukan tipe data string");
  }
}

teriak("Hello World");

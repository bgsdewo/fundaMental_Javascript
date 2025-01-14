//Mengatur Default Value Pada Function
//nilai yg digunakan saat fungsi dipanggil tapi tidak diberi nilai argument yg tidak
//diperlukan

function sapa(nama = "Bagus", msg = "Apa kabar?") {
  console.log(`Hello ${nama} , ${msg} `);
}

sapa();

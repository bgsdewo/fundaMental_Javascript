//function bernilai balik function

function hasilnyaAdalahFunction() {
  const random = Math.random();
  if (random < 0.5) {
    return function () {
      console.log("Hasilnya kurang dari 0.5");
    };
  } else {
    return function () {
      console.log("Hasilnya lebih dari 0.5");
    };
  }
}

const hasil = hasilnyaAdalahFunction();

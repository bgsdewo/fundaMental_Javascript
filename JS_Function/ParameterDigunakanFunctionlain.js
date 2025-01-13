//function sebagai argumen

function duaKali(func) {
  func();
  func();
}

function lemparDadu() {
  const hasil = Math.floor(Math.random() * 6) + 1;
  console.log("Dadu telah dilempar...", hasil);
}

duaKali(lemparDadu);

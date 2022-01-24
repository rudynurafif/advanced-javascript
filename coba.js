function jumlahkanAngka() {
  let jumlah = 0;
  for(a of arguments) {
    jumlah += a;
  }
  return jumlah;
}
console.log(jumlahkanAngka(1, 2, 3, 4, 5));
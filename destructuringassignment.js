/*

DESTRUCTURING ASSIGNMENT
"adalah expression pada javascript yang membuat kita dapat Membongkar nilai pada Array atau properti dari Bbject ke dalam Variabel yang terpisah"

*/

// ARRAY
// const coba = ['satu', 'dua', 'tiga'];
// const [a, b, c] = coba;
// console.log(a); // satu
// console.log(b); // dua
// console.log(c); // tiga

// OBJECT
// const mhs = {
//   nama: 'Rudy Nurafif',
//   umur: 23,
//   email: 'rudynurafif@gmail.com'
// }
// const {nama, umur, email} = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);

// Destructuring Variabel / Assignment

// Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'Rudy Nurafif'];

// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a] // destructuring yang menukar
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);
// console.log(b);

// Rest Parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);


// DESTRUCTURING OBJECT
// const mhs = {
//   nama: "Rudy Nurafif",
//   umur: 23,
// };
// const { nama, umur } = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({ nama, umur } = { nama: "Rudy Nurafif", umur: 23 });
// console.log(nama);

// Assign ke variabel baru
// const mhs = {
//   nama: "Rudy Nurafif",
//   umur: 23,
// };
// const { nama: n, umur: u } = mhs;
// console.log(u);

// Memberikan Default Value
// const mhs = {
//   nama: "Rudy Nurafif",
//   umur: 23,
//   email: 'rudynurafif@gmail.com'
// };
// const { nama, umur, email = 'email@default.com'} = mhs;
// console.log(email);

// Memberikan default value + assign ke variabel baru
// const mhs = {
//   nama: "Rudy Nurafif",
//   umur: 23,
//   email: 'rudynurafif@gmail.com'
// };
// const { nama: n, umur: u, email: e = 'email@default.com' } = mhs;
// console.log(e);

// Rest Parameter
// const mhs = {
//   nama: "Rudy Nurafif",
//   umur: 23,
//   email: 'rudynurafif@gmail.com'
// };
// const { nama, ...values} = mhs;
// console.log(values);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//   id: 123,
//   nama: "Rudy Nurafif",
//   umur: 23,
//   email: 'rudynurafif@gmail.com'
// };
// function getPropertyMhs ({id}) {
//   return id;
// }
// console.log(getPropertyMhs(mhs));


// ========================================================================

// DESTRUCTURING IMPLEMENTATION

// 1 Destructuring function return value

// function kalkulasi(a,b) {
//   return [a + b, a - b, a * b, a / b]; // urutan berpengaruh
// }
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// console.log(bagi);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b
//   } // urutan tidak berpengaruh pada destructuring objnya
// }
// const {bagi, tambah, kali, kurang} = kalkulasi(2, 3);
// console.log(kurang);


// 2 Destructuring function arguments
// const mhs1 = {
//   nama: "Rudy Nurafif",
//   umur: 23,
//   email: 'rudynurafif@gmail.com',
//   nilai: {
//     tugas: 80,
//     uts: 85,
//     uas: 75
//   }
// }
// function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}) {
//   return `Halo, nama saya ${nama}. Saya berumur ${umur} tahun. Nilai uas saya adalah ${uas}.`
// }
// console.log(cetakMhs(mhs1));
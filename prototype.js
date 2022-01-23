// Cara untuk membuat object pada js

// // 1. Object literal
// problem, tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//   nama: 'Rudy Nurafif',
//   energi: 10,
//   makan: function(porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Selamat makan ${this.nama}`);
//   }
// }
// let mahasiswa2 = {
//   nama: 'Bastian Nurafif',
//   energi: 10,
//   makan: function(porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Selamat makan ${this.nama}`);
//   }
// }

// 2. Function Declaration
// edited
// const methodMahasiswa = {
//   makan: function(porsi) { // method, property memiliki value function
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
//   main: function(jam) { // method
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   },
//   tidur: function(jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur!`);
//   }
// };
// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }
// let rudy = Mahasiswa('Rudy', 10);
// let nurafif = Mahasiswa('Nurafif', 20);

// Prototypal inheritance
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }
// Mahasiswa.prototype.makan = function(porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan!`;
// }
// Mahasiswa.prototype.main = function(jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, selamat main!`;
// }
// Mahasiswa.prototype.tidur = function(jam) {
//   this.energi += jam*2;
//   return `Halo ${this.nama}, selamat tidur`;
// }
// let rudy = new Mahasiswa('Rudy', 10);

// versi class
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
//   }

//   main(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat main!`;
//   }

//   tidur(jam) {
//     this.energi += jam*2;
//     return `Halo ${this.nama}, selamat tidur`;
//   }
// }
// let rudy = new Mahasiswa('Rudy', 10);
// let nurafif = new Mahasiswa('Nurafif', 20);




// 3. Constructor Function
// menggunakan keyword new
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function(porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   }

//   this.main = function(jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   }
// }
// let rudy = new Mahasiswa('Rudy', 10);

// 4. Object.create
// di nomor 2

// ==================================================================
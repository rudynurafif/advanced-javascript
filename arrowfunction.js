/*

Dalam JS umumnya ada dua cara dalam membuat function, diantaranya function declaration dan function expression.

Ada cara lain dalam membuat function di js yaitu dgn menggunakan arrow function. Bentuk lain yang lebih ringkas dari function expression.

Function Expression = 
let tampilPesan = function(nama) {
  alert('halo' + nama);
}
tampilPesan('Rudy');

Arrow Function =
let tampilPesan = (nama) => {
  alert('halo' + nama);
}
tampilPesan('Rudy');

*/

// Function Expression
// const tampilNama = function(nama) {
//   return `Halo, ${nama}`;
// }
// console.log(tampilNama('Rudy'));

// Arrow Function
// const tampilPesan = (nama) => { return `Halo, ${nama}`; }
// console.log(tampilPesan('Wakwaw'));

// const tampilNama = (nama, waktu) => {
//   return `Halo ${nama}, selamat ${waktu}`;
// }
// console.log(tampilNama('Rudy', 'Malam'));

// implisit return
// const tampilPesan = nama => `Halo, ${nama}`
// console.log(tampilPesan('Wakwaw'));

// tanpa parameter
// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

// let mahasiswa = ['Rudy', 'Asa', 'Nurafif'];

// let jumlahHuruf = mahasiswa.map(function(nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length }));
// console.table(jumlahHuruf);

// ======================================================================

// Konsep this pada arrow function

// Constructor function
// const Mahasiswa = function() {
//   this.nama = 'Rudy';
//   this.umur = '23';
//   this.sayHello = function()  {
//     console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`);
//   }
// }
// const rudy = new Mahasiswa();

// Arrow function
// const Mahasiswa = function() {
//   this.nama = 'Rudy';
//   this.umur = '23';
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`);
//   }
// }
// const rudy = new Mahasiswa();

// Object Literal
// const mhs1 = {
//   nama: 'Rudy',
//   umur: 23,
//   sayHello : () =>  {
//     console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`);
//   }
// }

// const Mahasiswa = function() {
//   this.nama = 'Rudy';
//   this.umur = '23';
//   this.sayHello = function()  {
//     console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`);
//   }

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500)

// }
// const rudy = new Mahasiswa();


const box = document.querySelector('.box');
box.addEventListener('click', function() {
  let satu = 'size';
  let dua = 'caption';

  if(this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
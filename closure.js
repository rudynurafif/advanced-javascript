/*

Pengantar
Execution context, hoisting, scope

2 fase pada execution context
----------------------------------
1. creation
2. execution

Closure di bagian bawah

*/

// console.log(nama);
// var nama = 'Rudy Nurafif';

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase

// function membuat local execution context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = 'Rudy Nurafif';
// var username = 'rudynurafif';

// function cetakURL(username) {
//   var instagramURL = 'http://instagram.com/';
//   return instagramURL + username;
// }

// console.log(cetakURL(username));

// function a() {
//   console.log('ini a');

//   function b() {
//     console.log('ini b');

//     function c() {
//       console.log('ini c');
//     }
//     c();
//   }
//   b();
// }
// a();

// function satu() {
//   var nama = "Rudy";
//   console.log(nama);
// }
// function dua() {
//   console.log(nama);
// }
// console.log(nama);
// var nama = "Asa";
// satu();
// dua('Nurafif');
// console.log(nama);

// =========================================================

/*
Closure
"merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut"
"adalah sebuah function ketika memiliki akses ke parent scope-nya, meskipun parent socpe nya sudah selesai dieksekusi"
"adalah sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat ia diciptakan"
"adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain"

Kenapa closure?
- untuk membuat function factory
- untuk membuat private method

*/

// function init() {
//   return function(nama) {
//     console.log(nama);
//   }
// }
// let panggilNama = init();
// panggilNama('Rudy');

// function ucapkanSalam(waktu) {
//   return function(nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Rudy');
// selamatMalam('Nurafif');

let add = (function() {
  let counter = 0;
  return function() {
    return ++counter;
  }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
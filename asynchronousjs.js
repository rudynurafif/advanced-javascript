/*

Asynchronus Javascript
----------------------------
* Callback
* Promise
* ajax
* Async & Await

Javascript is a single-threaded non-blocking, asynchronus and concurrent language.
  Thread = urutan eksekusi kode yang dapat dilakukan secara bebas / independent satu sama lain. Satu baris kode dilakukan pada satu waktu.
  Non-Blocking = Ketika task-1 sudah dijalankan tapi belum selesai, bisa mengerjakan task-2, dan selanjutnya
  Asynchronus = Mengerjakan task secara pindah pindah
  Concurrent = Asynchronus + single-threaded

  * Single vs Multi-thread
    Lingkungan eksekusi 'task
  * Blocking vs non-blocking
    Teknik 'ngoding' (IO related)
  * Synchronous vs Asynchronous
    Teknik 'ngoding' (HTTP Request related)
  * Concurrent vs Parallel
    Lingkungan eksekusi 'task'

  Javascript V8 Engine

  "dont block the event loop"

*/

/*

Callback
"adalah sebuah function yang dikirimkan sebagai parameter pada function yang lain"
"adalah function yang dieksekusi setelah fungsi lain selesai dijalankan"

*/
// Callback
// Synchronous Callback
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }
// function tampilkanPesan(callback) {
//   const nama = prompt('Masukkan Nama : ');
//   callback(nama);
// }
// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// Asnychronous Callback
// vanillaJS
// function getDataProducts(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4) {
//       if(xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   }
//   xhr.open('get', url);
//   xhr.send();
// }
// console.log('mulai');
// getDataProducts('data/products.json', results => {
//   const product = JSON.parse(results);
//   product.forEach(p => console.log(p.name));
// }, () => {

// });
// console.log('selesai');

// JQuery
// console.log('mulai');
// $.ajax({
//   url: 'data/products.json',
//   success: (product) => {
//     product.forEach( p => console.log(p.name));
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   }
// });
// console.log('selesai');


/*

Callback
"Function yang dikirimkan sebagai parameter pada function yang lain"
"Function yang dieksekusi setelah fungsi lain setelah dijalankan"

*/

// // Synchronous callback
// function halo(nama) {
//   alert(`Halo, ${nama}!`);
// }
// function tampilkanPesan(callback) {
//   const nama = prompt('Masukkan nama : ')
//   callback(nama);
// }
// tampilkanPesan(nama => alert(`Halo ${nama}!`));


// // Asynchronous callback
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function() {
//     if( xhr.readyState === 4 ) {
//       if( xhr.status === 200) {
//         success(xhr.response)
//       } else if( xhr.status === 404 ) {
//         error()
//       }
//     }
//   }

//   xhr.open('get', url);
//   xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('../data/products.json', result => {
//   // console.log(JSON.parse(result));
//   const product = JSON.parse(result);
//   product.forEach(p => console.log(p.name))
// }, () => {

// });
// console.log('selesai');


// JQuery
console.log('mulai');
$.ajax({
  url: '../data/products.json',
  success: (product) => {
    // console.log(product);
    product.forEach(m => console.log(m.name))
  },
  error: (e) => {
    console.log(e.responseText);
  }
})
console.log('selesai');
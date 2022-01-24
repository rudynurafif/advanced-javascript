/*

Higher Order Function adalah function yang beroperasi pada function yang lain. Baik itu digunakan dalam Argument, maupun sebagai Return Value.

Function yang utama disebut Higher Order Function, dan function yang digunakan sebagai parameter dalam function utama / HOF tsbt disebut callback

First Class Function

Javascript memperlakukan function sebagai object

Mengapa harus HOF? Untuk abstraksi, agar kode dapat lebih sederhana.

Functional Programming

*/

// Apa itu HOF dan perilakunya?

function ucapkanSalam(waktu) {
  return function(nama) {
    console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
  }
}
let selamatMalam = ucapkanSalam('Malam');
console.log(selamatMalam('Rudy'));

function repeat(n, action) {
  for (let i = 1; i <= n; i++) {
    action(i);
  }
}
repeat(10, console.log);
repeat(3, alert);

// ====================================================================

// 3 contoh dari HOF yang sering digunakan
Array.prototype.filter()
Array.prototype.map()
Array.prototype.reduce()

// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// for
// const newAngka = [];
// for(let i = 0; i < angka.length; i++) {
//   if(angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// FILTER
// mencari angka >= 3
// const newAngka = angka.filter( a => a >= 3 );
// console.log(newAngka);

// MAP
// kalikan setiap elemen dgn 2
// const newAngka = angka.map(a => a*2);
// console.log(angka);
// console.log(newAngka);

// REDUCE
// jumlahkan seluruh elemen pada array
// newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

// METHOD CHAINING
// Cari angka > 5
// Kalikan 3
// jumlahkan
// const hasil = angka.filter(a => a > 5) // 8,9,9
//   .map(a => a * 3) // 24,27,27
  // .map(a => a / 2) // boleh ada lebih dari 1 map/filter/reduce pada chaining
//   .reduce((acc, cur) => acc+cur);
// console.log(hasil);

//=====================================================================

// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih yang hanya 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing masing video
  .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
  .map(waktu => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
  })

// jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
  const jam = Math.floor(jsLanjut / 3600);
  jsLanjut = jsLanjut - jam * 3600;
  const menit = Math.floor(jsLanjut / 60);
  const detik = jsLanjut - menit * 60;

// simpan di DOM
 const pDurasi = document.querySelector('.total-durasi');
 pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`
 const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
 const pJmlVideo = document.querySelector('.jumlah-video');
 pJmlVideo.textContent = `${jmlVideo} Video.`


console.log(jmlVideo);
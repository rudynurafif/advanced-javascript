/*

Spread Operator
"Memecah (expand/unpack) iterables menjadi single element"

*/

// // Spread Operator
const mhs = ['Rudy', 'Asa', 'Nurafif'];
console.log(...mhs[0]); // R u d y

// // Menggabungkan 2 atau lebih array
const mhs = ['Rudy', 'Asa', 'Nurafif'];
const dosen = ['Indra', 'Herman', 'Budi'];
// const orang = mhs.concat(dosen);
const orang = [...mhs, 'Aji', ...dosen];
console.log(orang); // [mhs, dosen] (digabung)

// meng-copy array
const mhs = ['Rudy', 'Asa', 'Nurafif'];
const mhs1 = [...mhs] // mengcopy
mhs1[0] = 'Budi'; // Mengganti
console.log(mhs1); // ['Budi', 'Asa', 'Nurafif']

const liMhs = document.querySelectorAll('li');
const mhs = [...liMhs].map(m => m.textContent);
console.log(mhs); // ['Rudy', 'Asa', 'Nurafif']

// ======================================================================

const name = document.querySelector('.name');
const huruf = [...name.textContent].map(h => `<span>${h}</span>`).join('');
name.innerHTML = huruf
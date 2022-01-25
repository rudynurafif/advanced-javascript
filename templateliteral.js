/*

Template Literal atau Template String
"adalah string literal yang memungkinkan adanya expression didalamnya"

Pakai back-tick
Multi-line String
Embedded Expression
HTML Fragments
Expression Interpolation
Tagged Template

*/

`string text` // single-line string

`string text baris 1
string text baris 1
string text baris 1` // multi-line string

`string text ${expression} string text` // embedded expression

tag `string text ${expression} string text` // tagged template

console.log(`string 1
string 2`);

// Template Literals
const nama = 'Rudy';
const umur = 23;
console.log(`Halo, nama saya ${nama}, dan saya berumur ${umur} tahun.`);

// Embedded Expression
console.log(`${1+1}`);
console.log(`${alert('halo!')}`);
const x = 11;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// ====================================================================
/*
LATIHAN PENERAPAN REAL
*/
// 1 HTML Fragments
const mhs = {
  nama: 'Rudy Nurafif',
  umur: 23,
  nim: 'C24150083',
  email: 'rudynurafif@gmail.com'
};
const el = `<div class="mhs">
              <h2>${mhs.nama}</h2>
              <span class="nrp">${mhs.nim}</span>  
            </div>`;

// 2 Looping
const mhs = [
  {
    nama: "Rudy Nurafif",
    email: "rudynurafif@gmail.com"
  },
  {
    nama: "Bastian",
    email: "bastian@gmail.com"
  },
  {
    nama: "Mamang",
    email: "mamang@gmail.com"
  }
];

const el = `<div class="mhs">
              ${mhs.map(m => `<ul>
                <li>${m.nama}</li>
                <li>${m.email}</li>
              </ul>`).join('')}
            </div>`

// 3 Conditional
// ternary
const lagu = {
  judul: 'Kau Adalah',
  penyanyi: 'Sule Prikitiw',
  // feat: 'Rayi Putra'
}

const el = `<div class="lagu">
              <ul>
                <li>${lagu.penyanyi}</li>
                <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : `` } </li>
              </ul>
            </div>`;

// 4 Nested
// HTML Fragments Bersarang
const mhs = {
  nama: 'Rudy',
  semester: 5,
  mataKuliah: ['Rekayasa Web', 'Pengantar Pancasila', 'Pemrograman Sistem Interaktif', 'Perancangan Sistem Berorientasi Object'
]
};

function cetakMataKuliah(mataKuliah) {
  return `
  <ol>
    ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
  </ol>
  `;
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="semester">Semester ${mhs.semester}</span>
  <h4>Mata Kuliah :</h4>
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;

// ======================================================================
/*

TAGGED TEMPLATE LITERALS
"Bentuk yang lebih kompleks dari Template Literals, memungkinkan kita untuk membaca template literals melalui sebuah function"

* Escaping HTML Tags
* Translation & Internationalization
* Styled Components

*/
const nama = 'Rudy Nurafif';
const umur = 23;

function coba(strings, ...values) {
  // let result = '';
  // strings.forEach((str, i) => {
  //   result += `${str}${values[i] || ''}`;
  // });
  // return result;

  return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}

const str = coba`Nama saya ${nama}, umur saya ${umur} tahun.`;
console.log(str);

// Highlight
const nama = 'Rudy Nurafif';
const umur = 23;
const email = 'rudynurafif@gmail.com';

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Nama saya ${nama}, umur saya ${umur} tahun. Email saya adalah ${email}.`;
document.body.innerHTML = str;


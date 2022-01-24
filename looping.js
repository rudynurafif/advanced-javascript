/*

For..of dan For..in

for..of : "creates a loop iterating over iterable object"
Iterable Object:
- String
- Array
- Arguments / NodeList
- TypedArray
- Map
- Set
- User-defined Iterables

for..in : "creates a loop only iterating over enumerable"

*/

// for..of

// array
const mhs = ['Rudy', 'Asa', 'Nurafif'];
for(const m of mhs) {
  console.log(m);
}

// string
const nama = 'Rudy';
for( const n of nama ) {
  console.log(n);
}

const mhs = ['Rudy', 'Asa', 'Nurafif'];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i}`);
// });
for(const [i, m] of mhs.entries()) {
  console.log(`${m} adalah mahasiswa ke-${i}`);
}

// nodeList
const liNama = document.querySelectorAll('.nama');
// liNama.forEach(n => console.log(n.textContent));
for (n of liNama) {
  console.log(n.innerHTML);
}

// Arguments
function jumlahkanAngka() {
  let jumlah = 0;
  for(a of arguments) {
    jumlah += a;
  }
  return jumlah;
}
console.log(jumlahkanAngka(1, 2, 3, 4, 5)); // 15


// for..in
const mhs = {
  nama: 'Rudy',
  umur: 23,
  email: 'rudynurafif@gmail.com'
}
for (m in mhs) {
  console.log(m);
  // console.log(mhs[m]);
}

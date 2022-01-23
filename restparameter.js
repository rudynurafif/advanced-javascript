/*

Rest Parameter
"Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array"

*/

// function myFunc() {
  // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
  // return myArgs; // (parameternya ...myArgs)
  // return Array.from(arguments); // memaksa obj menjadi array
  // return [...arguments]; // spread operator
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
  // let total = 0;
  // for(a of angka) {
  //   total += a;
  // }
  // return total;

  // return angka.reduce((a, b) => a + b)
// }
// console.log(jumlahkan(1,2,3,4,5));

// Array Destructuring
// const kelompok1 = ['Rudy', 'Budi', 'Joko-kun', 'Mega-chan', 'LBP-god'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// Object Destructuring
// const team = {
//   pm: 'Rudy',
//   fe1: 'Asa',
//   fe2: 'Nurafif',
//   be: 'Maman',
//   ux: 'Joko',
//   do: 'Mega'
// }
// const {pm, ...myTeam} = team;
// console.log(myTeam);

// Filtering
// function filterBy(type, ...values) {
//   return values.filter(v => typeof v === type)
// }
// console.log(filterBy('boolean', 1, 2, 'Rudy', true, 10, 'Nurafif', false));
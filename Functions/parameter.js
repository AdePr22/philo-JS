/*                  --Mengenal parameters di JS 
 --Parameter adalah variable yang ditulis di dalam kurung pada saat function dibuat
 digunakan untuk menampung nilai yang dikirimkan saat function dipanggil.
*/

// TOD contoh dalam bentuk function
function tambah(a, b) {
  return a + b;
}
// let hasil = tambah(1, 2);
// tambah(3, 2);
// console.log(hasil);

// Mengisikan argumen dapat dilakukan dengan berbagai cara,pak dika mencontohkan
// dengan function
let a = parseInt(prompt(`Masukan nilai`));
let b = parseInt(prompt(`Masukan nilai`));
let hasil = tambah(a, b);
console.log(hasil);
console.log(tambah());

/*Belajar object di js */

// Membuat object literal
let mahasiswa = {
  nama: "hamid",
  umur: 34,
  fakultas: "ekonomi",
  ipS: [3.4, 4, 2.3, 3.3, 3.5],
  ipK: function () {
    let total = 0;
    var ips = this.ipS;
    for (var i = 0; i < this.ipS.length; i++) {
      total += ips[i];
    }
    return total / this.ipS.length;
  },
};
console.log(mahasiswa);
console.log(mahasiswa.nama);

//membuat object literal di js
var Teknisi = {
  property: "properties",
};
console.log(Teknisi.property);

// Membuat object dengan function declaration
let objekKaryawan = function (nama, umur, divisi, gaji) {
  let karya = {};
  karya.nama = nama;
  karya.umur = umur;
  karya.divisi = divisi;
  karya.gaji = gaji;
  return karya;
};
const karyawan1 = objekKaryawan("thomas", 23, "hrd", 6_000_000);
console.log(karyawan1.gaji);

// Membuat object dengan constructor fuunction
function Karyawan(nama, umur, divisi, gaji) {
  this.nama = nama;
  this.umur = umur;
  this.divisi = divisi;
  this.gaji = gaji;
}
let karyawan2 = new Karyawan("antonio", 23, "hrd", 6_000_000);
console.log(karyawan2.divisi);
console.log(karyawan2.umur);

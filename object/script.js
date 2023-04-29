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

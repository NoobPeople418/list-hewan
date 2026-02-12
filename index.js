import { jenisHewan } from "./list-jenis-hewan";
import { namaHewan } from "./list-hewan";

const dataLengkap = namaHewan.map((nama, index) => {
  return {
    nama: nama,
    jenis: jenisHewan[index]
  };
});

dataLengkap.map((hewan) => {
  console.log(`Hewan ${hewan.nama}`);
});
dataLengkap.map((hewan) => {
  console.log(`jenis: ${hewan.jenis}`);
});


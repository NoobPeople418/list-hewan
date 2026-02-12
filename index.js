import { jenisHewan } from "./list-jenis-hewan";
import { namaHewan } from "./list-hewan";

namaHewan.map((nama) => {
  console.log(`Hewan: ${nama}`);
});
jenisHewan.map((jenis) => {
  console.log(`Kategorinya: ${jenis}`);
});


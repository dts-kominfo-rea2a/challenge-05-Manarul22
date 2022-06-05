const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (list, funcSort) => {
  sortList = funcSort(list);

  let data = [];
  for (let counter = 0; counter < sortList.length; counter++) {
    data.push(`${counter + 1}. ${names[counter]}`);
  }
  return data;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (arr) => arr.sort();

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (arr) =>
  arr.sort().reverse()(
    // ! JANGAN DIMODIFIKASI
    function main() {
      console.log(sorter?.(names, sortAscending)?.join("\n"));
      console.log(sorter?.(names, sortDescending)?.join("\n"));
    }
  )();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};

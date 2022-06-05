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
    let dataLoop = "";
    dataLoop += i + 1 + ". " + sortList[i];
    data.push(dataLoop);
  }
  return data;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (list) => {
  let dataList = list.sort();
  return dataList;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (list) => {
  let dataList = list.sort().reverse();
  return dataList;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};

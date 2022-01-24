
const orang = {};

//menambah atau menghapus
orang["nama"] = "laludonisetiawan";
orang["alamat"] = "lombok tengah";
orang["umur"] = 20;

console.info(`nama : ${orang.nama}`);
console.info(`alamat : ${orang.alamat}`);
console.info(`umur : ${orang.umur}`);


console.table(orang);
delete orang["umur"];
console.table(orang);

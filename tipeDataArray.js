
const Names = [];
Names.push("Lalu");
Names.push("Doni", "Setiawan");
Names.push("joko", "kewer", "solihin", "sodikin");
console.table(Names);

//merubah data
Names[0] = ("Asep");
console.table(Names);

//menghapus data
delete Names[4];
console.table(Names);

//menambahkan data lagi ke index yang sudah di hapus sebelumnya
Names[4] = "BAPACK UDIN";
console.table(Names);

//menambahkan array di dalam array 
Names.push(["A", "B", "C", "D"]);
console.table(Names);


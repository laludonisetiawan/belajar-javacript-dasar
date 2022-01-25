// suatu tipe data atau variable yang belum di definisikan

// contoh variable yang tidak memiliki nilai 
let name;
if (name === undefined) {
    console.info("variable UNDEFINED");
} else {
    console.info("variable DEFINED");
}

// contoh undefined pada array
const names = ["lalu", "doni"];

if (names[2] === undefined) {
    console.info(" ARRAY UNDEFINED");
} else {
    console.info("ARRAY DEFINED");
}

//contoh undefined pada objek

const orang = {};
if (orang.name === undefined) {
    console.info("OBJEK UNDEFINED");

} else {
    console.info("OBJEK DEFINED");
}
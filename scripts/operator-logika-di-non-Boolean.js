/* Sebelumnya kita sudah tahu bahwa operator logika AND (&&) dan OR (||)  digunakan untuk dua data boolean
Namun berbeda di JavaScript, kita bisa menggunakan operator logika AND dan OR untuk tipe data non boolean
 */





// Logika OR || di operator non boolean
console.info("hello" || ""); //hello
console.info("" || []); // []
console.info("0" || "NOL");// "0"
console.info(0 || "NOL");// NOLL
console.info(null || "NUL");// NULL
console.info(undefined || "UNDEFINED");// NULL

//CONTOH KASUS
const orang = {
    firstName: "",
    lastName: "Doni"
};

const nama = orang.firstName || orang.lastName;
console.info(nama);

//logika AND && di operator non boolean
console.info("hello" && "hi"); // ""Jika tidak ada satupun yang bernilai falsy, maka yang terakhir yang akan diambil
console.info("" && []); // "" 
console.info("0" && "NOL");// "NOL" 
console.info(0 && "NOL");// 0
console.info(null && "NUL");// null
console.info(undefined && "UNDEFINED");//undefined 
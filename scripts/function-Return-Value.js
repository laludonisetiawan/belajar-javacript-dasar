/* 
secara default, function itu tidak menghasilkan value apapun, namun jika kita ingin, kita bisa membuat sebuah function mengembalikan value
agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return di dalam function nya
dan di dalam block functio, untuk menghasilkan nilai tersebut, kita harus menggunakan kata kunci return, lalu diikuti dengan data yang ingin kita hasilkan.
function hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa data sekaligus, kita bisa menggunakan Array Sebagai return value nya
*/

//membuat function pada javascript
function sayHello(lastName, firstName) {
    // membuat variable
    const say = `${firstName} ${lastName}`;
    return say;

}

// panggil function sayhello 
const result = sayHello("lalu", "karta");
document.writeln(`hello ${result}`);


// membuat function hitung nilai pada javascript

function hasilUjian(value) {
    // membuat logic
    if (value > 90) {
        return "A";
    } else if (value > 80) {
        return "B";
    } else if (value > 70) {
        return "C";
    } else if (value > 60) {
        return "D";
    } else {
        return "E";
    }
}

//kita akan mengambil nilai kembalian dari function hasil ujian

const hasil = hasilUjian(9); // 95 merupakan contoh nilai yang saya peroleh selama mengikuti ujian wkwkwkwk anak tolol
document.writeln(`<p> Nilai kamu adalah : ${hasil} </p>`);


// menghentikan eksekusi dengan return 

function isContains(array, searchValue) {
    for (const element of array) {
        if (element === searchValue) {
            return true;
        }
    }
    return false;
}

// mencari
const array = [1, 21, 53, 43, 23, 65, 75, 86];
const search = 1; // true
const found = isContains(array, search);
document.writeln(`<p> ${found} </p>`);
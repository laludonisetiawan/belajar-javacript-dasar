/* 
- tidak ada batasan dimana kita bisa membuat function.
- termasuk jika kita ingin membuat function di dalam sebuah function, kita bisa melakukannya
- function yang tedapat di dalam, kita sebut inner function.
- inner function hanya bisa diakses di tempat kita membuat function nya, tidak bisa diakses dari luar function nya
*/


// contoh
function outer() {

    //function di dalam function
    function inner() {
        document.writeln("inner");
    }

    //pemanggilan di dalam functionnya
    inner();
}
outer();

// memanggil function inner di luar functionnya
// inner(); // ERROR can not acces inner function
/* 
arrow function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya.
- namun terdapat limitasi dan juga tidak bisa di gunakan di semua situasi
- dinamakan arrow function  karena menggunakan tanda =>(seperti panah).
- berikut beberapa kekurangan arrow function:
    - tidak memiliki fitur arguments object
    - tidak bisa menggunakan function generator 
    - tidak bisa mengakses this (yang nanti akan di bahas di function di object)
    - tidak bisa mengakses super (yang nanti akan di bahas di javascript Object Oriented Programming)
*/

const sayHello = (name) => {
    const say = `hello ${name} ini adalah arrow function`;
    console.info(say);
}

sayHello("doni");


/* 
arrow function tanpa blok 
    - jika sebuah arrow function isinya sederhana, misal hanya satu baris 
    - kita bisa membuat arrow function tanpa harus menggunakan block
 */

const sapa = (nama) => console.info(`hello ${nama} ini adalah arrow function tanpa block`);
sapa("doni");


/* 
- arrow function bisa mengembalikan value, sama seperti function biasanya
- jika menggunakan block, maka kita perlu menggunakan kata kunci return
- jika tidak menggunakan block, kita perlu menggunakan kata kunci return
*/

const sum = (first, second) => first + second;
console.info(sum(10, 10));


/* 
- arrow function sebagai parameter
- karena arrow function sama seperti anonymous function
- jadi kita juga bisa menggunakan arrow function sebagai parameter di function lain
*/

function giveMeName(callback) {
    callback("doni");
}

giveMeName((name) => console.info(`hello ${name} ini adalah arrow function sebagai parameter`));

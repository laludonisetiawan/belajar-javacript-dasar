/* 
- pada tipedata object, kita sudah membahas tentang property di object
- karena sebenarnya function juga merupakan salah satu tipe data, jadi function pun sebeneranya bisa di tambahkan sebagai property di object.
- cara pembuatannya pun sama dengan function sebagai value
- function di object kadang di sebut juga sebagai object method.
*/

//contoh 

// const person = {
//     name: "doni",
//     sayHello: function (name) {
//         alert(`hello ${name}`);
//     }
// }
// person.sayHello('udin');



//cara kedua kalo kita sudah terlanjur membuat objectnya

const person = {
    name: "doni"
};

person.sayHello = function (name) {
    alert(`hello ${name}`);
}

person.sayHello('asep');
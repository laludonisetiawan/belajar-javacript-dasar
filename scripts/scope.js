/* 
- scope merupakan area akses sebuah data
- ada dua jenis scope, global scope dan local scope.
- setiap kita membuat function, maka kita akan membuat local scope untuk function tersebut
- data di global scope bisa diakses dari local scope, namun data di local scope hanya bisa di akses di localscope tersebut atau di scope local dibawahnya(dalam kasus function di dalam function).
*/

//global scope
let counter = 0;
function hitMe() {
    // local scope hitMe
    counter++; // we can access
}

hitMe();
hitMe();

console.info(counter);



// local scope
function first() {
    let firstVariable = "hasil di dalam local scope first";
    document.writeln(`<p> ${firstVariable} </p>`);
}

function second() {
    let secondVariable = "hasil di dalam local scope second";
    document.writeln(`<p> ${secondVariable} </p>`);
}
first();
second();



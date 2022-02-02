/* 
Function tidak hanya bisa digunakan sebagai kode program yang dieksekusi, tapi bisa juga sebagai value
Artinya, function bisa disimpan di variable, bisa juga dikirim melalui parameter ke function lainnya

*/

function sayHello(name) {
    document.writeln(`<p>hello ${name} </p>`);
}

let say = sayHello;

sayHello("Eko");
say("budi");
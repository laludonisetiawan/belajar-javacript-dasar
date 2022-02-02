/* 
Jika For In digunakan untuk melakukan iterasi property atau index, berbeda dengan For Of, ini digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti Array, String dan lain-lain
For of tidak bisa digunakan untuk melakukan iterasi data di object, karena object bukanlah iterable.

*/

const names = ["lalu", "doni", "setiawan"];

for (const name of names) {
    document.writeln(`<p> ${name} </p>`);
}

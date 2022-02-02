/* 
Rest Parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyak nya pada satu parameter, dan secara otomatis akan di konversi menjadi Array
Untuk membuat rest parameter, ada ketentuannya
Rest parameter hanya boleh ada satu di function, tidak boleh lebih dari satu
Rest parameter hanya boleh berada di posisi paling akhir, tidak boleh di depan atau di tengah, kecuali memang cuma ada 1 parameter
Di bahasa pemrograman lain, ada juga yang bilang ini adalah variable argument

*/

function sum(name, ...data) {
    let total = 0
    for (const item of data) {
        total += item;
    }
    console.info(`total ${name} is ${total}`);
}

sum(`orange`, 1, 2, 3, 4, 5, 6, 7, 8, 9);
sum(`apple`, 11, 22, 33, 44, 55, 66);
sum(`banana`, 2121, 343, 5454, 656, 7, 777, 0, 87);

/* 
kadang kita terlanjur memiliki data berupa array
tapi untungnya kita juga bisa mengirim array ke rest parameter
kita bisa gunakan ...(titik tiga kali ) di ikuti dengan arraynya ketika memanggil function
fitur ini di namakan spread syntax
*/
//spread syntax di rest parameter
sum(`watermelon`, ...[21, 21, 232, 43, 4354, 545, 46, 5, 6, 56, 2]);

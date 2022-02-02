/* 
- function generator adalah function yang di buat untuk membuat data generator.
- generator adalah data yang bisa di interasi seperti array.
- untuk membuat function generator, kita perlu menggunakan tanda *(bintang) setelah kata function.
- dan untuk mengembalikan data di tiap iterasi, kita bisa gunakan kata kunci yield diikuti datanya.
*/

function* createNames() {
    yield "lalu"; // yield di gunakan untuk mengembalikan data bukan menggunakan return.
    yield "doni";
    yield "setiawan";
}

const names = createNames();
//melakukan iterasi pada generator 
for (const name of names) {
    console.log(name);
}


// function generator yang lebih kompleks

function* buatGanjil(value) {
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            yield i;
        }
    }
}

const angkaGanjil = buatGanjil(100);
for (const angka of angkaGanjil) {
    console.info(angka);
}
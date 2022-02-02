/* 
- getter dan setter adalah kemampuan membuat function yang berbeda untuk mengambil data (getter) dan mengubah data (setter) pada sebuah property di object.
- dengan menggunakan getter dan setter, kita bisa melakukan hal apapun dalam function sebelum sebuah property di akses atau diubah, misal menambah validasi dan lain-lain.
*/

//contoh

const person = {
    firtsName: "lalu",
    lastName: "doni",
    get fullName() {
        return `hello ${this.firtsName} ${this.lastName} ini adalah contoh getter dan setter pada javascript`;
    },
    // setter mengubah data
    set fullName(value) {
        const array = value.split(" ");
        this.firtsName = array[0];
        this.lastName = array[1];
    }

};

person.fullName = "lalu doni";
console.table(person);

person.fullName = "isan abadi";
console.table(person);

person.fullName = "lalu adi";
console.table(person);

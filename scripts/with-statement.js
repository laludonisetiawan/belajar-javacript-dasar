/* 
With statement merupakan fitur yang digunakan untuk menurunkan sebuah scope data
Dengan menggunakan with statement, kita bisa mengakses property dalam sebuah data tanpa harus menyebut datanya

*/

//tidak di rekomendasikan menggunakan metode ini 


const mahasiswa = {
    nama: "lalu doni setiawan",
    nim: 1901010212,
    jurusan: "teknik informatika"
}

with (mahasiswa) {
    console.info(nama);
    console.info(nim);
    console.info(jurusan);
}

/* 
Walaupun fitur with statement ini sangat menarik
Namun kebanyakan orang tidak merekomendasikan penggunaan with statement
Hal ini dikarenakan with statement kadang membuat sebuah kode menjadi ambigu

*/
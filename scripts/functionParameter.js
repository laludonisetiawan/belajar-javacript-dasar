/* 
kita bisa mengirim informasi ke function yang ingin kita panggil
untuk melakukan hal tersebut, kita perlu menambahkan parameter atau argument di function yang sudah kita buat 
parameter di tempatkan di dalam kurung () dideklarasi method
parameter bisa lebih dari satu, jika lebih dari satu, harus dipisah menggunakan tanda koma
*/

// membuat function dengan parameter

function sayHello(firstName, lastName) {
    document.writeln(`<p> hello ${firstName}, ${lastName} </p>`);
}

// pemanggilan function 

sayHello("Lalu", "Doni");
sayHello("mas", "udin");
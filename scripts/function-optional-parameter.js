/* 
Secara default, parameter di function itu optional
Artinya kita tidak wajib mengisi value nya ketika memanggil function
Jika tidak ada value yang kita kirim ke parameter ketika memanggil function, maka secara otomatis parameter tersebut bernilai undefined

*/

function sayHello(firstName, middleName, lastName) {
    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
}

sayHello("doni");
sayHello("doni", "seti", "awan");


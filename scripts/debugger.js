/* 
- debugger digunakan untuk melakukan proses debugging
- debugging adalah proses mencari bug(masalah) yang biasa terjadi di kode program kita
- dengan debugger kita bisa menghentikan kode program di posisi yang kita inginkan (breakpoint),
- lalu melihat semua isi variable yang adal padasaar kode program sedang berhenti
*/

function createFullName(firstName, middleName, lastName,) {
    debugger;
    const fullName = `${firstName} ${lastName} ${lastName}`;
    return fullName;
}
createFullName("lalu", "doni", "setiawan");
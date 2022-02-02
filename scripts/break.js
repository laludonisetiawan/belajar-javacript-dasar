/* 
pada switch statement, kita sudah mengenal kata kunci break, yaitu untuk menghentikan case dalam switch
sama dengan pada pengulangan, break juga di gunakan untuk mengentikan seluruh pengulangan.
namun berbeda dengan continue, continue digunakan untuk perulangan saat ini, lalu melanjutkan ke perulangan selanjutnya.
*/

//contoh break pada pengulangan

let counter = 1;
while (true) {
    document.writeln(`<p>perulangan ke ${counter}</p>`);
    counter++;

    //melakukan break pada perulangan
    if (counter > 10) {
        break;
    }
}
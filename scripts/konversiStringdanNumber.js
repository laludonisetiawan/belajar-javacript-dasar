
//tanpa konversi
const value1 = "1";
const value2 = 1;

//hitung
const hasil = value1 + value2;

//hasil
document.writeln(` 1. hasil tanpa konversi String dan Number =  ${hasil} `);


// konversi String to number bilangan bulat
const value3 = parseInt("1");
const value4 = 1;

//hitung
const bilanganBulat = value3 + value4;

//hasil
document.writeln(`2. hasil konversi String to Number (bilangan bulat) = ${bilanganBulat} `);


//konversi string to number bilangan pecahan
const value5 = parseFloat("1.34");
const value6 = 1;

//hitung
const bilanganPecahan = value5 + value6;

//hasil
document.writeln(`3. hasil konversi String to Number (bilangan pecahan) = ${bilanganPecahan} `);


// koversi string bilangan bulat atau pecahan
const value7 = Number("5");
const value8 = 4.56;

// hitung
const bilanganBulatBilanganPecahan = value7 + value8;

//hasil
document.writeln(`4. hasil konversi String to Number (bilangan bulat dan pecahan) = ${bilanganBulatBilanganPecahan} `);


// number to string
const value11 = 1;
const value22 = 1;

//hitung
const hitung = value11.toString() + value22.toString(); // 1 1

//hasil
document.writeln(`5. hasil konversi Number to string = ${hitung} `);


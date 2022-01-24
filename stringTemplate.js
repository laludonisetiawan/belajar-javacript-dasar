
/* metode ini sangat membantu sekali ketika kita ingin menambahkan string tanpa harus menggunakan tanda + plus. */
//membuat variable name
const name = "Lalu Doni Setiawan";
const firstName = "Lalu";
const minddleName = "Doni";
const lastName = "Setiawan";


/*membuat variable baru untuk melakukan perhitungan saat penambahan string
dengan menggunakan metode string template (backtick) kemudian memanggil nama varible yang ingin kita panggil menggunakan kode
${namaVariable}; */
const template = `Name : ${name} ${firstName} ${minddleName} ${lastName}`;

console.info(template);


// melakukan sebuah ekspression perbandingan menggunakan string template
const nilaiMahasiswa = 90;
const status = `Nama : ${name} Lulus : ${nilaiMahasiswa > 70}`; // true
//melakukan console untuk melihat status program kita.
console.info(status);



// melakukan multiline string
let multiline = ` ini adalah tulisan multiline string
    bisa melakukan enter di dalam backticknya
    enter
    sebanyak-banyaknya
    ho
    hi
    he`;

document.writeln("<pre>");
document.writeln(multiline);
document.writeln("</pre>");


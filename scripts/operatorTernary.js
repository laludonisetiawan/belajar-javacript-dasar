/* Ternary operator adalah operator sederhana dari if statement
Ternary operator terdiri dari  kondisi yang dievaluasi, jika menghasilkan true maka nilai pertama diambil, jika false, maka nilai kedua diambil
 */
const nilai = 90;
const ucapan = nilai >= 75 ? "selamat anda lulus" : "silahkan coba lagi";
document.writeln(`<p> ${ucapan} </p>`);
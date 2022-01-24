
/*
operator augmented assigment di tulis menggunakan kode
-= 1 artinya nilai sebelumnya di kurangi satu
+= 2 artinya di tambah 2

cara ini lebih simple di bandingkan menggunakan cara menulis operator aritmatika sebelumnya.

*/
document.writeln("contoh operasi aritmatika pada javasript");
let result = 1 + 2; //3
document.writeln("<p> penambahan 1 + 2 = " + result + "</p>");
let originalResult = result;

result -= 1; //2
document.writeln("<p> pengurangan " + originalResult + " - 1 = " + result + "</p>");
originalResult = result;

result *= 2; //4
document.writeln("<p> prekalian " + originalResult + " * 2 = " + result + "</p>");



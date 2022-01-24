
document.writeln("operator unary pada javascript : ")
result = +1;
document.writeln("<p>" + result + "</p>");

result--; // decrement nilainya otomatis kurang1 dari nilai variable awal
document.writeln("<p> hasil decrement = " + result + "</p>");

result++; //increment nilainya otomatis nambah 1 dari hasil variable sebelumnya
document.writeln("<p> hasil increment dari nilai decrement sebelumnya  = " + result + "</p>");

result = -result; //konversi nilai positif ke negative
document.writeln("<p> hasil konversi positive ke negative = " + result + "</p>");

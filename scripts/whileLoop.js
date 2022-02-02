/* 
While loop adalah versi perulangan yang lebih sederhana dibanding for loop
Di while loop, hanya terdapat kondisi perulangan, tanpa ada init statement dan post statement

*/
let counter = 1;
while (counter <= 10) {
    document.writeln(`<p> perulangan ke ${counter}</p>`);
    counter++
}
/* 
- recursive function adalah kemampuan function memanggil function dirinya sendiri 
- kadang memang ada banyak problem, yang lebih mudah diselesaikan menggunakan recursive function, seperti contohnya kasus factorial.
*/


//penyelesaian menggunakan perulangan looping biasa 
function factorial(value) {
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    return result;
}


//penyelesaian menggunakan  recursive 
function factorialRecursive(value) {
    if (value === 1) {
        return 1;
    } else {
        return value * factorialRecursive(value - 1);
    }
}
console.info(factorialRecursive(7));
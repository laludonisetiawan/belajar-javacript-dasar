/* 
For In merupakan perulangan for yang digunakan untuk mengiterasi seluruh data property di object atau index di array
Walaupun for in bisa digunakan untuk Array, namun tidak direkomendasikan untuk Array, karena biasanya kita jarang sekali butuh data index untuk Array, kita bisa menggunakan For Of (yang dibahas setelah ini)

*/

const person = {
    firstName: "lalu",
    middleName: "doni",
    lastName: "setiawan"
};

for (const property in person) {
    document.writeln(`<p> property ${property} : ${person[property]}</p>`)
}
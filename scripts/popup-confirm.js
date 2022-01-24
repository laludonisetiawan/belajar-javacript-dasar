const masuk = confirm("anda yakin mau masuk ?");

if (masuk) {
    const name = prompt("siapa nama anda?");
    alert(`hello ${name}`);
} else {
    alert("semoga harimu suram !");
}
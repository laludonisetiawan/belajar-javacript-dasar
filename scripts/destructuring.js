/* 
- destructuring adalah fitur yang bisa di gunakan untuk membongkar value value di array atau object ke dalam variable-variable
- fitur ini sangat mempermudah kita ketika ingin mengambil data dari array atau object tanpa harus melakukan pengambilan data satu per satu.
*/

//contoh desxtructuring array 
{
    const names = ["lalu", "doni", "setiawn", "budi", "joko", "adi", "asep"];
    let [firstName, middleName, lastName, ...others] = names;

    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
    console.info(others);


}


{
    // mengambil data di objek
    const person = {
        firstName: "doni",
        lastName: "setiawan",
        addres: {
            street: "jalan belum ada",
            city: "mataram",
            country: "indonesia"
        },
        hobby: "game",
        channel: "GG GIMANK"
    };

    //ambil data person
    let { firstName, lastName, addres, ...others } = person;
    console.info(firstName);
    console.info(lastName);
    console.info(addres);
    console.info(others);

}


/* 
- desctructuring tidak hanya bisa dilakukan di variable, tapi juga bisa di lakukan di function parameter
- hal ini membuat kita mudah ketika ingin mengambil nested data dalam array atau  object dalam function.
*/

/* 
Sekarang kita tahu bahwa parameter itu optional, artinya kita bisa tidak memberi value terhadap parameter
Parameter juga bisa kita beri default value, artinya jika ketika kita tidak mengirim data ke parameter atau kita mengirim data undefined, maka secara otomatis parameter akan diisi oleh default value

*/

function register(name, gender = "UNKNOWN") {
    console.info(name);
    console.info(gender);
}
register();
register("doni");
register("doni", "male");
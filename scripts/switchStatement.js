//statement percabangan yang sama dengan if, namun lebih sederhana cara pembuatannya.

// kondisi di switchStatement hanya untuk perbandingan ==

//contoh
const nilai = "A";

switch (nilai) {
    case "A":
        document.writeln("wow anda lulus dengan baik");
        break;
    case "B":
    case "C":
        document.writeln("anda lulus");
        break;
    case "D":
        document.writeln("ada tidak lulus");
        break;
    case "E":
        document.writeln("mungkin ada salah jurusan");

}
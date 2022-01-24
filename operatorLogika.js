
document.writeln("Hitung Nilai Ujian Mahasiswa");

// perolehan nilai dan absensi mahasiswa
const nilaiUjian = 70;
const nilaiAbsensi = 70;

// melakukan perhitungan logika dari nilai  di atas dengan nilai syarat untuk lulus ujian
const lulusUjian = nilaiUjian > 75;
const lulusAbsensi = nilaiAbsensi > 75;

// menentukan hasil akhir dari status mahasiswa tersebut menggunakan logika AND .
const lulus = lulusUjian && lulusAbsensi; // false karena nilai keduanya tidak memenuhi syarat kelulusan, balik lagi ke pergertian dari operator logika AND.
document.writeln("" + lulus + "");



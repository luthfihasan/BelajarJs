function tampilNilai() {
    var nim = document.getElementById("nim").value;
    var nama = document.getElementById("nama").value;
    var matkul = document.getElementById("matkul").value;
    var nilai = document.getElementById("nilai").value;
    var nilaiHuruf = "";
    var indeksNilai = 0.0;

    if (nilai >= 85) {
        nilaiHuruf = "A";
        indeksNilai = 4.00;
    } else if (nilai >= 79) {
        nilaiHuruf = "A-";
        indeksNilai = 3.67;
    } else if (nilai >= 74) {
        nilaiHuruf = "B+";
        indeksNilai = 3.33;
    } else if (nilai >= 69) {
        nilaiHuruf = "B";
        indeksNilai = 3.00;
    } else if (nilai >= 64) {
        nilaiHuruf = "B-";
        indeksNilai = 2.67;
    } else if (nilai >= 59) {
        nilaiHuruf = "C+";
        indeksNilai = 2.33;
    } else if (nilai >= 54) {
        nilaiHuruf = "C";
        indeksNilai = 2.00;
    } else if (nilai >= 41) {
        nilaiHuruf = "D";
        indeksNilai = 1.00;
    } else {
        nilaiHuruf = "E";
        indeksNilai = 0.00;
    }

    document.getElementById("nim-result").innerHTML = "NIM: " + nim;
    document.getElementById("nama-result").innerHTML = "Nama: " + nama;
    document.getElementById("matkul-result").innerHTML = "Mata Kuliah: " + matkul;
    document.getElementById("nilai-result").innerHTML = "Nilai Akhir: " + nilai + " (Nilai Huruf: " + nilaiHuruf + ", Indeks Nilai: " + indeksNilai.toFixed(2) + ")";

    document.getElementById("result-hasil").style.display = "block";
}

function reset() {
    document.getElementById("nim").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("matkul").value = "";
    document.getElementById("nilai").value = "";
    document.getElementById("nim-result").innerHTML = "";
    document.getElementById("nama-result").innerHTML = "";
    document.getElementById("matkul-result").innerHTML = "";
    document.getElementById("nilai-result").innerHTML = "";
}

window.onload = function() {
    var resetButton = document.querySelector("button[type='reset']");
    resetButton.addEventListener("click", reset);
};

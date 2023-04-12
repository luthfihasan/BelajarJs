/* Didalam Console */
/* Menggunakan let (variabel bisa diubah) */
let namalet = "Hasan"
	namalet = "Luthfi-Hasan"

/* Menggunakan Const (Konstanta tidak bisa diubah) */
const namaconst = "San"

/* Menggunakan var (harus menggunakan function agar tidak 
ditugaskan menjadi objek global) */
var namavar
function namavar(){
	var nama = "Luthfi Hasan"
	console.log(nama)
}
namavar()

console.log(namalet)
console.log(namaconst)
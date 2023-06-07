function tampilkanPesan() {
	let inputNama = document.getElementById("nama").value;
	let pesan = document.getElementById("pesan");

	if (inputNama === "") {
		alert("Nama tidak boleh kosong!");
	} else {
		let gender = prompt("Jenis Kelamin (laki-laki/perempuan)");
		let jenisKelamin = gender.toLowerCase();

		switch (jenisKelamin) {
			case "laki-laki":
				pesan.innerHTML = "Selamat datang, Saudara " + inputNama;
				break;
			case "perempuan":
				pesan.innerHTML = "Selamat datang, Saudari " + inputNama;
				break;
			default:
				alert("Maaf, jenis kelamin belum teridentifikasi!");
				break;
		}
	}
}

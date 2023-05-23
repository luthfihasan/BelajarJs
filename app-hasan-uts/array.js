var NamaMhs = ["Ahmad", "Muhammad", "Hasan","Alhakim"];
    var TahunLahir = [2003, 2004, 2003, 2002];
    var HpMhs = ["083866948227", "085640313759", "081111222333", "0895714718060"];

    var table = document.getElementById("mahasiswaTable");

    // Fungsi untuk menampilkan data mahasiswa pada tabel
    function tampilkanData() {
      for (var i = 0; i < NamaMhs.length; i++) {
        var row = table.insertRow(-1);
        var namaCell = row.insertCell(0);
        var tahunCell = row.insertCell(1);
        var handphoneCell = row.insertCell(2);
        var actionCell = row.insertCell(3);

        namaCell.innerHTML = NamaMhs[i];
        tahunCell.innerHTML = TahunLahir[i];
        handphoneCell.innerHTML = HpMhs[i];
        actionCell.innerHTML = '<div class="action-buttons">' +
          '<button onclick="deleteMahasiswa(' + i + ')">Hapus</button>' +
          '</div>';
      }
    }

    // Fungsi untuk menambah data mahasiswa
    function tambahMahasiswa(event) {
      event.preventDefault();

      var nama = document.getElementById("namaInput");
      var tahun = document.getElementById("tahunInput");
      var handphone = document.getElementById("handphoneInput");

      var nama1 = nama.value;
      var tahunLahir = parseInt(tahun.value);
      var handphone = handphone.value;

      NamaMhs.push(nama1);
      TahunLahir.push(tahunLahir);
      HpMhs.push(handphone);

      var newRow = table.insertRow(-1);
      var namaCell = newRow.insertCell(0);
      var tahunCell = newRow.insertCell(1);
      var handphoneCell = newRow.insertCell(2);
      var actionCell = newRow.insertCell(3);

      namaCell.innerHTML = nama1;
      tahunCell.innerHTML = tahunLahir;
      handphoneCell.innerHTML = handphone;
      actionCell.innerHTML = '<div class="action-buttons">' +
        '<button onclick="deleteMahasiswa(' + (NamaMhs.length - 1) + ')">Hapus</button>' +
        '</div>';

      // Reset fields
      namaInput.value = "";
      tahunInput.value = "";
      handphoneInput.value = "";
    }
    // Fungsi untuk menghapus data mahasiswa
    function deleteMahasiswa(index) {
      NamaMhs.splice(index, 1);
      TahunLahir.splice(index, 1);
      HandphoneMhs.splice(index, 1);

      // Hapus data di tabel
      table.deleteRow(index + 1);
    }

    tampilkanData(); // Menampilkan data saat halaman dimuat

    // Event listener untuk form penambahan mahasiswa
    var addForm = document.getElementById("addForm");
    addForm.addEventListener("submit", tambahMahasiswa);
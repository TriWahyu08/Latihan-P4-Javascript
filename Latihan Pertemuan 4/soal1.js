console.log("Script Praktikum Dijalankan!");

// 1. Variabel untuk menampung elemen dari HTML.
const elNama = document.getElementById("nama-mhs");
const elNilai = document.getElementById("nilai-mhs");
const elStatus = document.getElementById("status-kelulusan");

// 2. Mengambil input elemen
const inputNama = document.getElementById("input-nama");
const inputNilai = document.getElementById("input-nilai");

// 3. Menangkap klik tombol submit
document.getElementById("submit-btn").addEventListener("click", function() {
    const namaMahasiswa = inputNama.value;
    const nilai = parseInt(inputNilai.value);

// 4. Memperbarui Nama dan Nilai
    elNama.textContent = namaMahasiswa;
    elNilai.textContent = nilai;

// 5. Logika kelulusan (if....else)
    let pesanStatus = "";
    let isLulus;

    if (nilai >= 75) {
        pesanStatus = "Selamat, Anda Dinyatakan LULUS!";
        isLulus = true;
    } else {
        pesanStatus = "Tetap Semangat, Anda HARUS Mengulang.";
        isLulus = false;
    }

// 6. Menampilkan status kelulusan
    elStatus.textContent = pesanStatus;

    // 7. Mengubah gaya berdasarkan status kelulusan
    if (isLulus === true) {
        elStatus.style.color = 'green';
        elStatus.style.fontWeight = 'bold';
    } else {
        elStatus.style.color = 'red';
        elStatus.style.fontWeight = 'bold';
    }
});

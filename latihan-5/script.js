// 1. Fungsi untuk ubah teks & style
function ubahKonten() {
    const judul = document.getElementById("judul");
    const paragraf = document.getElementById("paragraf");

    // 1. textContent - ubah teks
    judul.textContent = "Judul Berubah!";
    paragraf.textContent = "Paragraf ini juga sudah berubah setelah klik tombol.";

    // 2. style - ubah tampilan dinamis
    judul.style.color = "green";
    judul.style.fontSize = "28px";
    paragraf.style.backgroundColor = "#fef3c7";
    paragraf.style.padding = "12px";
    paragraf.style.borderRadius = "8px";

    console.log("Berhasil ubah dengan style!");
}

// 2. Fungsi reset kembali ke awal
function resetKonten() {
    const judul = document.getElementById("judul");
    const paragraf = document.getElementById("paragraf");

    // 1. textContent - ubah teks kembali ke asli
    judul.textContent = "Judul Asli";
    paragraf.textContent = "Ini adalah teks awal paragraf.";

    // 2. style - kembalikan style ke default
    judul.style.color = "#1F2937";
    judul.style.fontSize = "24px";
    paragraf.style.backgroundColor = "transparent";
    paragraf.style.padding = "0";
    paragraf.style.borderRadius = "0";

    console.log("Konten sudah direset!");
}

// Simulasi Data cuaca
const weatherData = {
    "jakarta": {
        temperature: 30,
        condition: "Cerah"
    },
    "bandung": {
        temperature: 25,
        condition: "Hujan Ringan"
    },
    "surabaya": {
        temperature: 33,
        condition: "Panas Terik"
    },
    "samarinda": {
        temperature: 28,
        condition: "Mendung"
    }
};

// Fungsi yang dipanggil saat tombol diklik
function tampilkanCuaca() {
    // 1. Ambil nilai dari input dan ubah ke huruf kecil untuk pencarian
    const inputElement = document.getElementById("input-kota");
    const inputKota = inputElement.value.toLowerCase().trim();
    
    // Bersihkan console sebelum menampilkan hasil baru (opsional, tapi rapi)
    console.clear(); 

    // 2. Cek apakah input kosong
    if (inputKota === "") {
        console.log("Mohon masukkan nama kota terlebih dahulu.");
        return;
    }
    
    // 3. Cek apakah kota ada di dalam data
    if (weatherData[inputKota]) {
        // Kota ditemukan
        const data = weatherData[inputKota];
        
        // Kapitalisasi nama kota untuk tampilan yang lebih baik
        const namaTampilan = inputKota.charAt(0).toUpperCase() + inputKota.slice(1);

        // 4. Tampilkan output ke console.log sesuai format yang diminta
        console.log(`Cuaca di ${namaTampilan}:`);
        console.log(`Suhu: ${data.temperature}°C`);
        console.log(`Kondisi: ${data.condition}`);

    } else {
        // Kota tidak ditemukan
        console.log(`Data cuaca untuk kota "${inputKota.toUpperCase()}" tidak ditemukan.`);
        console.log("Kota yang tersedia: Jakarta, Bandung, Surabaya, Samarinda.");
    }
}

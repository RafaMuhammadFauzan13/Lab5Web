
document.getElementById("pesan").textContent = "Hello World";

console.log("Hello World");


const namaPengguna = prompt("Masukkan nama Anda:", "");

if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");

    document.getElementById("pesan").textContent =
        "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}

function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}
operasiDasar(9, 4);

const inputNilai = prompt("Masukkan nilai (0-100):");
const nilaiMahasiswa = Number(inputNilai);

if (
    inputNilai === null ||
    inputNilai.trim() === "" ||
    Number.isNaN(nilaiMahasiswa) ||
    nilaiMahasiswa < 0 ||
    nilaiMahasiswa > 100
) {
    alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
} else {
    alert("Belum lulus");
}

const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
 case "1": alert("Bilangan satu"); break;
 case "2": alert("Bilangan dua"); break;
 case "3": alert("Bilangan tiga"); break;
 case "4": alert("Bilangan empat"); break;
 case "5": alert("Bilangan lima"); break;
 default: alert("Pilihan tidak tersedia");
}

function cekBilangan() {
    const input = document.getElementById("angka").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasil");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}

function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

const daftarMenu = document.querySelectorAll(".menu");
    daftarMenu.forEach((item) => {
 item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
 });
 document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

document.getElementById("formNilai").addEventListener("submit", function(event) {
    event.preventDefault();

    const inputTugas = document.getElementById("tugas").value;
    const inputUTS = document.getElementById("uts").value;
    const inputUAS = document.getElementById("uas").value;

    // Validasi agar semua kolom terisi
    if (inputTugas === "" || inputUTS === "" || inputUAS === "") {
        alert("Semua nilai wajib diisi!");
        return;
    }

    const tugas = Number(inputTugas);
    const uts = Number(inputUTS);
    const uas = Number(inputUAS);

    // Validasi nilai 0 sampai 100
    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        alert("Nilai harus berada pada rentang 0–100!");
        return;
    }

    // Proses perhitungan
    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    // Menampilkan hasil di halaman HTML
    document.getElementById("hasil").innerHTML = `
        <h2>Hasil Perhitungan</h2>
        <p>Nilai Tugas: ${tugas}</p>
        <p>Nilai UTS: ${uts}</p>
        <p>Nilai UAS: ${uas}</p>
        <p>Nilai Akhir: ${akhir.toFixed(2)}</p>
        <p>Predikat: ${predikat}</p>
        <p>Status: ${status}</p>
    `;

    // Menampilkan hasil di Console
    console.log("===== HASIL KALKULATOR NILAI =====");
    console.log("Nilai Tugas:", tugas);
    console.log("Nilai UTS:", uts);
    console.log("Nilai UAS:", uas);
    console.log("Nilai Akhir:", akhir.toFixed(2));
    console.log("Predikat:", predikat);
    console.log("Status:", status);
});

function inputDuaNilai() {
    const input1 = prompt("Masukkan nilai pertama:");
    if (input1 === null || input1.trim() === "") return;

    const input2 = prompt("Masukkan nilai kedua:");
    if (input2 === null || input2.trim() === "") return;

    const a = Number(input1);
    const b = Number(input2);

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        alert("Masukkan angka yang valid!");
        return;
    }

    console.log("Nilai pertama:", a);
    console.log("Nilai kedua:", b);
    console.log("Penjumlahan:", a + b);

    document.getElementById("hasilOperasi").textContent =
        "Hasil penjumlahan: " + (a + b);
}

function tampilkanPerkalian7() {
    let hasil = "<h3>Tabel Perkalian 7</h3>";

    for (let i = 1; i <= 10; i++) {
        hasil += `<p>7 × ${i} = ${7 * i}</p>`;
    }

    document.getElementById("tabelPerkalian").innerHTML = hasil;

    for (let i = 1; i <= 10; i++) {
        console.log(`7 × ${i} = ${7 * i}`);
    }
}

function cekGenap(angka) {
    return angka % 2 === 0;
}

function periksaGenap() {
    const input = document.getElementById("inputGenap").value;
    const hasil = document.getElementById("hasilGenap");

    if (input.trim() === "" || !Number.isInteger(Number(input))) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
        return;
    }

    const angka = Number(input);
    const genap = cekGenap(angka);

    hasil.textContent = genap
        ? "Bilangan genap"
        : "Bilangan ganjil";

    console.log("Angka:", angka);
    console.log("Apakah genap?", genap);
}


document.getElementById("formValidasi").addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("namaValidasi").value.trim();
    const email = document.getElementById("emailValidasi").value.trim();
    const kelas = document.getElementById("kelasValidasi").value.trim();

    const hasil = document.getElementById("hasilValidasi");

    if (nama === "" || email === "" || kelas === "") {
        hasil.textContent = "Gagal! Semua kolom wajib diisi.";
        hasil.style.color = "red";
        console.log("Validasi gagal: ada kolom yang kosong.");
        return;
    }

    hasil.innerHTML = `
        <strong>Data berhasil dikirim!</strong><br>
        Nama: ${nama}<br>
        Email: ${email}<br>
        Kelas: ${kelas}
    `;

    hasil.style.color = "green";

    console.log("Validasi berhasil!");
    console.log("Nama:", nama);
    console.log("Email:", email);
    console.log("Kelas:", kelas);
});

function ubahTampilan() {
    const teks = document.getElementById("teksToggle");

    if (teks.style.display === "none") {
        teks.style.display = "block";
    } else {
        teks.style.display = "none";
    }
}

# LAPORAN PRAKTIKUM 5

## JAVASCRIPT DASAR DAN MANIPULASI HTML

### Identitas Mahasiswa

| | |
|---|---|
| **Nama** | Rafa Muhammad Fauzan |
| **NIM** | 312510277 |
| **Kelas** | I251C |
| **Program Studi** | Teknik Informatika |
| **Mata Kuliah** | Pemrograman Web |
| **Praktikum** | Praktikum 5 — JavaScript Dasar dan Manipulasi HTML |

---

## Pengertian JavaScript

JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web menjadi interaktif dan dinamis. JavaScript dapat memproses input pengguna, melakukan perhitungan, mengubah teks dan gaya HTML, menampilkan pesan, serta memvalidasi data pada formulir.

Pada praktikum ini, materi yang dipelajari meliputi output JavaScript, variabel, tipe data, operator, percabangan, perulangan, function, manipulasi DOM, form, validasi input, serta proyek mini kalkulator nilai mahasiswa.

## Tujuan Praktikum

1. Memahami sintaks dasar JavaScript dan cara menghubungkannya dengan HTML.
2. Menggunakan variabel, operator, percabangan, perulangan, dan function.
3. Menampilkan informasi melalui Console, alert, prompt, dan elemen HTML.
4. Memanipulasi konten serta gaya elemen HTML menggunakan DOM.
5. Membuat interaksi sederhana pada form dan melakukan validasi input.
6. Membuat kalkulator nilai mahasiswa dan menguji beberapa skenario.

## Struktur File

```text
Lab5Web/
├── index.html
└── script.js
```

File `index.html` digunakan untuk menyusun elemen halaman, seperti judul, input, tombol, dan area hasil. File `script.js` berisi logika JavaScript untuk pemrosesan data dan interaksi halaman. Kedua file diletakkan di folder yang sama dan dihubungkan melalui kode berikut sebelum tag penutup `body`:

```html
<script src="script.js"></script>
```

## Langkah-Langkah Praktikum

### 1. Menampilkan Output JavaScript

**Tujuan:** Memahami cara menampilkan informasi pada halaman HTML dan Console.

**CODING:**

```javascript
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");
```

**Screenshot Codingan:**

![Codingan Latihan 1 HTML](images/codingan%201.png)

**Hasil Browser:**

![Hasil Browser Latihan 1.1](images/hasil-browser%201.png)

**Keterangan:**

`textContent` mengubah teks pada elemen HTML dengan ID `pesan`, sedangkan `console.log()` menampilkan pesan pada Console browser. Output HTML dapat dilihat langsung pada halaman, sementara output Console dilihat melalui Developer Tools.

### 2. Menggunakan Alert dan Prompt

**Tujuan:** Menampilkan pesan dan menerima input dari pengguna.

**Pembahasan:** `prompt()` digunakan untuk meminta pengguna memasukkan nama, sedangkan `alert()` menampilkan pesan. Program memeriksa apakah nama sudah diisi sebelum menampilkan sapaan.

**CODING:**

```javascript
const namaPengguna = prompt("Masukkan nama Anda:", "");

if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent =
        "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}
```

**Screenshot Codingan:**

![Codingan Latihan 2 JS](images/codingan%202.png)

**Hasil Browser:**

![Hasil Browser Latihan 2.1](images/hasil-browser%202.png)

![Hasil Browser Latihan 2.2](images/hasil-browser%202.2.png)

![Hasil Browser Latihan 2.3](images/hasil-browser%202.3.png)

**Keterangan:**

`prompt()` meminta pengguna memasukkan nama. Program memeriksa apakah input dibatalkan atau kosong. Jika nama diisi, program menampilkan sapaan melalui `alert()` dan memperbarui teks pada halaman. Dialog prompt sebaiknya dipanggil melalui tindakan pengguna agar tidak diblokir browser.

### 3. Function dan Operasi Aritmetika

**Tujuan:** Membuat function yang menerima dua bilangan dan melakukan operasi aritmetika.

**Pembahasan:** Function membantu mengelompokkan perintah agar bisa digunakan kembali. Pada contoh ini, dua angka diproses untuk mendapatkan hasil penjumlahan, pengurangan, perkalian, pembagian, dan modulus.

**CODING:**

```javascript
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}

operasiDasar(9, 4);
```

**Screenshot Codingan:**

![Codingan Latihan 3 JS](images/codingan%203.png)

**Hasil Browser / Console:**

![Hasil Browser Latihan 3](images/hasil-browser%203.png)

**Keterangan:**

Function `operasiDasar(a, b)` menerima dua parameter. Parameter tersebut digunakan dalam penjumlahan, pengurangan, perkalian, pembagian, dan modulus. Pemeriksaan pembagian dengan nol dilakukan agar program tidak menampilkan hasil pembagian yang tidak sesuai.

### 4. Seleksi Kondisi if–else

**Tujuan:** Menentukan status kelulusan berdasarkan nilai mahasiswa.

**Pembahasan:** Percabangan `if–else` membuat program memilih tindakan sesuai kondisi. Sebelum menentukan kelulusan, program memeriksa apakah nilai yang dimasukkan benar dan berada pada rentang 0–100.

**CODING:**

```javascript
const inputNilai = prompt("Masukkan nilai (0–100):");
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
```

**Screenshot Codingan:**

![Codingan Latihan 4 JS](images/codingan%204.png)

**Hasil Browser:**

![Hasil Browser Latihan 4.1](images/hasil-browser%204.png)

![Hasil Browser Latihan 4.2](images/hasil-browser%204.2.png)

**Keterangan:**

Input dari `prompt()` berupa string sehingga perlu dikonversi menjadi number menggunakan `Number()`. Struktur `if–else` memeriksa input terlebih dahulu. Nilai 60 atau lebih dinyatakan lulus, sedangkan nilai di bawah 60 dinyatakan belum lulus.

### 5. Seleksi Kondisi switch

**Tujuan:** Memilih tindakan berdasarkan nilai pilihan pengguna.

**Pembahasan:** `switch` cocok digunakan saat program memiliki beberapa pilihan yang sudah ditentukan. Program membaca pilihan pengguna, lalu menjalankan pesan yang sesuai.

**CODING:**

```javascript
const inputPilihan = prompt("Masukkan angka 1–5:");

switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
}
```

**Screenshot Codingan:**

![Codingan Latihan 5 JS](images/codingan%205.png)

**Hasil Browser:**

![Hasil Browser Latihan 5.1](images/hasil-browser%205.png)

![Hasil Browser Latihan 5.2](images/hasil-browser%205.2.png)

**Keterangan:**

`switch` memeriksa nilai `inputPilihan` dan menjalankan bagian `case` yang cocok. Perintah `break` menghentikan proses agar tidak berlanjut ke case berikutnya. Bagian `default` dijalankan jika pilihan tidak sesuai dengan pilihan yang tersedia.

### 6. Form Bilangan Genap atau Ganjil

**Tujuan:** Mengambil bilangan dari form dan menentukan apakah bilangan tersebut genap atau ganjil.

**Pembahasan:** Pada latihan ini, pengguna memasukkan sebuah bilangan melalui kolom input. JavaScript memeriksa apakah input berupa bilangan bulat, lalu menentukan apakah bilangan tersebut genap atau ganjil.

**CODING HTML:**

```html
<label for="bilangan">Masukkan bilangan bulat:</label>
<input type="number" id="bilangan" step="1">
<button type="button" onclick="cekBilangan()">Periksa</button>
<p id="hasilBilangan"></p>
```

**CODING JAVASCRIPT:**

```javascript
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}
```

**Screenshot Codingan:**

![Codingan Latihan 6 HTML](images/codingan%206.png)

![Codingan Latihan 6 JS](images/codingan%206.2.png)

**Hasil Browser:**

![Hasil Browser Latihan 6.1](images/hasil-browser%206.png)

![Hasil Browser Latihan 6.2](images/hasil-browser%206.2.png)

**Keterangan:**

Program membaca input dari elemen dengan ID `bilangan`. `Number.isInteger()` memastikan input merupakan bilangan bulat. Operator modulus (`%`) digunakan untuk memeriksa sisa pembagian dengan dua. Jika sisanya nol, bilangan termasuk genap; jika tidak, bilangan termasuk ganjil.

### 7. Mengubah Warna Halaman

**Tujuan:** Mengubah warna latar halaman menggunakan function dengan parameter.

**Pembahasan:** Function menerima nama warna sebagai parameter. Ketika tombol ditekan, JavaScript mengubah warna latar halaman sesuai warna yang dipilih.

**CODING:**

```javascript
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}
```

```html
<button type="button" onclick="ubahWarnaLatar('lightgreen')">Latar Hijau</button>
<button type="button" onclick="ubahWarnaLatar('white')">Latar Putih</button>
<button type="button" onclick="ubahWarnaLatar('lightyellow')">Latar Kuning</button>
```

**Screenshot Codingan:**

![Codingan Latihan 7 HTML](images/codingan%207.png)

![Codingan Latihan 7 JS](images/codingan%207.2.png)

**Hasil Browser:**

![Hasil Browser Latihan 7.1](images/hasil-browser%207.png)

![Hasil Browser Latihan 7.2](images/hasil-browser%207.2.png)

![Hasil Browser Latihan 7.3](images/hasil-browser%207.3.png)

**Keterangan:**

Function `ubahWarnaLatar(warna)` menerima nama warna sebagai parameter, lalu mengubah properti `backgroundColor` pada `document.body`. Tiga tombol memanggil function yang sama dengan warna berbeda.

### 8. DOM dan Checkbox Menu Makanan

**Tujuan:** Menghitung total harga berdasarkan menu yang dipilih pengguna.

**Pembahasan:** Checkbox memungkinkan pengguna memilih satu atau beberapa menu. JavaScript menjumlahkan harga semua menu yang dicentang dan memperbarui total harga pada halaman.

**CODING HTML:**

```html
<h3>Daftar Menu Makanan</h3>
<label><input type="checkbox" class="menu" value="5000"> Ayam Goreng — Rp5.000</label><br>
<label><input type="checkbox" class="menu" value="500"> Tempe — Rp500</label><br>
<label><input type="checkbox" class="menu" value="2500"> Telur Dadar — Rp2.500</label><br>
<p>Total: Rp<span id="total">0</span></p>
```

**CODING JAVASCRIPT:**

```javascript
const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}
```

**Screenshot Codingan:**

![Codingan Latihan 8 HTML](images/codingan%208.png)

![Codingan Latihan 8 JS](images/codingan%208.2.png)

**Hasil Browser:**

![Hasil Browser Latihan 8.1](images/hasil-browser%208.png)

**Keterangan:**

`querySelectorAll(".menu")` memilih semua checkbox menu. Ketika pilihan berubah, event `change` memanggil function `hitungTotal()`. Program menjumlahkan harga menu yang dicentang dan menampilkan total dengan format angka Indonesia.

### 9. Proyek Mini — Kalkulator Nilai Mahasiswa

**Tujuan:** Menerima nilai tugas, UTS, dan UAS; menghitung nilai akhir; menentukan predikat dan status kelulusan; serta menampilkan hasil di halaman HTML dan Console.

Rumus yang digunakan:

**Nilai Akhir = (Tugas × 30%) + (UTS × 30%) + (UAS × 40%)**

**Pembahasan:** Kalkulator ini menerima nilai tugas, UTS, dan UAS. Setiap komponen memiliki bobot berbeda, kemudian hasilnya digunakan untuk menentukan predikat dan status kelulusan. Form perlu memeriksa input agar tidak kosong dan nilainya berada pada rentang 0–100.

**CODING:**

```javascript
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
```

Form HTML menerima ketiga komponen nilai. JavaScript memvalidasi input agar tidak kosong dan berada pada rentang 0–100, lalu menampilkan hasil menggunakan `innerHTML` dan `console.log()`.

**Screenshot Codingan:**

![Codingan Kalkulator Nilai HTML](images/codingan%209.png)

![Codingan Kalkulator Nilai JS](images/codingan%209.2.png)

**Hasil Browser:**

![Hasil Browser Kalkulator Nilai](images/hasil-browser%209.png)

![Hasil Browser Kalkulator Nilai Perhitungan](images/hasil-browser%209.2.png)

**Hasil Console:**

![Hasil Console Kalkulator Nilai](images/hasil-browser%209.3.png)

**Keterangan:**

Function `hitungNilaiAkhir()` memisahkan proses perhitungan dari tampilan. Function `tentukanPredikat()` menentukan nilai huruf berdasarkan nilai akhir. Status kelulusan ditentukan dengan ketentuan nilai akhir minimal 60. Hasil ditampilkan di halaman HTML dan Console agar pengguna dapat melihat hasil serta memeriksa proses program.

Pengujian minimal tiga skenario:

| Tugas | UTS | UAS | Nilai Akhir | Predikat | Status |
|---:|---:|---:|---:|:---:|---|
| 100 | 100 | 100 | 100.00 | A | Lulus |
| 70 | 65 | 75 | 70.50 | C | Lulus |
| 40 | 45 | 50 | 45.50 | E | Belum lulus |

## Eksperimen Mandiri

### Eksperimen 1 — Dua Nilai dari Prompt

**Pembahasan:** Pengguna diminta memasukkan dua angka. Kedua input diubah dari teks menjadi angka agar dapat dijumlahkan dengan benar.

Program meminta dua nilai melalui `prompt()`, mengonversinya menjadi number, kemudian menghitung hasil penjumlahan. Validasi dilakukan agar input kosong atau bukan angka tidak diproses.

**Screenshot Codingan:**

![Codingan Eksperimen 1 HTML](images/codingan%2010.png)

![Codingan Eksperimen 1 JS](images/codingan%2010.2.png)

**Hasil Browser / Console:**

![Hasil Eksperimen 1.1](images/hasil-browser%2010.png)

![Hasil Eksperimen 1.2](images/hasil-browser%2010.2.png)

![Hasil Eksperimen 1.3](images/hasil-browser%2010.3.png)

### Eksperimen 2 — Tabel Perkalian Angka 7

**Pembahasan:** Perulangan `for` menjalankan perintah berulang kali. Di sini, perulangan dimulai dari 1 hingga 10 untuk membuat tabel perkalian angka 7.

Perulangan `for` digunakan untuk menampilkan tabel perkalian 7 dari 1 sampai 10. Hasil dapat ditampilkan di halaman HTML dan Console.

**Screenshot Codingan:**

![Codingan Eksperimen 2 HTML](images/codingan%2011.png)

![Codingan Eksperimen 2 JS](images/codingan%2011.2.png)

**Hasil Browser / Console:**

![Hasil Eksperimen 2.1](images/hasil-browser%2011.png)

### Eksperimen 3 — Function cekGenap

**Pembahasan:** Function `cekGenap()` memeriksa sisa pembagian angka dengan dua. Hasilnya `true` untuk bilangan genap dan `false` untuk bilangan ganjil.

Function `cekGenap(angka)` mengembalikan `true` jika angka habis dibagi dua dan `false` jika angka ganjil. Input diperiksa agar berupa bilangan bulat yang valid.

**Screenshot Codingan:**

![Codingan Eksperimen 3 HTML](images/codingan%2012.png)

![Codingan Eksperimen 3 JS](images/codingan%2012.2.png)

**Hasil Browser:**

![Hasil Eksperimen 3.1](images/hasil-browser%2012.png)

### Eksperimen 4 — Validasi Form

**Pembahasan:** Form ini berdiri sendiri dari kalkulator nilai. Program memeriksa apakah nama, email, dan kelas telah diisi sebelum menampilkan data.

Eksperimen ini menggunakan form terpisah untuk memeriksa apakah nama, email, dan kelas sudah diisi. Jika ada kolom kosong, program menampilkan pesan validasi. Jika seluruh kolom terisi, data ditampilkan pada halaman.

**Screenshot Codingan:**

![Codingan Eksperimen 4 HTML](images/codingan%2013.png)

![Codingan Eksperimen 4 JS](images/codingan%2013.2.png)

**Hasil Browser:**

![Hasil Eksperimen 4.1](images/hasil-browser%2013.png)

### Eksperimen 5 — Menambah Pilihan Menu dan Harga

**Pembahasan:** Dua pilihan menu tambahan dilengkapi harga. Ketika menu dipilih, program memasukkan harganya ke dalam perhitungan total.

Latihan daftar menu dikembangkan dengan menambahkan minimal dua pilihan menu beserta harga. Total harga diperbarui secara otomatis berdasarkan checkbox yang dipilih.

**Screenshot Codingan:**

![Codingan Eksperimen 5](images/codingan%2014.png)

**Hasil Browser:**

![Hasil Eksperimen 5.1](images/hasil-browser%2014.png)

### Eksperimen 6 — Menyembunyikan dan Menampilkan Elemen HTML

**Pembahasan:** Tombol mengubah tampilan sebuah elemen. Saat diklik, elemen disembunyikan jika sedang terlihat, atau ditampilkan kembali jika sedang tersembunyi.

Tombol digunakan untuk menyembunyikan atau menampilkan elemen HTML. Properti `style.display` diubah antara `none` dan `block` ketika tombol ditekan.

**Screenshot Codingan:**

![Codingan Eksperimen 6 HTML](images/codingan%2015.png)

![Codingan Eksperimen 6 JS](images/codingan%2015.2.png)

**Hasil Browser:**

![Hasil Eksperimen 6.1](images/hasil-browser%2015.png)

![Hasil Eksperimen 6.2](images/hasil-browser%2015.2.png)

---

## H. Pertanyaan dan Tugas

### 1. Jelaskan perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`.

- `console.log()` menampilkan informasi pada Console browser dan berguna untuk debugging.
- `alert()` menampilkan pesan dalam kotak dialog.
- `prompt()` menampilkan kotak dialog untuk meminta input pengguna.
- `textContent` membaca atau mengubah teks elemen HTML tanpa menafsirkan tag HTML.
- `innerHTML` membaca atau mengubah isi elemen menggunakan markup HTML.

### 2. Apa perbedaan `let` dan `const`? Berikan contoh.

`let` digunakan untuk variabel yang nilainya dapat ditugaskan ulang, sedangkan `const` digunakan untuk variabel yang tidak dapat ditugaskan ulang setelah deklarasi.

```javascript
let umur = 19;
umur = 20;

const nama = "Andi";

console.log(umur);
console.log(nama);
```

### 3. Apa perbedaan operator `==` dan `===`?

Operator `==` membandingkan nilai dengan memungkinkan konversi tipe data, sedangkan `===` membandingkan nilai dan tipe data tanpa konversi otomatis.

```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

### 4. Jelaskan fungsi `if–else` dan `switch`. Kapan masing-masing dapat digunakan?

`if–else` digunakan untuk menjalankan perintah berdasarkan kondisi logis, misalnya memeriksa apakah nilai memenuhi batas kelulusan. `switch` digunakan untuk memilih tindakan berdasarkan beberapa nilai tertentu, misalnya pilihan menu atau angka. `if–else` lebih sesuai untuk rentang dan gabungan kondisi, sedangkan `switch` cocok untuk pilihan yang nilainya spesifik.

### 5. Apa fungsi parameter dan `return` dalam function?

Parameter adalah tempat menerima data masukan pada function. `return` mengembalikan hasil dari function agar dapat digunakan oleh bagian program lain.

```javascript
function hitungLuas(panjang, lebar) {
    return panjang * lebar;
}

console.log(hitungLuas(5, 4)); // 20
```

### 6. Bagaimana JavaScript memilih elemen HTML menggunakan `document.getElementById()`?

`document.getElementById()` memilih elemen HTML berdasarkan nilai atribut `id`. Setelah elemen ditemukan, JavaScript dapat mengubah teks, isi, atau gaya elemen tersebut.

```html
<p id="pesan">Teks awal</p>
```

```javascript
document.getElementById("pesan").textContent = "Teks berhasil diubah";
```

### 7. Buat script untuk memvalidasi form agar nama tidak kosong dan nilai berada pada rentang 0–100.

**HTML:**

```html
<form id="formValidasiNilai">
    <label for="namaMahasiswa">Nama:</label>
    <input type="text" id="namaMahasiswa">

    <label for="nilaiMahasiswa">Nilai:</label>
    <input type="number" id="nilaiMahasiswa">

    <button type="submit">Periksa</button>
</form>

<p id="hasilValidasiNilai"></p>
```

**JavaScript:**

```javascript
document.getElementById("formValidasiNilai")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        const nama = document.getElementById("namaMahasiswa").value.trim();
        const inputNilai = document.getElementById("nilaiMahasiswa").value;
        const hasil = document.getElementById("hasilValidasiNilai");

        if (nama === "") {
            hasil.textContent = "Nama tidak boleh kosong.";
            return;
        }

        if (inputNilai.trim() === "") {
            hasil.textContent = "Nilai wajib diisi.";
            return;
        }

        const nilai = Number(inputNilai);

        if (!Number.isFinite(nilai) || nilai < 0 || nilai > 100) {
            hasil.textContent = "Nilai harus berada pada rentang 0–100.";
            return;
        }

        hasil.textContent = "Data valid. Nama: " + nama + ", Nilai: " + nilai;
        console.log("Nama:", nama);
        console.log("Nilai:", nilai);
    });
```

Script memeriksa nama agar tidak kosong, memastikan nilai sudah diisi, lalu memvalidasi rentang 0–100. Jika data tidak sesuai, pesan kesalahan ditampilkan. Jika data valid, hasil ditampilkan pada halaman dan Console.

---

## Kesimpulan

Berdasarkan praktikum JavaScript Dasar dan Manipulasi HTML, dapat disimpulkan bahwa JavaScript berperan penting dalam membuat halaman web interaktif. Materi yang dipelajari meliputi output, variabel, operator, percabangan, perulangan, function, DOM, dan validasi form.

JavaScript dapat menerima input pengguna, memproses data, mengubah isi atau tampilan elemen HTML, dan menampilkan hasil di halaman maupun Console. Penerapan materi tersebut terlihat pada latihan pengecekan bilangan, perubahan warna, perhitungan menu makanan, validasi form, serta kalkulator nilai mahasiswa.

## Dokumentasi

Screenshot codingan, hasil browser, dan Console diletakkan setelah penjelasan masing-masing latihan. Pastikan nama dan lokasi gambar pada README sesuai dengan file gambar yang benar-benar ada di repository. Setelah semua dokumentasi dilengkapi, simpan file sebagai `README.md` dan unggah bersama file HTML serta JavaScript ke repository praktikum.

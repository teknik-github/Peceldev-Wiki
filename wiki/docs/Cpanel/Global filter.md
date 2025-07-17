# Global filter cPanel

Dalam pengelolaan email pada server hosting berbasis cPanel, menjaga inbox tetap bersih dari spam, pesan tidak diinginkan, atau email dengan pola tertentu sangatlah penting. Salah satu fitur andalan cPanel untuk keperluan ini adalah Global Email Filters atau Filter Email Global.

### Apa sih itu Global Email Filter di cPanel?
Global Email Filters adalah fitur cPanel yang memungkinkan Anda untuk membuat aturan penyaringan (filter) yang berlaku untuk semua akun email di dalam satu domain. Ini berbeda dari Email Filters per akun, yang hanya berlaku untuk satu alamat email tertentu.

Dengan Global Email Filter, Anda dapat:

- Memblokir email berdasarkan subjek, pengirim, atau isi pesan

- Meneruskan, menghapus, atau mengalihkan pesan secara otomatis

- Melindungi seluruh domain dari spam dan konten tidak diinginkan

Kapan Menggunakan Global Filter?
Gunakan Global Filter jika:

- Anda ingin menerapkan aturan yang sama untuk semua pengguna email di domain Anda

- Anda mengelola banyak akun email dan ingin efisiensi dalam penyaringan

- Anda ingin menghapus email tertentu sebelum sampai ke pengguna

Contoh kasus:

- Memblokir semua email yang mengandung kata “promo” di subjek

- Menghapus otomatis semua email dari domain tertentu (misalnya @spam.com)

- Meneruskan email dari pengirim penting ke alamat khusus untuk pencatatan

### Cara Mengakses dan Membuat Global Email Filter
Berikut langkah-langkah untuk membuat Global Email Filter di cPanel:

1. Masuk ke cPanel
Login ke akun cPanel Anda melalui namadomain.com/cpanel.

2. Buka Menu “Global Email Filters”
Pada bagian Email, klik Global Email Filters (atau Email Filters Global jika menggunakan bahasa Indonesia).

![Image](https://cdn.peceldev.my.id/images/1750171885237-d9agab.webp)

3. Tambahkan Filter Baru
- Klik Create a New Filter

- Masukkan nama filter, misalnya: blokir-spam

- Tentukan kondisi filter:

    - From berisi @spam.com

    - Subject mengandung promo

    - Any Header berisi X-Spam-Status: Yes

![Image](https://cdn.peceldev.my.id/images/1750249420958-4x76p.webp)

- Pilih action yang dilakukan jika kondisi terpenuhi:

    - Discard Message (hapus)

    - Redirect to email (teruskan ke email lain)

    - Deliver to folder (pindahkan ke folder tertentu)

![Image](https://cdn.peceldev.my.id/images/1750249693173-jp3u38.webp)

4. Simpan Filter
Klik Create untuk menyimpan dan mengaktifkan filter.

![Image](https://cdn.peceldev.my.id/images/1750250175638-lgo8j.webp)
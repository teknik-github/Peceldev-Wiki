# Mariadb
Mariadb adalah sistem manajemen basis data relasional yang merupakan fork dari MySQL. Mariadb dirancang untuk menjadi drop-in replacement untuk MySQL, dengan fokus pada kinerja, keamanan, dan fitur tambahan.
# Instalasi Mariadb
Untuk menginstal Mariadb, Anda dapat mengikuti langkah-langkah berikut:
1. **Tambahkan Repositori Mariadb**: Pertama, Anda perlu menambahkan repositori Mariadb ke sistem Anda. Anda dapat melakukannya dengan menjalankan perintah berikut:
   ```bash
   sudo apt-get install software-properties-common
   sudo apt-key adv --fetch-keys 'https://mariadb.org/mariadb.asc'
   sudo add-apt-repository 'deb [arch=amd64] https://mirrors.mariadb.org/10.5/repo/ubuntu focal main'
   ```
2. **Perbarui Daftar Paket**: Setelah menambahkan repositori, perbarui daftar paket dengan menjalankan perintah berikut:
   ```bash
   sudo apt-get update
   ```
3. **Instal Mariadb**: Setelah daftar paket diperbarui, instal Mariadb dengan menjalankan perintah berikut:
   ```bash
   sudo apt-get install mariadb-server
   ```
4. **Konfigurasi Mariadb**: Setelah instalasi selesai, Anda dapat mengkonfigurasi Mariadb dengan menjalankan perintah berikut:
   ```bash
   sudo mysql_secure_installation
   ```
   Perintah ini akan membantu Anda mengatur kata sandi root, menghapus pengguna anonim, dan menghapus basis data pengujian.
5. **Mulai Mariadb**: Setelah konfigurasi selesai, Anda dapat memulai layanan Mariadb dengan menjalankan perintah berikut:
   ```bash
   sudo systemctl start mariadb
   ```
6. **Verifikasi Instalasi**: Untuk memverifikasi bahwa Mariadb telah terinstalasi dengan benar, Anda dapat menjalankan perintah berikut:
   ```bash
   mariadb --version
   ```
   Perintah ini akan menampilkan versi Mariadb yang terinstal.
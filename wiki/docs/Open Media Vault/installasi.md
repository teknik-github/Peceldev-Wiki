# Open Media Vault
Open Media Vault adalah sistem operasi berbasis Debian yang dirancang untuk menyederhanakan pengelolaan penyimpanan data. Dengan antarmuka web yang intuitif, pengguna dapat dengan mudah mengonfigurasi dan memantau server penyimpanan mereka.

## Fitur Utama

1. **Antarmuka Web yang Intuitif**: Memudahkan pengguna dalam mengelola penyimpanan.
2. **Dukungan Berbagai Protokol**: Termasuk SMB/CIFS, FTP, dan NFS.
3. **Pengelolaan Pengguna dan Grup**: Memungkinkan kontrol akses yang lebih baik.
4. **Monitoring dan Pelaporan**: Memungkinkan pemantauan kinerja sistem secara real-time.

## Kelebihan

- **Open Source**: Gratis untuk digunakan dan dimodifikasi.
- **Komunitas Aktif**: Dukungan dari komunitas pengguna dan pengembang.
- **Fleksibilitas**: Dapat diinstal di berbagai perangkat keras.

## Kekurangan

- **Kurva Pembelajaran**: Mungkin memerlukan waktu untuk memahami semua fitur.
- **Dukungan Terbatas untuk Perangkat Keras Tertentu**: Beberapa perangkat mungkin tidak didukung secara resmi.

## Instalasi

Untuk menginstal Open Media Vault, ikuti langkah-langkah berikut:

1. **Unduh ISO**: Kunjungi situs resmi Open Media Vault dan unduh file ISO terbaru.
2. **Buat Media Instalasi**: Gunakan alat seperti Rufus atau balenaEtcher untuk membuat USB bootable dari file ISO.
3. **Boot dari USB**: Colokkan USB ke perangkat yang akan diinstal, dan boot dari USB tersebut.
4. **Ikuti Petunjuk Instalasi**: Ikuti petunjuk di layar untuk menyelesaikan proses instalasi.
5. **Akses Antarmuka Web**: Setelah instalasi selesai, akses antarmuka web Open Media Vault melalui browser dengan alamat IP perangkat.

## Instalasi pada Debian 12

1. **Perbarui Sistem**:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```
2. **Download instalasi resmi Open Media Vault**:
   ```bash
   wget -O - https://github.com/OpenMediaVault-Plugin-Developers/installScript/raw/master/install | sudo bash
   ```
3. **Script Instalasi**: Setelah proses download selesai, script instalasi akan berjalan secara otomatis. Ikuti petunjuk yang muncul di layar untuk menyelesaikan instalasi Open Media Vault.

4. **Reboot Sistem**:
   ```bash
   sudo reboot
   ```
5. **Akses Antarmuka Web**: Setelah sistem menyala kembali, akses antarmuka web Open Media Vault melalui browser dengan alamat IP perangkat.

Untuk dokumentasi lebih lanjut, kunjungi [situs resmi Open Media Vault](https://www.openmediavault.org/).
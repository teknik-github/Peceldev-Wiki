# Cara install composer pada Ubuntu dan Centos8
Composer adalah dependency manager untuk PHP yang memungkinkan Anda mengelola pustaka dan dependensi proyek PHP Anda dengan mudah.

## Cara Install Composer di Ubuntu

1. Perbarui paket Anda:
   ```bash
   sudo apt update
   sudo apt upgrade
   ```

2. Instal dependensi yang diperlukan:
   ```bash
   sudo apt install curl php-cli php-mbstring git unzip
   ```

3. Unduh dan instal Composer:
   ```bash
   curl -sS https://getcomposer.org/installer | php
   sudo mv composer.phar /usr/local/bin/composer
   ```

4. Verifikasi instalasi:
   ```bash
   composer --version
   ```

## Cara Install Composer di CentOS 8

1. Perbarui paket Anda:
   ```bash
   sudo dnf update
   ```

2. Instal dependensi yang diperlukan:
   ```bash
   sudo dnf install curl php-cli php-mbstring git unzip
   ```

3. Unduh dan instal Composer:
   ```bash
   curl -sS https://getcomposer.org/installer | php
   sudo mv composer.phar /usr/local/bin/composer
   ```

4. Verifikasi instalasi:
   ```bash
   composer --version
   ```

Sekarang Composer sudah terinstal di sistem Anda. Anda dapat mulai menggunakannya untuk mengelola dependensi proyek PHP Anda. Pastikan untuk selalu memperbarui Composer ke versi terbaru dengan menjalankan perintah berikut:
```bash
composer self-update   
```


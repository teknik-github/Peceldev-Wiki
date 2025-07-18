# CertBot

Certbot adalah software open-source yang digunakan untuk mendapatkan, menginstal, dan memperbarui SSL/TLS Certificate secara otomatis dari Let's Encrypt (penyedia SSL gratis).

🔒 Fungsi Utama Certbot:
- Meminta (request) SSL Certificate dari Let's Encrypt.

- Menginstal SSL Certificate ke web server seperti Nginx atau Apache.

- Memperbarui SSL Certificate secara otomatis sebelum masa berlaku habis.

> Note: Install terlebih dahulu untuk Nginx tersebut

Installasi

1. install terlebih dahulu untuk CertBot pada linux
```bash
sudo apt install certbot python3-certbot-nginx -y
```
2. Buat konfigurasi pada /etc/nginx/sites-available/domainanda.com
```bash
nano /etc/nginx/sites-available/domainanda.com
```
Lalu masukan code yang ada di bawah ini pada file tersebut atau jika sudah memilik configurasi pada nginx bisa di abaikan!!
```bash
server {
    server_name domainanda.com;

    root /usr/share/nginx/html;  # Pastikan ini sesuai dengan loc file anda
    index index.html index.htm index.nginx-debian.html;
    location / {
        try_files $uri $uri/ =404;
    }
}
```
3. Jika sudah lakukan instalasi ssl untuk nginx dan domain tersebut
```bash
sudo certbot --nginx -d domainanda.com
```
![Image](https://cdn.peceldev.my.id/images/1750770939036-hnf9ww.webp)

4. tunggu sampai instalasi certbot selesai 

![Image](https://cdn.peceldev.my.id/images/1750770957232-scgohv.webp)

5. Jika sudah ujicoba lakukan access pada domain tersebut apakah sudah terinstall ssl

![Image](https://cdn.peceldev.my.id/images/1750770976586-q8hxu6.webp)

Perpanjang secara manual (opsional)
```bash
sudo certbot renew
```
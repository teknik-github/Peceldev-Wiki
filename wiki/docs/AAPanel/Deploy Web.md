# Cara Deploy Website Menggunakan AAPanel
Halo teman teman semuanya kali ini saya akan memberkan tutorial bagaimana caranya deploy web di aapanel nah sebelum mulai alangkah baiknya teman-teman sudah melakukan installasi aapanel di linux/system operasi yang teman-teman pakai [AAPanel](https://peceldev.my.id/docs/AAPanel/Introduction)

> Note: Untuk tutorial ini saya akan menggunakan Wordpress sebagai web yang akan di install

<p align="center">
  <iframe
    width="560"
    height="315"
    src="/img/2025-04-30 22-20-06.mp4"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
  </iframe>
</p>

1. Buka menu files pada aapanel

2. buka Box yang bertuliskan Terminan atau kalian bisa menggunakan menu upload, lalu click

3. Salin code berikut untuk mengunduh wordpress
```bash
sudo su
wget https://wordpress.org/latest.zip
```

4. Setelah itu kembali ke menu utama files click file bernama latest.zip lalu Unzip

5. Jika sudah akan muncul folder wordpress

Mantap 1-5 sudah selesai lanjut ke langkah berikutnya :star:

6. Masuk ke menu Database lalu `Add DB`

7. Masukan nama `DB Name`, `Username` dan Salin password Database nya setelah itu di bagian Permission Ganti dengan Everyone. DB ini nanti akan di gunakan wordpress untuk menyimpan data ke dalam Database tersebut. click Confirm

8. Masuk ke menu `Website` lalu `Add site`

9. Tambahkan alamat domain atau anda bisa menggunakan alamat ip aapanel setelah itu di bagian menu `website path` click gambar folder lalu cari folder wordpress yang tadi di `Unzip` Setelah itu confirm

10. Access/buka alamat ip atau domain yang tadi sudah di configurasi lalu Pilih continue

11. ikuti langkah berikut jika sudah click submit
- Database name: DB Name
- Username: Username
- Password: Password
- Database Host: 127.0.0.1

12. masukan hal hal berikut, jika sudah click install wordpress
- Title: untuk nama website
- Username dan Password: untuk login ke admin Wordpress
- Email

mantap nih udah tau kan caranya install web di aapanel sangat mudah banget kan apa lagi kalau sudah memakai docker puhh sedapnyoo :star2:
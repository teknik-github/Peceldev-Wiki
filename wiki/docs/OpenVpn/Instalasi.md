# OpenVpn

Bayangkan kamu punya dua server: satu di Jakarta, satu lagi di Surabaya. Keduanya tidak bisa saling “melihat” karena berada di jaringan publik yang berbeda. Di sinilah OpenVPN masuk: dia bertindak seperti jembatan pribadi yang menghubungkan dua server tersebut seolah-olah mereka berada dalam satu jaringan lokal (LAN).

Dengan OpenVPN, kamu bisa:

- Akses server secara privat (tanpa expose port ke publik)

- Jalankan layanan internal antar server

- Transfer file atau database antar server secara aman

## Apa yang Dibutuhkan?
1. Server yang bertindak sebagai VPN server (biasanya VPS atau bare metal)

2. Server klien yang ingin kamu hubungkan ke jaringan privat

3. Akses root atau sudo di kedua server

4. Sedikit kesabaran... 😄


> Note: Untuk ubuntu gunakan versi 20.04 keatas karena sudah tidak mendukung versi lama

### Instalasi openvpn

1. Jalankan perintah berikut untuk download file script openvpn
```bash
wget https://git.io/vpn -O openvpn-install.sh
```

2. Jika sudah jalankan perintah berikut untuk install openvpn
```bash
sudo bash openvpn-install.sh
```

3. akan terdapat tampilan seperti berikut di saat instalasi

![Image](https://cdn.peceldev.my.id/images/1750597984085-tmijc.webp)

nah di saat menambahkan client name openvpn akan melakukan instalasi

jika instalasi sudah selesai akan terdapat file baru sesuai dengan name client  yang sudah di berikan

![Image](https://cdn.peceldev.my.id/images/1750598241736-63h4ew.webp)

File tersebut akan di gunakan untuk menghubungkan Client ke Server yang sudah terinstall vpn tadi

# Kesimpulan
OpenVPN adalah solusi yang hebat untuk menghubungkan server di lokasi berbeda secara aman. Dengan mengikuti langkah-langkah di atas, kamu bisa dengan mudah mengatur jaringan privat antar server. Selamat mencoba!🚀
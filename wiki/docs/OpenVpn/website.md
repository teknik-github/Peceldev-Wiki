# Cara Menggamankan Website dengan OpenVPN di VPS Ubuntu 20.04
OpenVPN adalah solusi VPN open-source yang memungkinkan kamu membuat koneksi aman antara dua atau lebih perangkat melalui internet. Dengan OpenVPN, kamu bisa mengamankan lalu lintas data, melindungi privasi online, dan mengakses sumber daya jaringan secara aman.

Dalam panduan ini, kita akan membahas cara menginstal dan mengonfigurasi OpenVPN di VPS Ubuntu 20.04 untuk mengamankan koneksi website kamu.

## Prasyarat
Sebelum memulai, pastikan kamu memiliki:
- VPS dengan Ubuntu 20.04 terinstal
- Akses root atau sudo ke VPS
- Domain yang sudah terhubung ke VPS (opsional, tapi disarankan)
- Firewall yang dikonfigurasi (misalnya UFW)
- Klien OpenVPN (bisa diinstal di komputer lokal atau perangkat lain)

> Note: Pastikan VPS kamu memiliki koneksi internet yang stabil dan firewall mengizinkan lalu lintas pada port yang akan digunakan oleh OpenVPN (default: UDP 1194) Panduan cara instalasi ada di [sini](https://openvpn.net/vpn-server-resources/).

## Langkah 1: Instlasi Web Server
Sebelum mengamankan website dengan OpenVPN, kita perlu menginstal web server terlebih dahulu. Kita akan menggunakan Nginx sebagai web server.

1. Update paket-paket di VPS:
```bash
sudo apt update && sudo apt upgrade -y
```

2. Instal Nginx:
```bash
sudo apt install nginx -y
```

3. Cek status Nginx:
```bash
sudo systemctl status nginx
```
Jika Nginx berjalan dengan baik, kamu akan melihat status "active (running)".

## Langkah 2: Instalasi UFW (Uncomplicated Firewall)
Untuk mengamankan VPS, kita akan menggunakan UFW sebagai firewall.

1. Instal UFW:
```bash
sudo apt install ufw -y
```

2. Aktifkan UFW:
```bash
sudo ufw enable
```

3. Izinkan lalu lintas SSH dan OpenVPN:
```bash
sudo ufw allow ssh
sudo ufw allow 1194/udp
```

4. Izinkan lalu lintas HTTP dan HTTPS untuk Nginx:
```bash
# Misal menggunakan UFW
ufw default deny incoming
ufw allow from 10.8.0.0/24 to any port 80
ufw allow from 10.8.0.0/24 to any port 443
ufw enable
```

5. Cek status UFW:
```bash
sudo ufw status
```
Kamu harus melihat aturan yang mengizinkan lalu lintas pada port 22 (SSH), 1194 (OpenVPN), 80 (HTTP), dan 443 (HTTPS).

Dan jika menggunakan iptables
```bash
# Mengizinkan lalu lintas pada port 22 (SSH)
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
# Mengizinkan lalu lintas pada port 1194 (OpenVPN)
sudo iptables -A INPUT -p udp --dport 1194 -j ACCEPT
# Mengizinkan lalu lintas pada port 80 (HTTP)
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
# Mengizinkan lalu lintas pada port 443 (HTTPS)
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
# Mengizinkan lalu lintas dari jaringan VPN (10.8.0.0/24)
sudo iptables -A INPUT -s 10.8.0.0/24 -j ACCEPT
# Menolak semua lalu lintas lainnya
sudo iptables -A INPUT -j DROP
# Simpan aturan iptables
sudo apt install iptables-persistent
sudo netfilter-persistent save
```

## Langkah 3: Uji coba 
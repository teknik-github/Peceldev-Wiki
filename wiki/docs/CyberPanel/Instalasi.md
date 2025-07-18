# Install CyberPanel



Sepesifikasi untuk melakukan instalasi CyberPanel
-  Ubuntu 18.04, Ubuntu 20.04, AlmaLinux 8, AlmaLinux - 9, Ubuntu 22.04, CloudLinux 8.
- 1024MB RAM, or higher
- 10GB Disk Space

1. Masuk ke dalam server dengan menggunakan ssh setelah itu login ke root mode
2. Update package server

Ubuntu
1. sudo apt update && sudo apt upgrade -y

CentOS/Alma/Rocky:
1. sudo yum check-update
2. sudo yum update

Skrip instalasi CyberPanel
1. Custom Versi litespeed dan add-on tambahan
```bash 
sh <(curl https://cyberpanel.net/install.sh || wget -O - https://cyberpanel.net/install.sh)
```

2. gunakan ini jika tidak masuk dengan pengguna root
```bash
sudo su - -c "sh <(curl https://cyberpanel.net/install.sh || wget -O - https://cyberpanel.net/install.sh)"
```

Jika sudah akan terdapat tampilan seperti berikut

![Image](https://cdn.peceldev.my.id/images/1750246546443-486fa.webp)

Pilih No 1 jika inggin menggunakan CyberPanel free
Pilih No 2 jika inggin menggunakan Cyberpanel Enterprise (lisiensi)

Pilih layanan paket yang di mana addons cyeberpanel
![](https://cdn.peceldev.my.id/images/1750246899285-lh2jyd.webp)

Jika inggin melakukan remote database dapat menggunakan y untuk yes

![](https://cdn.peceldev.my.id/images/1750246983476-898dtp.webp)

lalu untuk install cyberpanel versi terbaru dapat melakkan enter secara langsung atau dapat menggunakan cyberpanel dengan versi tertentu

![](https://cdn.peceldev.my.id/images/1750246924083-cupvwc.webp)

jika sudah cyberpanel akan memberi tahu jika password default nya 1234567 akan tetapi cyberpanel akan memilih random password

![](https://cdn.peceldev.my.id/images/1750247308456-gjtk2p.webp)

install php extension dan cache (redis) Wajib!!

![](https://cdn.peceldev.my.id/images/1750247257157-hrmbwc.webp)

WatchDog di gunakan untuk memantau system yang sedang berjalan

![](https://cdn.peceldev.my.id/images/1750247405766-218cd2.webp)

Setelah itu tunggu sampai prosses instalasi nya selesai biasa nya 20 - 40 Menit tergantung dengan kecepatas disk kalian


![Image](https://cdn.peceldev.my.id/images/1750257037469-1tyn6.webp)

Jika sudah selesai instalasi nya dapat melakukan reboot server setelah itu masuk menggunakan https://ip or domain:8090
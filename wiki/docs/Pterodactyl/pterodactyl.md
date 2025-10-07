Cara Menginstal Pterodactyl dan Mengonfigurasi Minecraft
========================================================

**A. Pendahuluan**
==================

**Pterodactyl** adalah **opensource game management system** yang dirancang untuk mengelola server game secara modern, ringan, dan aman. Platform ini menggunakan teknologi **PHP, Node.js, dan Docker** untuk menjalankan game server di dalam container terisolasi, sehingga memudahkan dalam hal keamanan dan skalabilitas.

Beberapa fitur utama Pterodactyl antara lain:

1.  **Panel berbasis web** – memudahkan admin maupun user dalam membuat, mengelola, dan memantau server game.
2.  **Isolasi server dengan Docker** – setiap server game berjalan dalam container terpisah, sehingga mencegah konflik antar server.
3.  **Mendukung banyak game** – mulai dari Minecraft, Terraria, ARK: Survival Evolved, hingga aplikasi lain seperti voice server (Teamspeak, Mumble).
4.  **User & Permission Management** – mengatur hak akses pengguna sesuai kebutuhan (misalnya hanya start/stop server atau akses penuh).
5.  **REST API** – memungkinkan integrasi dengan sistem atau aplikasi lain.
6.  **Open Source & Gratis** – komunitas aktif dan dokumentasi lengkap.

Dengan Pterodactyl, penyedia layanan hosting maupun pengguna individu dapat dengan mudah menjalankan berbagai jenis game server tanpa perlu repot mengelola infrastruktur manual.

> Note: dalam instalasi kali ini saya menggunakan layanan Neo Lite MM 8.4 kalian bisa juga menggunakan MS 4.4 akan tetapi kami tidak menyaran kan nya!. Jika inggin bermain lebih lancar bisa menggunakan [Neo Lite Pro](https://www.biznetgio.com/product/neo-lite-pro) atau [Neo Metal](https://www.biznetgio.com/product/neo-metal).

**B. Langkah-Langkah cara install Pterodactyl**
-----------------------------------------------

1.  Jalankan perintah berikut untuk instalasi Pterodactyl
```bash
wget -O install.sh https://raw.githubusercontent.com/teknik-github/Pterodactyl/refs/heads/main/install.sh && bash install.sh
```
Pada perintah tersebut akan menginstall semua dependency yang di butuhkan oleh Pterodactyl

2.  Tinggu sampai muncul from sebagai berikut setelah itu isi dengan nama domain kalian (Pastikan domain sudah mengarah ke IP public vps)

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1757989884095/image.png)

1\. Domain untuk Panel

3.  Langkah selanjut nya jika tidak inggin menggunakan SMTP dapat memilih no

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1757990013335/image.png)

2\. SMTP

Tunggu sampai prosses migrasi database dan instalasi composer selesai

4.  Setelah itu buat user admin untuk login ke Pterodactyl masukan email, nama user dan password

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758031417531/image.png)

3\. Buat admin user untuk Pterodactyl

5.  Prosses instalasi akan selesai dalam rentan waktu 18-20 Menit sesuai dengan paket yang kalian gunakan

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758031817697/image.png)

4\. Instalasi selesai

6.  Jika prosses instalasi selesai dapa di lakukan reboot agar semua nya berjaan dan terupdate dari system

**C. Configurasi Pterodactyl untuk Minecraft**
----------------------------------------------

1.  Login ke Pterodactyl menggunakan email atau username yang sudah di buat

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758033705273/image.png)

1\. Login ke Pterodactyl

2.  Masuk ke dalam dashboard admin untuk melakukan konfigurasi

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758034445785/image.png)

2\. Masuk ke Dashboard admin

3.  Buat Location pada menu Location >> Create New >> untuk short code bisa di sesuaikan dengan nama yang di inggin kan >> Create

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758035031375/image.png)

3\. Location Pterodactyl

4.  Setelah itu buat Nodes untuk minecraft

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758036959768/image.png)

4\. Konfigurasi nodes

FQDN: Tambahkan domain yang akan di gunakan nodes (pastikan domain sudah di arahkan ke ip public VPS)  
Total Disk Space: Bisa di sesuaikan untuk kebutuhan storage minecraft  
Total Memory: Akan di berikan untuk menjalankan minecraft  
Lalu untuk configurasi seterus nya bisa mengikuti sesuai capture pada gambar

5.  Pada IP Address tambahkan ip public VPS dan Ports yang di mana akan di gunakan untuk menghubungkan ke minecraft setelah itu Submit

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758037873784/image.png)

5\. Node Allocations

6.  Jika Nodes sudah di buat pergi ke node tersebut >> Configuration >> salin konfigurasi yang sudah di sediakan lalu buat `config.yml` pada `/etc/pterodactyl`

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758042385513/image.png)

6\. Konfigurasi Node

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758042670201/image.png)

7\. Buat Konfigurasi node config.yml

7.  Node sudah terinstall gambar hati akan berwarna hijau yang menandakan sudah terinstall

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758043424848/image.png)

8\. Cek Nodes

8.  Instalasi server minecraft pergi ke servers >> create new >> berikan nama untuk server >> server owener >> pada node pilih nodes yang sudah di buat

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758074260798/image.png)

9\. Instalasi Minecraft

9.  Scroll ke bawah cari konfigurasi seperti berikut lalu isi sesuai dengan berapa banyak resource yang telah di buat oleh nodes

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758074622831/image.png)

10\. Resource Management

10.  Jika sudah scroll ke bawah lalu create untuk membuat server

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758074575216/image.png)

11\. Vanilla Minecraft

> Note: Disini saya menggunakan versi vanilla minecraft java yang di mana tidak bisa di gunakan oleh minecraft handphone

11.  Instalasi sukses setelah itu pergi sesuai tanda panah untuk memanajement server minecraft nya

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758075019065/image.png)

12\. Instalasi selesai

12.  Sebelum start server minecraft kalian harus konfigurasi beberapa file berikut (click 2x untuk membuka/edit)

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758075827472/image.png)

13\. Files

> Berikut untuk detail yang harus di ubah  
> eula.txt: eula=false >> eula=true  
> server.properties: online-mode=true >> online-mode=false

13.  Sesudah di konfigurasi pergi ke console lalu start untuk memulai server minecraft

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758076531180/image.png)

14\. Start server minecraft

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758077176731/image.png)

15\. Server berhasil running dan siap untuk ujicoba

**D. Cara masuk ke server minecraft**
-------------------------------------

1.  Buka minecraft yang kalian miliki
2.  Pilih multiplayer pada minecraft
3.  Click Add server >> lalu berikan nama >> untuk server address berikan IP dan Port yang sudah di sediakan >> Lalu add

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758078367677/image.png)

1\. Add Server

4.  Pilih server yang sudah di tambahkan lalu join server

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758078519245/image.png)

2\. Join Server

5.  And Boom sekarang kalian sudah bisa masuk ke minecraft server yang berada di VPS     

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/6547/direct/1758078669651/image.png)

3\. Dunia minecraft

**E. Penutup**
-----------------
Dengan mengikuti langkah-langkah di atas, kalian sekarang sudah berhasil menginstal dan mengonfigurasi Pterodactyl untuk menjalankan server Minecraft. Pterodactyl menyediakan antarmuka yang mudah digunakan untuk mengelola server game, sehingga kalian dapat dengan mudah menyesuaikan pengaturan sesuai kebutuhan. Selamat bermain Minecraft di server yang kalian kelola sendiri!
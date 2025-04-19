![](https://www.zdnet.com/a/img/resize/61cceb5f61c1dcb4e2d7cbe4c1b5821aef5c9d72/2014/09/05/b2ed410c-34ce-11e4-9e6a-00505685119a/docker-logo.png?auto=webp&width=1280)

# Apa sih docker itu?
docker adalah alat yang mempermudah pengguna melakukan pengembangan, pengujian, dan penerapan aplikasi/kontainer. docker sendiri biasanya di gunakan oleh seorang devops enginering untuk mempermudah/mempercepat penginstalan 

# Apa bedanya Docker dengan VM?
![](https://bitovi.github.io/academy/static/img/docker/1-what-is-docker/docker-arch.png) 

### Docker:
- Instalasi nya yang cepat
- Tanpa install operasi system lagi
- Ringan (Tergantung Image yang Di gunakan)
- ram tidak langsung terpotong

### VM:
- Harus install porasi system
- penggunaan ram yang tinggi
- memakan banyak storage/penyimpanan 
- ram langsung terpotong dan di langsung gunakan oleh operasi system yang di install 

# BagaiMana caranya Install Docker? :thinking:
langkah pertama kalian bisa mengunjungi situs resmi docker yaitu https://docker.com

![](https://cdn.peceldev.my.id/images/1744708835187-ab846a.webp)
lalu pilih/click sistem operasi yang kalian gunakan nanti akan secara otomastis mendownload docker tersebut

>Sebelum melakukan instalasi docker kalian harus mengaktifkan Windows subsystem for linux di windows

Ikuti langkah langkah berikut!!

### Step: 1 Buka Turn Windows features on or off
![](https://cdn.peceldev.my.id/images/1744709463496-z5fkfu.webp)

Cari ``Turn Windows features on or off`` di pencarian Windows lalu click open

![](https://cdn.peceldev.my.id/images/1744709734043-2f3hy4.webp)

Check list box ``Windows subsystem for linux`` lalu click oke
seteelah itu tunggu proses pengatifan features tersebut setelah itu click restart

### Step: 2 Install Docker
buka file docker yang sudah kalian download lalu checklist bagian tersebut

![](https://www.petanikode.com/img/docker-install/kondifurasi-wsl2.avif)

Kemudian tunggu sampai instalasi selesai

![](https://www.petanikode.com/img/docker-install/install-progress.avif)

### Step 5: Instalasi Selesai
Setelah instalasi selesai click Close and restart
![](https://www.petanikode.com/img/docker-install/install-finish.avif)

### Step 6: Terima Agreement
Centang I accept the terms, kemudian klik Accept.
![](https://www.petanikode.com/img/docker-install/docker-agreement.avif)

setelah komputer melakukan restart, docker akan otomatis terbuka

Resource https://www.petanikode.com/docker-install/

# Bagaimana caranya menggunakan Docker?
Sebelum masuk lebih dalam alangkah kalian mengetahui apa saja command yang akan di pakai untuk menjalankan docker

- `docker help`: untuk melihat apa saja command yang bisa di pakai
- `docker ps`: Digunakan untuk melihat apa saja service yang sedang berjalan di docker
- `docker images`: Melihat apa saja image yang sudah di unduh
- `docker pull <nama image>`: Mendownload image dari internet ke local penyimpanan
- `docker build .`: Digunakan untuk membuat custom image sendiri
- `docker compose up`: Di gunakan untuk menjalankan semua konfigurasi yang ada di docker-compose.yml
- `docker login <key>`: Digunakan untuk memberikan access windows/linux ke docker hub
- `docker exec`: untuk masuk ke dalam container yang sedang berjalan
- `docker run`: Digunakan untuk menjalankan image docker
- `docker push username/imagename:tag`: di gunakan untuk mengirim image yang ada di local/penyimpanan ke docker hub

### Environment 
Environment adalah baris code yang di gunakan untuk mengaktifkan/menambahkan fitur yang di miliki oleh images nya
contoh:

```bash
services:

  db:
    image: mariadb
    restart: always
    environment:
      MARIADB_ROOT_PASSWORD: example
```

di contoh ini bagian environment terdapat baris code yang bertuliskan `MARIADB_ROOT_PASSWORD` yang artinya di saat kalian menjalankan docker tersebut, docker akan memberitahu container bahwa mariadb membuat root password dengan nama `example`

- Referensi: https://docs.docker.com/reference/cli/docker/
- Referensi Environment: https://docs.docker.com/compose/how-tos/environment-variables/set-environment-variables/
- Mariadb:https://hub.docker.com/_/mariadb


# Dimana ya?, saya dapat mendownload images docker :grey_question:

untuk itu kalian bisa mengunjungi situs https://hub.docker.com di sana kumpulan semua docker image yang inggin kalian gunakan dan silakan buat akun docker hub agar nanti dapat menggunakan `docker login` dan melanjutkan ke step berikut nya `docker push`

# Download docker image
untuk mendownload docker image kalian dapat menjalankan perintah berikut!

```bash
#example
docker pull <images>

#contoh
docker pull nginx
```

# Bagaimana Caranya menjalankan images menggunakan docker cli?

berikut adalah contoh bagaimana caranya menggunakan docker cli, dan menjalankan docker images

![](https://cdn.peceldev.my.id/images/1744785973304-ddfoh8.webp)

```bash
docker run --name website -v ./index.html:/usr/share/nginx/html -d -p 80:80 nginx
```
atau bisa juga tanpa -v

```bash
docker run --name website -d -p 80:80 nginx
```
`-p` di sini di gunakan agar host dapat mengakses container menggunakan port 80 dan bisa di ganti sesuai dengan keinginan kalian

# Dockerfile
![](https://www.kdnuggets.com/wp-content/uploads/Beginner_Guide_Docker_Ferrer_2.png)
Dockerfile adalah sebuah file yang berisi baris code. yang harus ter struktur `FROM` dan harus menggunakan tulisan besar

intruksi/code yang biasanya di gunakan di dockerfile
- `FROM`: Digunakan untuk menentukan image yang akan di gunakan sebagai base image
- `COPY`: Digunakan untuk menyalin file dari local/penyimpanan internal kedalam images 
- `RUN`: untuk menjalankan command di saat menjalankan `docker build`
- `WORKDIR`: Digunakan untuk merubah directory kerja images

Contoh Dockerfile sederhana
```bash
#Semua dockerfile harus diawali ini
FROM <image>

#Salin file/folder ke dalam image
COPY /tempat/file/folder:/tempat/di/image
```

## Yuk kita mulai belajar Docker nya :rocket:
kalian bisa menggunakan `VsCode` https://code.visualstudio.com/download agar dapat mempermudah di saat memulai sesi ini dan ikuti langkah langkah berikut

![](https://cdn.peceldev.my.id/images/1744796551828-yi91q.webp)

![](https://cdn.peceldev.my.id/images/1744796616582-zczyu5.webp)

![](https://cdn.peceldev.my.id/images/1744796721929-32tza.webp)

struktur folder akan menjadi seperti ini
```
belajar docker
├── index.html
└── Dockerfile
```

buatlah file bernama Dockerfile lalu salin code di bawah ini
```bash
#Semua dockerfile harus diawali ini
FROM nginx

#Salin file/folder ke dalam image
COPY ./index.html /usr/share/nginx/html
```

index.html

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
</head>
<body>
    <header>
        <h1>Welcome to My Web Page</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the home section of the web page.</p>
        </section>
        <section id="about">
            <h2>About Section</h2>
            <p>This section contains information about the web page.</p>
        </section>
        <section id="contact">
            <h2>Contact Section</h2>
            <p>You can contact us through this section.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 My Web Page. All rights reserved.</p>
    </footer>
</html>
```

Setelah itu buka terminal yang ada di vscode

![](https://cdn.peceldev.my.id/images/1744799568870-bt803b.webp)

lalu jalankan perintah berikut

```bash
docker build -t nama:web1 .
```
tunggu proses build dan download docker image nya

Setelah itu jalankan docker image nya

```bash
docker run --name web-raffi -d -p 80:80 raffi:web1
```

lalu buka web browser ketik localhost dan akan menampilkan seperti ini

![](https://cdn.peceldev.my.id/images/1744803386669-fzo7gq.webp)

gunakan `docker stop nama <container>`untuk menghentikan container. yay kamu sudah berhasil membuat dan menjalankan container dengan dockerfile :partying_face:	
 
# Docker-compose :sunglasses:
docker compose adalah code yang dapat menjalankan semua container tanpa harus meconfigurasi/menjalankan nya 1/1 contoh nya saya inggin menjalankan 2 service sekaligus, kalian hanya menganti nama service nya berikut adalah contoh nya:

docker-compose.yml
```bash
services:
    web1: # nama services
        image: nginx
        container_name: web1
        ports: # di gunakan agar port 80 di host/container bisa diakses dari luar
          - 80:80
        volumes: # di gunakan untuk menghubungkan folder di host ke dalam container
          - ./web1:/usr/share/nginx/html

    web2:
        image: nginx
        container_name: web2
        ports:
          - 81:80
        volumes:
          - ./web2:/usr/share/nginx/html
```
buatlah struktur folder seperti ini

![](https://cdn.peceldev.my.id/images/1744808089477-cqkukt.webp)

dan ganti bagian `<h1>Welcome to My Web Page</h1>` menjadi `<h1>Welcome to My Web Page 1</h1>` sama juga di web 2

untuk menjalankan docker-compose gunakan `docker compose up -d` dan untuk mengentikan dan menghapus nya gunakan `docker compose down`

lalu coba access (localhost) untuk web1 dan (localhost:81) untuk web2

# Apakah bisa menghubungkan 2 container tanpa ip address? 	:monocle_face:

selain menjalankan 2 container, docker compose dapat berinteraksi/terhubung satu sama lain tanpa harus menggunakan alamat ip akan tetapi langsung menggunakan service nya

```bash
services:
    ubuntu:
        image: ubuntu
        container_name: ubuntu
        command: tail -f /dev/null

    busybox:
        image: busybox
        container_name: busybox
        command: tail -f /dev/null
```
buat new terminal

![](https://cdn.peceldev.my.id/images/1744842457228-i86w.webp)

jalankan docker-compose di atas lalu masuk dalam container dengan menggunakan `docker exec -it <nama container> /bin/bash` jika tidak bisa di gunakan, gunakan `/bin/sh`

untuk bagian container `ubuntu` salin code ini

```bash
apt-get update
apt-get install -y iputils-ping
```

lalu coba ketik `ping <nama services>`, `ping busybox` akan menjadi seperti ini

![](https://cdn.peceldev.my.id/images/1744844351531-pf6b06.webp)

cobalah sebalik nya, ping dari busybox ke ubuntu

![](https://cdn.peceldev.my.id/images/1744845516357-z768z7.webp)

dengan hal tersebut daripada kalian expose port tertentu demi keamanan gunakanlah nama services untk terhubung dengan services lain untuk menghindari `nmap`, dll.

# Cara push/kirim image ke docker hub :star2:
kenapa harus mengirim image ke docker? karena untuk meminimalisir terjadinya kerusakan, hilang nya images, dan tidak sengaja terhapus. dengan adanya images di dockerhub kalian hanya perluh mengunduh nya lagi seperti biasa

click `profile` pada pojok kanan atas lalu click `account setting` cari yang namanya `personal access token`

![](https://cdn.peceldev.my.id/images/1744846839270-lqpiz.webp)
lalu `generate new token`

berikan nama untuk access token nya dan untuk access permissions ubah menjadi `Read & Write`
![](https://cdn.peceldev.my.id/images/1744846956459-iibi1i.webp)
setelah itu generate

copy lalu paste code dengan click kanan, yang di berikan oleh docker ke terminal yang ada di VsCode
![](https://cdn.peceldev.my.id/images/1744873703376-6rjlo.webp)

ganti nama image kamu menjadi `username/web:latest` dengan menggunakan `docker tag <target> username/web:latest`

![](https://cdn.peceldev.my.id/images/1744875623155-odp2dn.webp)

lalu push image dengan menggunakan `docker push username/web:latest`, lihat lah di menu repository apakah sudah ada images tersebut. jika sudah ada selamat kalian sudah berhasil melakukan push images ke dalam dockerhub

![](https://cdn.peceldev.my.id/images/1744875729515-shjrfu.webp)

nah seru banget kan?, begitulah caranya menggunakan docker. saya harap materi kali ini dapat membantu teman teman yang inggin belajar tentang docker, dan masih banyak lagi tingkatan nya ya itu kubernetes terimakasih yang telah membaca 😁

materi di buat untuk pembelajaran dan jika inggin materi yang lebih dari ini, bisa mengunjungi https://peceldev.my.id atau https://rudyekoprasetya.wordpress.com/ common creative
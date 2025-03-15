---
sidebar_position: 1
---

# Filebrowser

file browser adalah sebuah software yang bertujuan untuk memanajement File/Folder melalui web interface, dan memperbudah seorang developer untuk mengambil dan melihat apa saja yang ada di sebuah server tersebut

## :rocket: installasi

install filebrowser menggunakan cli (Linux)
```bash
curl -fsSL https://raw.githubusercontent.com/filebrowser/get/master/get.sh | bash
filebrowser -r /path/to/your/files
```
untuk /path/to/your/files ganti dengan dimana kalian melekatan file/folder yang akan di jadikan target untuk filebrowser
- Password: admin
- Username: admin

> Note: kamu harus mengganti password dan username nya. 

gunakan Windows poweshell (Admin) untuk mengginstall software ini

```bash
iwr -useb https://raw.githubusercontent.com/filebrowser/get/master/get.ps1 | iex
filebrowser -r /path/to/your/files
```
Filebrowser juga tersedia di Docker image kalian dapat mencari nya di [Docker Hub](https://hub.docker.com/r/filebrowser/filebrowser)

Docker

```bash
docker run \
    -v /path/to/root:/srv \
    -v /path/filebrowser.db:/database.db \
    -u $(id -u):$(id -g) \
    -p 8080:80 \
    filebrowser/filebrowser
```

docker-compose

```bash
service:
    image: filebrowser/filebrowser
    port:
    - 80:80
    volume:
    - ./filebrowser.db:/database.db
    - /path/folder/kamu/:/srv

```
Referensi [FileBrowser](https://filebrowser.org/)
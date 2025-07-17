# Gitlab and Runner

## Penjelasan

Ganti `external_url` dengan alamat ip atau domain yang klaian punya 

```bash
services:
  gitlab:
    image: gitlab/gitlab-ce:latest
    container_name: gitlab
    restart: always
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'http://localhost'
      GITLAB_ROOT_PASSWORD
      - 'admin'
      GITLAB_ROOT_EMAIL
      - 'admin@admin.local'
    ports:
      - '80:80'
      - '443:443'
      - '22:22'
    volumes:
      - './config:/etc/gitlab'
      - './logs:/var/log/gitlab'
      - './data:/var/opt/gitlab'
  gitlab-runner:
    image: gitlab/gitlab-runner:latest
    container_name: gitlab-runner
    volumes:
      - '/var/run/docker.sock:/var/run/docker.sock'
    restart: always
    depends_on:
      - gitlab 
    network_mode: host
```

## Instalasi Runner
Buka halaman admin lalu pergi ke CI/CD setelah itu click runner  

![](https://cdn.peceldev.my.id/images/1742008484348-0d0w06.webp)

centang Run untagged jobs setelah itu scroll ke bawah click create

![](https://cdn.peceldev.my.id/images/1742009202331-tv615t.webp)

untuk bagian ini kalian bisa memilih operasi system yang kaliaan punya, di sini saya menggunakan linux. setelah itu copy code yang ada di gambar Step1

![](https://cdn.peceldev.my.id/images/1742010003018-j8vj8o.webp)

masuk ke dalam container `docker exec -it gitlab-runner /bin/bash` lalu paste code yang sudah di copy ikuti langkah langkah seperti di gambar

![](https://cdn.peceldev.my.id/images/1742008721854-jda70g.webp)

setelah semuanya berhasil kembali ke gitlab dan jika kalian berhasil akan muncul seperti ini di bawah

![](https://cdn.peceldev.my.id/images/1742008633826-52o33.webp)

Click View runner kalian akan menemukan runner yang sudah kalian configurasi

![](https://cdn.peceldev.my.id/images/1742008656119-rhbcv.webp)

:rocket: selamat kalian sudah berhasil mengginstall gitlab dan runner :smile:
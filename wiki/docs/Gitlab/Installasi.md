# Gitlab

GitLab adalah platform berbasis web untuk mengelola proyek perangkat lunak secara kolaboratif. GitLab menyediakan berbagai fitur, seperti: Manajemen repositori Git, Perencanaan proyek, Pelacakan masalah, Peninjauan kode, Integrasi berkelanjutan/penyebaran berkelanjutan (CI/CD)

Dalam pembahasan kali ini kita akan mengginstall gitlab di dalam docker (Selft Hosted)

> NOTE: di dalam installasi ini masih belum di lengkapi denggan `runner`, runner ini berfungsi untuk menjalankan `.gitlab-ci.yml` atau bisa di sebut dengan CI/CD

## :rocket: Installasi
kalian bisa memilih salah satu dari instalasi ini dan gitlab ini menggunakan gitlab CE (community edition) yang free to use


### Docker
```bash
sudo docker run -d \
  --name gitlab \
  --restart always \
  -p 80:80 \
  -p 443:443 \
  -p 22:22 \
  -v $(pwd)/config:/etc/gitlab \
  -v $(pwd)/logs:/var/log/gitlab \
  -v $(pwd)/data:/var/opt/gitlab \
  -e GITLAB_OMNIBUS_CONFIG="external_url 'http://localhost'" \
  -e GITLAB_ROOT_PASSWORD="admin" \
  -e GITLAB_ROOT_EMAIL="admin@admin.local" \
  gitlab/gitlab-ce:latest

```

### Docker-compose
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
```
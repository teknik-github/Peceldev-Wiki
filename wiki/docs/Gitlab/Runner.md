# Gitlab Runner

GitLab Runner adalah agen atau eksekutor untuk menjalankan job pada pipeline CI/CD yang dikelola oleh GitLab. Runner ini bertanggung jawab untuk mengeksekusi tugas seperti testing, build, dan deployment sesuai dengan instruksi yang ditulis dalam file .gitlab-ci.yml. Runner dapat dijalankan pada berbagai sistem operasi dan mendukung berbagai executor (misalnya: shell, Docker, Kubernetes), sehingga memberikan fleksibilitas tinggi dalam cara menjalankan job.

## :rocket: Installasi

### Docker
```bash
docker run -d --name gitlab-runner --restart always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v gitlab-runner-config:/etc/gitlab-runner \
  gitlab/gitlab-runner:latest
```

### Docker-compose

```bash
gitlab-runner:
    image: gitlab/gitlab-runner:latest
    container_name: gitlab-runner
    volumes:
      - '/var/run/docker.sock:/var/run/docker.sock'
    restart: always
```
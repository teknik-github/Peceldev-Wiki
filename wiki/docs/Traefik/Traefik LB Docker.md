# Traefik LB Docker
Ini adalah simple project untuk traefik yang sudah di lengkapi dengan loadbalancer 

## Penjelasan

### Nama Service
- traefik untuk mengarahkan lalulintas request ke docker target
- php untuk website yang di jadikan target oleh traefik sekaligus untuk website
- mariadb akan di gunakan oleh website php untuk menyimpan database
- adminer digunakan untuk melihat isi database melalui web interface 

```bash
services:
  traefik:
    image: traefik:v2.10
    container_name: traefik
    restart: always
    command:
      - "--api.insecure=true"                  # Dashboard (Non-secure, gunakan HTTPS di produksi)
      - "--providers.docker=true"             # Enable Docker provider
      - "--providers.docker.exposedbydefault=false" # Hanya layanan dengan label yang di-expose
      - "--entrypoints.web.address=:80"       # HTTP entrypoint
      - "--entrypoints.dashboard.address=:8080" 
      - "--configfile=/etc/traefik/config.yml"
    ports:
      - "80:80"                               # Traefik mendengarkan HTTP pada port 80
      - "8080:8080"                           # Dashboard pada port 8080
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro # Untuk akses ke Docker
      - ./config.yaml:/etc/traefik/config.yaml:ro
    labels:
      - "traefik.enable=true"                 # Aktifkan layanan ini di Traefik
#      - "traefik.http.routers.traefik.rule=PathPrefix(`/traefik`)" # Atur domain Traefik
      - "traefik.http.routers.traefik.entrypoints=web" # Gunakan HTTP
      - "traefik.http.services.traefik.loadbalancer.server.port=8080" # Arahkan ke dashboard Traefik
    networks:
      - external

  php:
    build: .
    volumes:
      - ./cbt-smkdone:/app/public
    restart: always
    depends_on:
      - mariadb
    deploy:
      replicas: 3                             # 3 replicas untuk load balancing
    labels:
      - "traefik.enable=true"                 # Aktifkan layanan ini di Traefik
      - "traefik.http.routers.nginx.rule=PathPrefix(`/`)" # Atur domain Nginx
      - "traefik.http.routers.nginx.entrypoints=web" # Gunakan HTTP
      - "traefik.http.services.nginx.loadbalancer.server.port=80" # Arahkan ke port Nginx
      - "traefik.http.services.nginx.loadbalancer.sticky.cookie=true" # Cookie agar tidak berpindah services
      - "traefik.http.services.nginx.loadbalancer.sticky.cookie.httpOnly=true"
    networks:
      - external

  mariadb:
    image: mariadb:latest
    container_name: mariadb
    ports:
      - "3306:3306"
    environment:
      MARIADB_ROOT_PASSWORD: 1pai9mpl
      MARIADB_DATABASE: tryout
    volumes:
      - ./database:/var/lib/mysql
      - ./config/my.cnf:/etc/mysql/my.cnf:ro # Konfigurasi MariaDB optimasi untuk produksi
    restart: always
    networks:
      - external

  adminer:
    image: adminer
    depends_on:
      - mariadb
    restart: always
    ports:
      - 8081:8080
    networks:
      - external

networks:
  external:
    external: true
```
# Instalasi MinIO
instalasi minio ini terbilang sangat mudah dan sangat simple gimana penasaran?, okey langsung saja kita install pada server linux kita!!

> Note: Disini saya menggunakan ubuntu 24.04

1. Instal package Minio (Debian/Ubuntu)
```bash
wget https://dl.min.io/server/minio/release/linux-amd64/archive/minio_20250613113347.0.0_amd64.deb -O minio.deb
sudo dpkg -i minio.deb
```

2. Edit service file minio.service
```bash
nano /usr/lib/systemd/system/minio.service
```
pada file minio.service tambahkan baris berikut
```bash
Environment="MINIO_ROOT_USER=admin"
Environment="MINIO_ROOT_PASSWORD=admin12345"
#EnvironmentFile=-/etc/default/minio
#ExecStartPre=/bin/bash -c "if [ -z \"${MINIO_VOLUMES}\" ]; then echo \"Variable MINIO_VOLUMES not set in /etc/default/minio\"; exit 1; fi"
ExecStart=/usr/local/bin/minio server /mnt/disk1 /mnt/disk2 --console-address ":9001"
```
> Note: Disini saya menggunakan multiple Disk pada Minio jadi untuk lokasi disk bisa di sesuaikan

3. Tambahkan minio user dan grup pada disk tersebut
```bash
groupadd -r minio-user
useradd -M -r -g minio-user minio-user
chown minio-user:minio-user /mnt/disk1 /mnt/disk2 /mnt/disk3 /mnt/disk4
```

4. Start minio service
```bash
sudo systemctl start minio.service
```

5. Jika sudah berjalan access dashboard minio dengan menggunakan port 9001, http://ipordomain:9001 dan untuk username dan password dapat di lihat pada environmen yang telah di buat pada minio.service

<!-- ![Image]() -->
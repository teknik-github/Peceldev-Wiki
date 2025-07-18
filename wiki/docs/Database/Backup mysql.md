# Mysql Dump

myqldump yang di mana dapat di gunakan untuk melakukan backup/mengambil data dari mysql ke dalam bentuk file [.sql] yang di mana dapat di lakukan secara manual atau bisa menggunakan cronjob agar dapat di lakukan secara otomatis pada waktu tertentu


Berikut untuk contoh perintah mysqldump
```bash
mysqldump -u user -p nama_database > backup_nama_database.sql
```
Ganti user dan nama_database sesuai denga kebutuhan anda

Contoh jika mysqldump berhasil, yang di mana akan terdapat file baru dengan extensi .sql 

![Image](https://cdn.peceldev.my.id/images/1750170048442-sb3ov.webp)

Anda bisa melihat isi .sql tersebut dengan menggunakan perintah `cat namafile.sql` yang nantinya akan terdapat isi di database sebagai tersebut

![Image](https://cdn.peceldev.my.id/images/1750170106592-bcrewq.webp)

Nah Gampang banget Bukan?, untuk langkah selanjutnya dapat menggunakan cronjob sebagai alat automatisasi backup datbase

### Automatisasi Menggunakan cronjob

Nah berikut untuk configurasi .sh yang di mana akan melakukan exsekusi mysqldump dan nantinya akan di padukan dengan configurasi cronjob

```bash
#!/bin/bash

# Konfigurasi
USER="root"                     # Ganti dengan user MySQL kamu
PASSWORD="yourpassword"         # Ganti dengan password MySQL
DATABASE="nama_database"        # Ganti dengan nama database kamu
BACKUP_DIR="$HOME/db_backups"   # Lokasi folder backup
DATE=$(date +%F_%H-%M-%S)

# Buat folder backup jika belum ada
mkdir -p "$BACKUP_DIR"

# Backup database
mysqldump -u "$USER" -p"$PASSWORD" "$DATABASE" > "$BACKUP_DIR/backup_${DATABASE}_$DATE.sql"

# Opsional: Hapus backup lebih dari 7 hari
find "$BACKUP_DIR" -type f -name "*.sql" -mtime +7 -exec rm {} \;

echo "Backup selesai: $BACKUP_DIR/backup_${DATABASE}_$DATE.sql"

```

lalu untuk cronjob dapat di tambahkan dengan menggunakan perintah `cronjob -e` setelah itu salin code di bawah dan paste code tersebut di cronjob nya

```bash
0 2 * * * /bin/bash /path/ke/backup.sh >> /var/log/db_backup.log 2>&1
```

Pada cronjob ini dapat di lakukan configurasi atau penjadwalan untuk backup, yang di mana akan menjalankan file .sh tersebut

Berikut untuk referensi cronjob penjadwalan: https://crontab.guru/

Terimakasih telah membaca :)
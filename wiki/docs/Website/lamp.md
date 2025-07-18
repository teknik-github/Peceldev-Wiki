# LAMP


### Instalasi

1. Install web server Apache2
```bash
apt update && apt install -y apache2
```

2. Tambah kan repository PHP
```bash
add-apt-repository ppa:ondrej/php -y
apt update
```

3. install extensi PHP (tambahkan jika tidak ada)
```bash
apt install -y php8.2 php8.2-{cli,fpm,common,gd,mbstring,mysql,xml,xmlrpc,soap,intl,zip,curl,opcache}
```

4. Install modul mod PHP Apache2
```bash
sudo apt install libapache2-mod-php8.2
```

5. Install tambahkan repo database (Mariadb)
```bash
curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash
```
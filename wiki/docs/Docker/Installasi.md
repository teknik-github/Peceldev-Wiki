# Docker

Docker adalah sebuah software membantu pengembang membangun, menguji, dan menyebarkan aplikasi. Docker mengemas aplikasi ke dalam kontainer, yang merupakan unit standar perangkat lunak yang berisi semua yang dibutuhkan aplikasi untuk berjala

- Manfaat Docker
Memudahkan konfigurasi, Menyederhanakan manajemen aplikasi, Mempercepat proses pengembangan, Meningkatkan efisiensi pengelolaan infrastruktur, Membantu organisasi menyesuaikan aplikasi dengan perubahan yang terjadi

## Installasi

Docker Engine ini tanpa gui yang berarti tanpa tampilan yang mudah di pelajari, full cli (command line interface)

### Ubuntu
```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```
Setelah itu mulai install Docker package nya

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

untuk melakukan test nya apakah sudah Docker tersebut sudah terpasang

```bash
sudo docker --help
sudo docker --version
```

### Debian
```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```
Untuk bagian VERSION_CODENAME di debian ganti dengan codename debian kalian `bookworm`
```bash
$(. /etc/os-release && echo "$VERSION_CODENAME")
```

untuk instalasi Package nya sama dengan yang di atas atau di bawah Ubuntu

## Docker Tanpa Sudo

1. Buat docker group.

```bash
sudo groupadd docker
```

2. Tambahkan User Kedalam docker group.

```bash
 sudo usermod -aG docker $USER
```
3. Log out and log In kembali de dalam linux kalian


Source [Docker](https://docs.docker.com/engine/)

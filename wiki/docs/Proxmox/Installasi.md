# Install Proxmox di debian 12

## Installasi

1. gunakan su – untuk masuk ke root debian 12 dan jika sudah jalankan semua code yang ada di bawah

2. tambahkan repository proxmox

```bash
echo "deb [arch=amd64] http://download.proxmox.com/debian/pve bookworm pve-no-subscription" > /etc/apt/sources.list.d/pve-install-repo.list

wget https://enterprise.proxmox.com/debian/proxmox-release-bookworm.gpg -O /etc/apt/trusted.gpg.d/proxmox-release-bookworm.gpg 
```

3. update repository yang sudah di tambahkan

```bash
apt update && apt full-upgrade
```

4. install ve kernel proxmox

```bash
apt install proxmox-default-kernel
systemctl reboot
```

5. install ve proxmox package

```bash
apt install proxmox-ve postfix open-iscsi chrony
```

6. hapus debian kernel

```bash
apt remove linux-image-amd64 'linux-image-6.1*'
#update grup
update-grub
```

7. Disarankan: Hapus Paket os-prober

```bash
apt remove os-prober
```

Proxmox VE kini sudah terinstal dan siap digunakan. Anda dapat mulai membuat VM, mengatur container, atau bahkan mengelola cluster Proxmox jika memiliki lebih dari satu server.
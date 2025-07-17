# Device Unmanaged
Device Unmanaged bisa di sebabkan karena Networkmanager memkalukan unmanaged ke dalam interface atau bisanya ke interface wifi yang kalian miliki 


coba ikuti metode-metode di bawah ini

1. menggunakan `nmcli`
```bash
sudo nmcli device set <intervace> managed yes
```

2. Cek di `NetworkManager.conf`
```bash
cat /etc/NetworkManager/NetworkManager.conf
```
Jika terdapat tulisan ini
```bash
[keyfile]
unmanaged-devices=interface-name:<interface>
```
bisa langsung menghapus semua atau menambahkan `Comment (#)` di kedua text tersebut

```bash
sudo nano /etc/NetworkManager/NetworkManager.conf
sudo systemctl restart NetworkManager
```
jika kalian tetap mengalami device unmanaged, kalian bisa menambahkan issue ke [github](https://github.com/teknik-github/Peceldev-Wiki/issues) saya 
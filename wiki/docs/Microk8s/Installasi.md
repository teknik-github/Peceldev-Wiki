---
sidebar_position: 1
---

# Micro8s

![Microk8s](https://cdn.peceldev.my.id/images/1741703826982-q5wmq.webp)

microk8s adalah software open-source untuk automating deployment, scaling, dan memamajement container. microk8s ini sangat mudah untuk di install di karenakan di buat langsung oleh ubuntu dan microk8s mempunyai fitur `addons` yang berisi sebuah software untuk microk8s 

- untuk penggunaan ram di microk8s sekitar 540MB dan di  rekomendasi untuk system 20GB disk dan 4GB ram

Source [Microk8s](https://microk8s.io/docs)

## Instalasi

1. install kubernetes microk8s dengan minimal dan ringgan dengan snap
```bash
sudo snap install microk8s --classic
```
2. jika kalian inggin menggunakan microk8s tanpa sudo jalankan perintah berikut
```bash
sudo usermod -a -G microk8s $USER
mkdir -p ~/.kube
chmod 0700 ~/.kube
```
kalian juga perlu masuk kembali ke sesi agar pembaruan grup dapat dilakukan:
```bash
su - $USER
```
Jika tidak mau ribet menggunakan Command `Microk8s` kalian bisa menggunakan ini `kubectl`

```bash
sudo snap install kubectl --classic
cd $HOME
mkdir .kube
cd .kube
microk8s config > config
```

3. periksa status microk8s
```bash
microk8s status --wait-ready
```
4. untuk mengaccess kubernetes microk8s gunakan perintah berikut:
```bash
microk8s kubectl get nodes
```
atau jika inggin lebih lengkap
```bash
microk8s kubectl --help
```
![](https://cdn.peceldev.my.id/images/1741555921484-8i67fg.webp)
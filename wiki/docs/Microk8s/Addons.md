# Addons

Addons microk8s adalah sebuah modul tambahan untuk menambahkan fitur-fitur ke dalam cluster kubernetes yang di jalankan di microk8s addons ini mempermudah kalian untuk manambahkan atau memanajement addons tanpa harus mengkonfigurasi semuanya secara manual

## Contoh Addons yang umum

- Dashboard: Menyediakan antarmuka web untuk memantau dan mengelola cluster Kubernetes.
- Ingress: Memungkinkan pengaturan routing trafik ke  aplikasi yang berjalan dalam cluster.
- Storage: Menyediakan solusi penyimpanan (misalnya, local storage provisioning) untuk aplikasi.
- Metrics Server: Mengumpulkan data metrik dari cluster yang dapat digunakan untuk autoscaling dan monitoring.
- DNS: Menyediakan layanan DNS internal untuk resolusi nama dalam cluster.
- Istio: Sebagai service mesh untuk mengatur trafik antar layanan secara lebih canggih.
- dan lain-lain

Source [Addons](https://microk8s.io/docs/addons#heading--list)

## cara mengaktifkan modul Addons

contoh cara mengaktifkan addons
```bash
microk8s enable (nama addons)
```
```bash
microk8s enable metallb
```
kalian juga bisa mematikan nya dengan menggunakan perintah disable

```bash
microk8s disable metallb
```
cara cek list yang tersedia dan terinstall

```bash
microk8s status
```
## Manfaat Addons MicroK8s
- Kemudahan Integrasi: Menambahkan fitur penting tanpa konfigurasi manual yang kompleks.
- Pengelolaan yang Sederhana: Cukup aktifkan atau nonaktifkan addon sesuai kebutuhan proyek.
- Fleksibilitas: Sesuaikan cluster dengan menambahkan atau menghapus modul sesuai dengan beban kerja dan kebutuhan operasional.

:rocket: selamat kalian telah belajar bagaimana caranya mengginstall addons di microk8s :smile:
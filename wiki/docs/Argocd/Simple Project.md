# Argocd Project

project ini sangat mudah untuk di pelajari untuk pemula 

buka dashboard argocd lalu click new app

![Dashboar](https://cdn.peceldev.my.id/images/1741344464617-ydaff8.webp)

buat nama untuk project kalian, nama harus tanpa sepasi

![General](https://cdn.peceldev.my.id/images/1741345887097-jfkuls.webp)

### Prune Resources
Fitur ini memastikan bahwa resource (seperti Pod, Service, atau ConfigMap) yang tidak didefinisikan lagi di manifest Git akan dihapus secara otomatis dari cluster.

### Self Heal
Fitur ini memungkinkan ArgoCD untuk memantau cluster dan secara otomatis memperbaiki resource yang menyimpang dari definisi di Git.

tambahkan repository deployment poject kalian atau kalian bisa juga memakai github saya untuk testing

```bash
https://github.com/teknik-github/argocd-test.git
```

![Source](https://cdn.peceldev.my.id/images/1741345905406-g0v9s6.webp)

jika path di github deployment berada di tempat berbeda anda bisa menambahkan nya ./(path anda)

dan di tahap terahir untuk destination ubah agar seperti ini. dan untuk namespace sesuaikan dengan dengan project kalian atau default

![Destination](https://cdn.peceldev.my.id/images/1741347943152-6xq284.webp)

lalu create

<p align="center">
  <img src="https://cdn.peceldev.my.id/images/1741348502905-ythgc6p.webp" alt="Create"/>
</p>

buka argocd-test kalinan nanti akan terlihat seperti ini

![Final](https://cdn.peceldev.my.id/images/1741353546133-5m29z.webp)

:rocket: selamat anda sudah berhasil membuat project sederhana dari argocd
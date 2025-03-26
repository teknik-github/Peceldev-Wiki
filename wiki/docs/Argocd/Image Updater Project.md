# Image Updater Project

Install Argocd dan Argocd image updater untuk memulai sesi ini

Install Argocd image updater
```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj-labs/argocd-image-updater/stable/manifests/install.yaml
```
Install Argocd
```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

Buat Repository untuk Deployment nya lalu lakukan push ke dalam github 



Tambahkan secret untuk repository di github khusus untuk repo tersebut


<p align="center">
  <iframe
    width="560"
    height="315"
    src="/img/2025-03-24 15-11-37.mp4"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
  </iframe>
</p>



Tambahkan secret agar argocd dapat menggakses git repository

```bash
kubectl -n argocd create secret generic git-creds \
  --from-literal=username=Username github \
  --from-literal=password=tambahkan secret di sini
```

![](https://cdn.peceldev.my.id/images/1742798643801-rkeieh.webp)

Tambahkan [New App](http://localhost:3000/docs/Argocd/Simple%20Project) terlebih dahulu setelah itu edit deployment yang ada di argocd

![](https://cdn.peceldev.my.id/images/1742798461458-gdwl2l.webp)

setelah itu tambahkan anotations di bawah ini

```bash
argocd-image-updater.argoproj.io/image-list mywebapp=username/nama repo
argocd-image-updater.argoproj.io/mywebapp.force-update true
argocd-image-updater.argoproj.io/mywebapp.interval 1m
argocd-image-updater.argoproj.io/mywebapp.update-strategy alphabetical
argocd-image-updater.argoproj.io/write-back-method git:secret:argocd/git-creds
```
Untuk lebih lengkap nya kalian bisa click ini [update-startegy](https://argocd-image-updater.readthedocs.io/en/stable/basics/update-strategies/) atau ini [Mastering Argocd image updater](https://www.cncf.io/blog/2024/11/05/mastering-argo-cd-image-updater-with-helm-a-complete-configuration-guide/)

![](https://cdn.peceldev.my.id/images/1742798498179-c2mqm.webp)

Pastikan logs Argocd image updater menjadi seperti ini

![](https://cdn.peceldev.my.id/images/1742804391585-kn8dc.webp)

Dan lihat apakah image nya terupdate, jika terupdate argocd akan melakukan deploy ulang dan ada penambahan file baru di repository

![](https://cdn.peceldev.my.id/images/1742804559021-cqyi3a.webp)

![](https://cdn.peceldev.my.id/images/1742804675555-ysjs3h.webp)

Tunggu sekitar 1-2 Menit agar argocd dapat mendeteksi perubahan tersebut
# Arsitektur Argocd

ini adalah arsitektur yang di gunakan oleh argocd, diagram ini menunjukkan pola GitOps di mana sumber kebenaran (source of truth) berada di dalam Git, lalu perubahan (misalnya pull request yang di-merge) memicu alur otomatis untuk melakukan deploy ke Kubernetes

![Argocd](https://cdn.peceldev.my.id/images/1741241173547-3e02f.webp)

## Penjelasan
1. Git Repository & PR Merge

Semua definisi aplikasi (misalnya manifests Kubernetes atau helm chart) berada di repositori Git.
Saat ada pull request di-merge, sebuah webhook dikirim untuk memberi tahu sistem bahwa ada perubahan baru.

2. Webhook Event

Webhook dari Git menginformasikan ke sistem (misalnya Argo CD, Flux, dsb.) bahwa terjadi pembaruan konfigurasi.
Sistem kemudian memeriksa perbedaan (diff) antara konfigurasi di Git dengan yang ada di cluster.

3. User & CI Tools

User bisa berinteraksi melalui UI atau CLI (misalnya untuk memantau status, rollback, dsb.).
Ada pula alat CI seperti Jenkins, CircleCI, Travis (ikon-ikon di sebelah kiri) yang dapat memicu atau berkomunikasi dengan API Server melalui protokol gRPC/REST. Ini bisa dipakai untuk mengotomatiskan build atau test sebelum menyerahkan ke sistem GitOps.

Referensi [Argocd](https://argo-cd.readthedocs.io/en/stable/)
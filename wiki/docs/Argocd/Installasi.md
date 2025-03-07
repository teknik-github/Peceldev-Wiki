---
sidebar_position: 1
---

# Argocd

ArgoCD adalah alat  continuous deployment (CD) yang digunakan untuk menerapkan aplikasi Kubernetes. ArgoCD menggunakan Git sebagai sumber code nya untuk mengotomatiskan penerapan aplikasi dan manajemen siklus hidupnya

### Fitur ArgoCD: 
- Menyinkronkan sumber daya Kubernetes dengan repositori Git
- Membandingkan konfigurasi aplikasi yang sedang berjalan   dengan konfigurasi yang baru
- Memberi tahu pengguna untuk menyelaraskan status yang diinginkan dan yang aktif
- Memvisualisasikan masalah penerapan
- Mendeteksi dan memperbaiki penyimpangan konfigurasi
- Mengelola konfigurasi infrastruktur dan pembaruan aplikasi dalam satu sistem

## Instalasi

Code di bawah ini adalah code original argocd
```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```
atau kalian bisa menggunakan code yang sudah saya modifikasi seperti di penjelasan code 

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/teknik-github/argocd-loadbalancer/refs/heads/main/argocd.yaml
```
untuk mengetahui password argocd kalian bisa menjalankan ini

```bash
kubectl exec pod -- argocd admin initial-password
```
## Penjelasan Code

ganti bagian ini dan sesuaikan dengan kebutuhan kalian untuk mengaccess argocd
```bash
spec:
  ports:
  - name: http
    port: 80
    protocol: TCP
    targetPort: 8080
  - name: https
    port: 443
    protocol: TCP
    targetPort: 8080  
  type: LoadBalancer
```
jika kalian menggunakan `Loadbalancer` seperti `Metallb` anda dapat membiarkan code tersebut atau jika kalian inggin menggunakan static ip Loadbalancer kalian bisa menggunakan `externalIPs`
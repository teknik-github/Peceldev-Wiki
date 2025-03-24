# Argocd Image Updater

## 🌟 **Apa Itu Argo CD Image Updater?**
**Argo CD Image Updater** adalah komponen tambahan untuk [Argo CD](https://argo-cd.readthedocs.io/) yang bertugas **memantau update image container** (seperti Docker image) di registry (Docker Hub, GitHub Container Registry, dll.) dan **secara otomatis mengupdate manifest Kubernetes** di Git repository. Dengan ini, Argo CD akan langsung menerapkan perubahan ke cluster sesuai prinsip **GitOps**.

---

## 🚀 **Fitur Utama**
1. **Auto-Deteksi Versi Baru**  
   - Pantau tag image berdasarkan semver (`v1.2.3`), `latest`, atau regex kustom.  
   - Support registry: Docker Hub, Quay, ECR, GCR, GitHub Packages, dll.  
2. **Strategi Update Fleksibel**  
   - `semver`: Update ke versi terbaru yang memenuhi constraint (e.g., `^1.0.0`).  
   - `latest`: Update ke tag `latest`.  
   - `digest`: Update berdasarkan hash image terbaru.  
3. **GitOps Integration**  
   - Commit perubahan ke Git repository (misal: GitHub, GitLab).  
   - Argo CD otomatis sync perubahan ke cluster.  
4. **Keamanan & Kontrol**  
   - Batasi update berdasarkan namespace/label.  
   - Signature verification (jika registry mendukung cosign).  
5. **Notifikasi**  
   - Kirim alert ke Slack, Email, atau webhook saat terjadi update.  

---

## 🎯 **Kapan Menggunakan Argo CD Image Updater?**
- Tim yang ingin **otomatisasi CI/CD** tanpa manual update manifest YAML.  
- Aplikasi dengan banyak microservices yang perlu update image sering.  
- Lingkungan **multi-cluster** yang konsisten via Git.  
- Hindari **downtime** dengan strategi canary/rollback terintegrasi.  

---

## 🛠️ **Cara Kerja**
```mermaid
graph LR
  A[Container Registry] -->|Deteksi Image Baru| B[Argo CD Image Updater]
  B -->|Update Manifest di Git| C[Git Repository]
  C -->|Sync Perubahan| D[Argo CD]
  D -->|Deploy ke| E[Kubernetes Cluster]
```

## 🆚 **Proxmox vs VMware vSphere**
| **Tool**          | Argo CD Image Updater                     | Flux Image Automation            |
|---------------------|--------------------------------|---------------------------|
| Integrasi Argo CD             | ✅ Native     | ❌ (Butuh Flux)          |
| Strategi Update     | SemVer, Regex, Latest            | SemVer                    |
| Write-Back ke Git   | ✅                        | ✅      |
| Multi-Registry             | ✅           | ✅ (Berbayar)           |
| Kompleksitas   | Menengah                   | Tinggi
---


## :wrench: Installasi

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj-labs/argocd-image-updater/stable/manifests/install.yaml
```
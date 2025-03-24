# Proxmox VE: Platform Virtualisasi Open-Source untuk Server dan Homelab

## 🌟 **Apa Itu Proxmox?**
**Proxmox Virtual Environment (VE)** adalah sistem virtualisasi *open-source* berbasis **Debian Linux** yang menggabungkan *KVM (Kernel-based Virtual Machine)* untuk mesin virtual (VM) dan **LXC** untuk container. Dirancang sebagai *Type 1 hypervisor*, Proxmox cocok untuk *on-premise server*, homelab, hingga infrastruktur enterprise.

---

## 🚀 **Fitur Utama Proxmox VE**
1. **Virtualisasi & Container**  
   - Dukungan penuh untuk **VM (KVM)** dan **Linux Container (LXC)**.  
   - GPU Passthrough untuk akselerasi grafis/hitung.  

2. **Web-Based Management**  
   - Antarmuka web intuitif untuk manajemen cluster, storage, dan backup.  
   - API RESTful untuk integrasi dengan tools DevOps (Ansible, Terraform).  

3. **Clustering & High Availability**  
   - Buat cluster hingga 32 node dengan HA (failover otomatis).  
   - Live Migration VM antar node tanpa downtime.  

4. **Storage Fleksibel**  
   - Support **ZFS**, Ceph, NFS, iSCSI, GlusterFS, dan lokal storage.  
   - Thin Provisioning untuk optimasi ruang disk.  

5. **Backup & Restore**  
   - Backup VM/container ke lokal, NFS, atau cloud (S3, PBS).  
   - Schedule backup otomatis dengan retensi waktu.  

6. **Networking**  
   - Software-Defined Networking (SDN) dengan VLAN, bond, bridge.  
   - Firewall berbasis GUI dengan IPv4/IPv6 support.  

---

## 🎯 **Kapan Menggunakan Proxmox?**
- **Homelab**: Hosting VM/container untuk belajar DevOps, jaringan, atau development.  
- **Data Center**: Alternatif VMware/Hyper-V dengan biaya lebih rendah.  
- **Hybrid Cloud**: Integrasi dengan cloud publik (AWS, GCP) via VPN.  
- **Edge Computing**: Deploy aplikasi di lokasi terdistribusi.  

---

## 🆚 **Proxmox vs VMware vSphere**
| **Aspek**          | Proxmox VE                     | VMware vSphere            |
|---------------------|--------------------------------|---------------------------|
| Lisensi             | Gratis (Community Edition)     | Berbayar (Mahal)          |
| Hypervisor Type     | Type 1 (Bare-metal)            | Type 1                    |
| Container Support   | ✅ LXC                        | ❌ (Butuh Photon OS)      |
| Storage             | ZFS, Ceph, NFS, dll.           | VSAN (Berbayar)           |
| High Availability   | ✅ Built-in                   | ✅ (Enterprise Edition)   |
| Learning Curve      | Menengah (Linux-based)         | Lebih mudah untuk admin Windows |
---


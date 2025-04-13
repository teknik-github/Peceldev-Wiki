# 🖥️ Cara Install Grafana, Prometheus, dan Node Exporter di Linux

Panduan lengkap untuk monitoring server menggunakan **Prometheus**, **Node Exporter**, dan **Grafana**.

---
![](https://cdn.peceldev.my.id/images/1744475344089-mg1gb.webp)
---
## 📦 Step 1: Install Node Exporter

Node Exporter digunakan untuk mengumpulkan metrik sistem (CPU, memory, disk, network).

### 🔽 Download Node Exporter

Ganti `<VERSION>` dengan versi yang kamu mau (contoh: `1.7.0`):

```bash
wget https://github.com/prometheus/node_exporter/releases/download/v<VERSION>/node_exporter-<VERSION>.linux-amd64.tar.gz
tar xvfz node_exporter-*.tar.gz
cd node_exporter-*.linux-amd64
sudo cp node_exporter /usr/local/bin/
```

### ⚙️ Buat Service Systemd

```bash
sudo nano /etc/systemd/system/node-exporter.service
```

```bash
# /etc/systemd/system/node-exporter.service
[Unit]
Description=Node Exporter
After=network.target

[Service]
User=nobody
ExecStart=/usr/local/bin/node_exporter
Restart=always

[Install]
WantedBy=multi-user.target
```

### ▶️ Jalankan Node Exporter

```bash
sudo systemctl daemon-reload
sudo systemctl enable node-exporter
sudo systemctl start node-exporter
```

### 📦 Step 2: Install Prometheus
Prometheus digunakan untuk menarik data dari Node Exporter dan menyimpannya.

🔽 Download Prometheus

```bash
wget https://github.com/prometheus/prometheus/releases/download/v<VERSION>/prometheus-<VERSION>.linux-amd64.tar.gz
tar xvf prometheus-*.tar.gz
cd prometheus-*.linux-amd64
sudo cp prometheus /usr/local/bin/
sudo mkdir -p /etc/prometheus
```
📝 Konfigurasi Prometheus

```bash
sudo nano /etc/prometheus/prometheus.yml
```

```bash
# /etc/prometheus/prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: node
    static_configs:
      - targets: ['localhost:9100']
```

⚙️ Buat Service Systemd

```bash
sudo nano /etc/systemd/system/prometheus.service
```

```bash
# /etc/systemd/system/prometheus.service
[Unit]
Description=Prometheus Monitoring
After=network.target

[Service]
User=userkamu
Group=prometheus
ExecStart=/usr/local/bin/prometheus \
  --config.file=/etc/prometheus/prometheus.yml

Restart=on-failure

[Install]
WantedBy=multi-user.target
```

▶️ Jalankan Prometheus

```bash
sudo systemctl daemon-reload
sudo systemctl enable prometheus
sudo systemctl start prometheus
```

### 📊 Step 3: Install Grafana
Grafana digunakan untuk membuat dashboard dari data Prometheus.

🔽 Install Grafana
Untuk Debian/Ubuntu:
```bash
sudo apt-get install -y apt-transport-https software-properties-common wget

#Import the GPG key:
sudo mkdir -p /etc/apt/keyrings/
wget -q -O - https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /etc/apt/keyrings/grafana.gpg > /dev/null

#To add a repository for stable releases, run the following command:
echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list

#To add a repository for beta releases, run the following command:
echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com beta main" | sudo tee -a /etc/apt/sources.list.d/grafana.list

# Updates the list of available packages
sudo apt-get update

# Installs the latest OSS release:
sudo apt-get install grafana
```

▶️ Jalankan Grafana
```bash
sudo systemctl enable grafana-server
sudo systemctl start grafana-server
```

✅ Akses Dashboard
- Grafana: ``http://<IP-Server>:3000``
- Default login: ``admin / admin``
- Prometheus: ``http://<IP-Server>:9090``
- Node Exporter: ``http://<IP-Server>:9100/metrics``

🎯 Tips Akhir
- Tambahkan Prometheus sebagai data source di Grafana.
- Import dashboard ID populer: 1860 (Node Exporter Full).
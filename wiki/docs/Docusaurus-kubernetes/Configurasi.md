# Docusaurus Kubernetes

Ini adalah configurasi untuk Docusaurus kubernetes sederhana

### Deploymen.yaml
```bash
apiVersion: apps/v1
kind: Deployment
metadata:
  name: wiki-gitaction
spec:
  selector:
    matchLabels:
      app: wiki-gitaction
  template:
    metadata:
      labels:
        app: wiki-gitaction
    spec:
      containers:
      - name: wiki-gitaction
        image: bitnami/node
        command: ["/bin/sh", "-c", "npm run serve"]
        resources:
          limits:
            memory: "1024Mi"
        ports:
        - containerPort: 3000
        volumeMounts:
          - name:  wiki-volume
            mountPath: /app
      volumes:
        - name:  wiki-volume
          hostPath:
            path: /home/ubuntu/kubernetes/wiki-gitaction/wiki
```

## :rocket: Penjelasan code

### Deployment.yaml
code ini di gunakan untuk menjalankan Docusaurus di saat pods sudah berjalan 
```bash
 command: ["/bin/sh", "-c", "npm run serve"]
```
`volumeMounts` digunakan untuk memounting dari `volumes` yang berada di luar

container :arrow_right: volumemounts :arrow_right: /app :left_right_arrow: volumes :arrow_right: HostPath :arrow_right: /home/ubuntu/kubernetes/wiki-gitaction/wiki

```bash
        resources:
          limits: #limits memory yang di apakai pods
            memory: "1024Mi"
        ports:
        - containerPort: 3000
        volumeMounts:
          - name:  wiki-volume
            mountPath: /app
      volumes:
        - name:  wiki-volume
          hostPath:
            path: /home/ubuntu/kubernetes/wiki-gitaction/wiki
```

### Service.yaml

Service ini di gunakan agar client dapat mengaccess website yang berada di kubernetes 

```bash
---
apiVersion: v1
kind: Service
metadata:
  name: wiki-service
spec:
  selector:
    app: wiki-gitaction
  ports:
  - port: 8081 #access port ini
    targetPort: 3000
  externalIPs:
  - 192.168.20.25
```
untuk bagian ```externalIPs``` anda dapat menggantinya dengan Internal-Ip Node

```bash
kubectl get node -o wide
```

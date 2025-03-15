# Filebrowser Kubernetes

### deployment.yaml
```bash
apiVersion: apps/v1
kind: Deployment
metadata:
  name: filebrowser
spec:
  selector:
    matchLabels:
      app: filebrowser
  template:
    metadata:
      labels:
        app: filebrowser
    spec:
      containers:
      - name: filebrowser
        image:  filebrowser/filebrowser
        resources:
          limits:
            memory: "128Mi"
            cpu: "500m"
        ports:
        - containerPort: 80
        volumeMounts:
        - name: filebrowser
          mountPath: /srv
        - name: filebrowser-db
          mountPath: /database.db
      volumes:
        - name:  filebrowser
          hostPath:
            path: /home/ubuntu/kubernetes
        - name: filebrowser-db
          hostPath:
            path: /home/ubuntu/kubernetes/filebrowser/filebrowser.db
```

### Service.yaml
```bash
apiVersion: v1
kind: Service
metadata:
  name: filebrowser-service
spec:
  selector:
    app: filebrowser
  ports:
  - port: 8080
    targetPort: 80
  externalIPs:
  - 192.168.20.24
```
## Penjelasan
ganti path `name: filebrowser` agar filebrowser dapat membaca local storage kalian, `name: filebrowser-db` dengan lokasi dimana kalian inggin meletakan database `filebrowser`
```bash
volumes:
        - name:  filebrowser
          hostPath:
            path: /home/ubuntu/kubernetes
        - name: filebrowser-db
          hostPath:
            path: /home/ubuntu/kubernetes/filebrowser/filebrowser.db
```
>NOTE: untuk filebrowser.db kalian harus membuatnya secara manual

sesuaikan `externalIPs` dengan ip yang kalian punya
```bash
externalIPs:
  - 192.168.20.24
```
# Simple Project
Jalankan Semua configurasi yang ada di bawah ini di kubernetes kalian 

Routers.yaml
```bash
apiVersion: v1
kind: Service
metadata:
  name: app-service
spec:
  selector:
    app: my-app
    version: green
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: "LoadBalancer"
```
>Note: untuk type di Service sesuaikan dengan configurasi kubernetes kalian

Green.yaml
```bash
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-green
  labels:
    app: my-app
    version: green
spec:
  selector:
    matchLabels:
      app: my-app
      version: green
  template:
    metadata:
      labels:
        app: my-app
        version: green
    spec:
      containers:
      - name: app
        image: nginx:1.23
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
```
Jalankan ini di terminal kalian (Green) untuk mengidentifikasi mana yang Green dan Blue
```bash
kubectl exec podsName -- bash -c 'echo "<h1>Green V1.23</h1>" >> /usr/share/nginx/html/index.html'
```

Blue.yaml
```bash
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-blue
  labels:
    app: my-app
    version: blue
spec:
  selector:
    matchLabels:
      app: my-app
      version: blue
  template:
    metadata:
      labels:
        app: my-app
        version: blue
    spec:
      containers:
      - name: app
        image: nginx:1.21
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
```
Blue
```bash
kubectl exec PodName -- bash -c 'echo "<h1>Blue V1.21</h1>" >> /usr/share/nginx/html/index.html'
```

## Penjelasan

awal membuka web tersebut akan ada tulisan seperti ini

![Blue](https://cdn.peceldev.my.id/images/1741402221832-04rmoej.webp)

Jika kalian mengganti Version di Router menjadi sepertini

![Route](https://cdn.peceldev.my.id/images/1741402338236-1vdt58.webp)

jika router tersebut di ganti router akan melakukan pemindahan service, yang semula di Blue di pindahkan Di Green dengan Versi terbaru

![Green](https://cdn.peceldev.my.id/images/1741402483340-uwfveo.webp)

:rocket: Selamat kalian telah mempelajari apa itu blue and green deployment, ini hanyalah contoh sederhana selebihnya mungkin lebih kompleks dari ini. :smile:
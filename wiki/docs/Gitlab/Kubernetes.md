# Kubernetes
sebelum mamasuki code utama harap baca `penjelasan` untuk memahami code tersebut
## Penjelasan
harap ganti bagian ini `PASSWORD` dan `EMAIL` untuk gitlab, untuk bagian `HOST` sesuaikan dengan ip atau alamat domain kalian
```bash
env:
          - name: GITLAB_ROOT_PASSWORD
            value: password
          - name: GITLAB_ROOT_EMAIL
            value: local@localhost.local
          - name: GITLAB_HOST
            value: 192.168.20.25
          - name: GITLAB_SSH_HOST
            value: "192.168.20.25"
```
untuk bagian ini ganti bagian path dengan lokasi dimana kalian akan meletakan `logs` `data` `config`
```bash
volumes:
        - name: gitlab-data
          hostPath:
            path: /home/ubuntu/kubernetes/gitlab-kubernetes/data
        - name: gitlab-logs
          hostPath:
            path: /home/ubuntu/kubernetes/gitlab-kubernetes/logs
        - name: gitlab-config
          hostPath:
            path: /home/ubuntu/kubernetes/gitlab-kubernetes/config
```
## Code
### Deployment.yaml
```bash
apiVersion: v1
kind: Namespace
metadata:
  name: gitlab
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: gitlab
  namespace: gitlab
  labels:
    app: gitlab
spec:
  selector:
    matchLabels:
      app: gitlab
  template:
    metadata:
      labels:
        app: gitlab
    spec:
      containers:
        - name: gitlab
          image: gitlab/gitlab-ce:latest
          ports:
            - containerPort: 80  # HTTP
            - containerPort: 22  # SSH
          volumeMounts:
            - name: gitlab-data
              mountPath: /var/opt/gitlab
            - name: gitlab-logs
              mountPath: /var/log/gitlab
            - name: gitlab-config
              mountPath: /etc/gitlab
          env:
          - name: GITLAB_ROOT_PASSWORD
            value: password
          - name: GITLAB_ROOT_EMAIL
            value: local@localhost.local
          - name: GITLAB_HOST
            value: 192.168.20.25
          - name: GITLAB_SSH_HOST
            value: "192.168.20.25"

      volumes:
        - name: gitlab-data
          hostPath:
            path: /home/ubuntu/kubernetes/gitlab-kubernetes/data
        - name: gitlab-logs
          hostPath:
            path: /home/ubuntu/kubernetes/gitlab-kubernetes/logs
        - name: gitlab-config
          hostPath:
            path: /home/ubuntu/kubernetes/gitlab-kubernetes/config
```

### Service.yaml
```bash
apiVersion: v1
kind: Service
metadata:
  name: gitlab
  namespace: gitlab
  labels:
    app: gitlab
spec: 
  ports:
    - port: 80
      targetPort: 80
      protocol: TCP
      name: http
    - port: 22
      targetPort: 22
      protocol: TCP
      name: ssh
  externalIPs:
    - 192.168.20.25 # gunakan ini jika kalian menggunakan externalIP Node
  selector:
    app: gitlab
```
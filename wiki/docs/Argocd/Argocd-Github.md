# Argocd and Github

Argocd dan Github, arsitektur ini memungkinkan kalian memanagement pods, melihat alur deployment, melakukan pengecekan terhadap pod dan Untuk github automatis melakukan sync kedalam vm/server dengan melakukan ssh

contoh alur deployment ada di `Simple Project`

## Arsitektur

Ini adalah contoh arsitektur yan bisa kalian gunakan dalam pembahasan kali ini 

![Arsitektur](https://cdn.peceldev.my.id/images/1741357504105-jo13cb.webp)

## Penjelasan

### Argocd
1. Argocd akan melakukan pengecekan apakah terdapat file deployment untuk kubernetes jika iya Argocd akan menjalankan file tersebut 
2. Jika argocd mendeteksi adanya perubahan pada file deploymen, dia akan melakukan perubahan ke dalam kubernetes pods tersebut
3. jika tahap 2 sudah di aplikasikan ke dalam kubernetes, kubernetes tersebut akan membuat poods untuk web atau aplikasi yang kalian buat di kubernets 

### Github
 
1. jika git action mendeteksi perubahan pada code, gitaction akan melakukan tugas dengan melakukan remote ke server lalu melakukan sync menggunakan gitpull
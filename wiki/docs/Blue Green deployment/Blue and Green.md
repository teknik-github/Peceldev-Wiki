---
sidebar_position: 1
---
# Blue and Green

Blue/Green Deployment adalah salah satu strategi deployment yang bertujuan meminimalkan downtime dan mengurangi risiko saat merilis versi baru aplikasi. Pada dasarnya, kalian memiliki dua lingkungan produksi yang identik—sering disebut sebagai “Blue” (versi lama) dan “Green” (versi baru)

## Arsitektur
arsitektur ini akan menjelaskan bagaimana caranya blue and green deploymen bekerja 

Didalam contoh ini Blue berperan sebagai apliaksi dengan versi yang lama 
![Blue](https://cdn.peceldev.my.id/images/1741363179126-2w7r.webp)

dan di sini Green sebagai aplikasi baru
![Green](https://cdn.peceldev.my.id/images/1741380348893-89hkza.webp)
---
#### Pengujian dan Verifikasi

Sebelum mengarahkan trafik ke “Green”, tim melakukan pengujian internal, health checks, atau uji regresi untuk memastikan bahwa versi baru berjalan sesuai harapan.

#### Switching Trafik

Jika pengujian berhasil, kalian mengarahkan trafik produksi dari “Blue” ke “Green”. Proses ini bisa dilakukan melalui load balancer, DNS switch, atau mekanisme serupa. Secara praktis, ini sering disebut cutover.

#### Rollback Mudah

Jika setelah cutover ke “Green” terjadi masalah besar, kalian dapat dengan cepat mengarahkan trafik kembali ke “Blue”. Dengan begitu, downtime minim dan pengguna tidak terlalu terdampak.
# Magic Mirror
Magic Mirror adalah proyek open-source yang memungkinkan Anda untuk membuat cermin pintar dengan berbagai informasi yang ditampilkan di atasnya. Proyek ini dibangun menggunakan teknologi web dan dapat disesuaikan sesuai kebutuhan Anda.

## Contoh Penggunaan
Berikut adalah beberapa contoh penggunaan Magic Mirror:
- Menampilkan waktu dan tanggal saat ini
- Menampilkan cuaca terkini
- Menampilkan berita terbaru
- Menampilkan pengingat dan jadwal
- Berinteraksi dengan asisten virtual
- Menampilkan foto dan video dari galeri
- Mengontrol perangkat pintar di rumah
- Menjalankan aplikasi Spotify


## Instalasi
Untuk menginstal Magic Mirror, ikuti langkah-langkah berikut:

1. **Persyaratan Sistem**
   Pastikan Anda memiliki Node.js dan npm terinstal di sistem Anda. Anda dapat memeriksa apakah sudah terinstal dengan menjalankan perintah berikut di terminal:
   ```
   node -v
   npm -v
   ```

2. **Clone Repositori**
   Clone repositori Magic Mirror dari GitHub:
   ```
   git clone https://github.com/MichMich/MagicMirror
   cd MagicMirror
   ```

3. **Instalasi Dependensi**
   Jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:
   ```
   node --run install-mm
   ```

4. **Konfigurasi**
   Salin file konfigurasi contoh dan sesuaikan sesuai kebutuhan Anda:
   ```
   cp config/config.js.sample config/config.js
   ```

5. **Menjalankan Magic Mirror**
   Setelah semua langkah di atas selesai, Anda dapat menjalankan Magic Mirror dengan perintah:
   ```
   npm start
   ```
   atau Server Only dapat menjalankan perintah:
   ```
   node --run server
   ```

## Customisasi
Anda dapat menyesuaikan Magic Mirror dengan menambahkan modul-modul yang tersedia. Modul-modul ini dapat ditemukan di direktori `modules` dalam repositori Magic Mirror. Anda juga dapat membuat modul kustom sesuai kebutuhan Anda.

### Contoh sederhana untuk customisasi

Anda dapat menambahkan modul cuaca dengan mengedit file konfigurasi `config.js` dan menambahkan kode berikut:
```javascript
{
   module: "currentweather",
   position: "top_right",
   config: {
       location: "New York",
       locationID: "5128581",  // ID kota dari OpenWeatherMap
       appid: "YOUR_OPENWEATHERMAP_API_KEY"
   }
}
```
Mengubah compliments atau kata kata yang tampil pada default MagicMirror 
````javascript
{
   module: "compliments",
   position: "lower_third",
   config: {
       compliments: {
           anytime: ["Selamat datang di Magic Mirror!", "Hari yang indah!"],
           morning: ["Selamat pagi!", "Semoga harimu menyenangkan!"],
           afternoon: ["Selamat siang!", "Jangan lupa istirahat!"],
           evening: ["Selamat sore!", "Waktunya bersantai!"]
       }
   }
}
````
Untuk path nya sendiri berada di `MagicMirror/modules/default/compliments`

Selamat! Anda sekarang telah menginstal Magic Mirror dan dapat mulai menyesuaikannya sesuai keinginan Anda. Untuk informasi lebih lanjut tentang cara menambahkan modul, mengubah tema, dan konfigurasi lainnya, silakan kunjungi [dokumentasi resmi Magic Mirror](https://magicmirror.builders/docs/).

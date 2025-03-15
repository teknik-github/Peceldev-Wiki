# Install from Source

di tutorial kali ini kita akan mencoba mengginstall ghost dari source nya langsung pastikan kalian memiliki versi node js v20 dan yarn

langkah pertama ya itu cloning souce code dari repository official di github 

```bash
git clone https://github.com/TryGhost/Ghost.git
cd Ghost
```

jika kalian belum mengginstall yarn jalankan code berikut:
```bash
npm install --global yarn
```

untuk mengginstall dependensi nya kalian jalankan
```bash
yarn setup
```

lalu untuk menjalankan ghost dalam mode development jalankan 
```bash
yarn dev
```

untuk membuka web interface nya http://localhost:2368 dan ini untuk bagian login untuk admin http://localhost:2368/ghost 
> Perhatian: di dalam tutorial ini untuk bagian database masih menggunakan SQLite yang berarti tanpa mysql,dll
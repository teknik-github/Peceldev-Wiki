---
sidebar_position: 1
---

# Docusaurus   

Docusaurus adalah kerangka kerja dokumentasi sumber terbuka yang digunakan untuk membuat situs web dokumentasi. Docusaurus dapat digunakan untuk membuat dokumentasi proyek perangkat lunak, API, dan konten teknis lainnya

## Requirements

- Node.js v18.0 atau lebih rendah (kamu bisa mengecek versi Node.js dengan `node -v`) kamu dapat menggunakan [nvm]
  untuk mengelola versi Node.js.


## Installation
jalan perintah berikut untuk membuat website baru dengan Docusaurus dengan extensi javascript

```bash
npx create-docusaurus@latest my-website classic
```
jika kamu ingin menggunakan typescript, kamu bisa menggunakan perintah berikut
```bash
npx create-docusaurus@latest my-website classic --typescript
```

## Project structure

jika kamu memilih clasic template dan kamu memberi nama ```my-website```
kamu dapat melihat file yang sudah di generate di dalam ```my-website```

```scructure
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

## Menjalankan dalam mode development

```bash
cd my-website
npm run start
```
Secara default jika code tersebut di jalankan di terminal Docusaurus akan secara otomatis membuka browser [http://localhost:3000](http://localhost:3000)

:rocket: Selamat anda sudah membuat website Docusaurus

## Build

```bash
npm run build
```
untuk menjalankan Docusaurus yang sudah di Build jalankan perintah berikut:

```bash
npm run serve
```
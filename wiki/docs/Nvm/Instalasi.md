# NVM

Nvm adalah sebuah aplikasi yang di gunakan untuk mengginstall node.js dengan berbagai versi dan nvm dapat dengan budah untuk mengganti 

## Instalasi

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

jika instalasi nvm sudah selesai kalian bisa mencoba untuk mengginstall node nya

```bash
nvm install node
```

atau kalian bisa mengginstall versi node yang lain nya
```bash
nvm install vX.Y.Z
```
`nvm list` di gunakan untuk melihat apa saja node version yang kalian punya

`nvm alias default vX.Y.Z` di gunakan untuk menjadikan versi node tersebut menjadi default

untuk memilih node mana yang inggin kalian pakai gunakan
```bash
nvm use vX.Y.Z
```
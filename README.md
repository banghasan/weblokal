## Template Electron

Untuk menjalankan web lokal, saya pakai untuk hasil SSG (Static Sites Generator) - seperti Hugo, Jekyll, Vuepress, Stelve, dlsb.

Dengan begitu, kita bisa akses website lokal secara portable.

Hasil berupa file `.deb` atau `.rpm` siap diinstall ke OS. Yang diletakkan pada folder `./out`

Jika ingin hasil berupa `AppImage` yang berisfat portable (klik jalan tanpa install), bisa lihat materi [appnativefy banghasan](https://www.banghasan.com/post/2021/09/07/appnativefy/)

## Pemakaian

### Clone

```sh
git clone git@github.com:banghasan/weblokal.git
```

### Dependecy

Install dependency nya. Aku pakai pnpm:

```
pnpm install
```

### Jalankan

Test coba dijalankan

```
pnpm start
```

### Build

```sh
pnpm run make
```

## Setting

Pastikan ada folder `./public` atau sesuaikan pada `main.js`

Misal terjadi error, entah saat start atau build. Cobain ini:

```
pnpm exec electron-forge import
```

## To Do

- [ ] Belum sukses build versi Windows
- [ ] Pengaturan window nya biar pas

## Referensi

Jika kurang jelas bisa dibaca [sumber dokumentasinya](https://www.electronjs.org/docs/tutorial/quick-start).
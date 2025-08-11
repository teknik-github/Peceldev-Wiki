# Wifi Attack with ESP32
Wifi sering kali di gunakan oleh semua perangkat yang terhubung ke jaringan, termasuk ESP32. Dengan kemampuannya untuk terhubung ke jaringan wifi, ESP32 dapat digunakan untuk melakukan berbagai serangan terhadap jaringan wifi.

### Disclaimer
Dokumen ini hanya untuk tujuan pendidikan dan penelitian. Penulis tidak bertanggung jawab atas penyalahgunaan informasi ini. Harap gunakan pengetahuan ini dengan bijak dan etis.

## Installasi
1. Persiapkan alat dan bahan yang diperlukan, seperti:
   - ESP32
   - Kabel USB
   - Komputer dengan Arduino IDE terinstal

2. Hubungkan ESP32 ke komputer menggunakan kabel USB.

3. Download [ESP-32-Penetration-Tooll](https://github.com/risinek/esp32-wifi-penetration-tool) atau dapat menggunakan perintah berikut

```bash
git clone https://github.com/risinek/esp32-wifi-penetration-tool.git
```
4. Download [esptool.py](https://github.com/espressif/esptool) dan simpan di direktori yang sama dengan firmware ESP32.

5. Setelah itu gunakan esptool.py untuk mem-flash firmware ke ESP32 dengan perintah berikut

```bash
esptool.py -p /dev/ttyS5 -b 115200 --after hard_reset write_flash --flash_mode dio --flash_freq 40m --flash_size detect 0x8000 build/partition_table/partition-table.bin 0x1000 build/bootloader/bootloader.bin 0x10000 build/esp32-wifi-penetration-tool.bin 
```
6. Atau dapat menggunakan aplikasi [ESP32-Download-tools](https://docs.espressif.com/projects/esp-test-tools/en/latest/esp32/production_stage/tools/flash_download_tool.html) 
   - Buka aplikasi ESP32 Download Tools
   - Pilih file `bootloader.bin`, `partition-table.bin`, dan `esp32-wifi-penetration-tool.bin`
   - Pilih port yang sesuai dengan ESP32 Anda
   - Klik "Start" untuk memulai proses flashing

7. Setelah proses flashing selesai, cabut ESP32 dari komputer dan sambungkan kembali.

8. Sambungkan Handphone ke jaringan WiFi ESP32 yang bernama `ManagementAP` dan untuk passwordnya adalah `mgmtadmin`.

9. Buka browser dan akses alamat `http://192.168.4.1` untuk mengkonfigurasi ESP32 Attacker.

![Image](https://github.com/risinek/esp32-wifi-penetration-tool/blob/master/doc/images/ui-config.png?raw=true)

Selama proses konfigurasi, Anda dapat mengatur berbagai opsi untuk serangan WiFi, seperti memilih jenis serangan, mengatur parameter, dan memulai serangan. Pastikan untuk membaca dokumentasi dan memahami setiap opsi sebelum melanjutkan.

Dokumentasi lebih lanjut dapat ditemukan di [sini](https://github.com/risinek/esp32-wifi-penetration-tool/tree/master).
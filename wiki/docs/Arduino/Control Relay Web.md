# Control relay web
code ini berisi tentang bagaimana caranya control relay atau menyalakan lampu hanya menggunakan hp menggunakan web, di code ini untuk alat nya saya menggunakan esp8266

> NOTE: kalian harus mempunyai wifi untuk menggunakan configurasi ini

### Diagram

![Diagram](https://cdn.peceldev.my.id/images/1741491159240-d03twa.webp)

### Penjelasan
pin relay di sini menjelaskan di mana kalian akan meletakan relay ke pin esp8266, kalian bisa melihatnya di esp8266

```bash
// Pin relay
#define RELAY1 D1
#define RELAY2 D2
#define RELAY3 D3
#define RELAY4 D4
```
Untuk mengaccess nya lihat di bagian localIP https://192.168.1.100

### Code


```bash
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

// Konfigurasi Wi-Fi
const char* ssid = "ssid"; // Ganti dengan nama Wi-Fi kalian
const char* password = "password"; // Ganti dengan Password Wi-Fi kalian

// Konfigurasi static IP
IPAddress localIP(192, 168, 1, 100); // Ganti sesuai dengan IP yang diinginkan
IPAddress gateway(192, 168, 1, 1);   // Ganti sesuai dengan gateway Anda
IPAddress subnet(255, 255, 255, 0); // Ganti sesuai dengan subnet Anda

// HTTP Basic Auth
const char* http_username = "username"; // Username untuk otorisasi
const char* http_password = "password"; // Password untuk otorisasi

// Pin relay
#define RELAY1 D1
#define RELAY2 D2
#define RELAY3 D3
#define RELAY4 D4

ESP8266WebServer server(80);

bool relayState[4] = {false, false, false, false};

void toggleRelay(int relayIndex, int relayPin) {
  relayState[relayIndex] = !relayState[relayIndex];
  digitalWrite(relayPin, relayState[relayIndex] ? LOW : HIGH); // Toggle relay state
}

void handleRoot() {
  if (!server.authenticate(http_username, http_password)) {
    return server.requestAuthentication();
  }

  String html = "<html>"
                "<head>"
                "<style>"
                "body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }"
                "h1 { color: #333; }"
                "button {"
                "  background-color: #007BFF;"
                "  color: white;"
                "  border: none;"
                "  padding: 15px 30px;"
                "  text-align: center;"
                "  font-size: 16px;"
                "  margin: 10px;"
                "  cursor: pointer;"
                "  border-radius: 5px;"
                "}"
                "button:active { background-color: #0056b3; }"
                "</style>"
                "<script>"
                "function toggleRelay(relay) {"
                "  fetch(`/toggle?relay=` + relay, { method: 'POST' })"
                "    .then(() => updateButtonState(relay));"
                "}"
                "function updateButtonState(relay) {"
                "  const button = document.getElementById('relay' + relay);"
                "  button.textContent = button.textContent.includes('OFF') ? 'Relay ' + relay + ': ON' : 'Relay ' + relay + ': OFF';"
                "}"
                "</script>"
                "</head>"
                "<body>"
                "<h1>ESP8266 Relay Control</h1>";

  for (int i = 0; i < 4; i++) {
    html += "<div>";
    html += "<button id=\"relay" + String(i + 1) + "\" onclick=\"toggleRelay(" + String(i + 1) + ")\">Relay " + String(i + 1) + ": " + (relayState[i] ? "OFF" : "ON") + "</button>";
    html += "</div>";
  }

  html += "</body></html>";

  server.send(200, "text/html", html);
}

void handleToggle() {
  if (!server.authenticate(http_username, http_password)) {
    return server.requestAuthentication();
  }

  if (server.hasArg("relay")) {
    int relay = server.arg("relay").toInt();
    switch (relay) {
      case 1:
        toggleRelay(0, RELAY1);
        break;
      case 2:
        toggleRelay(1, RELAY2);
        break;
      case 3:
        toggleRelay(2, RELAY3);
        break;
      case 4:
        toggleRelay(3, RELAY4);
        break;
      default:
        server.send(400, "text/plain", "Invalid relay number");
        return;
    }
    server.send(200, "text/plain", "Toggled relay " + String(relay));
  } else {
    server.send(400, "text/plain", "Relay argument missing");
  }
}

void setup() {
  // Inisialisasi pin relay
  pinMode(RELAY1, OUTPUT);
  pinMode(RELAY2, OUTPUT);
  pinMode(RELAY3, OUTPUT);
  pinMode(RELAY4, OUTPUT);

  // Set relay ke kondisi mati (logika HIGH untuk nonaktif)
  digitalWrite(RELAY1, LOW);
  digitalWrite(RELAY2, LOW);
  digitalWrite(RELAY3, LOW);
  digitalWrite(RELAY4, LOW);

  // Inisialisasi serial
  Serial.begin(115200);

  // Konfigurasi static IP
  if (!WiFi.config(localIP, gateway, subnet)) {
    Serial.println("Failed to configure static IP");
  }

  // Hubungkan ke Wi-Fi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("Connected!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  // Konfigurasi server
  server.on("/", handleRoot);
  server.on("/toggle", HTTP_POST, handleToggle);

  // Mulai server
  server.begin();
  Serial.println("Server started");
}

void loop() {
  server.handleClient();
}
```
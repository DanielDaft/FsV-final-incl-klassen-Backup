# 🚗 FsV - Deutsche Fahrschul-App (PWA)

Eine moderne Progressive Web App (PWA) für deutsche Fahrschulen zur Verwaltung von Fahrschülern und deren Ausbildungsfortschritt.

## ✨ Features

### 🎯 **Multi-Klassen-Management**
- **10 deutsche Führerscheinklassen**: B, BE, AM, A1, A2, A, C1, C1E, C, CE
- **Intelligente Klassen-Verwaltung**: Ein-/Ausblenden nicht benötigter Klassen
- **Individuelle Konfiguration** für jede Fahrschul-Spezialisierung

### 👥 **Schüler-Verwaltung**
- Vollständige Schülerdaten (Name, Adresse, Kontakt, etc.)
- Fortschrittstracking für alle Ausbildungskategorien
- Prüfungstermine und Status-Verwaltung

### 💾 **Offline-Backup-System**
- **100% offline-kompatibel** - funktioniert ohne Internet
- **iOS-optimiert** mit Web Share API
- **Multi-Klassen-Backups** mit automatischer Versionierung
- **Import/Export** im JSON-Format

### ⚙️ **PWA-Features**
- **Vollständig offline** funktionsfähig
- **Installierbar** auf allen Geräten (Add to Home Screen)
- **Dark/Light Mode** mit persistenter Einstellung
- **Responsive Design** für Desktop, Tablet, Mobile

### 🎨 **Moderne UI**
- Professionelles Design ohne Icons (clean & minimalistisch)
- Hamburger-Menu mit allen Funktionen
- Klassen-Manager mit Checkbox-System
- Deutsche Lokalisierung

## 🚀 Installation & Start

### Einfacher Start (Lokal)
```bash
# Repository klonen
git clone [repository-url]
cd FsV-app

# Direkt im Browser öffnen
open index.html
# oder
python -m http.server 8000
```

### PWA-Installation (Empfohlen)
1. Öffne `index.html` in einem modernen Browser
2. Klicke auf "Zur Startseite hinzufügen" (Browser-Notification)
3. Die App funktioniert jetzt wie eine native App

## 📱 Unterstützte Führerscheinklassen

| Klasse | Beschreibung |
|--------|-------------|
| **B** | Personenkraftwagen bis 3,5t |
| **BE** | PKW mit Anhänger bis 750kg |
| **AM** | Leichtmofas und Roller bis 45 km/h |
| **A1** | Leichtkrafträder bis 125ccm |
| **A2** | Krafträder bis 35kW |
| **A** | Krafträder ohne Beschränkung |
| **C1** | LKW bis 7,5t |
| **C1E** | LKW bis 7,5t mit Anhänger |
| **C** | LKW über 3,5t |
| **CE** | LKW mit schwerem Anhänger |

## 🔧 Technische Details

### Dateien-Struktur
```
├── index.html              # Haupt-App (HTML + CSS + JS)
├── manifest.json           # PWA Manifest
├── sw.js                   # Service Worker
├── class-manager-styles.css # Zusätzliche Styles
├── icons/                  # SVG Icons (optional)
└── README.md               # Diese Datei
```

### Technologie-Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Storage**: LocalStorage für Offline-Persistierung
- **PWA**: Service Worker + Web App Manifest
- **Design**: Responsive CSS mit CSS Grid/Flexbox

### Browser-Kompatibilität
- ✅ Chrome/Edge (Chromium) 90+
- ✅ Firefox 88+
- ✅ Safari 14+ (iOS/macOS)
- ✅ Mobile Browser (iOS/Android)

## 📊 Features im Detail

### Backup-System
- **Automatische Backup-Erinnerungen** (nach 7 Tagen)
- **Versionierte Backups** mit Zeitstempel
- **Cross-Platform Export**: 
  - Desktop: Direct Download
  - iOS: Web Share API
  - Fallback: Zwischenablage

### Klassen-Manager
- **Smart Defaults**: Wichtigste Klassen vorausgewählt
- **Multi-Select**: Mehrere Klassen gleichzeitig aktivieren
- **Persistente Einstellungen**: Konfiguration bleibt erhalten

### Offline-First
- **Vollständige Offline-Funktionalität**
- **Service Worker Caching**
- **localStorage Persistierung**
- **Graceful Online/Offline Switching**

## 🎯 Für Fahrschulen

### Spezialisierung möglich
- **PKW-Fahrschule**: Nur B, BE, AM aktivieren
- **Motorrad-Fahrschule**: A1, A2, A fokussieren  
- **LKW-Fahrschule**: C, CE, C1, C1E nutzen
- **Universal**: Alle Klassen aktivieren

### Daten-Sicherheit
- **Lokale Speicherung**: Keine Cloud-Abhängigkeit
- **Backup-Export**: Volle Kontrolle über Daten
- **DSGVO-konform**: Keine externen Server

## 🚀 Updates & Wartung

Die App aktualisiert sich automatisch über den Service Worker. 
Bei wichtigen Updates erscheint eine Benachrichtigung im Hamburger-Menu.

---

**Entwickelt für deutsche Fahrschulen** • **PWA-Technologie** • **Offline-First** • **Open Source**

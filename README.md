# 🥚 EggVinegarMixCalc - 🐛 Debug Version

**EggVinegarMixCalc** is a React Native mobile app designed to assist users in calculating optimal mixing ratios between calcium sources and vinegar-based ingredients. It features a garden-themed UI and supports Android sideload testing via APK distribution.

---

## 🚀 Features

- 🌱 Ratio calculator for eggshell + vinegar conversions  
- 🍋 Intuitive garden-inspired user interface  
- 📦 Lightweight debug-signed APK for internal testing  
- 📲 Supports sideloading and non-Play Store installs  
- 📊 Scalable, modular codebase for future expansion  
- 🎯 Built with performance and reusability in mind

---

## 📁 Project Structure

```
EggVinegarMixCalc/
├── android/                 # Native Android project folder
├── ios/                     # iOS project folder (optional)
├── src/                     # Source code and components
├── assets/                  # Images, icons, etc.
├── react-native.config.js   # Autolinking and native config overrides
├── README.md                # You're reading it 🌟
```

---

## 🔧 Getting Started

### 📦 Prerequisites

- Node.js (v18+ recommended)  
- Android Studio or physical device with USB debugging  
- React Native CLI  
- Java JDK  
- ADB (Android Debug Bridge)

### 🏗️ Install Dependencies

```bash
npm install
```

### ▶️ Start Metro Bundler

```bash
npm start
```

### 📱 Run on Android Device/Emulator

```bash
npm run android
```

---

## 📤 Sideload Testing (Debug Build)

The APK is debug-signed and ready to install manually for testing purposes.

### 🔍 APK Location

```
android/app/build/outputs/apk/release/app-release.apk
```

Rename as needed:
```
EggVinegarMixCalc-v1.0-debug.apk
```

### ✅ Installation Steps

1. Enable **Install from Unknown Sources** on your Android device  
2. Transfer the APK via email, cloud storage, or USB  
3. Tap the file to install  
4. Launch and explore the app

---

## ✍️ Development Notes

- Icons generated with [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/)
- Native module `@react-native-picker/picker` is disabled via `react-native.config.js` to avoid autolinking issues
- Project rebuilt from scratch to resolve Gradle and CMake conflicts  
- Debug builds automatically signed and installable on most Android devices

---

## 🧪 Troubleshooting

- Run `./gradlew clean` inside the `android/` folder to reset builds  
- Use `react-native.config.js` to disable problematic modules  
- Ensure the correct NDK version is installed via Android Studio

🔗 [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting)

---

## 🙌 Contributing

Pull requests welcome! Open an issue for larger changes or ideas.

Suggestions welcome for:
- Expanded conversion logic  
- Seasonal garden themes  
- Onboarding splash animation

---

## 📄 License

MIT — fork freely and help this app bloom 🌻
# 🥚 EggVinegarMixCalc - 🐛 Debug Version

**EggVinegarMixCalc** is a React Native mobile app designed to assist users in calculating optimal mixing ratios between calcium sources and vinegar-based ingredients. It features a garden-themed UI and supports Android sideload testing via APK distribution.

---

## 🚀 Features

- 🌱 Ratio calculator for eggshell + vinegar conversions  
- 🍋 Intuitive garden-inspired user interface  
- 📦 Lightweight debug-signed APK for internal testing  
- 📲 Supports sideloading and non-Play Store installs  
- 📊 Scalable, modular codebase for future expansion  
- 💰 AdMob banner integration using test ads during development  
- 🎯 Built with performance and reusability in mind

---

## 📁 Project Structure

```
EggVinegarMixCalc/
├── android/                 # Native Android project folder
├── ios/                     # iOS project folder (optional)
├── src/
│   ├── banner/              # Modular AdMob components and config
│   └── ...                  # Source code and components
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

## 📤 Sideload Testing (Release with Test Ads)

This release build is configured to show **test ads** via AdMob’s `TestIds.BANNER` for safe validation.

### 🔍 APK Location

```
android/app/build/outputs/apk/release/app-release.apk
```

> Rename for distribution:
```
EggVinegarMixCalc-v1.0-debug.apk
```

### ✅ Installation Steps

1. Enable **Install from Unknown Sources** on your Android device  
2. Transfer the APK via email, cloud storage, or USB  
3. Tap the file to install  
4. Launch and explore the app

---

## ⚙️ AdMob Integration

- Banner ads use `react-native-google-mobile-ads`
- `AdMobConfig.ts` holds unit ID, request options, and init logic
- `Banner.tsx` is a reusable ad component with dynamic sizing
- Test ads are shown using `TestIds.BANNER` regardless of build type

---

## 🧪 Troubleshooting

<details>
<summary>🧰 Developer Commands</summary>

```bash
# Clean build artifacts
./gradlew clean

# Rebuild and install to device
npx react-native run-android

# Generate debug APK for sideloading
./gradlew assembleDebug

# Generate release APK (test ads must be hardcoded)
./gradlew assembleRelease

# Start Metro server
npm start
```

</details>

- Ensure correct NDK version is installed  
- Run `gradlew clean` if build issues occur  
- Validate AdMob SDK is initialized before rendering ads

🔗 [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting)

---

## ✍️ Development Notes

- Icons generated with [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/)  
- Native module `@react-native-picker/picker` disabled via `react-native.config.js`  
- Project rebuilt from scratch to resolve Gradle and CMake conflicts  
- AdMob banners configured to render only after SDK initialization completes  
- Modular ad components live in `src/banner/`

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
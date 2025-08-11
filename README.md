# 🧪 LiquidCalcium — 🐛 Debug Version

**LiquidCalcium** is a React Native mobile app designed to help users calculate optimal mixing ratios between calcium-rich materials (like eggshells) and vinegar-based solutions. It features a garden-inspired UI, dynamic theming, and supports sideload testing via debug-signed APK distribution.

---

## 🚀 Features

- 🥚 Ratio calculator for eggshell + vinegar conversions  
- 🌿 Garden-themed, intuitive user interface  
- 🌓 Light/Dark mode toggle via modal settings  
- ⚙️ Gear icon menu with placeholder links for info and privacy policy  
- 📦 Lightweight debug APK for internal testing  
- 📲 Supports sideloading and non-Play Store installs  
- 💰 AdMob banner integration using test ads  
- 🧱 Modular, scalable codebase for future features  
- ⚡ Built for performance, clarity, and reusability  

---

## 📁 Project Structure

```
LiquidCalcium/
├── android/                 # Native Android project folder
├── ios/                     # iOS project folder (optional)
├── src/
│   ├── banner/              # Modular AdMob components and config
│   ├── components/          # Reusable UI components (e.g., GearMenu.tsx)
│   └── ...                  # Source code and logic
├── assets/                  # Images, icons, etc.
├── react-native.config.js   # Autolinking and native config overrides
├── README.md                # You're reading it 🌟
```
---

## 📦 Key Dependencies

This project uses several non-default packages to enhance functionality, styling, testing, and developer experience:

### 🧱 Core & UI Enhancements

| Package                          | Purpose                                                                 |
|----------------------------------|-------------------------------------------------------------------------|
| `react-native-paper`             | Material Design 3 components and theming                               |
| `react-native-vector-icons`      | Icon support for UI elements                                           |
| `react-native-safe-area-context` | Handles safe area insets across devices                                |
| `@react-native-picker/picker`    | Native dropdown picker (currently disabled via config)                 |

### 📊 Ads & Monetization

| Package                          | Purpose                                                                 |
|----------------------------------|-------------------------------------------------------------------------|
| `react-native-google-mobile-ads` | AdMob integration with banner support                                  |

### 🧪 Testing & Types

| Package                          | Purpose                                                                 |
|----------------------------------|-------------------------------------------------------------------------|
| `jest`, `react-test-renderer`    | Unit testing and snapshot testing                                      |
| `@types/react`, `@types/jest`    | Type definitions for React and Jest                                    |
| `@types/react-test-renderer`     | Type definitions for test renderer                                     |

### 🧹 Linting & Formatting

| Package                          | Purpose                                                                 |
|----------------------------------|-------------------------------------------------------------------------|
| `eslint`, `@react-native/eslint-config` | Code linting with React Native presets                        |
| `prettier`                       | Code formatting                                                         |

### 🛠️ Build & Tooling

| Package                          | Purpose                                                                 |
|----------------------------------|-------------------------------------------------------------------------|
| `@babel/core`, `@babel/runtime`  | Babel transpilation and runtime support                                |
| `@babel/preset-env`              | Babel preset for modern JavaScript                                     |
| `@react-native/babel-preset`     | Babel preset tailored for React Native                                 |
| `@react-native/metro-config`     | Metro bundler configuration                                            |
| `@react-native/typescript-config`| TypeScript config presets                                               |
| `typescript`                     | TypeScript language support                                             |

### 🧪 CLI & Platform Support

| Package                          | Purpose                                                                 |
|----------------------------------|-------------------------------------------------------------------------|
| `@react-native-community/cli`    | React Native CLI core                                                   |
| `@react-native-community/cli-platform-android` | Android platform CLI support                          |
| `@react-native-community/cli-platform-ios`     | iOS platform CLI support                              |
| `@react-native/new-app-screen`   | Starter screen template (optional)                                     |

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
LiquidCalcium-v1.0-debug.apk
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

## 🎨 UI & Theming

- Theme toggle available via gear icon in top-right corner  
- Modal menu allows switching between Light and Dark themes  
- Placeholder links for:
  - ℹ️ Information Page  
  - 📜 Privacy Policy  
- Modal and icon styles adapt to current theme using `react-native-paper` MD3 theming  
- Gear menu logic lives in `GearMenu.tsx` inside `src/components/`  

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
- Gear menu and modal logic modularized in `src/components/GearMenu.tsx`  
- Theme switching uses `SegmentedButtons` from `react-native-paper`  

---

## 🙌 Contributing

Pull requests welcome! Open an issue for larger changes or ideas.

Suggestions welcome for:
- Expanded conversion logic  
- Seasonal garden themes  
- Onboarding splash animation  
- Linking modal buttons to actual content pages  

---

## 📄 License

MIT — fork freely and help this app bloom 🌻
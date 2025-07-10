# 🛠️ AdMob Integration Summary for EggVinegarMixCalc

## 📄 Modified Files & Why

---

### 1. `android/settings.gradle`

- **What**: Added `google()` and `mavenCentral()` to `repositories`
- **Why**: Required to resolve AdMob SDK and related plugin dependencies

---

### 2. `android/build.gradle`

- **What**: Declared explicit versions for `com.android.tools.build`, Kotlin, and Gradle plugins
- **Why**: Prevented build failure due to missing classpath versions and ensured compatibility with AdMob

---

### 3. `android/app/build.gradle`

- **What**:
  - Added AdMob dependency: `com.google.android.gms:play-services-ads:24.4.0`
  - Applied Kotlin plugin: `org.jetbrains.kotlin.android`
- **Why**:
  - Enabled Google Mobile Ads features
  - Ensured Kotlin compatibility for `MainActivity.kt`

---

### 4. `android/app/src/main/AndroidManifest.xml`

- **What**:
  - Added `<meta-data>` for AdMob App ID
  - Used `tools:replace="android:value"` to resolve merge conflict
  - Declared `INTERNET` permission
- **Why**:
  - Required for initializing Mobile Ads SDK
  - Prevented duplicate App ID error from manifest merger
  - Allowed ad network communication

---

### 5. `MainActivity.kt`

- **What**: Initialized AdMob SDK using coroutines on a background thread
- **Why**: Ensured Ads SDK is ready before loading components — prevents render errors

---

### 6. `App.tsx`

- **What**:
  - Imported and rendered `BannerAd`
  - Switched to `BannerAdSize.BANNER` for stability
  - Centered ad with custom layout
- **Why**:
  - Displayed test ad safely
  - Avoided layout errors from adaptive size
  - Improved visual alignment in UI

---

### 7. (Optional) `app.json`

- **What**: Should declare `android_app_id` under `react-native-google-mobile-ads` if using config plugin
- **Why**: Prevents SDK startup crash in some managed workflows — warning can be safely ignored for native projects

---

Let me know if you'd like this exported as an actual `.md` file, or if you want to bundle it with code comments for team onboarding 📘🚀
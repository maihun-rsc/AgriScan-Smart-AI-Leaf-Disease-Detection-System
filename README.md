# AgriScan — Smart AI Leaf Disease Detection System

> A bilingual, offline-capable mobile application that detects tomato leaf diseases from a photograph and delivers structured, actionable agricultural guidance to farmers — in English and Hindi.

---

## The Problem

Crop disease is one of the most consistent threats to agricultural productivity in rural India. When a farmer notices something wrong with a plant, the typical path to a diagnosis involves waiting for access to an agronomist, consulting neighbours, or making an educated guess. Each of these paths is slow, unreliable, or unavailable — and by the time a correct diagnosis arrives, the disease may have spread.

The gap is not just informational. It is linguistic, economic, and infrastructural. Most available tools require internet connectivity, operate only in English, and return a class label with no guidance on what to actually do. AgriScan was built to close that gap.

---

## What AgriScan Does

A farmer opens the app, photographs a diseased leaf, and receives within seconds:

- The identified disease name
- A confidence score for the prediction
- A severity classification
- Structured guidance covering symptoms, causes, treatment, prevention, and economic impact

All of this happens on the device. No internet connection required. Available in both **English** and **Hindi**.

---

## Key Features

**AI-Powered Diagnosis** — A custom CNN model trained on the PlantVillage tomato dataset across 11 classes, converted to ONNX for on-device inference via WebAssembly.

**Fully Offline** — Every component of the system — model inference, knowledge base lookup, scan history — runs locally on the device with zero external dependencies.

**Bilingual Intelligence Engine** — A structured JSON knowledge base authored natively in both English and Hindi, covering all 11 disease classes with scientifically accurate, farmer-accessible advisory content.

**Image Quality Validation** — Built-in blur detection and lighting assessment filter out poor-quality captures before inference, protecting result reliability.

**Scan History and Profile** — Every scan is logged locally. Users can review past diagnoses and track healthy vs. diseased scan ratios over time.

**Sideloadable APK** — Distributable without the Play Store, installable via USB or Bluetooth — suitable for deployment in low-connectivity environments.

---

## Disease Classes

The model detects the following 11 classes across tomato leaf images:

| Class | Type |
|---|---|
| Late Blight | Fungal |
| Early Blight | Fungal |
| Septoria Leaf Spot | Fungal |
| Leaf Mold | Fungal |
| Powdery Mildew | Fungal |
| Target Spot | Fungal |
| Bacterial Spot | Bacterial |
| Tomato Yellow Leaf Curl Virus | Viral |
| Tomato Mosaic Virus | Viral |
| Spider Mites (Two-spotted) | Pest |
| Healthy | — |

---

## System Architecture

The application is organised into five layers, each with a defined responsibility:

```
User Interface Layer
    React + TypeScript frontend, Tailwind CSS, shadcn/ui
    Bilingual rendering, scan history, profile statistics

Application Layer
    Session management, language state, navigation routing

Processing Layer
    Image resizing (128×128), pixel normalisation, blur and lighting validation

Inference Layer
    ONNX Runtime (WebAssembly), custom CNN model
    Class prediction + confidence score extraction

Data Layer
    Local JSON knowledge base (EN + HI)
    Local scan history storage, user profile state
```

All layers execute on-device. No data leaves the device at any point.

---

## Tech Stack

| Domain | Technology |
|---|---|
| Frontend Framework | React + TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Build Tool | Vite |
| Mobile Packaging | Capacitor (Android WebView) |
| ML Framework | TensorFlow + Keras (training) |
| Inference Runtime | ONNX Runtime Web (WebAssembly) |
| Model Format | ONNX (converted from .h5) |
| Knowledge Base | Structured JSON (EN + HI) |
| Dataset | PlantVillage — Tomato Subset (Kaggle) |

---

## Machine Learning Pipeline

**Dataset**
- Source: PlantVillage Tomato subset via Kaggle
- Size: 18,000+ images across 11 classes
- Split: 80% training, 20% validation

**Preprocessing**
- Resize: 128 × 128 pixels
- Normalisation: pixel values divided by 255
- Augmentation: rotation, width/height shift, horizontal flip, zoom

**Model Architecture**
- Custom CNN — stacked Conv2D + MaxPooling layers
- Fully connected dense layers with softmax output
- Trained with Adam optimiser and categorical crossentropy loss
- 20 epochs on a GPU-enabled environment

**Performance**
- Validation Accuracy: ~95%
- Inference Time: sub-second on-device

**Deployment**
- Trained model exported from Keras (.h5) and converted to ONNX
- Executed via onnxruntime-web using WebAssembly within the Capacitor WebView

---

## Repository Structure

```
AgriScan/
├── src/                        # React + TypeScript frontend source
├── User_Interface/             # Design assets and Figma exports
├── Model_Training/             # Jupyter notebooks for CNN training
├── trained_model/              # model.h5 and model.onnx
├── Documents/                  # Project documentation
├── screenshots/                # Application screenshots
├── android/app/build/
│   └── outputs/apk/debug/      # Compiled debug APK
├── public/                     # Static assets
├── capacitor.config.json       # Capacitor configuration
├── vite.config.ts              # Vite build configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── package.json                # Dependencies and scripts
```

---

## Application Screenshots

Screenshots are available in the `screenshots/` directory of the repository.

---

## Getting Started

**Prerequisites**
- Node.js 18+
- Android Studio (for APK builds)
- Java 17+

**Install dependencies**
```bash
npm install
```

**Run in development**
```bash
npm run dev
```

**Build for Android**
```bash
npm run build
npx cap sync android
npx cap open android
```
Then build and run from Android Studio, or use `gradlew assembleDebug` for a direct APK output.

**Install the APK directly**
The pre-built debug APK is available at:
```
android/app/build/outputs/apk/debug/
```
Transfer to an Android device and install via sideloading.

---

## Target Users

- Small-scale and subsistence farmers
- Agricultural field extension officers
- AgriTech startups operating in low-connectivity rural environments
- Government agricultural advisory programmes

---

## Project Status

Deployment-ready for academic and field evaluation purposes. All inference runs locally on the device. The system is designed to be extensible — the knowledge base schema and model pipeline both support the addition of new crop types and disease classes in future iterations.

---

## Team

| Name | Role |
|---|---|
| Rananjay Singh Chauhan | Developer |
| Himanshu Gaur | Developer |
| Abhinav Mehra | Developer |

---

## License

Released for academic and educational use. Licensing terms may be updated for institutional or commercial deployment.

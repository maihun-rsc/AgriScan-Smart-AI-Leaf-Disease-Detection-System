<<<<<<< HEAD
# AgriScan: Smart Leaf Disease Detection System

**AgriScan: Smart Leaf Disease Detection System** is a project created for farmer welfare. Designed to resolve the issue of plant diseases, it uses leaf-based disease detection.

The proposed mobile application will be a tool featuring an intuitive UI with features dedicated towards:
* Educating farmers about how to prevent crop wastage.
* Ensuring a healthier and more bountiful yield.

---

## Datasets to be used

### Plant Disease Dataset
* **Source**: [Kaggle](https://www.kaggle.com/datasets/ashishmotwani/tomato)
* **Description**: The dataset contains over 20,000 images of tomato leaves with 10 diseases and 1 healthy class. Images are collected from both lab scenes and in-the-wild scenes.
* **Goal**: The objective is to develop a lightweight model that can predict tomato leaf disease and be deployed offline on a mobile app.

---

## Disease Classes

* Late_blight
* healthy
* Early_blight
* Septoria leaf spot
* Tomato Yellow Leaf Curl Virus
* Bacterial_spot
* Target_Spot
* Tomato mosaic virus
* Leaf_Mold
* Spider mites (Two-spotted spider mite)
* Powdery Mildew

---

## Key Features
* **AI-Powered Diagnosis:** Uses an ensemble of three state-of-the-art CNN models (ResNet, MobileNet, EfficientNet) for high-accuracy disease classification.
* **Offline Capability:** Performs inference directly on the device using TensorFlow Lite, ensuring functionality in areas with poor or no internet connectivity.
* **Bilingual Support:** Interface available in both **English** and **regional languages** to break linguistic barriers for farmers.
* **Real-Time Feedback:** Instant analysis of leaf images with actionable recommendations for preventive and therapeutic treatments.
* **Optimized Performance:** Uses model quantization to reduce app size (MobileNet compressed by 75% to ~3.3 MB) without sacrificing accuracy (97.45%).
* **Quality Control:** Built-in image quality checks (blur, lighting detection) to ensure accurate analysis.

---

## Tech Stack
* **Frontend / Mobile App:** Flutter & React Native (Cross-platform support for Android & iOS)
* **Machine Learning Models:**
    * **Architectures:** ResNet, MobileNet, EfficientNet
    * **Training Strategy:** Ensemble learning with a voting mechanism
    * **Deployment:** TensorFlow Lite (for on-device inference)
* **Dataset:** PlantVillage dataset (augmented with field data)
* **Image Processing:** Resizing (224x224), Normalization, Quality assessment

---

## System Architecture
The system is organized into five distinct layers to ensure efficiency and scalability:

1.  **User Interface Layer:** Built with Flutter; handles user interaction and bilingual display.
2.  **Application Layer:** Manages application logic, user login, history logs, and session management.
3.  **Processing Layer:** Prepares images for the AI model (resizing, color normalization, noise reduction).
4.  **Inference Layer:** The core engine hosting the **Ensemble Model**. It runs input through ResNet, MobileNet, and EfficientNet in parallel and aggregates results via a voting system.
5.  **Data Layer:** Local storage for disease knowledge base, treatment recommendations, and user history (offline-first approach).

---

## How It Works
1.  **Image Capture:** The farmer opens the app and captures a photo of a diseased leaf using the in-app camera with guidance overlays.
2.  **Quality Check:** The app instantly validates the image. If it is blurry or too dark, the user is prompted to retake it.
3.  **Preprocessing:** The valid image is resized to **224x224 pixels** and color-normalized to match training conditions.
4.  **Ensemble Analysis:** The image is fed into the three CNN models. Each model predicts the disease class and confidence score.
5.  **Voting & Diagnosis:** A voting algorithm combines the predictions. If the models agree (high confidence), a final diagnosis is generated.
6.  **Recommendation:** The app displays the identified disease along with a tiered list of treatments—ranging from low-cost cultural practices to chemical interventions.
7.  **Archival:** The result is saved to the local history for future reference.

---
=======
# 🌱 AgriScan: AI-Powered Bilingual Plant Disease Detection System

AgriScan is an edge-based agricultural intelligence system designed to detect plant diseases from leaf images and provide actionable, structured insights in both English and Hindi.

Unlike conventional plant disease classifiers that output only a predicted label, AgriScan functions as a knowledge-enriched decision support system built for real-world agricultural deployment.

---

## 📌 Executive Summary

AgriScan enables farmers and agricultural stakeholders to:

- Capture a photo of a plant leaf using a mobile device  
- Detect disease instantly using a trained deep learning model  
- Receive structured scientific information about the disease  
- Understand causes, symptoms, treatment, prevention, and economic impact  
- Access results in Hindi or English  
- Operate fully offline with local inference  

The system integrates:

- A trained deep learning model (TensorFlow / Keras)  
- ONNX-based optimized local inference  
- A bilingual JSON-driven knowledge engine  
- A mobile-first APK application built with TypeScript, JavaScript, and CSS  

---

## ❓ Problem Statement

Crop diseases significantly impact agricultural productivity, particularly in regions where:

- Farmers lack immediate access to agronomists  
- Scientific information is not readily accessible in local languages  
- Internet connectivity is unreliable  
- Most available tools are either cloud-dependent or English-only  

Many academic and Kaggle-style machine learning projects focus solely on classification accuracy without addressing real-world deployment, accessibility, or advisory depth.

AgriScan bridges this gap by combining AI-based detection with structured agricultural intelligence in an offline-capable system.

---

## 💡 Proposed Solution

AgriScan implements a complete edge-AI diagnostic pipeline:

1. User captures or uploads a leaf image  
2. Image is resized and normalized locally  
3. ONNX model performs inference on-device  
4. Predicted class and confidence score generated  
5. Disease metadata retrieved via bilingual JSON mapping  
6. Results rendered with severity indication and advisory guidance  

All processing occurs locally without any server or API dependency.

---

## 🏗️ System Architecture

### High-Level Workflow

| Step | Component | Description |
|-----:|-----------|-------------|
| 1 | Camera / Image Upload | User captures a leaf image using device camera or uploads from gallery |
| 2 | Image Preprocessing | Image resized to 128×128 and normalized before inference |
| 3 | ONNX Model Inference | Optimized ONNX model performs local prediction on the device |
| 4 | Class Prediction + Confidence | Model outputs predicted disease class along with confidence score |
| 5 | JSON Knowledge Engine | Disease metadata retrieved from bilingual (English/Hindi) JSON mapping |
| 6 | Bilingual UI Rendering | Final results displayed with severity, advisory, and language selection |

---

## 🧩 Architecture Components

### 1. Mobile Application Layer
- TypeScript  
- JavaScript  
- CSS  
- APK-based deployment  
- Camera integration  
- Image upload functionality  

### 2. Machine Learning Layer
- Custom CNN model (TensorFlow / Keras)  
- Model saved as `.h5`  
- Converted to ONNX format  
- Local inference execution  

### 3. Knowledge Engine
- Structured JSON-based disease database  
- English and Hindi content mapping  
- Dynamic rendering based on language selection  

### 4. UI/UX Layer
- Confidence score display  
- Severity classification (e.g., Moderate, Severe)  
- Disease explanation sections  
- Profile and scan statistics  
- Language toggle system  

---

## 🧠 Machine Learning Pipeline

### Dataset
- Source: PlantVillage (Tomato subset)  
- Total Classes: 10 (9 diseases + 1 healthy)  
- Approximate Dataset Size: 18,000+ images  
- Balanced class distribution  
- Source Platform: Kaggle  
- Description: Over 20,000 tomato leaf images from lab and real-world scenes  
- Goal: Develop a lightweight model deployable offline on mobile  

### Data Split
- Training: 80%  
- Validation: 20%  

### Image Preprocessing
- Resize: 128 × 128  
- Pixel normalization: image / 255.0  
- Data augmentation:
  - Rotation  
  - Width shift  
  - Height shift  
  - Horizontal flip  
  - Zoom  

### Model Architecture
- Custom Convolutional Neural Network (CNN)  
- Stacked Conv2D + MaxPooling layers  
- Fully connected dense layers  
- Softmax output layer  

### Training Configuration
- Framework: TensorFlow + Keras  
- Optimizer: Adam  
- Loss Function: Categorical Crossentropy  
- Epochs: 20  
- Training Environment: GPU-enabled system  

### Performance Metrics
- Validation Accuracy: ~95%  
- Precision: High across majority of classes  
- Recall: Strong detection across disease categories  
- F1-Score: Balanced and consistent  
- Confusion Matrix: Minimal inter-class overlap  
- Inference Time: Near real-time (sub-second on device)  

---

## 📱 Edge Deployment Strategy

The trained `.h5` model is converted to ONNX to enable:

- Cross-platform compatibility  
- Optimized local inference  
- Low latency prediction  
- Complete offline operation  
- Data privacy preservation  

Inference is executed locally within the application without external API calls.

---

## ✨ Application Features

### Core Functionalities
- Camera-based leaf scanning  
- Image upload option  
- Confidence percentage display  
- Severity level indicator  
- Instant diagnostic feedback  

### Knowledge-Rich Advisory Output

For each detected disease, the system provides:

- Scientific name  
- Disease history  
- Symptoms  
- Causes  
- Treatment recommendations  
- Preventive measures  
- Economic impact analysis  

This transforms the application from a classifier into a decision-support platform.

---

## 🌐 Bilingual Intelligence Engine

- English and Hindi language support  
- JSON-driven content mapping  
- Dynamic UI rendering  
- Designed specifically for rural accessibility  

---

## 👤 User Module

- Profile dashboard  
- Scan statistics tracking  
- Healthy vs. issue breakdown  
- Scan history logging  

---

## 🔍 Differentiation

### Compared to Typical Kaggle Projects

| Generic ML Demo | AgriScan |
|----------------|----------|
| Label prediction only | Structured agricultural advisory |
| Notebook-based demo | Full mobile APK application |
| Cloud inference | Local ONNX inference |
| English-only | Bilingual support |
| Research prototype | Deployment-ready system |

### Compared to Generic Plant Apps
- Offline functionality  
- Knowledge-enriched advisory output  
- Economic impact explanation  
- Multi-stakeholder design  
- Scalable crop expansion architecture  

---

## 🎯 Target Users

- Small-scale farmers  
- Agricultural startups  
- Government agricultural extension services  
- Field inspection officers  

---

## 📁 Repository Structure

```text
Agriscan/
├── model/
│   ├── model.h5
│   └── model.onnx
├── app/
│   ├── src/
│   ├── components/
│   └── assets/
├── knowledge_base/
│   ├── diseases_en.json
│   └── diseases_hi.json
├── notebook/
│   └── training_notebook.ipynb
├── apk/
│   └── Agriscan.apk
└── README.md

```

## 📸 Application Screenshots

> Screenshots are stored in the `screenshots/` directory of the repository.

The following screenshots demonstrate the functionality and user interface of the AgriScan mobile application:
<img width="975" height="2167" alt="image" src="https://github.com/user-attachments/assets/78036aec-fbd3-4af1-b0d1-59105bdc730d" />
<img width="975" height="2167" alt="image" src="https://github.com/user-attachments/assets/e6e2926a-af04-47e9-9ede-e0c5ceb04090" />
<img width="975" height="2167" alt="image" src="https://github.com/user-attachments/assets/5c54b6fc-7227-4701-a59a-3767d41157aa" />
<img width="975" height="2167" alt="image" src="https://github.com/user-attachments/assets/84d38fde-1e2b-4d6d-b2d9-2520c33565fd" />
<img width="975" height="2167" alt="image" src="https://github.com/user-attachments/assets/d19008ef-891a-456b-a8e8-1e6e8ab1565f" />
<img width="975" height="2167" alt="image" src="https://github.com/user-attachments/assets/f167a43c-d79d-4321-ae6e-968d531330ce" />
<img width="975" height="2167" alt="image" src="https://github.com/user-attachments/assets/b9c6ed02-9381-48c6-b38f-a2f00ffa2df5" />
<img width="975" height="2167" alt="image" src="https://github.com/user-attachments/assets/c63556fe-7fa5-4af2-bf35-c5b664ec352d" />
<img width="975" height="2167" alt="image" src="https://github.com/user-attachments/assets/927a1fe0-51ef-431b-8cc1-8a1b25d6eac7" />

---

## 👨‍💻 Developers

**Name:** Rananjay Singh Chauhan  
**Role:** Developer  
**LinkedIn:** https://www.linkedin.com/in/maihun-rsc 

---

## 🤝 Contributors

**Name:** Himanshu Gaur  
**Contribution Area:** Developer  
**LinkedIn:** https://www.linkedin.com/in/himanshu-gaur-305006282/  

**Name:** Abhinav Mehra  
**Role:** Developer  
**LinkedIn:** https://www.linkedin.com/in/abhinav-mehra-356a7a333 

---

## 📄 Project Status

This project is **deployment-ready** and designed for real-world agricultural use.  
All inference runs locally on the device, ensuring privacy, reliability, and usability in low-connectivity environments.

---

## 📌 Conclusion

AgriScan demonstrates how artificial intelligence can move beyond laboratory prototypes and Kaggle-style demos into **practical agricultural decision-support systems**. By combining edge AI, bilingual knowledge delivery, and offline capability, the system addresses real challenges faced by farmers and agricultural stakeholders.

The architecture is scalable, extensible, and suitable for integration with future AgriTech initiatives.

---

## 📜 License

This project is currently released for **academic and educational use**.  
Licensing terms can be updated based on institutional or organizational requirements.
>>>>>>> cda16ae256777aa1740bed69c73c153f4668c5af

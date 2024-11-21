###FemGuard: Enhancing Women's Safety Through Technology
FemGuard is an innovative cyber-physical system that leverages Artificial Intelligence (AI), Machine Learning (ML), Blockchain, and IoT to enhance women's safety and resilience. The project focuses on providing real-time safety measures, emergency response systems, and emotional support through advanced technologies.

##Table of Contents
Introduction
Features
Technologies Used
System Modules
Installation Guide
Contributing
License
Introduction

FemGuard addresses the pressing need for improved women's safety by offering a comprehensive platform that integrates:
-Real-time crime analytics.
-Emergency response systems.
-Anonymous complaint reporting.
-Psychological support through AI chatbots.
-Wearable smart devices for instant SOS alerts.

##Features

1. Safe Zone Analysis

Real-time classification of areas into safe or unsafe zones using ML algorithms.
Hotspot detection based on crime patterns.
Emergency Response System

2. Trilateration-based real-time location tracking.
Automated communication with local authorities and personal contacts during emergencies.

3. AI-Powered Chatbot
Provides emotional and psychological support to users.
Uses sentiment analysis to offer real-time stress and trauma management.

4. Wearable Smart Ring
Cost-effective IoT device for instant SOS signal transmission.

5. Complaint Portal
Multi-level reporting system categorizing incidents based on severity.
Secure, anonymous reporting with blockchain-backed encryption.

##Technologies Used
Frontend: Streamlit
Backend: Python, FastAPI
Database: MySQL
AI/ML: PyTorch, NLTK, Decision Trees, XGBoost
Blockchain: Cryptographic Hash Mapping
IoT: ESP8266 Wi-Fi Module
APIs: Google Maps, Twilio

##System Modules
1. Safe Zone Analysis:
Classifies zones as safe/unsafe based on real-time crime data and ML models.

2. Emergency Response:
Pinpoints user locations using trilateration and connects with emergency services.

3. Counseling Chatbot:
Offers emotional support through AI-driven sentiment analysis.

4. IoT Smart Ring:
Sends SOS alerts with three simple taps, integrating with FemGuard's backend.

5. Complaint Portal:
Allows secure and anonymous incident reporting with real-time tracking.

Installation Guide
Clone the Repository:

bash
Copy code
git clone https://github.com/sachin-333/nm-online-complaint-registery.git
cd Server
Install Dependencies:

bash
Copy code
pip install -r requirements.txt
Set Up Database:

Install MySQL and configure the database schema using schema.sql.
Run the Application:

bash
Copy code
streamlit run app.py
IoT Smart Ring Integration:

Configure the ESP8266 module with the provided firmware.
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (feature/your-feature-name).
Commit your changes and submit a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

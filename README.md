# IRIS — Image Steganography Tool

> Hide messages inside images. Securely. Simply. Seamlessly.

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-IRIS-8B7FD1?style=for-the-badge)](https://iris-image-steganography-tool.onrender.com/)
[![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-Web%20App-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Pillow](https://img.shields.io/badge/Pillow-Image%20Processing-3776AB?style=for-the-badge)](https://python-pillow.org/)

## Live Demo

**[Open IRIS](https://iris-image-steganography-tool.onrender.com/)**

Try IRIS directly in your browser — no installation required.

---

## Overview

IRIS is a web-based image steganography application that allows users to hide secret messages inside images and retrieve them later.

It uses **RGB Least Significant Bit (LSB) Steganography** to embed message data into the least significant bits of an image's RGB channels while keeping visual changes to the image minimal.

---

## Features

- Hide secret messages inside images
- Decode hidden messages from encoded images
- Supports Unicode and multiple languages using UTF-8
- Supports common image formats
- Uses RGB LSB steganography
- Uses an `IRIS` signature to identify encoded images
- Stores payload length for controlled decoding
- Checks image capacity before encoding
- Copy decoded messages with one click
- Responsive web interface
- Simple and minimal user interface

---

## How It Works

IRIS converts the secret message into its **UTF-8 byte representation** and then converts those bytes into a sequence of bits.

The generated bitstream contains three parts:

1. **IRIS Signature** - 32 bits
2. **Payload Length** - 32 bits
3. **Message Payload** - variable number of bits

These bits are embedded into the **least significant bits of the RGB channels** of the image.

### Encoding

During encoding, IRIS:

1. Reads the input image.
2. Converts the image to RGB format.
3. Converts the secret message into UTF-8 bytes.
4. Converts the bytes into binary bits.
5. Creates the IRIS signature and payload-length header.
6. Checks whether the image has enough capacity.
7. Embeds the generated bits into the least significant bits of the RGB channels.
8. Saves the encoded image as a PNG file.

### Decoding

During decoding, IRIS:

1. Reads the RGB least significant bits.
2. Checks for the `IRIS` signature.
3. Reads the payload length.
4. Extracts the required number of payload bits.
5. Converts the bits back into bytes.
6. Decodes the bytes using UTF-8.
7. Displays the original secret message.

---

## Capacity

Each RGB pixel provides **3 available LSBs**, one from each color channel.

Therefore:

```text
Total Capacity = Image Width × Image Height × 3 bits
```

IRIS reserves **64 bits** for the signature and payload-length header.

The remaining capacity is available for the secret message.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| **Python** | Core application logic |
| **Flask** | Web application framework |
| **Pillow** | Image processing |
| **HTML** | Web page structure |
| **CSS** | Styling and responsive design |
| **JavaScript** | Frontend interaction |
| **RGB LSB** | Steganography technique |
| **Gunicorn** | Production WSGI server |
| **Render** | Cloud deployment |

---

## Project Structure

```text
IRIS/
│
├── app.py
├── encoder.py
├── decoder.py
├── requirements.txt
├── README.md
├── .gitignore
│
├── templates/
│   ├── index.html
│   ├── encode.html
│   └── decode.html
│
├── static/
│   ├── style.css
│   ├── encode.css
│   ├── decode.css
│   ├── script.js
│   ├── script_decode.js
│   └── script_home.js
│
├── uploads/
└── outputs/
```

---

## Getting Started

### Prerequisites

Make sure you have:

- Python 3.x
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/ashritha-uddisapu/Iris-Image-Steganography-Tool.git
```

### 2. Navigate to the Project

```bash
cd Iris-Image-Steganography-Tool
```

### 3. Create a Virtual Environment

```bash
python -m venv venv
```

### 4. Activate the Virtual Environment

**Windows:**

```bash
venv\Scripts\activate
```

**macOS / Linux:**

```bash
source venv/bin/activate
```

### 5. Install Dependencies

```bash
pip install -r requirements.txt
```

### 6. Run IRIS

```bash
python app.py
```

Open:

```text
http://127.0.0.1:5000
```

To stop the application:

```text
Ctrl + C
```

---

## Usage

### Encode a Message

1. Open the **Encode** section.
2. Select an image.
3. Enter the secret message.
4. Click **Encode**.
5. Download the generated PNG image.

### Decode a Message

1. Open the **Decode** section.
2. Upload an encoded image.
3. Click **Decode**.
4. Retrieve the hidden message.

---

## Unicode Support

IRIS uses UTF-8 encoding, allowing messages containing:

- English
- Indian languages
- Other Unicode characters
- Emojis

For example:

```text
Hello 🌸
नमस्ते
```

---

## Limitations

- The encoded image should be saved as **PNG** to preserve the embedded data.
- JPEG compression can modify pixel values and may destroy hidden information.
- The amount of data that can be hidden depends on the image dimensions.
- LSB steganography does not provide encryption by itself.

> **Important:** Steganography hides the existence of information; it does not encrypt the information. For sensitive data, encryption should be used before embedding the message.

---

## Future Improvements

- Encrypt messages before embedding
- Support file-based payloads
- Add stronger steganalysis resistance
- Add password-protected encoding
- Display image capacity and remaining space
- Add scalable cloud storage
- Improve handling of large payloads

---

## Purpose

IRIS was developed as a cybersecurity-focused project to explore **information hiding, image processing, bit manipulation, and secure data communication concepts** through a practical web application.

---

## Author

**Ashritha Uddisapu**

Built with Python, Flask, Pillow, and a lot of curiosity about cybersecurity.

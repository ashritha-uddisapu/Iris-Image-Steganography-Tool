# IRIS 🌙

IRIS is a web-based image steganography application that allows users to hide secret messages inside images and retrieve them later.

It uses **RGB Least Significant Bit (LSB) Steganography** to embed message data into the least significant bits of an image's RGB channels while keeping the visual changes to the image minimal.

---

## Features

- Hide secret messages inside images
- Decode hidden messages from encoded images
- Supports common image formats
- Supports Unicode and multiple languages using UTF-8
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

1. **IRIS Signature** – 32 bits
2. **Payload Length** – 32 bits
3. **Message Payload** – variable number of bits

These bits are embedded into the **least significant bit of the RGB channels** of the image.

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

## Technology Stack

- **Python**
- **Flask**
- **Pillow**
- **HTML**
- **CSS**
- **JavaScript**
- **RGB LSB Steganography**

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
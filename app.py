from flask import Flask, render_template, request, send_from_directory, jsonify
from PIL import Image
from encoder import encode
from decoder import decode
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/encode", methods=["GET","POST"])
def encode_page():
    if request.method=="POST":
        # print("POST received")
        received_image = request.files["image"]
        # print("Image Received")
        # print(received_image)
        pil_image = Image.open(received_image)
        # print(pil_image.mode)
        # print(pil_image.getpixel((0, 0)))
        # print(pil_image.mode)
        received_message = request.form["message"]
        encoded_image =encode(pil_image.convert("RGB"),received_message)
        # print("Message Received")
        # print(received_message)
        image_name_ex = received_image.filename
        # print(image_name_ex)
        image_name = os.path.splitext(image_name_ex)
        # print(image_name[0])
        output_name = image_name[0] + "_encoded" + ".png"
        # print(output_name)
        folder_path = "outputs"
        output_path = os.path.join(folder_path,output_name)
        if isinstance(encoded_image, Image.Image):
            encoded_image.save(output_path)
        else:
            return jsonify(error=encoded_image)
        # encoded_image.save(output_path)
        return jsonify(filename=output_name)
    return render_template("encode.html")

@app.route("/decode", methods=["GET","POST"])
def decode_page():
    if request.method=="POST":
            print("POST received")
            received_image = request.files["image"]
            print("Image Received")
            #print(received_image)
            pil_image = Image.open(received_image)
            print("Image Recieved")
            pil_image = pil_image.convert("RGB")
            print("Image converted")
            decoded_message = decode(pil_image)
            print("Decode finished")
            print(decoded_message)
            return jsonify(message=decoded_message)
    return render_template("decode.html")

@app.route("/outputs/<filename>")
def send_image_browser(filename):
    return send_from_directory("outputs", filename)

if __name__=="__main__":
    app.run(debug=True)
from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/encode", methods=["GET","POST"])
def encode():
    if request.method=="POST":
        print("POST recieved")
    return render_template("encode.html")

@app.route("/decode")
def decode():
    return render_template("decode.html")

if __name__=="__main__":
    app.run(debug=True)
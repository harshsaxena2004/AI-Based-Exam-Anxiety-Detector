from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    text = request.json["text"]

    if "stress" in text:
        result = "High Anxiety"
    else:
        result = "Low Anxiety"

    return jsonify({"prediction": result})

if __name__ == "__main__":
    app.run(debug=True)

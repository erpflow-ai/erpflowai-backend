from flask import Flask, request, jsonify
from whisper import load_model
from flask_cors import CORS

model = load_model("base")

app = Flask(__name__)
CORS(app)

@app.route("/transcribe", methods=["GET"])
def transcribe():
    try:
        result = model.transcribe("controllers/genai/audiofrombase64.wav")
        return jsonify({"transcription": result["text"]})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="localhost", port=10000)

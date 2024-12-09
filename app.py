from flask import Flask, render_template, request, jsonify
import json
import os
app = Flask(__name__)
DATA_FILE = "data.json"
#JSON downL and Init
def load_data():
    if not os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'w') as f:
            json.dump([], f)
    with open(DATA_FILE) as f:
        return json.load(f)
#JSON save
def save_data(data):
    with open(DATA_FILE, 'w') as f:
        json.dump(data, f, indent=4)
#HTML Init
@app.route("/")
def index():
    return render_template("index.html")
#API read
@app.route("/api/data", methods=["GET"])
def get_data():
    data = load_data()
    return jsonify(data)
#API append
@app.route("/api/data", methods=["POST"])
def add_data():
    request_data = request.json
    date = request_data.get("date")
    min_temp = request_data.get("minTemp")
    max_temp = request_data.get("maxTemp")
    if not date or min_temp is None or max_temp is None:
        return jsonify({"error": "Visi lauki ir obligāti!"}), 400
    try:
        min_temp = float(min_temp)
        max_temp = float(max_temp)
    except ValueError:
        return jsonify({"error": "temperatūrai jābūt skaitlim!"}), 400
#Data save
    data = load_data()
    data.append({"date": date, "minTemp": min_temp, "maxTemp": max_temp})
    save_data(data)
    return jsonify({"message": "Dati veiksmīgi saglabāti!"}), 201

if __name__ == "__main__":
    app.run(debug=True)
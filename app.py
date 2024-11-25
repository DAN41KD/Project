from flask import Flask, render_template, request, jsonify
import json
import os
app = flask(__name__)
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
@app.route("/api/data")
def get_data():
    data = load_data()
    return jsonify(data)
#API append


if __name__ == "__main__":
    app.run(debug=True)
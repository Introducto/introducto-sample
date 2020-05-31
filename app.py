from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/hello', methods=['GET'])
def home():
    return 'Hello flask', 200

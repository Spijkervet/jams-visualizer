import sys
sys.path.append('../mirdata')
import os
from threading import Lock
from flask import Flask, render_template, session, request, send_from_directory, jsonify


from flask_cors import CORS

import uuid
import mirdata
import json

# Set this variable to "threading", "eventlet" or "gevent" to test the
# different async modes, or leave it set to None for the application to choose
# the best option based on installed packages.
async_mode = None

app = Flask(__name__, static_url_path='', static_folder='./client/build')

app.config['SECRET_KEY'] = 'secret!'
app.config['CUSTOM_STATIC_PATH'] = '/Users/spijkervet/Beatles'
# socketio = SocketIO(app, async_mode=async_mode, cors_allowed_origins="*")
CORS(app)

@app.route('/')
def index():
    root_dir = os.path.dirname(os.getcwd())
    path = os.path.join('client', 'build')
    return send_from_directory(path, 'index.html')

@app.route('/cdn/<path:filename>')
def custom_static(filename):
    print(filename)
    return send_from_directory(app.config['CUSTOM_STATIC_PATH'], filename)

@app.route('/list')
def list_files():
    d = {}
    for k, v in beatles_data.items():
        print(v.__dict__)
        d[k] = {
            'track_id': v.track_id, 
            'audio_path': v.audio_path,
            '_data_home': v._data_home,
            '_track_paths': v._track_paths,
            'title': v.title
            # 'jams': v.to_jams()
        }
    return jsonify(d)

if __name__ == '__main__':
    beatles_data = mirdata.beatles.load()
    app.run(host='0.0.0.0', port=6008)
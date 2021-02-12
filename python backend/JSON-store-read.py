import shutil
import os
import subprocess
import json

from flask import Flask, request
from flask_cors import CORS

pp = Flask(__name__)

cors = CORS(app)

@app.route("/store", methods=['POST', 'GET'])
def uploadToServer():

    data = {}
    data['question1'] = request.args['question1']

    with open('surveyresult.txt', 'w') as outfile:
        json.dump(data, outfile)


    return "success"


if __name__ == "__main__":
    app.run(debug=True)

import shutil
import os
import subprocess
import json

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)

cors = CORS(app)

@app.route("/store", methods=['POST', 'GET'])
def uploadToServer():

    data = {}
    with open("surveyresult.txt", "r") as file:
        data.update(json.load(file))

    user= request.args['username']
    data[user] = {}
    data[user]['Nameoftheemployee'] = request.args['Nameoftheemployee']
    print(request.args['Nameoftheemployee'])
    #data['question1'] = request.args['question1']
    data[user]['Gender']=request.args['Gender']
    print(request.args['Gender'])
    data[user]['Age'] = request.args['Age']
    print(request.args['Age'])
    data[user]['EmployeeNumber'] = request.args['EmployeeNumber']
    print(request.args['EmployeeNumber'])
    data[user]['Attrition'] = request.args['Attrition']
    print(request.args['Attrition'])
    data[user]['MaritalStatus'] = request.args['MaritalStatus']
    print(request.args['MaritalStatus'])
    data[user]['Department'] = request.args['Department']
    print(request.args['Department'])
    data[user]['JobRole'] = request.args['JobRole']
    print(request.args['JobRole'])
    data[user]['BusinessTravel'] = request.args['BusinessTravel']
    print(request.args['BusinessTravel'])
    data[user]['DistanceFromHome'] = request.args['DistanceFromHome']
    print(request.args['DistanceFromHome'])
    data[user]['PerformanceRating'] = request.args['PerformanceRating']
    print(request.args['PerformanceRating'])
    data[user]['RelationshipSatisfaction'] = request.args['RelationshipSatisfaction']
    print(request.args['RelationshipSatisfaction'])
    data[user]['JobSatisfaction'] = request.args['JobSatisfaction']
    print(request.args['JobSatisfaction'])
    data[user]['EnvironmentSatisfaction'] = request.args['EnvironmentSatisfaction']
    print(request.args['EnvironmentSatisfaction'])
    data[user]['WorkLifeBalance'] = request.args['WorkLifeBalance']
    print(request.args['WorkLifeBalance'])
    data[user]['TotalWorkingYears'] = request.args['TotalWorkingYears']
    print(request.args['TotalWorkingYears'])
    data[user]['YearsInCurrentRole'] = request.args['YearsInCurrentRole']
    print(request.args['YearsInCurrentRole'])



    with open('surveyresult.txt', 'w') as outfile:
        json.dump(data, outfile)


    return "success"


if __name__ == "__main__":
    app.run(debug=True)

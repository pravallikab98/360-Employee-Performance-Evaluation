const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Survey
let User = new Schema({
  "Name of employee you would like to evaluate": {
    type: String
  },
  "Gender": {
    type: String
  },
  "Age of the Employee": {
    type: String
  },
  "EmployeeNumber":{
    type: String
  },
  "Attrition":{
   type: String
  },
  "MaritalStatus":{
   type: String
  },
  "Department": {
    type: String
  },
  "JobRole": {
    type: String
  },

  "BusinessTravel": {
   type: String
  },
  "DistanceFromHome": {
   type: String
  },
  "PerformanceRating": {
    type: String
  },
   "RelationshipSatisfaction": {
    type: String
  },
  "JobSatisfaction": {
    type: String
  },
  "EnvironmentSatisfaction": {
    type: String
  },
  "WorkLifeBalance": {
   type: String
  },
   "TotalWorkingYears": {
   type: String
  },
  "YearsInCurrentRole": {
  type: String
  }
  },{
  collection: 'Surveyresponse'
});

module.exports = mongoose.model('Employee', User);

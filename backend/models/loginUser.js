const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let User = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  }
},{
  collection: 'Users'
});

module.exports = mongoose.model('User', User);

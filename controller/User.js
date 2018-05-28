var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  firstName: {
    type: String,
    required: [true, 'Please enter your name']
  },
  password: {
    type: String,
    required: [true, 'Please add a password']
  },
  email: { type: String, unique: true, required: true },
  meta: {
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  }     
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
import mongoose from 'mongoose';

// User model schema definition
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  savedRecipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe"
  }],
  submittedRecipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe"
  }]
},{timestamps:true});

// Create User model from schema
const User = mongoose.model('User', userSchema);
export default User;

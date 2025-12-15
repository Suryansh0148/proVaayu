const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// IMPORTANT: Never store passwords as plain text! 
// This model uses a 'select: false' flag to prevent the password from 
// being returned in queries by default.
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures only one user can register per email
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        // The select: false flag ensures the password hash is NOT returned 
        // by default when fetching user data. This is good practice.
        select: false 
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// For a real application, you would also need to implement password HASHING 
// (e.g., using bcrypt) here before saving the user.

module.exports = mongoose.model("User", UserSchema);
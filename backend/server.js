const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mongoose = require("mongoose");
const User = require("./models/User"); 
const JobApplication = require("./models/JobApplication");
const ContactMessage = require("./models/contact"); 
const app = express();
// MIDDLEWARE
app.use(cors());
app.use(express.json()); 

// connect to database
mongoose.connect("mongodb://127.0.0.1:27017/provayu")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("DB error:", err));

// storage for uploaded resumes (Multer setup)
const upload = multer({ dest: "uploads/" });


app.post("/Submit", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1. Basic Server-Side Validation
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required for registration." });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters." });
        }

        // 2. Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "An account with this email already exists." });
        }

        // 3. Create new user
        // NOTE: In a real app, you MUST HASH THE PASSWORD here (e.g., const hashedPassword = await bcrypt.hash(password, 10);)
        const newUser = new User({
            name,
            email,
            password: password, 
        });

        await newUser.save();

        // 4. Success response
        // In a real app, you would generate and return a JWT token here for authentication.
        res.status(201).json({ 
            message: "User registered successfully!", 
            user: { name: newUser.name, email: newUser.email }
        });

    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ message: "Internal server error during registration." });
    }
});




// Apply route
app.post("/apply", upload.single("resume"), async (req, res) => {
    try {
        const { name, email, jobId } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: "Resume file is required" });
        }

        const resumePath = req.file.path;

        const application = new JobApplication({
            name,
            email,
            jobId,
            resumePath
        });

        await application.save();

        res.json({ message: "Application submitted successfully!" });

    } catch (err) {
        console.error("Application error:", err);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// Contact form route
app.post("/contact", async (req, res) => {
    try {
        const { name, email, company, message } = req.body;

        // validation
        if (!name || !email || !message) {
            return res.status(400).json({ message: "Name, email and message are required" });
        }

        const newMessage = new ContactMessage({ 
            name,
            email,
            company,
            message
        });

        await newMessage.save();

        res.json({ message: "Contact message received!" });

    } catch (err) {
        console.error("Contact form error:", err);
        res.status(500).json({ message: "Something went wrong" });
    }
});


app.listen(5000, () => {
    console.log("Backend running on http://localhost:5000");
});
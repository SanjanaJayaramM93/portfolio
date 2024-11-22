const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config(); 

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Default route to handle root URL
app.get("/", (req, res) => {
    res.send("Welcome to the backend server!");
});

// Email sending route
app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send({ error: "All fields are required" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL, 
                pass: process.env.APP_PASSWORD, 
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL, 
            subject: `Portfolio Contact Form: Message from ${name}`,
            text: message,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send({ error: "Failed to send email" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

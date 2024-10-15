const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require('bcrypt');
const { userModel } = require('./models/userModel');

const app = express()

app.use(express.json())
app.use(cors())


app.post("/register", async (req, res) => {
    const { name, email, password, phone, district, pincode, state, address } = req.body;

    // Check required fields
    // if (!name || !email || !password || !phone) {
    //     return res.status(400).json({ message: "All fields are required" });
    // }

    try {
    
        const existingUser = await userModel.findOne({ email });
        const existingPhoneUser = await userModel.findOne({ phone }); // Ensure consistent naming

        if (existingUser || existingPhoneUser) {
            return res.status(400).json({ message: "User already exists with the given email or phone number." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
            phone,
            district,
            pincode,
            state,
            address
        });

       
        await newUser.save();

        res.status(201).json({ message: "User created successfully", newUser: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});





mongoose.connect("mongodb://localhost:27017/laundryCart")
    .then(() => {
        console.log("connected to mongoDB")
    })
    .catch((err) => {
        console.log(err)
    })



app.listen(8080, () => {
    console.log("server is up at 8080")
})



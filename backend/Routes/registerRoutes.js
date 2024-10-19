const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { userModel } = require('../models/userModel');

router.use(express.json());

router.post("/register", async (req, res) => {
    const { name, email, password, phone, district, pincode, state, address } = req.body;

    try {
        const existingUser = await userModel.findOne({ email });
        const existingPhoneUser = await userModel.findOne({ phone });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists with the given email." });
        }

        if (existingPhoneUser) {
            return res.status(400).json({ message: "User already exists with the given phone number." });
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
        console.error('Error during user registration:', error);
        
        if (error.code === 11000) {
            const duplicateField = Object.keys(error.keyPattern)[0];
            return res.status(400).json({message:` User already exists with the given ${duplicateField}.` });
        }

        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
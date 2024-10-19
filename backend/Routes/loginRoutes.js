const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userModel } = require('../models/userModel');
const secret = "HelloUser";


router.post('/login', async (req, res) => {
    const { email, phone, password } = req.body;

    try {
        const user = await userModel.findOne({ 
            $or: [ { email }, { phone } ] 
        });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            secret, 
            { expiresIn: '1h' }
        );

        res.status(200).json({ token, message: "Login successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;

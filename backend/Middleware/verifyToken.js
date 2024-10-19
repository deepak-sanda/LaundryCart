const jwt = require("jsonwebtoken");
const secret = "HelloUser";


const VerifyToken = async (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res
            .status(401)
            .json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (ex) {
        console.error("Invalid token:", ex.message);
        return res
            .status(401)
            .json({ message: "Invalid token. Please log in again." });
    }
};


module.exports = VerifyToken;
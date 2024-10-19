const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const RegistrationRoute = require('./Routes/registerRoutes');
const LoginRoute = require("./Routes/loginRoutes")
const VerifyToken = require("./Middleware/verifyToken") 

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", RegistrationRoute)
app.use("/",LoginRoute)
app.use("/",VerifyToken)




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



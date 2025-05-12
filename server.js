const express = require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const connectDB = require('./config/db')
const app = express()
app.use(express.json())
dotenv.config()

const userRoutes=require('./routes/userRoutes')
const bookingRoutes=require("./routes/bookingRoutes")

app.use(userRoutes)
app.use(bookingRoutes)

connectDB()


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
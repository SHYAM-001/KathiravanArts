const express = require("express")
const connectDB = require("../src/configuration/dbConfig");
const dotenv = require("dotenv");
const authRoutes = require("../src/routers/authRouter");
const cors = require('cors');


const app = express()

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'], 
};

app.use(cors(corsOptions));


dotenv.config();
connectDB;


app.use(express.json());


// Routes
// AuthRouter
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
    console.log(`server is running on: http://localhost:${PORT}`)
})
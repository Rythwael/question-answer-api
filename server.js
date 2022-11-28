const dotenv = require("dotenv");
const express = require("express");
const connectDatabase = require("./helpers/database/connectDatabase")
const routers = require("./routers/router");


//Environment Variables
dotenv.config({
    path: "./config/env/config.env"
});
//MongoDB Connection
connectDatabase();
const app = express();
const PORT = process.env.PORT;

//Routers Middleware
app.use("/api", routers);


app.get("/", (req, res) => {
    res.send("Welcome to Question-Answer API")
})


app.listen(PORT, () => {
    console.log(`Server started on ${PORT} : ${process.env.NODE_ENV}`);
})
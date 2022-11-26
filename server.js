const dotenv = require("dotenv");
const express = require("express");
const auth = require("./routers/auth");
const question = require("./routers/question");


//Environment Variables

dotenv.config({
    path: "./config/env/config.env"
});
const app = express();
const PORT = process.env.PORT;

//Routers Middleware
app.use("/api/auth", auth);
app.use("/api/questions", question);


app.get("/", (req, res) => {
    res.send("Welcome to Question-Answer API")
})


app.listen(PORT, () => {
    console.log(`Server started on ${PORT} : ${process.env.NODE_ENV}`);
})
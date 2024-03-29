const mongoose = require("mongoose");
const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("MongoDB Connection Succesful");
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = connectDatabase;
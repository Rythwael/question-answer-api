const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.send("Question HomePage")
});
router.get("/register", (req, res) => {
    res.send("Auto Register")
});
module.exports = router;
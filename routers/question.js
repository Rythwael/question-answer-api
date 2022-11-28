const express = require("express");
const router = express.Router();
const { getAllQuestions } = require("../controllers/questionController");

router.get("/", getAllQuestions);
router.get("/delete", (req, res) => {
    res.send("Question Delete Page")
});
module.exports = router;
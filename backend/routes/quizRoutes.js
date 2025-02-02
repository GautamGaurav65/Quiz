const express = require("express");
const router = express.Router();
const axios = require("axios");
const Quiz = require("../models/Quiz");

// Fetch quiz questions from API and store in MongoDB
router.get("/fetch", async (req, res) => {
  try {
    const response = await axios.get("https://api.jsonserve.com/Uw5CrX");
    const quizData = response.data;

    await Quiz.insertMany(quizData);
    res.json({ message: "Quiz data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quiz data" });
  }
});

// Get quiz questions from MongoDB
router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: "Failed to get quizzes" });
  }
});

module.exports = router;

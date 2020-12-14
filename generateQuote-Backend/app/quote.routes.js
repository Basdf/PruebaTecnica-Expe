const express = require("express");
const router = express.Router();

const Quote = require("./quote.controller");
router.post("/api/v1/generate-changing-life-quote", Quote.create);
router.get("/api/v1/generate-changing-life-quote/:id", Quote.findById);
router.delete("/api/v1/generate-changing-life-quote/:id", Quote.deleteById);
module.exports = router;
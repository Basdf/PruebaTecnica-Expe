const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGO_URL || "mongodb://localhost:27017/quote";
db.quote = require("./quote.model")(mongoose);
module.exports = db;
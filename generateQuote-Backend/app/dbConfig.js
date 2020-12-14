const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = "mongodb://localhost/quote";
db.quote = require("./quote.model")(mongoose);
module.exports = db;
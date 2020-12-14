const mongoose = require("mongoose")
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const quoteShema = new Schema({
    _id: {
        type: Number,
    },
    quote: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    
},{
    _id: false,
    versionKey: false
});
quoteShema.plugin(AutoIncrement);

module.exports = mongoose.model('quote', quoteShema)


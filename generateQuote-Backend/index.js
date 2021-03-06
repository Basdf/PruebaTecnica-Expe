const express = require("express");
const bodyParser = require('body-parser');
const db = require("./app/dbConfig");
const routes = require("./app/quote.routes")
const cors = require("cors");

//connect to data base
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

const app = express();
var port = process.env.PORT || 8080;

//cors
const config = {
    application: {
        cors: {
            server: [{
                origin: "*", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                credentials: true
            }]
        }
    }
}

app.use(cors(
    config.application.cors.server
));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/', routes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to generate-changing-life-quote service application." });
});
app.listen(port, () => {
    console.log('API listening on port ' + port);
});

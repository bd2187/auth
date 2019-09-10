const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.end("hello world");
});
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});

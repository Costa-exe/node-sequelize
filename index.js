const express = require("express");
const cors = require("cors");
const app = express();
var corsOption = {
    origin : "http://localhost:4200"
};
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const db = require("./models/db.js");
db.sequelize.sync();
PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: "http://localhost:4200"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const db = require("./utilities/db.js");
db.sequelize.sync();
require("./routes/customers.routes.js")(app);
require("./routes/employees.routes.js")(app);
require("./routes/offices.routes.js")(app);
PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
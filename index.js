const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const db = require("./utilities/db.js");
db.sequelize.sync();
require("./routes/customers.routes.js")(app);
PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
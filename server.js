require("dotenv").config();
const express = require("express");
const app = express();

//Start Database
require("./database");

//get routes stores
const routes = require("./routes/router");

//Extract port number
const port = parseInt(process.env.PORT || 80);

app.use(express.json());

app.use("/api", routes);

//Start server
app.listen(port, () => {
  console.log(`\n\n Server start in: ${port}`);
});

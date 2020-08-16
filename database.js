require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.URI_DB || "mongodb://localhost/store";
//conection
var db = mongoose.connection;

const startDatabase = async () => {
  const serviceDB = await mongoose.connect(
    URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      server: {
        auto_reconnect: true,
      },
    }
  );

  console.log("\n\n Database is conected to:", serviceDB.connection.host);
};

//Listen Database

db.on("reconnected", () => console.log("\n\n  Re starting Database..."));
db.on("disconnected", () => {
  console.log("\n\n Database is disconnected");
  startDatabase();
});

//Start service Database
startDatabase();

module.exports = mongoose;

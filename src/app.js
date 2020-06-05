const express = require("express");
const app = express();
const routes = require("./routes/index.routes");
require("dotenv").config();
require("./database");

// Settings
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("port", process.env.PORT || 3000);
app.use("/api", routes);

// Start server
app.listen(app.get("port"), () => {
  console.log("Server on port ", app.get("port"));
});

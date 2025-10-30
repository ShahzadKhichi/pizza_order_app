const express = require("express");

const app = express();
const ejs = require("ejs");
const path = require("path");
const expressLayout = require("express-ejs-layouts");

// set template engine
// app.use(expressLayout);

app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("home");
});
app.listen(3000, () => console.log("Listening on Port : 3000"));

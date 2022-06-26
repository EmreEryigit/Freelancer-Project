const express = require('express');
const ejs = require("ejs");
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));


// mongo
mongoose
  .connect(
    "mongodb://localhost:27017/freelancer",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  });



// routes
app.get("/", (req,res) => {
    res.render("index");
})
// server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
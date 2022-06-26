const express = require('express');
const ejs = require("ejs");
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const portfolioRoute = require('./routes/portfolioRoute');
const Portfolio = require('./models/Portfolio');

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
app.use("/portfolio", portfolioRoute)
app.get("/", async(req,res) => {
    const portfolio = await Portfolio.find()
    res.render("index", {
        portfolio
    });
})
// server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
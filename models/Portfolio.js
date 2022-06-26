const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PortfolioSchema = new Schema({
    name: String,
    description: String,
    image: String,
})

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);
module.exports = Portfolio;

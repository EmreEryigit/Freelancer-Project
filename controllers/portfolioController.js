const Portfolio = require('../models/Portfolio');

exports.createPortfolio = async(req,res) => {
    try {
        const portfolio = new Portfolio(req.body);
        await portfolio.save();
        res.redirect('/');
    } catch (e) {
        console.log(e)
    }
   
}
exports.deletePortfolio = async (req,res) => {
    try {
        await Portfolio.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (e) {
        console.log(e)
    }
}
exports.editPortfolio = async (req,res) => {
    try {
        const portfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, {new: true});
        await portfolio.save()
        res.redirect("/")

    }catch (e) {
        console.log(e)
    }
}
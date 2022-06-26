const express = require('express');
const portfolioController = require('../controllers/portfolioController');
const router = express.Router();


router.route('/').post(portfolioController.createPortfolio);
router.route("/:id").delete(portfolioController.deletePortfolio).put(portfolioController.editPortfolio);
module.exports = router
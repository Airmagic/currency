var express = require('express');
var router = express.Router();
var exchangeRates = require('../model/currencyDB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET convert page */
 router.get('/convert', function(req, res, next){
	 
 
   var dollars = req.query.dollars;   // How many dollars?
   var toCurrency = req.query.to_currency;  // To what currency?
 
   var converted = dollars * exchangeRates[toCurrency];   // math!
 
   res.render('results', {
     dollars: dollars,
     toCurrency: toCurrency,
     converted: converted}
	 );
 });

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { name: 'Most Awsome Power, Mr. Sparkels', author: 'Eric H' });
});

module.exports = router;

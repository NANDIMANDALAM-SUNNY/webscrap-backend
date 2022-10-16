var express = require('express');
const { fetchProductData, getProductDetails } = require('../controllers/Product');
const { Register ,login, confirmAccount, forgotPassword, resetPassword, newPassword} = require('../controllers/users');
var router = express.Router();




router.get('/product-details', getProductDetails)



module.exports = router;

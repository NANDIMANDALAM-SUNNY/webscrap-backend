var express = require('express');
const { Register ,login, confirmAccount, forgotPassword, resetPassword, newPassword, getProfile} = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello World from backend');
});



router.post('/register', Register)
router.post('/login', login)
router.get('/confirm-account/:confirmationToken', confirmAccount)
router.post('/forgot-password', forgotPassword)
router.get('/reset-password/:token', resetPassword)
router.post('/new-password/:token', newPassword)
router.get('/get-profile', getProfile)




module.exports = router;

const router = require('express').Router();

const home = require('../controllers/usercntroller');

router.post('/buy',home.buy);
router.get('/check',home.check);
router.delete('/delete',home.delete);


module.exports = router;
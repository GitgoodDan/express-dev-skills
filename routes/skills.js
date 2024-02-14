var express = require('express');
var router = express.Router();
const skillCtrl = require('../controllers/skills');

router.get('/', skillCtrl.index);
router.get('/:id', skillCtrl.show);


module.exports = router;
var express = require('express')
var router = express.Router()
const shortid = require('shortid');
var controller = require('../controllers/controjs')

router.get('/', controller.index)
router.get('/seach', controller.seach)
router.get('/create', controller.create)
router.get('/:userid', controller.getid)
router.post('/create', controller.postCreate)

module.exports = router
const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.get('/address', siteController.address)
router.get('/about', siteController.about)
router.get('/search', siteController.search)
router.get('/', siteController.index)

module.exports = router
const router = require('express').Router()



router.use('/', require('./home.js'))
// router.use('/admin', require('./admin.js'))
router.use('/controlpanel', require('./cp.js'))



module.exports = router
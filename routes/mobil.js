const router = require('express').Router()
const MobilController = require('../controllers/MobilController')
const UserAuth = require('../helpers/authentication')

router.get('/listmobil', UserAuth, MobilController.getMobil)
router.get('/getmobil/:mobilID', UserAuth, MobilController.getMobilId)
router.post('/createmobil', UserAuth, MobilController.createMobil)
router.put('/updatemobil/:mobilID', UserAuth, MobilController.updateMobil)
router.delete('/deletemobil/:mobilID', UserAuth, MobilController.deleteMobil)
module.exports = router
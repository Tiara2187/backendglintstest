const router = require('express').Router()
const PerusahaanController = require('../controllers/PerusahaanController')
const UserAuth = require('../helpers/authentication')

router.get('/listperusahaan', UserAuth, PerusahaanController.getPerusahaan)
router.get('/getperusahaanid/:perusahaanID', UserAuth, PerusahaanController.getPerusahaanId)
router.post('/createperusahaan', UserAuth, PerusahaanController.createPerusahaan)
router.put('/updatedperusahaan/:perusahaanID', UserAuth, PerusahaanController.updatePerusahaan)
router.delete('/deleteperusahaan/:perusahaanID', UserAuth, PerusahaanController.deletePerusahaan)
module.exports = router
const router = require('express').Router()
const KaryawanController = require('../controllers/KaryawanController')
const UserAuth = require('../helpers/authentication')

router.get('/listkaryawan', UserAuth, KaryawanController.getKaryawan)
router.get('/getkaryawanId/:karyawanID', UserAuth, KaryawanController.getKaryawanId)
router.post('/createkaryawan', UserAuth, KaryawanController.createKaryawan)
router.put('/updatekaryawan/:karyawanID', UserAuth, KaryawanController.updateKaryawan)
router.delete('/deletekaryawan/:karyawanID', UserAuth, KaryawanController.deleteKaryawan)
module.exports = router
const router = require('express').Router();
const userRoutes = require('./user')
const perusahaanRoutes = require('./perusahaan')
const mobilRoutes = require('./mobil')
const karyawanRoutes = require('./karyawan')
const errorHandlers = require('../helpers/errorHandlers')

router.use('/users', userRoutes)
router.use('/perusahaan', perusahaanRoutes)
router.use('/mobil', mobilRoutes)
router.use('/karyawan', karyawanRoutes)
router.use(errorHandlers)

module.exports = router
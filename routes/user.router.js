const router = require('express').Router()
const UserController = require('../controllers/user.controller')

router.post('/', UserController.create)
router.get('/', (req, res) => {
  res.send('Datos')
})

module.exports = router

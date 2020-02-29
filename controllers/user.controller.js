const Usermodel = require('../models/user.model')

class UserController {
  async create (req, res) {
    const data = req.body
    try {
      const user = await Usermodel.create(data)
      res.status(201).json(user)
    } catch (e) {
      res.status(500).json({ error: e.status })
    }
  }
}

module.exports = new UserController()

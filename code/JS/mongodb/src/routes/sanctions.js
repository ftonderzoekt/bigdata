let CustomerModel = require('../models/sanctions.models')
let express = require('express')
let router = express.Router()

// GET localhost:3000/sanctions
router.get('/sanctions', (req, res) => {
  if(!req.query.search) {
    return res.status(400).send('Missing URL parameter: firstName')
  }

  CustomerModel.aggregate( [
    { $match : { $or: [ { "nameAlias.firstName" : req.query.search }, { "nameAlias.lastName" : req.query.search } ] } },
    { $unwind : "$nameAlias" }

  ] )
    .then(doc => {
      res.json(doc)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
})

module.exports = router

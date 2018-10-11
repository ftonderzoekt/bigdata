let CustomerModel = require('../models/customer.models')
let express = require('express')
let router = express.Router()

// Create a new CustomerModel
// POST localhost:3000/customer
router.post('/customer', (req, res) => {
  // req.bodyParser
  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }
  // let user = {
  //   name: 'firstname lastname',
  //   email: 'user@gmail.com'
  // }
  let model = CustomerModel(req.body)
  model.save()
    .then(doc => {
      if(!doc || doc.length === 0) {
        return res.status(500).send(doc)
      }

      res.status(201).send(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// GET localhost:3000/customer
router.get('/customer', (req, res) => {
  if(!req.query.email) {
    return res.status(400).send('Missing URL parameter: email')
  }

  CustomerModel.aggregate( [
    { $match : { $or: [ { "nameAlias.firstName" : "Mugabe" }, { "nameAlias.lastName" : "Mugabe" } ] } },
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

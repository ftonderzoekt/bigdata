let express = require('express')
let router = express.Router()

// QueryString => query property on the request object
// localhost:3000/person?name=witek&age=20
router.get('/person', (req, res) => {
  if(req.query.name) {
    res.send(`You have requestes a person ${req.query.name}`)
  }
  res.send('You have requestes a person')
})

// Params object on the request object
// localhost:3000/person/name
router.get('/person/:name', (req, res) => {
  res.send(`You have requestes a person ${req.params.name}`)
})

router.get('/error', (req, res) => {
  throw new Error('This is a forced error.')
})

module.exports = router

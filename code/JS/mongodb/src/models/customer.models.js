let mongoose = require('mongoose')

const server = 'ds119503.mlab.com:19503'
const database = 'salustest'
const user = 'test'
const password = 'test545'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Customer', CustomerSchema)

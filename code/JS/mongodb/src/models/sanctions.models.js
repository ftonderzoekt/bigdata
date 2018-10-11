let mongoose = require('mongoose')

const server = 'ds119503.mlab.com:19503'
const database = 'salustest'
const user = 'test'
const password = 'test545'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let SanctionsSchema = new mongoose.Schema({
  nameAlias: [
    {
            firstName: [
                String
            ],
            middleName: [
                String
            ],
            lastName: [
                String
            ],
            wholeName: [
                String
            ]
      }
  ]
}, {collection: "sanctions_test"})

module.exports = mongoose.model('Sanctions', SanctionsSchema)

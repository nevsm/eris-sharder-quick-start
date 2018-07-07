import config from '../config.json'
// import log from './utils/logger.js'

const { Master } = require('eris-sharder')

const master = new Master(config.token, '\\src\\mainClass.js', {
  stats: false,
  name: 'Poly',
  clientOptions: {
    disableEvents: {
      TYPING_START: true
    },
    messageLimit: 25,
    defaultImageSize: 1024
  }
})

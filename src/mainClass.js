import config from '../config.json'
const { Base } = require('eris-sharder')

class Poly extends Base {
  // constructor(bot) {
  //   super(bot)
  // }

  launch () {
    this.ready()
  }

  ready () {
    this.bot.editStatus(null, {
      name: 'poly.svenm.nl',
      type: 3
    })
    console.log('stak')
  }
}

module.exports = Poly

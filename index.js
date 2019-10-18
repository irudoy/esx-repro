const esx = require('esx')()
const getElement = require('./getElement')
console.log(esx.renderToString(getElement('hi')))

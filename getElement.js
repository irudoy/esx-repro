const esx = require('esx')()
const Say = ({ word }) => esx`<div>${word}</div>`
esx.register({ Say })
module.exports = word => esx`<Say word=${word} />`
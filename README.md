```javascript
// index.js
const esx = require('esx')()
const getElement = require('./getElement')
console.log(esx.renderToString(getElement('hi')))
```

```javascript
// getElement.js
const esx = require('esx')()
const Say = ({ word }) => esx`<div>${word}</div>`
esx.register({ Say })
module.exports = word => esx`<Say word=${word} />`
```

## Output

```
ReferenceError: ESX: Say not found in registered components
```

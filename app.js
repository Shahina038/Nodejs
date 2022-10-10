const _ = require('lodash')

const items = [1,[2,[3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
















 // GLOBALS - No window!!
 // _dirnamem- path to current directory
 // _filename - filename
 // require - functio to use modules(CommonJs)
 // module - info about current module(file)
 // process - info about env where the pgm is executed.


 // npm --version
 // local dependency - npm install <packageName>
 //global dependency - npm install -g <pakagename>
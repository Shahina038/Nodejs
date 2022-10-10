//modules
//CommonJs - every file is a module(by default)
// Modukes -Encapsulated code (only share minimum)

const names = require('./names');
const sayHi = require('./utils');
const data = require('./alter');
console.log(data);
require('./sum')
sayHi('Shahina')
sayHi(names.Hayyam)
sayHi(names.Hessa)



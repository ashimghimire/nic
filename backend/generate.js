var jwt = require('jsonwebtoken');

var token = jwt.sign({ user: process.argv[2], api: process.argv[3], ip: process.argv[4] },
     require('./credentials.js').secret);
console.log(token)

function generateToken (type,appId,ip) {
     var token = jwt.sign({ user: type, api: appId, ip: ip },
          require('./credentials.js').secret)
          return token;
}

module.exports= {
     generateToken
};
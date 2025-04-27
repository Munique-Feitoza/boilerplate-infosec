const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const helmet = require('helmet');
const ninetyDaysInSeconds = 90 * 24 * 60 * 60;

app.use(helmet({
  hidePoweredBy: false,
  frameguard: { 
    action: 'deny' 
  },
  xssFilter: false,
  noSniff: false,
  ieNoOpen: false,
  hsts: {
    maxAge: ninetyDaysInSeconds,
    force: true
  },
  dnsPrefetchControl: false,
}));

app.use(helmet.noCache());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'trusted-cdn.com']
  },
}));

// Definindo a senha e o número de salt rounds para o hash
const myPlaintextPassword = 'passw0rd!';
const saltRounds = 13;

// Hashing a senha de forma assíncrona (exemplo anterior)
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error('Erro no hash assíncrono:', err);
    return;
  }
  console.log('Hash assíncrono gerado:', hash);
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    if (err) {
      console.error('Erro ao comparar senha assíncrona:', err);
      return;
    }
    console.log('Senha corresponde ao hash? (assíncrono):', res); // true
  });
});

// Hashing a senha de forma **síncrona**
const hashSync = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log('Hash síncrono gerado:', hashSync);

// Comparando a senha com o hash gerado de forma síncrona
const resultSync = bcrypt.compareSync(myPlaintextPassword, hashSync);
console.log('Senha corresponde ao hash? (síncrono):', resultSync); // true

const incorrectPassword = 'qualquerOutraSenha';
const incorrectResultSync = bcrypt.compareSync(incorrectPassword, hashSync);
console.log('Senha incorreta corresponde ao hash? (síncrono):', incorrectResultSync); // false

module.exports = app;

const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});

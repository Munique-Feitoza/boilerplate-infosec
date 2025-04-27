const chai = require('chai');
const assert = chai.assert;
const bcrypt = require('bcrypt');

describe('Hashing Passwords', function() {
  // Aumenta o tempo limite para 5000ms (5 segundos)
  this.timeout(5000); 

  it('should hash a password correctly and compare it', function(done) {
    const myPlaintextPassword = 'passw0rd!';
    const saltRounds = 13;
    
    bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
      if (err) return done(err);
      console.log('Hash:', hash);

      bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        if (err) return done(err);
        assert.equal(res, true, 'The password should match the hash');
        done();
      });
    });
  });
});

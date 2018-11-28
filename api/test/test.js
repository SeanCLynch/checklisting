let app = require('../index.js');
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
let assert = chai.assert;

// Use chai.request().send({ ..JSON.. });

describe('API Tests', () => {
  describe('Lists', () => {
    describe('GET /lists', () => {
      it('should return an array', (done) => {
        chai.request(app)
            .get('/lists')
            .end((err, res) => {
              assert.equal(res.status, '200');
              assert.isArray(res.body);
              done();
            });
      });
    });

    describe('GET /list/:id', () => {
      it('should return a single object', (done) => {
        chai.request(app)
            .get('/list/1')
            .end((err, res) => {
              console.log(res.body);
              assert.equal(res.status, '200');
              done();
            });
      });
    });
  });
});

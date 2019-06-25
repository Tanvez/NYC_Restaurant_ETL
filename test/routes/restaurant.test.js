const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const server = require('../../index')

chai.use(chaiHttp);

describe('GET /api/restaurant/cruisine', () => {
  it('should get all restaurants matching crusine and grade', done => {
    chai.request(server)
      .get('/api/restaurant/cruisine?cuisineDescription=bakery&grade=a')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.result).to.have.length;
        done();
      });
  })
  it('should return with empty array if no query', done => {
    chai.request(server)
      .get('/api/restaurant/cruisine')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.result).to.have.length(0)
        done();
      });
  })
});
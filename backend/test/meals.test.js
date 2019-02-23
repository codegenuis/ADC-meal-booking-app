import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import meals from '../utils/dummyData';

const should = chai.should();

chai.use(chaiHttp);
describe('Meals', () => {
  describe('/GET meals', () => {
    it('it should GET all the meals', (done) => {
      chai.request(app).get('/api/v1/meals').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
    });
  });
});

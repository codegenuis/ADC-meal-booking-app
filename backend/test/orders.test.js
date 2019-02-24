import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import Orders from '../models/Meals';

const should = chai.should();

chai.use(chaiHttp);
describe('Orders', () => {
  describe('/GET orders', () => {
    it('it should GET all orders', (done) => {
      chai.request(app).get('/api/v1/orders').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
    });
  });
  
});

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import Meals from '../models/Menu';

const should = chai.should();

chai.use(chaiHttp);
describe('Menu', () => {
  describe('/GET menu', () => {
    it('it should GET all the menu', (done) => {
      chai.request(app).get('/api/v1/menu').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
    });
  });
 
});

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

const should = chai.should();

chai.use(chaiHttp);
describe('Menus', () => {
  describe('/GET menus', () => {
    it('it should GET all orders', (done) => {
      chai.request(app).get('/api/v1/menus').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
    });
  });
  describe('/POST Menus', () => {
    it('it should post a menu', (done) => {
      const menu = {
        menu: "[{name: 'Jollof Rice',price: '500',currency: 'NGN',menu_id:1 },{name: 'Fried Rice',size: 'plates',price: '500',currency: 'NGN',menu_id:2},{name: 'Coconut Rice',size: 'plates',price: '500',currency: 'NGN',menu_id:3}]",
      };
      chai.request(app).post('/api/v1/menus/add').send(menu).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Menu successfully added!');
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('menu');
        done();
      });
    });
  });
});

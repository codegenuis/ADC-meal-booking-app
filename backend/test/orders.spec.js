import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import Orders from '../models/Orders';

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
  describe('/POST order', () => {
    it('it should post an order', (done) => {
      const order = {
        name: 'Charles osegi',
        meal: "[{name: 'White Rice',quantity: '2 plates',price: '1000',currency: 'NGN',},{name: 'Fried Rice',quantity: '1 plate',price: '500',currency: 'NGN',}]",
        totalCost: '1000',
        location: 'ikoyi',
      };
      chai.request(app).post('/api/v1/orders/add').send(order).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Order successfully created!');
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('name');
        res.body.data.should.have.property('meal');
        done();
      });
    });
  });
  describe('/PUT/:id order', () => {
    it('it should UPDATE a meal given the id', (done) => {
      const order = {
        id: 1,
        name: 'Charles osegi',
        meal: "[{name: 'Coconut Rice',quantity: '2 plates',price: '1000',currency: 'NGN',},{name: 'Fried Rice',quantity: '1 plate',price: '500',currency: 'NGN',}]",
        totalCost: '1000',
        location: 'null',
      };
      chai.request(app).put('/api/v1/orders/edit/1').send(order).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Order updated!');
        done();
      });
    });
  });
  describe('/DELETE/:id order', () => {
    it('it should DELETE an order given the id', (done) => {
      const order = {
        id: 1,
        name: 'Charles osegi',
        meal: "[{name: 'Coconut Rice',quantity: '2 plates',price: '1000',currency: 'NGN',},{name: 'Fried Rice',quantity: '1 plate',price: '500',currency: 'NGN',}]",
        totalCost: '1000',
        location: 'null',
      };
      chai.request(app).delete('/api/v1/orders/delete/1').send(order).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Order Deleted!');
        done();
      });
    });
  });
});

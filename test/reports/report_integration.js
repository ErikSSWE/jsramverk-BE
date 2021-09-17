process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server.js');

chai.should();

chai.use(chaiHttp);

describe('Reports', () => {
    describe('GET /#/texts', () => {
        it('It should return status: 200', (done) => {
            chai.request(server)
                .get("/#/texts")
                .end((err, res) => {
                    //console.log("res:", res);
                    res.should.have.status(200);
                    res.body.should.be.an("object");

                    done();
                });
        });
    });

    describe('GET /#/add', () => {
        it('It should return status 200', (done) => {
            chai.request(server)
                .get("/#/add")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");

                    done();
                });
        });
    });
});

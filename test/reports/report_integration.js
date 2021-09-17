process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server.js');

chai.should();

chai.use(chaiHttp);

describe('Reports', () => {
    describe('POST /textEditors', () => {
        it('should get 201 adding doc', (done) => {
            let doc = {
                title: "Test_add",
                text: "<p>testing!</p>"
            };

            chai.request(server)
                .post("/api/textEditors")
                .send(doc)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.should.have.property("id");
                    res.body.should.have.property("createdAt");

                    done();
                });
        });
    });

    describe('GET /#/texts', () => {
        it('It should return status: 200', (done) => {
            chai.request(server)
                .get("/api/textEditors")
                .end((err, res) => {
                    console.log("res:", res);
                    res.should.have.status(200);
                    res.body.should.be.an("array");
                    res.body.should.have.lengthOf.at.least(1);

                    done();
                });
        });
    });
});

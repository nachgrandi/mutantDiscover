var expect    = require("chai").expect;
var app = require('../index').app
var chai = require('chai')
var chaiHttp = require('chai-http')

chai.use(chaiHttp);
chai.should();

mutant = [{
    "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
},{
    "dna":["AAAAGA","CAGTCC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
},{
    "dna":["ATGCGA","ACGTGC","ATATGT","AGAAGG","ACCCTA","TCACTG"]
},{
    "dna":["ACGCGA","CACGGC","TTACGT","AGAACC","ACCCTA","TCACTG"]
}]

notMutant = {
    "dna":["CTGCAA","CAGTGC","TTATGT","AGAAGG","CGCCTA","TCACTG"]
}

describe('Test for a server function.', function() {
    describe('POST /mutant/', function () {

        it('should return a 200', function(done) {
            chai.request(app)
                .post('/mutant/')
                .send(mutant[0])
                .end((err, res) => {
                    if (err) done(new Error('Error.'));
                    res.should.have.status(200);
                    done();
                })
        });
        it('should return a 403', function(done) {
            chai.request(app)
                .post('/mutant/')
                .send(notMutant)
                .end((err, res) => {
                    if (err) done(new Error('Error.'));

                    res.should.have.status(403);
                    done();
                })
        });
    })
    describe('GET /stats/', function () {

        it('should return a 200', function(done) {
            chai.request(app)
                .get('/stats/')
                .end((err, res) => {
                    if (err) done(new Error('Error.'));
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                })
        });
    })

    describe('GET /', function () {

        it('should return a 200', function(done) {
            chai.request(app)
                .get('/stats/')
                .end((err, res) => {
                    if (err) done(new Error('Error.'));
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                })
        });
    })
});

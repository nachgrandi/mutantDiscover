var expect    = require("chai").expect;
var bbdd = require('../src/bbdd')

dna = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]

describe('Test functions for bd', function() {
    it('should save a mutant in bd', function(done) {
        bbdd.insert(dna, 1)
        .then( ()=> {
            done();
        }).catch(() => {
            done(new Error('No results add.'+ err));
        })
    });
    it('should fail save a mutant in bd', function(done) {
        bbdd.insert(dna, 'a')
        .then( ()=> {
            done(new Error('Save a record.'));
        }).catch(() => {
            done();
        })
    });
    it('should return a query from bd', function() {
        bbdd.select()
        .then( ()=> {
            done();
        }).catch((err) => {
            done(new Error('No results found.' + err));
        })
    });
});
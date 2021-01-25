var expect    = require("chai").expect;
var func = require('../src/functions')

var mutant = [{
    "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
},{
    "dna":["AAAAGA","CAGTCC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
},{
    "dna":["ATGCGA","ACGTGC","ATATGT","AGAAGG","ACCCTA","TCACTG"]
},{
    "dna":["ACGCGA","CACGGC","TTACGT","AGAACC","ACCCTA","TCACTG"]
}]

var notMutant = {
    "dna":["CTGCAA","CAGTGC","TTATGT","AGAAGG","CGCCTA","TCACTG"]
}

describe('Test functions for isMutant', function() {
    it('should return true when the dna is mutant (dna upright, horizontally and diagonal)', function() {
        var result = func.isMutant(mutant[0])
        expect(result).to.equal(true);
    });
    it('should return true when the dna is mutant (dna 2 horizontally)', function() {
        var result = func.isMutant(mutant[1])
        expect(result).to.equal(true);
    });
    it('should return true when the dna is mutant (dna 2 upright)', function() {
        var result = func.isMutant(mutant[2])
        expect(result).to.equal(true);
    });
    it('should return true when the dna is mutant (dna 2 diagonal)', function() {
        var result = func.isMutant(mutant[3])
        expect(result).to.equal(true);
    });
    it('should return false when the dna is human', function() {
        var result = func.isMutant(notMutant)
        expect(result).to.equal(false);
    });
});

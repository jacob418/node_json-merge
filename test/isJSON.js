const mergeJSON = require('./../index.js') ;

const expect = require('chai').expect ;


describe('isJSON', function(){
	it('should return \'false\' on strings', function(){
		expect(mergeJSON.isJSON("test"), "fail on string 'test'").to.be.false ;
		expect(mergeJSON.isJSON(""), "fail on empty string").to.be.false ;
	}) ;

	it('should return \'false\' on numbers', function(){
		expect(mergeJSON.isJSON(-1), "fail on negative number (-1)").to.be.false ;
		expect(mergeJSON.isJSON(1), "fail on positive number (1)").to.be.false ;
		expect(mergeJSON.isJSON(0), "fail on zero (0)").to.be.false ;
	}) ;
}) ;
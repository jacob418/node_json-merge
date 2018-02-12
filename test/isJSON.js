const mergeJSON = require('./../index.js') ;

const expect = require('chai').expect ;


describe('isJSON', function(){
	it('should return \'false\' on any object but JSON', function(){
		expect(mergeJSON.isJSON(new Date()), "fail on date object 'new Date()'").to.be.false ;
		expect(mergeJSON.isJSON(/.*/gi), "fail on regex '/.*/gi'").to.be.false ;
	}) ;

	it('should return \'false\' on strings', function(){
		expect(mergeJSON.isJSON("test"), "fail on string 'test'").to.be.false ;
		expect(mergeJSON.isJSON(""), "fail on empty string").to.be.false ;
	}) ;

	it('should return \'false\' on numbers', function(){
		expect(mergeJSON.isJSON(-1), "fail on negative number (-1)").to.be.false ;
		expect(mergeJSON.isJSON(1), "fail on positive number (1)").to.be.false ;
		expect(mergeJSON.isJSON(0), "fail on zero (0)").to.be.false ;
		expect(mergeJSON.isJSON(NaN), "fail on 'NaN'").to.be.false ;
	}) ;

	it('should return \'false\' on boolean', function(){
		expect(mergeJSON.isJSON(true), "fail on 'true'").to.be.false ;
		expect(mergeJSON.isJSON(false), "fail on 'false'").to.be.false ;
	}) ;

	it('should return \'false\' on \'null\' or \'undefined\'', function(){
		expect(mergeJSON.isJSON(null), "fail on 'null'").to.be.false ;
		expect(mergeJSON.isJSON(undefined), "fail on 'undefined'").to.be.false ;
	}) ;
}) ;
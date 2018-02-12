const isJSON = require('./../index.js').isJSON ;

const expect = require('chai').expect ;


describe('isJSON', function(){
	it('should return \'false\' on any object but JSON', function(){
		expect(isJSON(new Date()), "fail on date object 'new Date()'").to.be.false ;
		expect(isJSON(/.*/gi), "fail on regex '/.*/gi'").to.be.false ;
	}) ;

	it('should return \'false\' on strings', function(){
		expect(isJSON("test"), "fail on string 'test'").to.be.false ;
		expect(isJSON(""), "fail on empty string").to.be.false ;
	}) ;

	it('should return \'false\' on numbers', function(){
		expect(isJSON(-1), "fail on negative number (-1)").to.be.false ;
		expect(isJSON(1), "fail on positive number (1)").to.be.false ;
		expect(isJSON(0), "fail on zero (0)").to.be.false ;
		expect(isJSON(NaN), "fail on 'NaN'").to.be.false ;
	}) ;

	it('should return \'false\' on boolean', function(){
		expect(isJSON(true), "fail on 'true'").to.be.false ;
		expect(isJSON(false), "fail on 'false'").to.be.false ;
	}) ;

	it('should return \'false\' on \'null\' or \'undefined\'', function(){
		expect(isJSON(null), "fail on 'null'").to.be.false ;
		expect(isJSON(undefined), "fail on 'undefined'").to.be.false ;
	}) ;

	it('should return \'false\' on arrays', function(){
		expect(isJSON([]), "fail on '[]'").to.be.false ;
	}) ;

	it('should return \'true\' on JSON objects', function(){
		expect(isJSON({}), "fail on '{}'").to.be.true ;
	}) ;
}) ;
const merge = require('./../index.js').merge ;

const expect = require('chai').expect ;

describe('mergeJSON', function() {
	it('should join JSON on the first level', function(){
		var json1 = {a: 1, b: 2} ;
		var json2 = {c: 2, d: 3} ;
		var jsonR = merge(json1, json2) ;
		expect(jsonR).to.have.property('a', 1) ;
		expect(jsonR).to.have.property('b', 2) ;
		expect(jsonR).to.have.property('c', 2) ;
		expect(jsonR).to.have.property('d', 3) ;
	}) ;

	it('should join arrays on the first level', function(){
		var json1 = ['a', 'b'] ;
		var json2 = ['c', 'd'] ;
		var jsonR = merge(json1, json2) ;
		expect(jsonR).to.have.members(['a', 'b', 'c', 'd']) ;
	}) ;

	it('should join nested JSON', function(){
		var json1 = {a: {a: 1}, b: 2} ;
		var json2 = {a: {b: 2}, c: 2} ;
		var jsonR = merge(json1, json2) ;
		expect(jsonR.a).to.have.property('a', 1) ;
		expect(jsonR.a).to.have.property('b', 2) ;
	}) ;

	it('should join nested arrays', function(){
		var json1 = {a: {a: 1, c: [1, 2]}} ;
		var json2 = {a: {b: 2, c: [3, 4]}} ;
		var jsonR = merge(json1, json2) ;
		expect(jsonR.a.c).to.have.members([1, 2, 3, 4]) ;
	}) ;

	it('should avoid duplicating simple values when joining arrays', function(){
		var json1 = ['a', 'b'] ;
		var json2 = ['a', 'c', 'd'] ;
		var jsonR = merge(json1, json2) ;
		expect(jsonR).to.have.members(['a', 'b', 'c', 'd']) ;
	}) ;

	it('should drop complex values from first object when joining arrays', function(){
		var json1 = [{a: 1, b: 2}, {a: 2, b: 4}] ;
		var json2 = [{a: 1, b: 2}, {a: 3, b: 9}, {a: 4, b: 16}] ;
		var jsonR = merge(json1, json2) ;
		expect(jsonR).to.have.deep.members([{a: 1, b: 2}, {a: 3, b: 9}, {a: 4, b: 16}]) ;
	}) ;

	it('should priorize values of second object', function(){
		// numbers in JSON2
		var json1 = {a: 1} ;
		var json2 = {a: 5} ;
		var jsonR = merge(json1, json2) ;
		expect(jsonR.a).to.equal(5) ;

		json1 = {a: [1, 2]} ;
		jsonR = merge(json1, json2) ;
		expect(jsonR.a).to.equal(5) ;

		json1 = {a: {a: 1, b: 2}} ;
		jsonR = merge(json1, json2) ;
		expect(jsonR.a).to.equal(5) ;

		json1 = {a: new Date()} ;
		jsonR = merge(json1, json2) ;
		expect(jsonR.a).to.equal(5) ;

		// arrays in JSON2
		json1 = {a: 1} ;
		json2 = {a: [1, 2]} ;
		jsonR = merge(json1, json2) ;
		expect(jsonR.a).to.have.members([1, 2]) ;

		json1 = {a: {a: 1, b: 2}} ;
		jsonR = merge(json1, json2) ;
		expect(jsonR.a).to.have.members([1, 2]) ;

		json1 = {a: new Date()} ;
		jsonR = merge(json1, json2) ;
		expect(jsonR.a).to.have.members([1, 2]) ;

		// JSON in JSON2
		json1 = {a: 1} ;
		json2 = {a: {a: 1, b: 2}} ;
		jsonR = merge(json1, json2) ;
		expect(jsonR.a).to.deep.equal({a: 1, b: 2}) ;

		json1 = {a: [1, 2]} ;
		jsonR = merge(json1, json2) ;
		expect(jsonR.a).to.deep.equal({a: 1, b: 2}) ;

		json1 = {a: new Date()} ;
		jsonR = merge(json1, json2) ;
		expect(jsonR.a).to.deep.equal({a: 1, b: 2}) ;
	}) ;
}) ;

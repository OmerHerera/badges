var should    = require('chai').should()
    , expect  = require('chai').expect
    , assert  = require('chai').assert
    , should    = require('chai').should()
    , index   = require('./../src/index')


console.log(index.start)
describe('index functionality', function () {

    it('index methods', function () {
        index.start.should.be.a('function');
    });

    it('invoking methods', function () {
        index.start();
    });
});

//
// test/test.js
//
var request = require('request')
var expect = require('chai').expect

// DESCRIBE WHAT WE ARE TESTING
  // SAY WHAT BEHAVIOR 'IT' AUGHT TO HAVE
    // SEND THE REQUEST
      // USE CHAI-EXPECT TO EXPECT THE STATUS RESULT
      // CHECK FALSE VALUE TO SEE IF WE CAN MAKE TEST FAIL
      // CALL DONE();

describe('localhost:3000', function() {
 it('should have a HTTP of 200 - succes', function(done) {
     request('http://localhost:3000', function(err, res, body) {
       expect(res.statusCode).to.equal(200);
       // expect(res.statusCode).to.equal(300)
       console.log(err);
       console.log(res);
       console.log(body);
       done();
    });

  });

});

describe('localhost:3000/api/phrases', function() {
 it('should have a HTTP of 200 - succes', function(done) {
     request('http://localhost:3000', function(err, res, body) {
       expect(res.statusCode).to.equal(200);
       // expect(res.statusCode).to.equal(300)
       console.log(err);
       console.log(res);
       console.log(body);
       done();
    });

  });

});
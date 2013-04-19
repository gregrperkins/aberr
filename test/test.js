var assert = require('assert');
var should = require('should');
var util = require('util');

// Define an example usage.
var AbstractError = require('..');
var DatabaseError = function (msg) {
  DatabaseError.super_.call(this, msg, this.constructor);

};
util.inherits(DatabaseError, AbstractError);
DatabaseError.prototype.name = 'Database Error';

describe('DatabaseError', function () {
  it ('is an instance of Error', function () {
    var err = new DatabaseError();
    assert(err instanceof Error);
  });

  it ('has the right message', function () {
    var err = new DatabaseError('too many rows!');
    ('' + err).should.equal('Database Error: too many rows!');
  });

  it ('shows the right default msg', function () {
    var err = new DatabaseError();
    ('' + err).should.equal('Database Error');
  });

  it ('has a stack trace', function () {
    var err = new DatabaseError();
    err.stack.should.be.a('string');
  });
});

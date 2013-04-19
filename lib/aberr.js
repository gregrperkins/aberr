/**
 * @fileoverview NPM packaged version of http://dustinsenos.com/articles/customErrorsInNode
 */

// Grab the util module that's bundled with Node
var util = require('util');

// Create a new Abstract Error constructor
var AbstractError = function (msg, constr) {
  // If defined, pass the constr property to V8's
  // captureStackTrace to clean up the output
  Error.captureStackTrace(this, constr || this);

  // If defined, store a custom error message
  if (msg) {
    this.message = msg;
  }
};

// Extend our AbstractError from Error
util.inherits(AbstractError, Error);

// Default message is the empty string.
AbstractError.prototype.message = '';

// Give our Abstract error a name property. Affects toString().
AbstractError.prototype.name = 'Abstract Error';

module.exports = AbstractError;

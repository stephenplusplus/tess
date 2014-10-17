'use strict';

var assert = require('assert')
var tess = require('./')

// tess is a function
assert.equal(typeof tess, 'function')

// tess() returns array of test results
var results = tess({ shh: true }, function(it) {
  it('yes', function() {})
  it('no', function() { assert(false) })
})
assert.equal(results[0].success, true)
assert.equal(results[1].success, false)

// tess() returns a function
tess(function(it) {
  assert.equal(typeof it, 'function')
})

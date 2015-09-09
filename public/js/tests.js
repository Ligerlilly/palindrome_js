var palindrome = require('./palindrome.js');
var expect = require('chai').expect;

describe('palindrome', function() {
  it('returns true if word passed in is a palindrome', function() {
    expect(palindrome('noon')).to.eq(true);
  });
});

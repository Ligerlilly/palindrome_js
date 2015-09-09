var palindrome = require('./palindrome.js');
var expect = require('chai').expect;

describe('palindrome', function() {
  it('returns true if word passed in is a palindrome', function() {
    expect(palindrome('noon')).to.eq(true);
  });

  it('returns true if number passed in is a palindrome', function() {
    expect(palindrome('1001')).to.eq(true);
  });

  it('returns true if mutilple words are a palindrome', function(){
    expect(palindrome('hello olleh'));
  });
});

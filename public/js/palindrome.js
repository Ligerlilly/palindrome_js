var palindrome = function(word) {
  word = word.toString();
  word = word.split('');
  word1 = word.slice();

  return word.reverse().join('') == word1.join('');
};

module.exports = palindrome;

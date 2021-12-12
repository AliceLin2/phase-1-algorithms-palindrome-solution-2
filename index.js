function isPalindrome(word) {
  // Write your algorithm here
  for(let i=0; i<word.length/2; i++){
    const j = word.length - 1 - i
    if(word[i] !== word[j]) return false
  }
  return true
}

/* 
  Add your pseudocode here
  iterate from the beginning of the string to the middle of the string
    compare the letter with the corresponding letter at the end of the tring
      if any of the 2 pair of the letters don't match, return false
  otherwise return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

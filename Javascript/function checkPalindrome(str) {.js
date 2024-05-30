function checkPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    if (str === reversed) {
      return str + " is a palindrome";
    } else {
      return str + " is not a palindrome";
    }
  }
  
  const str = "hello world";
  const result = checkPalindrome(str);
  console.log(result);
  
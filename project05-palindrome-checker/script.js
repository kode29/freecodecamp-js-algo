function palindrome(str) {
    // Good luck!
    str = str.toLowerCase();
    
    str = str.replace(/[\W_]/g, "");
    var reverse = str.split("").reverse().join("");
    console.log(str + "\n"+reverse);
    
    if (str == reverse)
      return true;
    else
      return false;
  }
  
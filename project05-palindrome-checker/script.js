function palindrome(str) {
    // Good luck!
    str = str.toLowerCase().replace(/[\W_]/g, "");
    
    var reverse = str.split("").reverse().join("");
    // console.log(str + "\n"+reverse);
    
    return (str == reverse) ? true : false;
  }
  
const checkBtn =  document.getElementById("check-btn");
const results = document.getElementById("result");
const textInput = document.getElementById("text-input");

const checkForPalindrome = () => {
    const input = textInput.value;
    if (input.length==0){
        alert("Please input a value");
        return;
    } else {
        results.innerHTML = `<strong>${input}</strong> ${palindrome(input) ? "is" : "is not"} a palindrome.`;;
    }
}

checkBtn.addEventListener("click", () => {
    checkForPalindrome()
    textInput.value = '';
})

textInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome();
    textInput.value = '';
  }
})
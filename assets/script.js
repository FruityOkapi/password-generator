// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  function generatePassword(pLength) {

    var pLength = window.prompt("Please enter the amount of characters you wish your password to be within 8-128 characters:");

    if (!pLength) {
      window.alert("Please enter a number!");
      generatePassword()
    } else if (pLength < 8) {
      window.alert("Please enter a number more than 8!");
      generatePassword()
    } else if (pLength > 128) {
      window.alert("Please enter a number less than 128!");
    } 
    
    var addWhat = ""
    var pword= "";
    var lettersL= "abcdefghijklmnopqrstuvwxyz";
    var lettersU= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers= "1234567890";
    var specials= "!@#$%^&*()-+?><.,";
    
    var lowerB= window.confirm("Would you like your password to have lowercase letters?");
    if (lowerB) {
      addWhat += lettersL;
    }
    // Console logging to test to make sure the code is working.
    console.log(addWhat);
    
    var upperB= window.confirm("Would you like your password to have uppercase letters?");
    if (upperB) {
      addWhat += lettersU;
    }
    console.log(addWhat)
    
    var number= window.confirm("Would you like your password to have numbers?");
    if (number) {
      addWhat += numbers;
    }
    console.log(addWhat);
    
    var special= window.confirm("Would you like your password to have special characters?");
    if (special) {
      addWhat += specials
    }
    console.log(addWhat);

    
    if ((lowerB === false && upperB === false && number === false && special === false)) {
      window.alert("Unable to make a password without adding characters of any kind. Please try again and add some characters.");
    }

    var addWhatLength= addWhat.length;
    
    // This for loop is to take the addWhat's total characters and randomly select characters from the string and add them to pword as its own string

    for (var i = 0; i < pLength; i++) {
      pword += addWhat.charAt(Math.floor(Math.random() * addWhatLength));
    }
    return pword;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


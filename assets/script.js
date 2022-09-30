// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  function generatePassword(pLength) {
    // This var adds a prompt for users to enter the desired password length which sets the pLength in the function's variables
    var pLength = window.prompt("Please enter the amount of characters you wish your password to be within 8-128 characters:");
    // Error message
    var tryAgain= "Please Try Again!"
    // Trying to define a integer checker so letters and decimals don't trigger a false positive 

    // This else if statement is to set the character limit for the password. If a user enters a invalid number they are given an error message and must re-enter a new number.
    if (!pLength) {
      window.alert("Please enter a number!");
      return tryAgain;
      // If the remainder of the pLength after dividing by 1 is not 0 then it is not an integer and not accepted in the code
    } else if (pLength % 1 !== 0) {
      window.alert("Please enter a number or a whole number!");
      return tryAgain;
    } else if (pLength < 8) {
      window.alert("Please enter a number more than 8!");
      return tryAgain;
    } else if (pLength > 128) {
      window.alert("Please enter a number less than 128!");
      return tryAgain;
    }
    
    // These var are to establish the strings of letters as long arrays are annoying to type.
    var addWhat = ""
    var pword= "";
    var lettersL= "abcdefghijklmnopqrstuvwxyz";
    var lettersU= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers= "1234567890";
    var specials= "!@#$%^&*()-+?><.,";
    
    // The next 4 var are to let users decide what kind of characters are selected.
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

    // This is to add an error message when users don't select any characters for their password
    if ((lowerB === false && upperB === false && number === false && special === false)) {
      window.alert("Unable to make a password without adding characters of any kind. Please try again and add some characters.");
      return tryAgain;
    }

    var addWhatLength= addWhat.length;
    
    // This for loop is to take the addWhat's total characters and randomly select characters from the string and add them to pword as its own string. 
    // The charAt method selects the characters in a string as if they were in an array.
    // The return sets the function's result to the var pword and ends the function. Without the pword after return, the page where the password should appear will read "undefined".
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


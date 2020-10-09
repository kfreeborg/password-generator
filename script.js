// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// button click activates series of window prompts

// password criteria prompt

// length criteria prompt (8-128)

// character type prompt (lowercase, uppercase, numeric, and/or special characters)

// input validated, one character type selected


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

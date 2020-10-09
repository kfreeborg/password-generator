// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  return "password";
}; // end function generatePassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

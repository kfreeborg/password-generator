// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  // prompt: what is the length?
  var length = prompt("Preferred length of password? (Please choose between 8 and 128.)", "12");
  console.log(length, typeof length);

  //    valid values are >= 8 && <= 128

  // confirm: lowercase option to type in lowercase, uppercase, or both
  var lowercase = confirm("Click OK if you want lowercase letters.");
  console.log("lowercase", lowercase, typeof lowercase);

  // validate lowercase

  // confirm: uppercase will have to skip if lowercase is false
  var uppercase = confirm("Click OK if you want uppercase letters.");
  console.log("uppercase", uppercase, typeof uppercase);

  // confirm: numeric
  var numeric = confirm("Click OK if you want numbers.");
  console.log("numeric", numeric, typeof numeric);

  // confirm: special characters
  var special = confirm("Click OK if you want special characters.");
  console.log("special", special, typeof special);

  // generate a password

  return "password";
}; // end function generatePassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

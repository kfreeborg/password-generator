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
  length = Number.parseInt(length);
  // if length NaN then return in error
  if (Number.isNaN(length)) {
    alert("Invalid. Please enter a valid number.");
    return "";
  }
  if (length < 8 || length > 128) {
    alert("Invalid password length!");
    return "";
  }
  console.log("length", length, typeof length);

  // confirm: lowercase option to type in lowercase, uppercase, or both (minute 28ish)
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

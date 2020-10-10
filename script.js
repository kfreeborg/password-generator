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

  // confimr lowercase or uppercase or both
  // var lettering = prompt("Would you like lowercase or uppercase lettering?\nPlease type in LOWERCASE or UPPERCASE.\nClick cancel for BOTH.", "LOWERCASE")
  // console.log("lettering", lettering, typeof lettering);
  // if (lettering !== "LOWERCASE" && lettering !== "UPPERCASE") {
  //   alert("Invalid! Please specify LOWERCASE or UPPERCASE.");
  //   return "";
  // }

  // confirm: lowercase
  var lowercase = confirm("Click OK if you want lowercase letters.");
  console.log("lowercase", lowercase, typeof lowercase);

  // confirm: uppercase
  var uppercase = confirm("Click OK if you want uppercase letters.");
  console.log("uppercase", uppercase, typeof uppercase);

  if (lowercase === false && uppercase === false) {
    alert("Invalid! Please click OK for at least one lettering option!");
    return "";
  };

  // confirm: numeric
  var numeric = confirm("Click OK if you want numbers.");
  console.log("numeric", numeric, typeof numeric);

  // confirm: special characters
  var special = confirm("Click OK if you want special characters.");
  console.log("special", special, typeof special);

  // generate a password
  // length: 8-128 
  // leading digit is a letter
  // lowercase: if true include lowercase if false don't inclue
  // uppercase: include uppercase if true, not if false
  // numeric: include numbers if true, not if false
  // special characters: include characters if true, not if false


  return "";
}; // end function generatePassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

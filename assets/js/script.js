
var generateBtn = document.querySelector("#generate");

var upperCase = ["ABCDEFGHILMNOPQRSTUVWXYZ"]
var lowerCase = ["abcdefghilmnopqrstuvwxyz"]
var specialChar = ["!@#$%^&*"]
var numberChar = ["1234567890"]

var passwordLength = false;
var upperCase = false;
var lowerCase = false;
var specialChar = false;
var numberChar = false;



function generatePassword() {
    passwordLength = propmt( "Select password length between 9 and 128 characters")






console.log('generate a password.');

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);



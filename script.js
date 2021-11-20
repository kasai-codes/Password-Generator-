
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // variables with with split strings
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var specialChar = '!@#$%^&*'.split('');
  var numberChar = '0123456789'.split('');

  // True False var's for if statements 
  var passwordLength;
  var upperCaseLean;
  var lowerCaseLean;
  var specialCharLean;
  var numberCharLean;
  // empty array to merge string varibles into
  var desiredCharacter = [];
  // empty string for password
  var password = "";

  // prompts and alerts

  alert("Select password");
  var passwordLength = parseInt(prompt("Please Select password length between 8 and 128 characters"));

  if (passwordLength < 8 || passwordLength > 128) {
    alert(" Invalid input. ");
    return;
  }
  if (lowerCaseLean = confirm("Do you want to include lowercase characters? ")) {
    desiredCharacter = desiredCharacter.concat(lowerCase);
  }
  if (upperCaseLean = confirm(" Do you want to include uppercase characters? ")) {
    desiredCharacter = desiredCharacter.concat(upperCase);
  }
  if (numberCharLean = confirm("Do you want to include numbers? ")) {
    desiredCharacter = desiredCharacter.concat(numberChar);
  }
  if (specialCharLean = confirm(" Do you want special characters? ")) {
    desiredCharacter = desiredCharacter.concat(specialChar);
  }
  if ((desiredCharacter.length === 0)) {
    alert("Invalid input please try again.");
    return;

    // for loop to pick random propertie from split string
  }
  for (let i = 0; i < passwordLength; ++i) {
    let random = Math.floor(Math.random() * Math.floor(desiredCharacter.length));
    password += desiredCharacter[random];

  }
  return password;
}

console.log('generate a password.');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);








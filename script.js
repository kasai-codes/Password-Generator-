
var generateBtn = document.querySelector("#generate");






function generatePassword() {
  var upperCase = ["ABCDEFGHILMNOPQRSTUVWXYZ"];
  var lowerCase = ["abcdefghilmnopqrstuvwxyz"];
  var specialChar = ["!@#$%^&*"];
  var numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var passwordLength = 8;
  var upperCaseLean = false;
  var lowerCaseLean = false;
  var specialCharLean = false;
  var numberCharLean = false;
  var desiredCharacter = [];

  var password = "";

  alert("Select password");
  var passwordLength = prompt("Please Select password length between 8 and 128 characters");

  if (passwordLength < 8 || passwordLength > 128) {
    alert(" Invalid input. ")
    generatePassword()
  }
  if (confirm("Do you want to include lowercase characters? ")) {
    desiredCharacter.push(lowerCaseLean);
  }
  if (confirm(" Do you want to include uppercase characters? ")) {
    desiredCharacter.push(upperCaseLean);
  }
  if (confirm("Do you want to include numbers? ")) {
    desiredCharacter.push(numberCharLean);
  }
  if (confirm(" Do you want special characters? ")) {
    desiredCharacter.push(specialCharLean);
  }
  if (desiredCharacter.length === 0) {
    alert("Minimum of one type of character must be chosen");
    generatePassword()
  }
  for (let i = 0; i < passwordLength; ++i) {
    let random = Math.floor(Math.random() * Math.floor(desiredCharacter.length));
    password += desiredCharacter[random];

  }

  return password;
}




console.log('generate a password.');




function getRandom() {
  var randomChar = math.random() * 10;
  var roundedChar = math.floor(randomChar);
}




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);








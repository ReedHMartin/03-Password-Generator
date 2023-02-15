// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate the password
function generatePassword() {

  //  set arrays of characters to pick from
  var specialChars = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var passwordLength = prompt("Enter Desired Password Length. Must Be Between 8 and 128 Characters.");
    while ((passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Invalid Length Entry. Length Must Be Between 8 and 128 Characters Long. Enter Desired Length of New Password.");
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

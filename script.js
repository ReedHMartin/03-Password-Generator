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
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Invalid Length Entry. Length Must Be Between 8 and 128 Characters Long. Enter Desired Length of New Password.");
  }

  var useSpecialChars = confirm("Do you want to include special characters?");
  var useUppercase = confirm("Do you want to include uppercase letters?");
  var useLowercase = confirm("Do you want to include lowercase letters?");
  var useNumbers = confirm("Do you want to include numbers?");

  /** Array of chars that we can randomly pick from */
  var allowableChars = [];
    /** Array of chars that we have picked */
  var selectedChars = [];

  if (useSpecialChars == true) {
    /** Add specialChars to selection */
    allowableChars = allowableChars.concat(allowableChars, specialChars);
    /** Push a special char into selectedChars array -- ensures at least 1 special char */
    selectedChars.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
  } 
  if (useUppercase == true) {
    allowableChars = allowableChars.concat(allowableChars, uppercase);
    selectedChars.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
  } 
  if (useLowercase == true) {
    allowableChars = allowableChars.concat(allowableChars, lowercase);
    selectedChars.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
  } 
  if (useNumbers == true) {
    allowableChars = allowableChars.concat(allowableChars, numbers);
    selectedChars.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }

  /** Build selectedChars to correct length */
  for (let i = 0; i < passwordLength; i++) {
    if(selectedChars.length < passwordLength){
      /** Additional chars needed: append a new random char */
      selectedChars.push(allowableChars[Math.floor(Math.random() * allowableChars.length)]);
    }
  }

  /** Convert array to string */
  return selectedChars.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Possible characters to appear on the password
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var nmrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var spclC = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

//
var nCharacters = window.prompt("Number of characters to include (At least 8 and maximum 128):");
//console.log(nCharacters);


if(nCharacters >= 8 && nCharacters < 129) {
  console.log(nCharacters);
} else {
  alert("Incorrect number of characters or invalid InputDeviceInfo.");
  var nCharacters = window.prompt("Number of characters to include (At least 8 and maximum 128):");
}

//Character prompts
window.confirm("Do you want lower case letters on your password?");
window.confirm("Do you want upper case letters on your password?");
window.confirm("Do you want number on your password?");
window.confirm("Do you want special characters on your password?");
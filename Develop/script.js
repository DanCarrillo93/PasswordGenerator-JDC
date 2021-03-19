// Assignment Code
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Possible characters to appear on the password
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var nmrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var spclC = ["!", '"', "#", "$", "%", "&", "*", "(", ")", "'", "+", ",", "-", ".", "/", ":"];

//Empty arrays.
var pwdArray = []
var usrChoices = []

//Function to call
function PswdGen() {
//Ask user for input.
var nChar = window.prompt("Number of characters to include (At least 8 and maximum 128):");
//console.log(nCharacters);

//Right number of characters.
if (nChar >= 8 && nChar < 129) {
  password = CharacterSelection(); 
} else {
  alert("Incorrect number of characters or invalid InputDeviceInfo.");
  PswdGen();
}

//Character prompts
function CharacterSelection() {
  var loCaseBo = window.confirm("Do you want lower case letters on your password?");
  if (loCaseBo === true) {
    usrChoices = usrChoices.concat(letters);
    pwdArray.push(letters[Math.floor(Math.random()*letters.length)]);
  }

  var upCaseBo = window.confirm("Do you want upper case letters on your password?");
  if (upCaseBo === true) {
    usrChoices = usrChoices.concat(capLetters);
    pwdArray.push(capLetters[Math.floor(Math.random()*capLetters.length)]);

  }

  var nmrsBo = window.confirm("Do you want number on your password?");
  if (nmrsBo === true) {
    usrChoices = usrChoices.concat(nmrs);
    pwdArray.push(nmrs[Math.floor(Math.random()*nmrs.length)]);

  }

  var spclBo = window.confirm("Do you want special characters on your password?");
  if (spclBo === true) {
    usrChoices = usrChoices.concat(spclC);
    pwdArray.push(spclC[Math.floor(Math.random()*spclC.length)]);

  }
//At least have one of the characters type selected
  if (!loCaseBo && !upCaseBo && !nmrsBo && !spclBo) {
    alert("You should at least include one character type!!!")
    CharacterSelection();
  }
  console.log(usrChoices);
  console.log(pwdArray);

  var PswArrLen = pwdArray.length;

  for (i = PswArrLen; i < nChar; i++) {
    pwdArray.push (usrChoices[Math.floor(Math.random() * usrChoices.length)]);
    }
  
//convert array to string
  var finalPwd = ""
  for(f= 0; f < nChar; f++) {
  finalPwd = finalPwd + pwdArray[Math.floor(Math.random() * pwdArray.length)]
  
  }

  console.log(finalPwd);
  return finalPwd;

}
return password;
console.log(password);
}

// Write password to the #password input
function writePassword() {
  var password = PswdGen();
  var passwordText = document.querySelector("#password");
  
  
  passwordText.value = password;

}

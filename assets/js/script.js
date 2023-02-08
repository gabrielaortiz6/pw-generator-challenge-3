// Assignment Code
// need 1. click interaction generates, need series of prompts for pw criteria
//      2. options of criteria to select. 
//      3. pw length (at least 8 less than 128);
//      4. confirm types of character 
//          - (prompt whether or not to include lowercase, uppercase, numeric, and/or special characters)
//      5. after EACH prompt is answered, answer is validated (alert and return false)
//      6. at least one must be selected (return or alert or loop back up)
//      7. after all prompts answered, password is generated (random ?)
//      8. password should show up as alert or on page

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

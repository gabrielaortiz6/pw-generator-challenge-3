// Assignment Code
// need 1. click generates interaction then prompts for pw criteria
//      2. options of criteria to select. 
//      3. pw length (at least 8 less than 128);
//      4. confirm types of character 
//          - (prompt whether or not to include lowercase, uppercase, numeric, and/or special characters)
//      5. after EACH prompt is answered, answer is validated (alert and return false)
//      6. at least one must be selected (return or alert or loop back up)
//      7. after all prompts answered, password is generated (random ?)
//      8. password should show up as alert or on page

// Assignment Code

var generateBtn = document.querySelector("#generate");

//function for password criteria prompts // could be generateBtn.prompt idk

var generatePassword = function() {
  var passwordUserInput = window.prompt("Please enter desired length of characters for password (between 8 and 128 characters");
  if (passwordUserInput < 8 || passwordUserInput >= 128) {
    alert("Please choose length of at least 8 characters and no more than 128 characters");
    generatePassword();
  } else if (!passwordUserInput) {
  alert("Please choose length of at least 8 characters and no more than 128 characters");
  return;
  //for the next criteria - should I do nested function? set a new variable to store user input ??
  } else if (passwordUserInput >= 8 && passwordUserInput <= 128) {
    var lowerCase = confirm("Thank you. Do you want your password to include lowercase letters?");

  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


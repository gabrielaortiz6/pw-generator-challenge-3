// Assignment Code
// need 1. click generates interaction then prompts for pw criteria
//      2. options of criteria to select. 
//      3. pw length (at least 8 less than 128);
//      4. confirm types of character 
//          - (prompt whether or not to include lowercase, uppercase, numeric, and/or special characters)
//      5. after EACH prompt is answered, answer is validated (alert and return false)
//      6. at least one must be selected (return or alert or loop back up)
//      7. after all prompts answered, password is generated 
//      8. probably uses math.Random and maybe for loops (random ?)
//      9. ARE ALL THE CRITERIA SUPPOSED TO SHOW UP AS PROMPT OR CONFIRM? OR AM I SUPPOSED TO USE HTML <FORM> ELEMENT?
//      10. password should show up as alert or on page

// Assignment Code
var generateBtn = document.querySelector("#generate");

//creating variable called userInput with empty string so the value can be reassigned depending on user's choices
var userInput = "";
var passwordLength = 0;
var generateString = "";
var randomize = "";

//function which will create prompt and confirm pop ups once the user clicks the generate
//button and will store user's answers for pw criteria as var userInput
var generatePassword = function() {

  var passwordLength = window.prompt("Please enter desired length of characters for password (between 8 and 128 characters");
  
  //conditional statement - if the user presses cancel or does not enter a number,
  //they will be returned to the website
  if (!passwordLength) {
    return
  //if the password length they choose is less than 8 or more than 128, user will
  //receive an error message and be returned to the first prompt to reenter an accepted value
  } else if (passwordLength < 8 || passwordLength >= 128) {
    alert("Error! Please choose length of at least 8 characters and no more than 128 characters");
    generatePassword(); 
  //if the password length they choose is an acceptable value, they will
  //receive an alert that displays the length of characters the user chose
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    alert("Thank you. You choose " + passwordLength + " characters for you password")
  }

  //next criteria will pop up as confirm pop up.
  var lowerCase = confirm("Thank you. Do you want your password to include lowercase letters?");
  
  //conditional statements -> if the user chooses "ok", it has a boolean value of true
  //so the variable userInput will have a new value to reflect this
  if (lowerCase == true) {
    alert("Thank you. Your password will include lowercase letters");
    var userInput = "abcdefghijklmnopqrstuvwxyz";
  // if the user chooses "cancel", it has a boolean value of false so the value of 
  //userInput will remain an empy string
  } else if (lowerCase == false) {
    alert("Thank you. Your password will not include lowercase letters");
  }
  
  //next criteria is a confirm pop up
  var upperCase = confirm("Do you want your password to include uppercase letters?");
 
  //conditional statement -> if the user pressed "Ok" for both lowercase and uppercase,
  // the value of the userInput will contain both
  if (upperCase == true && lowerCase == true) {
     alert("Thank you. Your password will include uppercase letters");
      userInput = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // otherwise, if the user chose to include lowercase but not uppercase,
  //the value of userInput will still only have lowercase characters
  } else if (upperCase == false && lowerCase == true) {
    alert("Thank you. Your password will not include uppercase letters");
    var userInput = "abcdefghijklmnopqrstuvwxyz";
  //otherwise, if the user chose to include uppercase but not lowercase,
  //the value of userInput will only have uppercase characters
  } else if (upperCase == true && lowerCase == false) {
    alert("Thank you. Your password will include uppercase letters");
    var userInput = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // if the user did not press "ok" for either lowercase or uppercase,
  //they will receive an error message and be sent to the beginning of the function 
  // to ensure that at least one type of character is selected
  } else if (upperCase == false && lowerCase == false) {
   alert("Error! Please select at least one character type for maximum security");
   generatePassword();
  }
  
  //next criteria for including numbers, using confirm pop up again
  var numericCharacters = confirm("Do you want your password to include numbers?");

  // conditional statement -> if user chooses "ok" to include numbers,
  //a string of numbers will be added to the userInput variable
  if (numericCharacters == true ) {
    alert("Thank you. Your password will include numbers");
    var userInput = userInput + "0123456789";
  // if the user selects "cancel", which has a boolean value of false, nothing will
  //change about the current value of userInput
  } else if (numericCharacters == false) {
    alert("Thank you. Your password will not include numbers");
  }

  //final criteria re: including special characters
  var specialCharacters = confirm("Thank you. Do you want your password to include special characters?");
  
  //conditional statement -> if user chooses "ok" to include special characters,
  //a string of special characters will be added to the userInput variable
  if (specialCharacters == true) {
    alert("Thank you. Your password will include special characters");
    var userInput = userInput + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  //otherwise the value of userInput will not change
  } else if (specialCharacters == false) {
    alert("Thank you. Your password will not include special characters");
  }

  
//creating a loop in order to take into account user input for passwordLength
//using math.floor and math.random to select random index
var generateString = function() {
  randomize = "";
  for (var i = 0; i < passwordLength; i++) {
  randomize += userInput.charAt(Math.floor(Math.random() * userInput.length));
  }
 
return randomize;
}
return generateString(randomize);
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


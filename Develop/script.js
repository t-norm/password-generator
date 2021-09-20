var passwordCriteria = {
  length: 0,
  upper: false,
  lower: false,
  number: false,
  special: false,
  reset: function() {
      this.length = 0;
      this.upper = false;
      this.lower = false;
      this.number = false;
      this.special = false;
  }
};

console.log(passwordCriteria.length);
console.log(passwordCriteria.upper);
console.log(passwordCriteria.lower);
console.log(passwordCriteria.number);
console.log(passwordCriteria.special);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

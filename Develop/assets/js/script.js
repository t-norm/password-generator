//variables
const passLength = document.getElementById('passLength');
const passUpper = document.getElementById('upperCase');
const passLower = document.getElementById('lowerCase');
const passNumbers = document.getElementById('numbers');
const passSpecial = document.getElementById('special');

// functions
// functions to generate random characters
function randomUpper() {
	const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function randomLower() {
	const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
	return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function randomNumber() {
	const numbers = '0123456789'
	return numbers[Math.floor(Math.random() * numbers.length)];
}

function randomSymbol() {
	const special = '!@#$%^&*(){}[]=<>/,.'
	return special[Math.floor(Math.random() * special.length)];
}


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

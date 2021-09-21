//constants:
const passLength = document.getElementById('passLength');
const passUpper = document.getElementById('upperCase');
const passLower = document.getElementById('lowerCase');
const passNumbers = document.getElementById('numbers');
const passSpecial = document.getElementById('special');

// constant that calls random generation functions for each character set
const randomFunc = {
	upper: randomUpper,
	lower: randomLower,
	number: randomNumber,
	special: randomSpecial
}

// functions:
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

function randomSpecial() {
	const special = '!@#$%^&*(){}[]=<>/,.'
	return special[Math.floor(Math.random() * special.length)];
}


// function to generate password
function generatePassword(length, upper, lower, number, special) {
	let generatedPassword = "";
	const characterTypes = upper + lower + number + special;
	const characterTypesArray = [{upper}, {lower}, {number}, {special}].filter(item => Object.values(item)[0]);
	
	if(characterTypes === 0) {
		return "you don't have any charater criteria selected";
	}
	
	for(let i = 0; i < length; i += characterTypes) {
		characterTypesArray.forEach(type => {
			const passChar = Object.keys(type)[0];
			generatedPassword += randomFunc[passChar]();
		});
	}
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

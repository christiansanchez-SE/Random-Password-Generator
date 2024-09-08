// Selects the input element where the generated password will be displayed
const passwordBox = document.getElementById("password");

// Defines the desired length of the generated password
const length = 12;

// These are the character sets used for generating the password
const upperCase = "ABCDDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

// Combines all character sets into one large string
const allChars = upperCase + lowerCase + number + symbol;

// This function generates a random password
function createPassword(){
    let password = "";

    // Guarantees that the password contains at least one character from each set
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Fills the remaining length of the password with random characters from the combined set
    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Sets the generated password into the input field
    passwordBox.value = password;
}

// This function copies the generated password to the clipboard
function copyPassword() {
    // Gets the current value of the password field
    const password = passwordBox.value;
    if (password) {
        // Uses the Clipboard API to copy the password to the user's clipboard
        navigator.clipboard.writeText(password).then(() => {
            // Shows a confirmation message once the password is copied
            alert("Password copied to clipboard!");
        }).catch(err => {
            // If copying fails, displays an error message
            alert("Failed to copy password: " + err);
        });
    } else {
        // If no password is present in the field, alerts the user
        alert("No password to copy!");
    }
}
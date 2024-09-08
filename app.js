// Get the input box where the generated password will be displayed
const passwordBox = document.getElementById("password");

// Get the confirmation message element that will show when the password is copied
const copyConfirmation = document.getElementById("copy-confirmation");


/*
 * Function to generate a random password
 * This function creates a password with a combination of uppercase letters, 
 * lowercase letters, numbers, and special symbols.
 */
function createPassword() {
    // Character sets for password generation
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "@#$%^&*()_+~|}{[]></-=";

    // Combine all character sets into one string
    const allChars = upperCase + lowerCase + number + symbol;

    // Initialize an empty string for the password
    let password = "";

    // Generate a 12-character password by randomly selecting characters from allChars
    for (let i = 0; i < 12; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Display the generated password in the input box
    passwordBox.value = password;
}

/*
 * Function to copy the generated password to the clipboard
 * This function also shows a confirmation message when the password is copied successfully.
 */
function copyPassword() {
    // Get the current password from the input box
    const password = passwordBox.value;

    // Check if there is a password to copy
    if (password) {
        // Use the Clipboard API to copy the password to the clipboard
        navigator.clipboard.writeText(password).then(() => {
            // Show the confirmation message when the password is successfully copied
            copyConfirmation.style.display = 'block';

            // Hide the confirmation message after 2 seconds (2000 milliseconds)
            setTimeout(() => {
                copyConfirmation.style.display = 'none';
            }, 2000);
        }).catch(err => {
            // Alert the user if there is an error in copying the password
            alert("Failed to copy password: " + err);
        });
    } else {
        // Alert the user if there is no password to copy
        alert("No password to copy!");
    }
}

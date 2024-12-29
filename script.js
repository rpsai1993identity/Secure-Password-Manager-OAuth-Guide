function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;

    let characterSets = [];
    if (includeUppercase) characterSets.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (includeLowercase) characterSets.push('abcdefghijklmnopqrstuvwxyz');
    if (includeNumbers) characterSets.push('0123456789');
    if (includeSpecial) characterSets.push('!@#$%^&*()_+-=[]{}|;:\'",.<>?/`~');

    if (characterSets.length === 0) {
        alert('Please select at least one character set!');
        return;
    }

    let password = '';
    const allCharacters = characterSets.join('');
    for (let i = 0; i < length; i++) {
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }

    document.getElementById('password').textContent = password;
}

function copyToClipboard() {
    const passwordElement = document.getElementById('password');
    if (passwordElement.textContent) {
        navigator.clipboard.writeText(passwordElement.textContent).then(function() {
            alert('Password copied to clipboard!');
        }, function(err) {
            alert('Failed to copy password: ', err);
        });
    } else {
        alert('No password to copy!');
    }
}

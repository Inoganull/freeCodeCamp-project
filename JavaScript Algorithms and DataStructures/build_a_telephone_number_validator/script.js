const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

// Regular expression for valid US phone numbers
const phoneRegex = /^1?\s?(\d{3}|\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$/;

// Function to validate phone number
const validatePhoneNumber = (input) => {
    if (!input) {
        return { valid: false, message: 'Please provide a phone number' };
    }

    const match = input.match(phoneRegex);
    if (match) {
        return { valid: true, message: 'Valid US number: ' + input };
    } else {
        return { valid: false, message: 'Invalid US number: ' + input };
    }
};

// Function to display result
const displayResult = (result) => {
    const pTag = document.createElement('p');
    pTag.className = 'results-text';
    pTag.style.color = result.valid ? '#00471b' : '#4d3800';
    pTag.appendChild(document.createTextNode(result.message));
    resultsDiv.appendChild(pTag);
};

// Event listeners
checkBtn.addEventListener('click', () => {
    const inputValue = userInput.value.trim();
    if (!inputValue) {
        alert('Please provide a phone number');
        return;  // Exit the function early if the input is empty
    }
    const result = validatePhoneNumber(inputValue);
    displayResult(result);
    userInput.value = '';
});

userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const inputValue = userInput.value.trim();
        if (!inputValue) {
            alert('Please provide a phone number');
            return;  // Exit the function early if the input is empty
        }
        const result = validatePhoneNumber(inputValue);
        displayResult(result);
        userInput.value = '';
    }
});

clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
});
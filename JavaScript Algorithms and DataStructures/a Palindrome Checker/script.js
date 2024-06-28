const inputBox = document.getElementById("text-input");
const outputBox = document.getElementById("result");
const checkButton = document.getElementById("check-btn");

function isPalindrome(str) {
	let alphanumString = str.replace(/\W|_|\s/g, "").toLowerCase();

	return alphanumString === alphanumString.split("").reverse().join("");
		
}

function renderOutput() {
	if (inputBox.value === "") {
		alert("Please input a value");
	} else {
		const isPal = isPalindrome(inputBox.value);
		const inputValue = `<span class="${isPal ? 'palindrome' : 'not-palindrome'}">${inputBox.value}</span>`;
		const resultText = isPal
			? `${inputValue} is a palindrome`
			: `${inputValue} is not a palindrome`;
			outputBox.innerHTML = resultText;
	}
}

checkButton.addEventListener("click", renderOutput);


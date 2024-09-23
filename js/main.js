const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', ' ': '/'
};

const reverseMorseCode = Object.fromEntries(
    Object.entries(morseCode).map(([key, value]) => [value, key])
);

const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const alertDiv = document.getElementById("alert");

function convertTextToMorse(text) {
    return text.toUpperCase().split('').map(char => morseCode[char] || '').join(' ');
}

function convertMorseToText(morse) {
    return morse.split(' ').map(char => reverseMorseCode[char] || '').join('');
}

function validateInput(text) {
    const regex = /^[a-zA-Z0-9 ]*$/;
    return regex.test(text);
}

document.getElementById("toMorseBtn").addEventListener("click", () => {
    const text = inputText.value.trim();
    if (text === "" || !validateInput(text)) {
        inputText.classList.add("is-invalid");
        alertDiv.classList.remove("d-none");
        outputText.textContent = "";
    } else {
        inputText.classList.remove("is-invalid");
        alertDiv.classList.add("d-none");
        const morse = convertTextToMorse(text);
        outputText.textContent = morse;
    }
});

document.getElementById("toTextBtn").addEventListener("click", () => {
    const morse = inputText.value.trim();
    if (morse === "") {
        inputText.classList.add("is-invalid");
        alertDiv.classList.remove("d-none");
        outputText.textContent = "";
    } else {
        inputText.classList.remove("is-invalid");
        alertDiv.classList.add("d-none");
        const text = convertMorseToText(morse);
        outputText.textContent = text;
    }
});

// setting game name
let gameName = "Guess The Word";
document.title = gameName;
document.querySelector("h1").innerText = gameName;
document.querySelector("footer").innerText = `${gameName} Game Created By Mustafa Ahmed`;

// Setting game options
let numberOfTries = 5;
let numberOfLetters = 6;
let currentTry = 1;
let numberOfHints = 2;

// manage Words
let wordToGuess = "";
const words = ["Create", "Update", "Delete", "Search", "Master", "Branch", "Mainly", "Elzero", "School"];
wordToGuess = words[Math.floor(Math.random() * words.length)].toLowerCase();
let messageArea = document.querySelector(".message");
// console.log(wordToGuess);

let startAndCheckBtn = document.querySelector("button");
let hintBtn = document.querySelector(".hint");
let allWordsCvr = document.querySelector(".all-words-cvr");
let allWords = document.querySelector(".all-words");

// const allTries = document.querySelectorAll(".inputs > div");
// allTries.forEach((tryDiv) => tryDiv.classList.add("disabled-inputs"));

startAndCheckBtn.addEventListener("click", function () {
    if (startAndCheckBtn.innerText === "Start") {
        allWordsCvr.style.display = "flex";
        allWords.innerHTML += words.join(" / ");
        setTimeout(() => {
            allWordsCvr.style.display = "none";
            startAndCheckBtn.innerText = "Check Word";
            // focus on first input in first try element
            hintBtn.disabled = false;
            document.querySelector(".try-1").classList.remove("disabled-inputs");
            document.querySelectorAll(".try-1 input").forEach((input) => input.disabled = false)
            document.querySelector("#guess-1-letter-1").focus();
        }, 500);
    }
});

// manage hints
hintBtn.children[0].innerHTML = numberOfHints;
hintBtn.addEventListener("click", getHint);

function generateInput() {
    const inputsContainer = document.querySelector(".inputs");

    // create main try div
    for (let i = 1; i <= numberOfTries; i++) {
        const tryDiv = document.createElement("div");
        tryDiv.classList.add(`try-${i}`);
        tryDiv.innerHTML = `<span>Try ${i}</span>`;
        tryDiv.classList.add("disabled-inputs");

        // create inputs
        for (let j = 1; j <= numberOfLetters; j++) {
            const input = document.createElement("input");
            input.type = "text";
            input.id = `guess-${i}-letter-${j}`;
            input.setAttribute("maxlength", "1");
            tryDiv.appendChild(input);
        }
        inputsContainer.appendChild(tryDiv);
    }

    // disable all inputs except first one
    const inputsInDisabledDiv = document.querySelectorAll(".disabled-inputs input");
    inputsInDisabledDiv.forEach((input) => (input.disabled = true));

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input, index) => {
        input.addEventListener("input", function () {
            // convert input to lower case
            this.value = this.value.toLowerCase();

            // go to next input
            const nextInput = inputs[index + 1];
            if (nextInput) nextInput.focus();
        });
        input.addEventListener("keydown", function (event) {
            const currentIndex = Array.from(inputs).indexOf(event.target); // or just use arguments (index)
            if (event.key === "ArrowRight") {
                const nextInput = currentIndex + 1;
                if (nextInput < inputs.length) inputs[nextInput].focus();
            }
            if (event.key === "ArrowLeft") {
                const previosInput = currentIndex - 1;
                if (previosInput >= 0) inputs[previosInput].focus();
            }
        });
    });
}

startAndCheckBtn.addEventListener("click", function () {
    if (startAndCheckBtn.innerText === "Check Word") {
        handleGuesses();
    }
});

function handleGuesses() {
    let successGuess = true;
    for (let i = 1; i <= numberOfLetters; i++) {
        const inputField = document.querySelector(`#guess-${currentTry}-letter-${i}`);
        const letter = inputField.value.toLowerCase();
        const actualLetter = wordToGuess[i - 1];

        // game logic
        if (letter === actualLetter) {
            inputField.classList.add("in-place");
        } else if (wordToGuess.includes(letter) && letter !== "") {
            inputField.classList.add("not-in-place");
            successGuess = false;
        } else {
            inputField.classList.add("wrong");
            successGuess = false;
        }
    }

    // check if user win or lose
    if (successGuess === true) {
        messageArea.prepend("You Win The Word Is ");
        messageArea.children[0].innerText = wordToGuess;
        if (numberOfHints ===2) {
            messageArea.children[1].innerText = `Congratz u Didn't Use Hints`;
        }
        // messageArea.innerHTML = `You Win The Word Is <span>${wordToGuess}</span>`;
        let allTries = document.querySelectorAll(".inputs > div");
        allTries.forEach((tryDiv) => tryDiv.classList.add("disabled-inputs"));
        // startAndCheckBtn.disabled = true;
        hintBtn.disabled = true;
        startAndCheckBtn.innerText = "Play Again";
        startAndCheckBtn.onclick = () => {
            if (startAndCheckBtn.innerText === "Play Again") location.reload();
        }
    } else {
        document.querySelector(`.try-${currentTry}`).classList.add("disabled-inputs");
        const currentTryInputs = document.querySelectorAll(`.try-${currentTry} input`);
        currentTryInputs.forEach((input) => (input.disabled = true));
        currentTry++;

        const nextTryInputs = document.querySelectorAll(`.try-${currentTry} input`);
        nextTryInputs.forEach((input) => (input.disabled = false));

        let el = document.querySelector(`.try-${currentTry}`);
        if (el) {
            document.querySelector(`.try-${currentTry}`).classList.remove("disabled-inputs");
            el.children[1].focus();
        } else {
            messageArea.innerHTML = `You Lose The Word Is <span>${wordToGuess}</span>`
            hintBtn.disabled = true;
            startAndCheckBtn.innerText = "Play Again";

            startAndCheckBtn.onclick = () => {
                if (startAndCheckBtn.innerText === "Play Again") location.reload();
            }
        }
    }
}

function getHint() {
    
    // const enabledInput = document.querySelectorAll("input:not([disabled])");
    const enabledInput = document.querySelectorAll(`.try-${currentTry} input`);
    const emptyInput = Array.from(enabledInput).filter((input) => input.value === "");
    if (emptyInput.length > 0) {
        if (numberOfHints > 0) {
            numberOfHints--;
            hintBtn.children[0].innerHTML = numberOfHints;
        }
        if (numberOfHints === 0) {
            hintBtn.disabled = true;
        }
        const randomIndex = Math.floor(Math.random() * emptyInput.length);
        const randomInput = emptyInput[randomIndex];
        const indexToFill = Array.from(enabledInput).indexOf(randomInput);
        console.log(randomIndex);
        console.log(randomInput);
        console.log(indexToFill);
        if (indexToFill !== -1) {
            randomInput.value = wordToGuess[indexToFill].toLocaleLowerCase();
        }
    }
}

function handleBackSpace(event) {
    if (event.key === "Backspace") {
        const inputs = document.querySelectorAll("input:not([disabled])");
        const currentIndex = Array.from(inputs).indexOf(document.activeElement);
        if (currentIndex > 0) {
            const currentInput = inputs[currentIndex];
            const previousInput = inputs[currentIndex - 1];
            currentInput.value = "";
            previousInput.value = "";
            previousInput.focus();
        } else {
            const currentInput = inputs[currentIndex];
            currentInput.value = "";
        }
    }
}

document.addEventListener("keydown", handleBackSpace);

window.onload = () => {
    generateInput();
}
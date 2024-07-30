function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const minNumber = 1; 
const maxNumber = 100; 
let computerNumber = getRandomNumber(minNumber, maxNumber);

function handleGuess() {
	const userGuess = parseInt(document.getElementById('userGuess').value);

    if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
        alert(`Please enter a number between ${minNumber} and ${maxNumber}.`);
        return; 
    }

    if (userGuess === computerNumber) {
        alert('Congratulations! You guessed the right number!');
        computerNumber = getRandomNumber(minNumber, maxNumber);
    } else {
        alert(`Sorry, that's not correct. The number was ${computerNumber}. Try again!`);
        
    }

    document.getElementById('userGuess').value = '';
}

document.getElementById('startButton').addEventListener('click', handleGuess);
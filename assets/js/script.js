// Global variables

let totalScore = 0;
let initial = 20;
let randomNumber;

// Containers 
let mapBox = document.querySelector('#map-box');
let quizBox = document.querySelector('#quiz-box');
let infoBox = document.querySelector('#info-box');
let infoInner = document.querySelector('#info-inner');
let dataBox = document.querySelector('#data-box');
let btnContainer = document.querySelector('#button-container');

// Buttons
let h1 = document.querySelector('h1');
    h1.addEventListener('click', refresh);
let enterBtn = document.querySelector('#enter-button');
    enterBtn.addEventListener('click', showBox);
let mapBtn = document.querySelector('#map-btn');
    mapBtn.addEventListener('click', showMap);
let quizBtn = document.querySelector('#quiz-btn');
    quizBtn.addEventListener('click', showQuiz);
let inMapBtn = document.querySelector('#in-map-btn');
    inMapBtn.addEventListener('click', startQuiz);
let quitGame = document.querySelector('#quit-game');
    quitGame.addEventListener('click', showBox);
let playGame = document.querySelector('#play-game');
    playGame.addEventListener('click', startGame);
let firstQ = document.querySelector('#first-q');
    firstQ.addEventListener('click', checkAnswer);
let secondQ = document.querySelector('#second-q');
    secondQ.addEventListener('click', checkAnswer);
let playAgain = document.querySelector('#play-again');
    playAgain.addEventListener('click', startGame);

    // Text elements 
let showSpeed = document.querySelector('#speed');
let showAltitude = document.querySelector('#altitude');
let score = document.querySelector('#score');
let question = document.querySelector('.show-message');

// Functions

// Opens the info box
function showBox() {
    infoBox.style.display = 'flex';
    infoInner.style.display = 'block';
    btnContainer.style.display = 'none';
    mapBox.style.display = 'none';
    dataBox.style.display = 'none';
    quizBox.style.display = 'none';
    score.style.display = 'none';
    question.textContent = 'Welcome to the International Space Station quiz';
}

// Opens the map window
function showMap() {
    infoInner.style.display = 'none';
    mapBox.style.display = 'flex';
    dataBox.style.display = 'inline';
    showAltitude.style.display = 'block';
    showSpeed.style.display = 'block';
    inMapBtn.style.display = 'inline';
    map.invalidateSize();
}

// Opens the quiz window
function showQuiz() {
    infoInner.style.display = 'none';
    dataBox.style.display = 'inline';
    quizBox.style.display = 'block';
    showAltitude.style.display = 'none';
    showSpeed.style.display = 'none';
    score.style.display = 'block';
    score.innerText = `Score: ${totalScore}`;
    score.style.fontSize = '2rem';
    inMapBtn.style.display = 'none';
    firstQ.style.display = 'none';
    secondQ.style.display = 'none';
}

// Opens the quiz window from inside the map window
function startQuiz() {
    mapBox.style.display = 'none';
    quizBox.style.display = 'block';
    showAltitude.style.display = 'none';
    showSpeed.style.display = 'none';
    inMapBtn.style.display = 'none';
    score.style.display = 'block';
    score.innerText = `Score: ${totalScore}`;
    score.style.fontSize = '2rem';
    firstQ.style.display = 'none';
    secondQ.style.display = 'none';
}

// Generates a random number, used to randomize the questions.
function randomizer() {
    let randomNum = Math.floor(Math.random() * `${initial}`);
    randomNumber = randomNum;
    initial--;
}

// increments the score
function increment() {
    totalScore++;
    score.innerText = `Score: ${totalScore}`;
}

// Refresh the page by clicking the h1
function refresh() {
    window.location.reload();
}

// The following functions run the game

// Generates the first question and the score board
function startGame() {
    randomizer();
    playAgain.style.display = 'none';
    score.innerText = `Score: ${totalScore}`;
    playGame.style.display = 'none';
    quitGame.style.display = 'none';
    firstQ.style.display = 'inline-block';
    secondQ.style.display = 'inline-block';
    question.textContent = questions[randomNumber].question;
    firstQ.textContent = questions[randomNumber].a;
    secondQ.textContent = questions[randomNumber].b;
    checkAnswer();
}

// Checks the innerText of the clicked button against the correct answer
function checkAnswer(event) {
    let changeColor = `#${event.target.id}`;
    let clicked = event.target.innerText;
    if (clicked === questions[randomNumber].correct) {
        document.querySelector(changeColor).style.backgroundColor = 'rgba(2, 107, 18, 0.8)';
        questions.splice(randomNumber, 1);
        increment();
    } else {
        document.querySelector(changeColor).style.backgroundColor = 'rgb(148, 3, 3)';
        questions.splice(randomNumber, 1);
    }
    continueGame();
}

// Generates the next question or ends the game
function continueGame() {
    setTimeout(function() {
        firstQ.style.backgroundColor = 'rgb(64 58 85)';
        secondQ.style.backgroundColor = 'rgb(64 58 85)';
    }, 150);
    if (questions.length > 10) {
        startGame();
    }
    showScore();
}

// Checks the score and prints the end of game message
function showScore() {
    if (totalScore >= 7) {
        question.textContent = 'Awesome, you know your ISS trivia! Play again?';
    } else if (totalScore >= 4) {
        question.textContent = 'You could do with some practice! Play again?';
    } else {
        question.textContent = 'Better luck next time! Play again?';
    }
    firstQ.style.display = 'none';
    secondQ.style.display = 'none';
    newGame();
}

// Initializes the playAgain button and sets up the global variables to play again
function newGame() {
    totalScore = 0;
    questions = [...reloadQuestions];
    initial = 20;
    playAgain.style.display = 'inline-block';
    quitGame.style.display = 'inline-block';
}
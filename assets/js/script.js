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
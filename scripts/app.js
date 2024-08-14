const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];

const bodyConfigurationElement = document.getElementById('colorConfig');
const mainHeaderColor = document.getElementById('main-header');
const BtnConfigColor = document.getElementById('start-game-btn');
const ColorPlayerConfig1 = document.getElementById('Colorset1');
const ColorPlayerConfig2 = document.getElementById('Colorset2');
const hoverbtncolor = document.getElementById('btn:hover');
const overlayColorElement = document.getElementById('config-overlay');

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startnewgameElement = document.getElementById('start-game-btn');
const gameBoardElement = document.getElementById('game-board');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startnewgameElement.addEventListener('click', startnewgame);

gameAreaElement.addEventListener('click', selectGameField);

trilho .addEventListener('click', darkmode);

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('darkm')
})
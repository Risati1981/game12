// Define the quiz questions and answers
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Paris", "Berlin", "Madrid"],
    correctChoice: 1
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["K2", "Everest", "Kilimanjaro", "Denali"],
    correctChoice: 1
  },
  {
    question: "What is the currency of Japan?",
    choices: ["Yen", "Dollar", "Euro", "Pound"],
    correctChoice: 0
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "Canada", "China", "USA"],
    correctChoice: 0
  },
  {
    question: "What is the smallest country by area?",
    choices: ["Monaco", "Vatican City", "Nauru", "Tuvalu"],
    correctChoice: 1
  }
];

// Set up variables
let score = 0;
let questionIndex = 0;
let countdownIntervalId;

const startButton = document.getElementById("start");
const quizContainer = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const countdownElement = document.getElementById("countdown");
const resultsContainer = document.getElementById("results");
const scoreElement = document.getElementById("score");
const initialsInput = document.getElementById("initials");

// Shuffle an array in place
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Start the quiz
function startQuiz() {
  startButton.style.display =

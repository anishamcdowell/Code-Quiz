//Global variables
var isStarted = false;

//Button Elements
var startButton = document.getElementById("start-quiz-btn");
var nextButton = document.getElementById("next-btn");
var quizEl = document.getElementById("quiz-container");
var questionEl = document.getElementById("question-container");

//Quiz Results
var totalQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(totalQuestions)

var randomQuestionOrder = [];
var correctAnswers;
var options = ["A", "B", "C", "D"];

var answerA = document.getElementById("answer-btn-a");
var answerB = document.getElementById("answer-btn-b");
var answerC = document.getElementById("answer-btn-c");
var answerD = document.getElementById("answer-btn-d");

var results = "correctAnswers + "/" totalQuestions";

//Initial app behavior
nextButton.hidden = true;
if (isStarted === false) {
    quizEl.style.display = "none";
    nextButton.style.display = "none";
}



//Randomize quiz questions
// function randomizeQuestions() {
//}

//Start Quiz
function startQuiz() {
    startButton.style.display = "none";
    quizEl.style.display = "inline-block";
    nextButton.style.display = "inline-block";
    questionEl.textContent = questionsArray.questions[0];
    answerA.textContent = answersArray.correctAnswers[0];
};

console.log(answerA);

//Quiz
var questionsArray = {
    questions: ["What is 1+1?", "Q2", "Q3", "Q4", "Q5"]
};
var answersArray = {
    correctAnswers: ["2", "A2", "A3", "A4", "A5"],
};
var optionsArray = {
    options1: ["opt1", "opt2", "opt3", "opt4", "opt5"],
    options2: ["opt1", "opt2", "opt3", "opt4", "opt5"],
    options3: ["opt1", "opt2", "opt3", "opt4", "opt5"],
    options4: ["opt1", "opt2", "opt3", "opt4", "opt5"],
    options5: ["opt1", "opt2", "opt3", "opt4", "opt5"],
};

var randomQuestion = Math.floor(Math.random() * 5); 
console.log(optionsArray.options1[randomQuestion]);

//Randomize answer to each question
//Correct answer selected

//Incorrect answer selection

//Next button selected
nextButton.addEventListener("click", function nextQuestion() {
    console.log("Next question selected!")
})

//End of quiz
//Final answer answered

//Show results
function showResults() {
    document.getElementById("results").textContent=results;
}
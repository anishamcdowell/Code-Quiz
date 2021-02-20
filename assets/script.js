//Global variables
var isStarted = false;
var timeEl = document.getElementById("timer");

//Button Elements
var startButton = document.getElementById("start-quiz-btn");
var nextButton = document.getElementById("next-btn");
var quizEl = document.getElementById("quiz-container");
var questionEl = document.getElementById("question-container");
var scoresButton = document.getElementById("view-highscores");
var retryButton = document.getElementById("retry-quiz");

//Hidden Message

var timeUpMsg = document.getElementById("hidden-msg");
console.log(timeUpMsg);

//Quiz Results
// var totalQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(totalQuestions)

// var randomQuestionOrder = [];
// var correctAnswers;
// var options = ["A", "B", "C", "D"];

// var answerA = document.getElementById("answer-btn-a");
// var answerB = document.getElementById("answer-btn-b");
// var answerC = document.getElementById("answer-btn-c");
// var answerD = document.getElementById("answer-btn-d");

// var results = "correctAnswers + "/" totalQuestions";

//Initial app behavior
nextButton.hidden = true;
if (isStarted === false) {
    quizEl.style.display = "none";
    nextButton.style.display = "none";
    timeUpMsg.style.display = "none";
    scoresButton.style.display = "none";
    retryButton.style.display = "none";
}

//Start Quiz and Timer
startButton.addEventListener("click", function startQuiz() {
    startButton.style.display = "none";
    quizEl.style.display = "inline-block";
    nextButton.style.display = "inline-block";
    showTimer();
});

time = 3;

function showTimer() {
    var timerInterval = setInterval(function() {
        time--;
        timeEl.textContent = "Timer: " + time;
        if (time == 0) {
            clearInterval(timerInterval);
            //Display "Time's up!" message
            nextButton.style.display ="none";
            quizEl.style.display ="none";
            timeUpMsg.style.display = "inline-block";
            scoresButton.style.display = "block";
            retryButton.style.display = "block";
        }
    }, 1000);
};

//View my score buttonn function

//Retry quiz button function
function retry() {
    retryButton.addEventListener("click, function(){
        location.reload();
    }")
}


// //Load Questions
// function loadQuestions() {
//     // questionEl.textContent = questionsArray[0];
//     // answerB.textContent = answersArray[0];
//     // answerA.textContent = optionsArray[0][0];
//     // answerC.textContent = optionsArray[0][1];
//     // answerD.textContent = optionsArray[0][2];
// }

//Quiz
var questionsArray = [
    "What does HTML stand for?", 
    "Which is the correct CSS syntax?", 
    "Which of this is used to link a Javascript document to an HTML document?", 
    "Which semantic tag can replace a generic <div> when creating a navigation bar?", 
    "Which language is used to style the UI of an HTML document?"
];

var answersArray = [
    "Hypertext Markup Language", 
    "font-size: 12px;", 
    "<script></script>", 
    "<nav>", 
    "CSS"
];

var optionsArray = [
    ["Hypertext Marked Language", "Hyper Typer Mark Language", "Hypertext Marking Language"],
    ["font-size: 12px;", "font-size: 12;", "text-size: 12px;", "font: 12px;"],
    ["<js></js>", "<link></link>", "<a></a>", "<script></script>"],
    ["<navbar>", "<navigate>", "<nav>", "<navigation>"],
    ["CSS", "Javascript", "Java", "Python"],
];

var randomQuestion = Math.floor(Math.random() * 5); 
console.log(optionsArray[randomQuestion]);

//Randomize answer to each question
//Correct answer selected

//Incorrect answer selection

//Next button selected
nextButton.addEventListener("click", function nextQuestion() {
    console.log("Next question selected!")
})

//End of quiz
//Final answer answered

// //Show results
// function showResults() {
//     document.getElementById("results").textContent=results;
// }
//Global variables
var isStarted = false;

//Button Elements
var startButton = document.getElementById("start-quiz-btn");
var nextButton = document.getElementById("next-btn");
var quizEl = document.getElementById("quiz-container");
var questionEl = document.getElementById("question-container");

//Quiz elements

//Initial app behavior
nextButton.hidden = true;
if (isStarted === false) {
    quizEl.style.display = "none";
    nextButton.style.display = "none";
};

//When I click the start button a timer starts and I am presented with a questions
function startQuiz () {
    //Hide and display buttons
    startButton.style.display = "none";
    quizEl.style.display = "inline-block";
    nextButton.style.display = "inline-block";
    //Start Timer
    startButton.addEventListener("click", countDown());
    var timer = document.getElementById("timer");
    function countDown() {
    var timeLeft = 60;
    var timerInterval = setInterval(function() {
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            timer.textContent = "Time's up!";
        }
    }, 1000);

    timer.textContent = "Timer: " + timeLeft + " seconds left";
    };
    
    //Show questions
    function loadQuestions() {

    };
}

//When I answer a question I am presented another questions

//When I answer incorrectly the time is subtracted on the clock

//When all questions are answered or the timer is 0 the game end

//When the game ends I can save my initials and my score
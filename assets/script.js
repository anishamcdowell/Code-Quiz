//Button Elements
var startButton = document.getElementById("start-quiz-btn");
var nextButton = document.getElementById("next-btn");
var quizEl = document.getElementById("quiz-container");

//Initial app behavior
nextButton.hidden = true;

//Start Quiz
startButton.addEventListener("click", function startQuiz() {
    console.log("Quiz has begun");
    startButton.hidden = true;
    nextButton.hidden = false;
});

//Quiz
//Correct answer selected

//Incorrect answer selection

//Next button selected
nextButton.addEventListener("click", function nextQuestion {
    
})

//Button Elements
var startButton = document.getElementById("start-quiz-btn");
var nextButton = document.getElementById("next-btn");
var quizEl = document.getElementById("quiz-container");

//Quiz Results
var totalQuestions = 10;
var correctAnswers = userAnswers.value;
var results = correctAnswers + "/" totalQuestions

//Initial app behavior
nextButton.hidden = true;

//Start Quiz
startButton.addEventListener("click", function startQuiz() {
    startButton.hidden = true;
    nextButton.hidden = false;
});

//Quiz
//Correct answer selected

//Incorrect answer selection

//Next button selected
nextButton.addEventListener("click", function nextQuestion() {
    console.log("Next question selected!")
})

//End of quiz
//Final answer answered

//Show results
function showResults {
    document.getElementById("results").textContent=results;
}
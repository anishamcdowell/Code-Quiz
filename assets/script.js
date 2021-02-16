//Button Elements
var startButton = document.getElementById("start-quiz-btn");
var nextButton = document.getElementById("next-btn");
var quizEl = document.getElementById("quiz-container");

//Quiz Results
var totalQuestions = 10;
var questionsArray = [];
var correctAnswers;
var options = ["A", "B", "C", "D"];
var results = "correctAnswers + "/" totalQuestions";

//Initial app behavior
nextButton.hidden = true;

// function randomizeQuestions() {
//     var randomQuestion = totalQuestions.Math.floor(Math.random() * 11);
//     console.log(randomQuestion);
// }

//Randomize quiz questions
function randomizeQuestions () {
    for (var i = 0; i < totalQuestions.length; i++) {
        questionsArray.push(Math.floor(Math.random() * (10 - 1) ) + 1);
    }
    console.log(questionsArray);
}

//Start Quiz
startButton.addEventListener("click", function startQuiz() {
    startButton.hidden = true;
    nextButton.hidden = false;
    //Randomize question order
    randomizeQuestions();
});

//Quiz
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
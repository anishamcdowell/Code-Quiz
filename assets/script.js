//Global variables
var form = document.getElementById("form");
var isStarted = false;
var timeEl = document.getElementById("timer");

//Button Elements
var startButton = document.getElementById("start-quiz-btn");
var nextButton = document.getElementById("next-btn");
var quizEl = document.getElementById("quiz-container");
var questionEl = document.getElementById("question-container");
var scoresButton = document.getElementById("view-highscores");
var retryButton = document.getElementById("retry-quiz");

//Button functions
//Retry quiz button


// function retry() {
//     retryButton.addEventListener("click", retry());
//     window.location.reload();
//     return;
// }

//Hidden Message
var timeUpMsg = document.getElementById("hidden-msg");
console.log(timeUpMsg);

//Quiz Results
// var totalQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(totalQuestions)

// var randomQuestionOrder = [];
// var correctAnswers;
// var options = ["A", "B", "C", "D"];

var answerA = document.getElementById("answer-btn-a");
var answerB = document.getElementById("answer-btn-b");
var answerC = document.getElementById("answer-btn-c");
var answerD = document.getElementById("answer-btn-d");

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

    time = 60;

    function showTimer() {
        var timerInterval = setInterval(function() {
            time--;
            timeEl.textContent = "Timer: " + time;
            if (time == 0) {
                clearInterval(timerInterval);
                //Remove quiz and display only "Time's up!" message, view score button, and retry quiz button
                nextButton.style.display ="none";
                quizEl.style.display ="none";
                timeUpMsg.style.display = "inline-block";
                scoresButton.style.display = "block";
                retryButton.style.display = "block";
            }
        }, 1000);

    //First question
    questionEl.textContent = questionsArray[0];
    //Capture user answer for question 1
        // function captureAnswer() {
        //     if ( === 1) {
        //         //add point to correct answer storage
        //     } else {
        //         //take 10 seconds off of timer
        //     }
        // }
    //Display questions
    nextQuestion();
};

//Next Question function

function nextQuestion() {
    nextButton.addEventListener("click", function(){
        console.log("Next question selected!");
        for (var i = 0; i < questionsArray.length; i++) {
            questionEl.textContent = questionsArray[i];
        };
    })   
};

//Quiz Data
var questionsArray = [
    "What does HTML stand for?",
    "Which is the correct CSS syntax?",
]

//Arrays that contain every possible answer option for each question
var optionsArray = {
    q1options: ["Hypertyper Markup Language", "Hypertext Markup Language", "Hype Text Marking Language", "Have To Make Language"],
    q2options: [ "font: 12px;","font-size: 12;", "text-size: 12px;", "font-size: 12px;"],
}

//Correct answers to each question where A=0, B=1, C=2, D=3
var answersArray = [1, 3, 0, 2, 1];

answerA.innerHTML = optionsArray.q1options[0];
answerB.innerHTML = optionsArray.q1options[1];
answerC.innerHTML = optionsArray.q1options[2];
answerD.innerHTML = optionsArray.q1options[3];

function retryQuiz(){
    retryButton.addEventListener("click", function reload(){
        location.reload();
    });
    return;
};

retryQuiz();


// var randomQuestion = Math.floor(Math.random() * 5); 
// console.log(optionsArray[randomQuestion]);

//View my score button function

//Correct answer selected

//Incorrect answer selection

//End of quiz
//Final answer answered

// //Show results
// function showResults() {
//     document.getElementById("results").textContent=results;
// }
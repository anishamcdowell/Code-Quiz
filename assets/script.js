//Global variables
var form = document.getElementById("form");
var isStarted = false;
var timeEl = document.getElementById("timer");
var correctAnswer;

//Button and Container Elements
var startButton = document.getElementById("start-quiz-btn");
var nextButton = document.getElementById("next-btn");
var quizEl = document.getElementById("quiz-container");
var questionEl = document.getElementById("question-container");
var scoresButton = document.getElementById("view-highscores");
var retryButton = document.getElementById("retry-quiz");
var resultsEl = document.getElementById("results");

//Hidden Message
var timeUpMsg = document.getElementById("hidden-msg");
console.log(timeUpMsg);

var answerA = document.getElementById("answer-btn-a");
var answerB = document.getElementById("answer-btn-b");
var answerC = document.getElementById("answer-btn-c");
var answerD = document.getElementById("answer-btn-d");

//Initial app behavior
nextButton.hidden = true;
if (isStarted === false) {
    quizEl.style.display = "none";
    nextButton.style.display = "none";
    timeUpMsg.style.display = "none";
    scoresButton.style.display = "none";
    retryButton.style.display = "none";
    resultsEl.style.display = "none";
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
    answerA.innerHTML = optionsArray.q1options[0];
    answerB.innerHTML = optionsArray.q1options[1];
    answerC.innerHTML = optionsArray.q1options[2];
    answerD.innerHTML = optionsArray.q1options[3];
    correctAnswer = {
        answer1: "B",
    };
    console.log(correctAnswer);
    //Evaluate user answer
        // function captureAnswer() {
        //     if ( === 1) {
        //         //add point to correct answer storage
        //     } else {
        //         //take 10 seconds off of timer
        //     }
        // }
    //Display next question
    displayQuestion2();
};

//Next Question function
function displayQuestion2() {
    nextButton.addEventListener("click", function(event){
        event.preventDefault();
        //Set new question and answer options
        questionEl.textContent = questionsArray[1];
        answerA.innerHTML = optionsArray.q2options[0];
        answerB.innerHTML = optionsArray.q2options[1];
        answerC.innerHTML = optionsArray.q2options[2];
        answerD.innerHTML = optionsArray.q2options[3];
        correctAnswer = {
            answer2: "D",
        };
        console.log(correctAnswer);
        //Display next question
        displayQuestion3();
    })   
};

function displayQuestion3() {
    nextButton.addEventListener("click", function(event){
        event.preventDefault();
        //Set new question and answer options
        questionEl.textContent = questionsArray[2];
        answerA.innerHTML = optionsArray.q3options[0];
        answerB.innerHTML = optionsArray.q3options[1];
        answerC.innerHTML = optionsArray.q3options[2];
        answerD.innerHTML = optionsArray.q3options[3];
        correctAnswer = {
            answer3: "A",
        };
        console.log(correctAnswer);
        //Display next question
        displayQuestion4();
    })   
};

function displayQuestion4() {
    nextButton.addEventListener("click", function(event){
        event.preventDefault();
        //Set new question and answer options;
        questionEl.textContent = questionsArray[3];
        answerA.innerHTML = optionsArray.q4options[0];
        answerB.innerHTML = optionsArray.q4options[1];
        answerC.innerHTML = optionsArray.q4options[2];
        answerD.innerHTML = optionsArray.q4options[3];
        correctAnswer = {
            answer4: "B",
        };
        console.log(correctAnswer);
        //Display next question
        displayQuestion5();
    })   
};

function displayQuestion5() {
    nextButton.addEventListener("click", function(event){
        event.preventDefault();
        //Set new question and answer options
        questionEl.textContent = questionsArray[4];
        answerA.innerHTML = optionsArray.q5options[0];
        answerB.innerHTML = optionsArray.q5options[1];
        answerC.innerHTML = optionsArray.q5options[2];
        answerD.innerHTML = optionsArray.q5options[3];
        correctAnswer = {
            answer5: "D",
        };
        console.log(correctAnswer);
        endQuiz();
    })   
};

function endQuiz() {
    nextButton.addEventListener("click", function(event){
        event.preventDefault()
        resultsEl.style.display = "block";
        retryButton.style.display = "inline-block";
        quizEl.style.display = "none";
})
};

//Array of all questions
var questionsArray = [
    "What does HTML stand for?",
    "Which is the correct CSS syntax?",
    "Which semantic tag can be used to create a navigation section in an HTML document?",
    "What language is used to style the UI of an HTML document?",
    "Was this homework assignment easy?"
]

//Object of arrays that contain every possible answer option
var optionsArray = {
    q1options: ["Hypertyper Markup Language", "Hypertext Markup Language", "Hype Text Marking Language", "Have To Make Language"],
    q2options: [ "font: 12px;","font-size: 12;", "text-size: 12px;", "font-size: 12px;"],
    q3options: ["navigation","section","nav","navbar"],
    q4options: ["C++","CSS","Java","Javascript"],
    q5options: ["Totally!","Yes","No","Absolutely not!"]
}

//Correct answers index value to each question where 0=A, 1=B, 2=C, 3=D
var answersArray = [1, 3, 0, 2, 3];

function retryQuiz(){
    retryButton.addEventListener("click", function reload(){
        location.reload();
    });
    return;
};

retryQuiz();
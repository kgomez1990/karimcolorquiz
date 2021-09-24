var buttonEl = document.getElementById('start');
var countdownEl = document.getElementById('countdown');
var scoreHeadEl = document.getElementById('score');
var messageEl = document.getElementById('message');
var messageWrongEl = document.getElementById('messageWrong');
var mainEl = document.getElementById("main");
var quizEl = document.querySelector(".quiz");
var resultsEl = document.querySelector("#results");
var formEl = document.querySelector("#myForm");
var scoreEl = document.querySelector("#myScore");
var initialEl;
var quizQuestions = [];
var thisQuestion = [];
var countdown = 50;
var score = 0;
var count = 0;
var countdownInterval;
var myAnswer;


function init() {
    quizQuestionObject = JSON.parse(localStorage.getItem("quiz"));
}


function startGame () {
    if (count === 10) {
        clearInterval(countdownInterval);
        gameOver();
        return;
    }

    if (count === 0) {
        mainEl.setAttribute("style", "display: none");
        quizEl.setAttribute("style", "display: block");
        startCoundown();
        answerQuestion();
    }

    pullQuestion(count);
    displayQuestion();
}


function pullQuestion(num) {
    thisQuestion = quizQuestionObject[num];
    return thisQuestion;
}

function displayQuestion () {

    if (!thisQuestion) {
        gameOver()
    } else {
        quizEl.innerHTML = '';
        quizEl.textContent = thisQuestion.question;
    
        for (var i = 0; i < 4; i++) {
            var lix = document.createElement('li');
            lix.textContent = thisQuestion.options[i]
            lix.setAttribute('style', "background-color : blue; padding: 10px; margin: 10px; text-alig: center");
            quizEl.appendChild(lix)
        }
    }

    // quizEl.innerHTML = '';
    // quizEl.textContent = thisQuestion.question;

    // for (var i = 0; i < 4; i++) {
    //     var lix = document.createElement('li');
    //     lix.textContent = thisQuestion.options[i]
    //     lix.setAttribute('style', "background-color : blue; padding: 10px; margin: 10px; text-alig: center");
    //     quizEl.appendChild(lix)
    // }
}

function answerQuestion() {
    quizEl.addEventListener('click', function(e) {
        e.preventDefault();
         myAnswer = e.target.textContent;
        checkAnswer(myAnswer);
    })
}

function checkAnswer () {
    messageEl.setAttribute("style", "display: none");
    messageWrongEl.setAttribute("style", "display: none");

    if (thisQuestion.answer === myAnswer) {
        score = score + 10;
        scoreHeadEl.innerHTML = `Score: ${score}`;
        messageEl.setAttribute("style", "display: block");
        count++

        startGame();
    } else {
        if (thisQuestion.answer !== myAnswer) {
            countdown = countdown - 5;
            score = score - 5;
            scoreHeadEl.innerHTML = `Score: ${score}`;
            messageWrongEl.setAttribute("style", "display: block");
        }
    }
}


function startCoundown () {
    countdownInterval = setInterval(function() {
        if (countdown >= 0) {
            countdownEl.innerHTML = `Timer: ${countdown}`;
            countdown--
        } else {
            clearInterval(countdownInterval);
            gameOver();
        }
    }, 1000)
}

function gameOver() {
    messageEl.setAttribute("style", "display: none");
    messageWrongEl.setAttribute("style", "display: none");

    resultsEl.setAttribute("style", "display: block");
    quizEl.setAttribute("style", "display: none");

    scoreEl.textContent = score;

    initialEl = document.createElement("input");
    var submitBtnEl = document.createElement("input");

    initialEl.setAttribute("type", "text");
    initialEl.setAttribute("Initials", "text");
    initialEl.setAttribute("placeholder", "Place Initials Here");

    submitBtnEl.setAttribute("type", "submit");
    submitBtnEl.setAttribute("value", "Submit");
    submitBtnEl.setAttribute("id", "submit");

    myForm.appendChild(initialEl);
    myForm.appendChild(submitBtnEl);

    submitBtnEl.addEventListener('click', submitScore);
}


function submitScore (e) {
    e.preventDefault();

    var thisHighScore = {
        highName: initialEl.value,
        highScore: score
    };

    var highScores = [];

    if (localStorage.getItem('scores') === null) {
        highScores.unshift(thisHighScore);
    } else {
        highScores =JSON.parse(localStorage.getItem('scores'));

        if (highScores.length > 4) {
            highScores.shift();
            highScores.unshift(thisHighScore);
        } else {
            highScores.unshift(thisHighScore);
        }
    }
    localStorage.setItem("scores", JSON.stringify(highScores));
    window.open("./topscores.html", "_self");
}

init();
buttonEl.addEventListener('click', startGame);
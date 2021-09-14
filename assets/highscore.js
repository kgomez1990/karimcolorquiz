
var backButtonEl = document.getElementById("goBack");
var clearButtonEl = document.getElementById("clearHigh");
var highScoreEl = document.getElementsByClassName("highScoreList");


function init() {
    highScoreEl.innerhtml = '';

    if (localStorage.getItem('scores') === null) {
        var noScore = document.createElement('h2');
        noScore.setAttribute('class', 'main');
        noScore.textContent = 'No High Scores';
        highScoreEl.appendChild(noScore);
    } else {
        var scoreEl;
        var first;
        var number;
        var highScore = {};

        for (var i = 0; i< highScore.length; i++) {
            scoreEl = document.createElement('li');
            first = highScore[i].highName;
            number = highScore[i].highScore;
            scoreEl.textContent(`${first} - ${number}`);
        }
    }
}

init()

backButtonEl.addEventListener("click", function() {
    window.open('index.html', '_self');
});

clearButtonEl.addEventListener('click', function() {
    if (localStorage.getItem('scores') !== null) {
        localStorage.removeItem('scores');
        highScoreEl.innerhtml = '';

        for (var i = 0; i < highScore.length; i++) {
            highScoreEl.textContent = '';
        }
    }

    var noScore = document.createElement('h1');
    noScore.setAttribute('class', 'main');
    noScore.textContent = 'No High Scores';

    if (highScoreEl.textContent !== 'No High Scores') {
        highScoreEl.appendChild(noScore);
    }
})
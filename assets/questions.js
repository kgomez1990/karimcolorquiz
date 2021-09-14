


var quiz = [
    {
        question: 'What color is the inside of a Kiwi?',
        options: ['black', 'green', 'yellow', 'orange'],
        answer: 'green'
    },
    {
        question: 'What color is an orange?',
        options: ['maroon', 'pink', 'yellow', 'orange'],
        answer: 'orange'
    },
    {
        question: 'What colors do grapes come in?',
        options: ['black/green', 'green/red', 'yellow/orange', 'orange/pink'],
        answer: 'green/red'
    },
    {
        question: 'What color is a lemon',
        options: ['black', 'violet', 'yellow', 'red'],
        answer: 'yellow'
    },
    {
        question: 'What color is a lime?',
        options: ['black', 'green', 'black', 'purple'],
        answer: 'green'
    },
    {
        question: 'What color is the inside of a grapefruit?',
        options: ['pink', 'yellow', 'red', 'orange'],
        answer: 'pink'
    },
];

localStorage.setItem('quiz', JSON.stringify(quiz));

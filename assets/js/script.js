var start = document.getElementById('start');
var description = document.getElementById('description');
var questions = document.getElementById('questions');
var questionText = document.getElementById('questionText');
var choiceBtn = document.querySelectorAll('.q1');
var questionIndex = 0;
var timeEl = document.getElementById('timer');
var timeLeft = 60;

var question1 = {
    text: "Inside which HTMl element do we put the JavaScript?", 
    choices: ['<js>', '<script>', '<javascript>', '<scripting>'],
    answer: "a", correct: false,
    answer: "b", correct: true,
    answer: "c", correct: false,
    answer: "d", correct: false
}

var question2 = {
    text: "Where is the correct place to insert JavaScript?", 
    choices: ['the <body> section', 'Both the <head> section and the <body> section are correct', 'The <head> section', "it doesn't matter"],
    answer: "a", correct: true,
    answer: "b", correct: false,
    answer: "c", correct: false,
    answer: "d", correct: false
}
var question3 = {
    text: "The external JavaScript file must contain the <script> tag", 
    choices: ['true', 'false'],
    answer: "a", correct: true,
    answer: "b", correct: false,
}
var question4 = {
    text: "How do you create a function in JavaScript?", 
    choices: ['function myFunction()', 'function:myFunction()', 'function = myFunction()', 'function Myfunction()'],
    answer: "a", correct: true,
    answer: "b", correct: false,
    answer: "c", correct: false,
    answer: "d", correct: false
}
var question5 = {
    text: "How does a while loop start?", 
    choices: ['while (i <= 10; i++)', 'while i = 1 to 10', 'while (i <= 10)'],
    answer: "a", correct: true,
    answer: "b", correct: false,
    answer: "c", correct: false
}
var quizQuestion = [question1, question2, question3, question4, question5];

start.addEventListener("click", startQuiz);

function startQuiz() {
    description.style.display = "none";
    questions.classList.remove("hidden");
    questionText.textContent = quizQuestion[questionIndex].text;
    for (let i = 0; i < choiceBtn.length; i++) {
        choiceBtn[i].textContent = quizQuestion[questionIndex].choices[i];  
    }
}

var timerInterval = setInterval( function timer() {
    timeLeft--;
    timeEl.textContent = "Time: " + timeLeft;

    if(timeLeft === 0) {
        clearInterval(timerInterval);
    }
}, 1000);



function nextQuestion() {
    //resetQuestion()

    displayQuestion(questionIndex) 
}

function displayQuestion(quizQuestion) {
    questions.innerText = quizQuestion;
    questions.answer.forEach(answer => {
        var button = document.createElement('button')
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', chosenAnswer);
        choiceBtn.appendChild(button)
    })
}

/*function resetQuestion() {
    choiceBtn.classList.add('hide')
    while (choiceBtn.firstChild) {
        choiceBtn.removeChild
        (choiceBtn.firstChild)
    }
}*/

function chosenAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    //statusClass(document.body, correct)
    //choiceBtn.classList.remove('hide')
}

/*function statusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}*/

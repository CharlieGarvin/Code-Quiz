var start = document.getElementById('start');
var description = document.getElementById('description');
var questions = document.getElementById('questions');
var questionText = document.getElementById('questionText');
var choiceBtn = document.querySelectorAll('.q1');
var questionIndex = 0;


var question1 = {
    text: "this is question 1", 
    choices: ["a", "b", "c", "d"],
    answer: "a"
}

var question2 = {
    text: "this is question 2", 
    choices: ["a", "b", "c", "d"],
    answer: "a"
}
var question3 = {
    text: "this is question 3", 
    choices: ["a", "b", "c", "d"],
    answer: "a"
}
var question4 = {
    text: "this is question 4", 
    choices: ["a", "b", "c", "d"],
    answer: "a"
}
var question5 = {
    text: "this is question 5", 
    choices: ["a", "b", "c", "d"],
    answer: "a"
}
var quizQuestion = [question1, question2, question3, question4, question5];
console.log(quizQuestion);

start.addEventListener("click", startQuiz);

function startQuiz() {
    description.style.display = "none";
    questions.classList.remove("hidden");
    questionText.textContent = quizQuestion[questionIndex].text;
    for (let i = 0; i < choiceBtn.length; i++) {
        choiceBtn[i].textContent = quizQuestion[questionIndex].choices[i];
        
    }
}


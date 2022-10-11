"use strict"


// Question data 
const questionsData = 
[
  {
    question: "What is the capital of United Kingdom?",
    choices: ["Manchester", "Birmingham", "London", "Birmingham"],
    answer: 2
  },
  
  {
    question: "What is the capital of United States?",
    choices: ["California", "New York", "Miami", "Florida"],
    answer: 1
  },

  {
    question: "How many minutes are in a full week?",
    choices: [10900, 10080, 9000, 600],
    answer: 1
  },
  {
    question: "How many elements are in the periodic table?",
    choices: [118, 10080, 9000,600],
    answer: 0
  }

];


// Global Variable 
const question = document.getElementById('question');
let currentQuiz = 0;
const button  = document.getElementById('submit');

// Global Variable Answers choice
const answer1 = document.getElementById('a');
const answer2 = document.getElementById('b');
const answer3 = document.getElementById('c');
const answer4 = document.getElementById('d');

// Global Variable Questions 
const question1 = document.getElementById('q1');
const question2 = document.getElementById('q2');
const question3 = document.getElementById('q3');
const question4 = document.getElementById('q4');

// Global Variable show content 
const show = document.getElementById('show');


// Global Variable question left 
const questionsLeft = document.getElementById('questions-left');

// Added the main quiz function
function loadQuiz(){
    const currentQuizData = questionsData;
    if(currentQuizData.length <= currentQuiz){
        question.innerText = 'Thanks for the answers!'; 
        show.remove();
    } else {
        // InnerTest for h3 in html
        question.innerText = currentQuizData[currentQuiz].question; 

        // Question Left 
        questionsLeft.innerText = `${currentQuiz + 1}/${currentQuizData.length}`;

        // InnerTest for question 
        question1.innerText = currentQuizData[currentQuiz].choices[0]; 
        question2.innerText = currentQuizData[currentQuiz].choices[1];
        question3.innerText = currentQuizData[currentQuiz].choices[2];
        question4.innerText = currentQuizData[currentQuiz].choices[3];
    }

  


    
    console.log(currentQuizData);
}


// Added the Event Listener 
button.addEventListener("click", submitData);

function submitData(){
    currentQuiz++;
    loadQuiz();
}



console.log(button);

// Initial call 
loadQuiz();
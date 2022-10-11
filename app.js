"use strict"


// Question data 
const currentQuizData = 
[
  {
    question: "What is the capital of United Kingdom?",
    choices: ["Manchester", "Birmingham", "London", "Birmingham"],
    answer: "c"
  },
  
  {
    question: "What is the capital of United States?",
    choices: ["California", "New York", "Miami", "Florida"],
    answer: "b"
  },

  {
    question: "How many minutes are in a full week?",
    choices: [10900, 10080, 9000, 600],
    answer: "b"
  },
  {
    question: "How many elements are in the periodic table?",
    choices: [118, 10080, 9000,600],
    answer: "a"
  }

];


// Global Variable 
const question = document.getElementById('question');
const button  = document.getElementById('submit');

// Global Variable mutable
let currentQuiz = 0;
let score = 0;

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

// Global Variable answer input left 
const radioInput = document.querySelectorAll('.radio-input');

// Added the main quiz function
function loadQuiz(){
    deselectAnswers();
    if(currentQuizData.length <= currentQuiz){

        question.innerText = 'Thanks for the answers!'; 
        const span = document.createElement('span');
        const spanElemnt = question.appendChild(span);
        spanElemnt.innerText = `You answered ${score} correctly from ${currentQuizData.length}`;
        show.remove();
        console.log(`score : ${score}`);

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

}


function getSelected() {
    let valueSelected = undefined;

    radioInput.forEach((items) => {
        if (items.checked) {
            valueSelected = true;
        }
    });

    return valueSelected;
}


function deselectAnswers() {
    radioInput.forEach((items) => {
        items.checked = false;
    });
}


// Added the Event Listener 
button.addEventListener("click", submitData);

function submitData(){
    const selected = getSelected();

    if(selected){
       
     // Colect the answer from html in value
           radioInput.forEach( items => {
            if(items.checked){
                
                if(items.id == currentQuizData[currentQuiz].answer ){
                    score++;
                }
            }
        })

    currentQuiz++;
      
    loadQuiz();
    }else{
        alert('Please select one answer');
        return false
    }

    
}

// Initial call 
loadQuiz();
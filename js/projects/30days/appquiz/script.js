const quizQuestions = [
    {
      question: "What is the capital of France?",
      answers: [
       { answer: "Berlin" , correct: false},
       { answer: "Madrid" , correct: false},
       { answer: "Paris" , correct: true},
       { answer: "Rome" , correct: false},
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { answer: "Venus" , correct: false},
        { answer: "Mars" , correct: true},
        { answer: "Jupiter" , correct: false},
        { answer: "Saturn" , correct: false},
      ]
    },
    {
      question: "What is the largest mammal?",
      answers: [
        { answer: "Elephant" , correct: false},
        { answer: "Blue Whale" , correct: true},
        { answer: "Giraffe" , correct: false},
        { answer: "Polar Bear" , correct: false},
      ]
    },
    {
      question: "Which language is primarily used for web development?",
      answers: [
        { answer: "Java" , correct: false},
        { answer: "Python" , correct: false},
        { answer: "JavaScript" , correct: true},
        { answer: "C" , correct: false},
      ]
    }
  ];

const questionElement = document.getElementById("question");
const buttonsElements = document.getElementById("buttons");
const nextbtn = document.getElementById("btn-next");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex  ;
    score ;
    nextbtn.innerHTML= "Next";
    showQuestion();

}

function showQuestion() {
    resetState();
    let currentquestion = quizQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentquestion.question


    currentquestion.answers.forEach(answers =>{
      const button = document.createElement('button');
       button.className ="btn"
       button.innerHTML = answers.answer;
       buttonsElements.appendChild(button);
       if(answers.correct){
         button.dataset.correct = answers.correct;
       }
       button.addEventListener("click" , selectAnswer)
   });

    
}

function resetState(){
    nextbtn.style.display = "none"
    while (buttonsElements.firstChild) {
        buttonsElements.removeChild(buttonsElements.firstChild)
        
    }
}
function selectAnswer(e){
     const selectBtn = e.target;
     const isCorrect = selectBtn.dataset.correct === "true"
     if (isCorrect) {
        selectBtn.classList.add("correct");
        
     }
     else{
        selectBtn.classList.add("incorrect");

     } 
     Array.from(buttonsElements.children).forEach(button => {
        if (button.dataset.correct === "true") {
            
            button.classList.add("correact");
          

        }
     })

     nextbtn.style.display ="block"

}


startQuiz();
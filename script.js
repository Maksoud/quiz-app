const quizData = [
    {
        question: "Quantos anos Florin tem?",
        a: "10",
        b: "17",
        c: "26",
        d: "110",
        correct: 'c'
    }, {
        question: "Qual foi a linguagem de programação mais utilizada em 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    }, {
        question: "Quem é o atual presidente dos EUA?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Joe Biden",
        correct: "d"
    }, {
        question: "O que significa a sigla HTML?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopeters Terminals Motorboats Lamborguinis",
        correct: "a"
    }
];

const quiz       = document.getElementById("quiz");
const answerEls  = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected() {
    
    let answer = undefined;
    
    answerEls.forEach( (answerEl) => {
        
        if (answerEl.checked) {
            
            answer = answerEl.id;
            
        }//if (answerEl.checked)
        
    });
    
    return answer;
    
}

function deselectAnswers() {
    
    answerEls.forEach( (answerEl) => {
        answerEl.checked = false;
    });
    
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();
    
    if (answer) {
        
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }//if (answer === quizData[currentQuiz].correct)
        
        currentQuiz++;
        
        if (currentQuiz < quizData.length) {
            
            loadQuiz();
            
        } else {
            
            quiz.innerHTML = `<h2>Você respondeu corretamente ${score}/${quizData.length} questões.</h2>
                              <button onClick="location.reload()">Recomeçar!</button>`;
            
        }//else if (currentQuiz < quizData.length)
        
    }//if (answer)
    
});
const quizData = [
    {
        question:"1.  Who invented C++?",
        a:"Dennis Ritchie",
        b:"Ken Thompson",
        c:"Brian Kernighan",
        d:"Bjarne Stroustrup",
        
        correct:"d"
    },
        
    {
        question:"2. What is C++?",
        a: "C++ is an object oriented programming language",
        b: "C++ is a procedural programming language",
        c: "C++ supports both procedural and object oriented programming language",
        d: "C++ is a functional programming language",
        correct:"c"
    },
        
    {
        question:"3.Which of the following is the correct syntax of including a user defined header files in C++?",
        a: "#include [userdefined]",
        b: "#include “userdefined” ",
        c: "#include <userdefined.h>",
        d: "#include <userdefined>",
        
        correct:"b"
    },
        
    {
        question:"4. Which of the following is used for comments in C++?",
        a: "/* comment */",
        b: "// comment */",
        c: "// comment",
        d: "both // comment or /* comment */",
        
        correct:"d"
    },
        
    {
        question:"5.  Which of the following user-defined header file extension used in c++?",
        a: "hg",
        b: "cpp",
        c: "h",
        d: "hf",
        
        correct:"c"
    },
        
    {
        question:"6.Which of the following is a correct identifier in C++?",
        a: "VAR_1234",
        b: "$var_name",
        c: "7VARNAME",
        d: "7var_name",
        
        correct:"a"
    },
        
    {
        question:"7. Which of the following is not a type of Constructor in C++?",
        a: "Default constructor",
        b: "Parameterized constructor",
        c: "Copy constructor",
        d: "Friend constructor",
        correct:"d"
    },
        
    {
        question:"8.Which of the following approach is used by C++?",
        a: "Left-right",
        b: "Right-left",
        c: "Bottom-up",
        d: "Top-down",
        
        correct:"c"
    },
        
    {
        question:"9.What is virtual inheritance in C++?",
        a: "C++ technique to enhance multiple inheritance",
        b: "C++ technique to ensure that a private member of the base class can be accessed somehow",
        c: "C++ technique to avoid multiple inheritances of classes",
        d: "C++ technique to avoid multiple copies of the base class into children/derived class",
        correct:"d"
    },
        
    {
        question:"10. Which of the following type is provided by C++ but not C?",
        a: "double",
        b: "float",
        c: "int",
        d: "bool",
        correct:"d"
    },
        
        
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = 
            `<h2>You Score ${score}/${quizData.length} 🥳✌🏻</h2>
           <button onclick="history.go(0)">Play Again</button>` 
           // location.reload() won't work in CodePen for security reasons;
        }
    }

});
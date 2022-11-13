const quizData = [
    {
        question:"1. PHP stands for -",
        
        a: "Hypertext Preprocessor",
        b: "Pretext Hypertext Preprocessor",
        c: "Personal Home Processor",
        d: "None of the above",
        correct: "a"
    },
        
    {
        question:"2.Who is known as the father of PHP?",
        
        a: "Drek Kolkevi",
        b: "List Barely",
        c: "Rasmus Lerdrof", 
        d: "None of the above",
        
        correct: "c"
    },
        
    {
        question:"3.Which of the following is not a variable scope in PHP?",
        
        a: "Extern",
        b: "Local",
        c: "Static",
        d: "Global",
        
        correct: "a"
    },
        
    {
        question:"4.Variable name in PHP starts with -",
        
        a: "! (Exclamation)",
        b: "$ (Dollar)",
        c: "& (Ampersand)",
        d: "# (Hash)",
        
        correct: "b"
    },
        
    {
        question:"5.Which of the following is correct to add a comment in php?",
        
        a: "& …… &",
        b: "// ……",
        c: "/* …… */",
        d: "Both (b) and (c)",
        
        correct: "d"
    },
        
    {
        question:"6.Which of the following is used to display the output in PHP?",
        
        a: "echo",
        b: "write",
        c: "print",
        d: "Both (a) and (c)",
        
        correct: "d"
    },
        
    {
        question:"7.Which of the following is the use of strlen() function in PHP?",
        
        a: "The strlen() function returns the type of string",
        b: "The strlen() function returns the length of string",
        c: "The strlen() function returns the value of string",
        d: "The strlen() function returns both value and type of string",
        
        correct:"b"
    },
        
    {
        question:"8.Which of the following is used for concatenation in PHP?",
        
        a: "+ (plus)",
        b: "* (Asterisk)",
        c: ". (dot)",
        d: "append()",
        
        correct: "c"
    },
        
    {
        question:"9.Which of the following starts with __ (double underscore) in PHP?",
        
        a: "Inbuilt constants",
        b: "User-defined constants",
        c: "Magic constants",
        d: "Default constants",
        
        correct:"c"
        
    },
        
    {
        question:"10.Which of the following is the use of strpos() function in PHP?",
        
        a: "The strpos() function is used to search for the spaces in a string",
        b: "The strpos() function is used to search for a number in a string",
        c: "The strpos() function is used to search for a character/text in a string",
        d: "The strpos() function is used to search for a capitalize character in a string",
        
        correct: "c"
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
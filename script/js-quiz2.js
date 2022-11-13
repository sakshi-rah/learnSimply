const quizData = [
    {
        question: "1. Which of the following scoping type does JavaScript use?",
        a: "Sequential",
        b: "Segmental",
        c: "Lexical",
        d: "Literal",
        correct: "c"
    },

    {
        question: "2. Why JavaScript Engine is needed?",

        a: "Both Compiling & Interpreting the JavaScript",
        b: "Parsing the javascript",
        c: "Interpreting the JavaScript",
        d: "Compiling the JavaScript",
        correct: "c"
    },

    {
        question: "3. Arrays in JavaScript are defined by which of the following statements?",

        a: "It is an ordered list of values",
        b: "It is an ordered list of objects",
        c: "It is an ordered list of string",
        d: "It is an ordered list of functions",
        correct: "a"
    },

    {
        question: "4. Which of the following is not javascript data types?",
        a: "Null type",
        b: "Undefined type",
        c: "Number type",
        d: "All of the mentioned",
        correct: "a"
    },

    {
        question: "5. JavaScript is the programming language of the ___.",

        a: "Desktop",
        b: "Mobile",
        c: "Web",
        d: "Server",
        correct: "c"
    },

    {
        question: "6. Which type of JavaScript language is ___?",

        a: "Object-oriented",
        b: "Object-based",
        c: "Functional programming",
        d: "All of the above",
        correct: "b"
    },

    {
        question: "7. In which HTML element, we put the JavaScript code?",

        a: "<javascript>...</javascript>",
        b: "<js>...</js>",
        b: "<script>...</script>",
        d: "<css>...</css>",
        correct: "c",
    },

    {
        question: "8. Which symbol is used separate JavaScript statements?",

        a: "Comma (,)",
        b: "Colon (:)",
        c: "Hyphen (_)",
        d: "Semicolon (;)",
        correct: "d",
    },

    {
        question: "9. Which JavaScript method is used to access an HTML element by id?",

        a: "getElementById()",
        b: "getElement(id)",
        c: "getElementById(id)",
        d: "elementById(id)",
        correct: "c",
    },

    {
        question: "10. Which JavaScript method is used to write HTML output?",

        a: "document.write()",
        b: "document.output()",
        c: "console.log()",
        d: "document.writeHTML()",
        correct: "a",
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
            quiz.innerHTML = `
<h2>You Score ${score}/${quizData.length} 🥳✌🏻</h2>
<button onclick="history.go(0)">Play Again</button>
` // location.reload() won't work in CodePen for security reasons;
        }
    }
});
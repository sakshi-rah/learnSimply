const quizData = [
    {
        question: "1) CSS stands for -",

        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of the above",
        correct: "c"
    },

    {
        question: "2: Which of the following is the correct syntax for referring the external style sheet?",

        a: "<style src = example.css>",
        b: '<style src = "example.css">',
        c: "<stylesheet> example.css </stylesheet>",
        d: '<link rel="stylesheet" type="text/css" href="example.css">',
        correct: "d"
    },

    {
        question: "3: The property in CSS used to change the background color of an element is -",

        a: "bgcolor",
        b: "color",
        c: "background-color",
        d: "All of the above",
        correct: "c"
    },

    {
        question: "4:  The property in CSS used to change the text color of an element is -",

        a: "bgcolor",
        b: "color",
        c: "background-color",
        d: "All of the above",
        correct: "b"
    },

    {
        question: "5: The CSS property used to control the element's font-size is -",

        a: "text-style",
        b: "text-size",
        c: "font-size",
        d: "None of the above",
        correct: "c"
    },

    {
        question: "6) The HTML attribute used to define the inline styles is -",

        a: "style",
        b: "styles",
        c: "class",
        d: "None of ,he above",
        correct: "a"
    },

    {
        question: "7) The HTML attribute used to define the internal stylesheet is -",

        a: "<style>",
        b: "style",
        c: "<link>",
        d: "<script>",
        correct: "a",
    },

    {
        question: "8) Which of the following CSS property is used to set the background image of an element?",

        a: "background-attachment",
        b: "background-image",
        c: "background-color",
        d: "None of the above",
        correct: "b",
    },

    {
        question: "9) Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",

        a: "p {background-color : yellow;}",
        b: "p {background-color : #yellow;}",
        c: "all {background-color : yellow;}",
        d: "all p {background-color : #yellow;}",
        correct: "a",
    },

    {
        question: "10) The CSS property used to set the distance between the borders of the adjacent cells in the table is -",

        a: "border-collapse",
        b: "border-radius",
        c: "border-spacing",
        d: "None of the above",
        correct: "c",
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
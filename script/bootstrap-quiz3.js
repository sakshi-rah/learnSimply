const quizData = [
    {
        question: "1. Which of the following class in Bootstrap is used to provide a responsive fixed width container?",
        a: ".container-fixed",
        b: ".container-fluid",
        c: ".container",
        d: "All of the above",
        correct: "a"
    },

    {
        question: "2. Which of the following class in Bootstrap is used to create a dropdown menu?",
        a: ".dropdown",
        b: ".select",
        c: ".select-list",
        d: "None of the above",
        correct: "a"
    },

    {
        question: "3. The Bootstrap grid system is based on how many columns?",
        a: "4",
        b: "6",
        c: "12",
        d: "8",
        correct: "c"
    },

    {
        question: "4. The content must be placed within ____ in Bootstrap.",
        a: "Rows",
        b: "Containers",
        c: "Columns",
        d: "None of the mentioned",
        correct: "c"
    },

    {
        question: "5. Which of the following class applies hover color to a specific row or a cell?",
        a: "Warning",
        b: "Active",
        c: "Success",
        d: "Danger",
        correct: "b"
    },

    {
        question: "6. Which of the following is the default size of H3 bootstrap heading?",
        a: "12px",
        b: "24px",
        c: "36px",
        d: "48px",
        correct: "b"
    },

    {
        question: "7. Which of the following bootstrap styles can be used to create a default progress bar?",
        a: ".nav-progress",
        b: ".link-progress-bar",
        c: ".progress, .progress-bar",
        d: "All of the mentioned",
        correct: "c",
    },

    {
        question: "8. Which plugin is used to cycle through elements, like a slideshow?",
        a: "Carousel Plugin",
        b: "Modal Plugin",
        c: "Tooltip Plugin",
        d: "None of the mentioned",
        correct: "a",
    },

    {
        question: "9.Which of the following is correct about the data-animation Data attribute of the Popover Plugin?",
        a: "Gives the popover a CSS fade transition",
        b: "Inserts the popover with HTML",
        c: "Indicates how the popover should be positioned",
        d: "Assigns delegated tasks to the designated targets",
        correct: "a",
    },

    {
        question: "10.Which of the following bootstrap version should be used to support IE9?",
        a: "Bootstrap 1",
        b: "Bootstrap 2",
        c: "Bootstrap 3",
        d: "Bootstrap 4",
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
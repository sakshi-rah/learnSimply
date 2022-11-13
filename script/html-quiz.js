const quizData = [
    {
        question: "1.Among the following, which is the HTML paragraph tag?",
        a: "<p>",
        b: "<pre>",
        c: "<hr>",
        d: "<a>",
        correct: "a"
    },

    {
        question: "2.Who is the father of HTML?",
        a: "Rasmus Lerdorf",
        b: "Tim Berners-Lee",
        c: "Brendan Eich",
        d: "Sergey Brin",
        correct: "b"
    },

    {
        question: "3. HTML stands for __________",
        a: "HyperText Markup Language",
        b: "HyperText Machine Language",
        c: "HyperText Marking Language",
        d: "HighText Marking Language",
        correct: "a"
    },

    {
        question: "4. What is the correct syntax of doctype in HTML5?",
        a: "</doctype html>",
        b: "<doctype html>",
        c: "<doctype html!>",
        d: "<!doctype html>",
        correct: "d"
    },

    {
        question: "5. Which of the following tag is used for inserting the largest heading in HTML?",
        a: "head",
        b: "<h1>",
        c: "<h6>",
        d: "heading",
        correct: "b"
    },

    {
        question: "6. In which part of the HTML metadata is contained?",
        a: "head tag",
        b: "title tag",
        c: "html tag",
        d: "body tag",
        correct: "a"
    },

    {
        question: "7. Which element is used to get highlighted text in HTML5?",
        a: "<u>",
        b: "<mark>",
        c: "<highlight>",
        d: "<b>",
        correct: "b"
    },

    {
        question: "8. Which of the following is not a HTML5 tag?",
        a: "<track>",
        b: "<video>",
        c: "<slider>",
        d: "<source>",
        correct: "c",
    },

    {
        question: "9. How do we write comments in HTML?",
        a: "</…….>",
        b: "<!……>",
        c: "</……/>",
        d: "<…….!>",
        correct: "b"
    },

    {
        question: "10. Which element is used for or styling HTML5 layout?",
        a: "CSS",
        b: " jQuery",
        c: "JavaScript",
        d: "PHP",
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
            quiz.innerHTML = 
            `<h2>You Score ${score}/${quizData.length} 🥳✌🏻</h2>
           <button onclick="history.go(0)">Play Again</button>` 
           // location.reload() won't work in CodePen for security reasons;
        }
    }

});
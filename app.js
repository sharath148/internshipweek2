const questions = [
    {
        question: "Which is capital city of karnataka?",
        answers: ["Manglore", "Banglore", "Hubli", "Belgum"],
        correctAnswer: "Banglore",
    },
    {
        question: "Who is captain of indian cricket team?",
        answers: ["Virat kohli", "Rohit sharma", "Rishab pant", "Jasprit bumrah"],
        correctAnswer: "Rohit sharma",
    },
    {
        question: "What is the largest mammal in the world?",
        answers: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
        correctAnswer: "Blue Whale",
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionTextElement = document.getElementById("question-text");
const answerContainer = document.getElementById("answer-container");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");

function startQuiz() {
    loadQuestion(currentQuestionIndex);
}

function loadQuestion(index) {
    const currentQuestion = questions[index];
    questionTextElement.textContent = currentQuestion.question;
    answerContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => checkAnswer(answer, currentQuestion.correctAnswer));
        answerContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionTextElement.textContent = "Quiz completed!";
    answerContainer.innerHTML = "";
    nextButton.style.display = "none";
    scoreElement.textContent = `Your Score: ${score} out of ${questions.length}`;
}

nextButton.addEventListener("click", () => loadQuestion(currentQuestionIndex));

startQuiz();

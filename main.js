import { startTimer,updateTimerUI,quest } from './utils.js';

let startExam = document.querySelector('input[value="Start Exam"]');
let examContainer = document.getElementById("examContainer");

let allQuestions = [];
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 10;
let timer;
let timeLeft = 60;
let totalTime = 60;
let userName = "";
let selectedAnswer = null;

function askName() {
    Swal.fire({
        title: "Enter your name",
        input: "text",
        inputPlaceholder: "Your name",
        showCancelButton: true
    }).then(result => {
        if (result.value && result.value.trim() !== "") {
            userName = result.value.replace(/\s+/g, ' ').trim();
            startExam.style.display = "none";
            examContainer.style.display = "block";
            loadQuestions();
        } else {
            Swal.fire("Please enter your name to start the exam.");
        }
    });
}

function loadQuestions() {
        allQuestions = quest.questions;
        if (!Array.isArray(allQuestions) || allQuestions.length === 0) {
            throw new Error("Invalid questions format");
        }
        allQuestions.sort(() => Math.random() - 0.5);
        selectedQuestions = allQuestions.slice(0, totalQuestions);
        score = 0;
        currentQuestionIndex = 0;
        timeLeft = totalTime;
        timer = startTimer(updateTimerUI, endExam, totalTime);
        showQuestion();

}

function showQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        endExam();
        return;
    }
    let q = selectedQuestions[currentQuestionIndex];
    selectedAnswer = null;
    let randomizedAnswers = [...q.answers].sort(() => Math.random() - 0.5);
    let imageHtml = "";
    if (q.image) {
        imageHtml = `<img src="${q.image}" alt="question image" style="max-width:200px;">`;
    }
    examContainer.innerHTML = `
        <h2 class="question-text">${userName} — Question ${currentQuestionIndex + 1} of ${totalQuestions}</h2>
        <p class="question-text">${q.title}</p>
        ${imageHtml}
        <div id="answers">
            ${randomizedAnswers.map(ans => `
                <input type="button" value="${ans}" class="answer-btn">
            `).join("")}
        </div>
        <br>
        <input type="button" id="nextBtn" value="Next" disabled>
    `;

    let nextBtn = document.getElementById("nextBtn");

    document.querySelectorAll(".answer-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".answer-btn").forEach(b => b.style.backgroundColor = "");
            btn.style.backgroundColor = "gray";
            selectedAnswer = btn.value;
            nextBtn.disabled = false;
        });
    });

    nextBtn.addEventListener("click", () => {
        if (selectedAnswer && selectedAnswer.trim() === q.correct.trim()) {
            score++;
            // console.log(score)
        }
        currentQuestionIndex++;
        showQuestion();
    });
}

function endExam() {
    clearInterval(timer);
    let percent = Math.round((score / totalQuestions) * 100);
    examContainer.innerHTML = `
        <h2>Exam Finished!</h2>
        <div class="result-circle"><p id="para2">${percent}%</p></div>
        <p>${userName}, your score: ${score} / ${totalQuestions}</p>
    `;
    document.getElementById("btnsDiv").innerHTML = `
        <input type="button" id="restartBtn" value="Restart Exam">
    `;
    let div = document.getElementsByClassName("result-circle")[0];
    let color = "white";
    if (score >= 5) {
        color = "green";
    } else if (score < 5 && score >=3){ 
        color = "orangered";
    } else {
        color = "red"
    }
    div.style.borderColor = color;
    div.style.background = `conic-gradient(${color} ${percent}%, #ddd ${percent}%)`;
    document.getElementById("restartBtn").addEventListener("click", restartExam);
}

function restartExam() {
    score = 0;
    currentQuestionIndex = 0;
    timeLeft = totalTime;
    if (document.getElementById("restartBtn")) { 
        document.getElementById("restartBtn").remove();
    }
    loadQuestions();
}

startExam.addEventListener('click', askName);

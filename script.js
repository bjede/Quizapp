let questions = [
    {
        "question": "Was ist eine mögliche Endung für eine HTML-Datei?",
        "answer_1": "*.tml",
        "answer_2": "*.web",
        "answer_3": "*.htm",
        "answer_4": "*.ml",
        "right_answer": 3
    },
    {
        "question": "Was bedeutet HTML?",
        "answer_1": "Hypertext Mark Look",
        "answer_2": "Hypertext Mark Look",
        "answer_3": "Hypertext Mark Language",
        "answer_4": "Hypertext Markup Language",
        "right_answer": 4
    },
    {
        "question": "Wie ist eine Website strukturiert?",
        "answer_1": "&lt;body&gt;;&lt;head&gt;;&lt;html&gt;",
        "answer_2": "&lt;head&gt;;&lt;html&gt;;&lt;body>",
        "answer_3": "&lt;html&gt;;&lt;head&gt;;&lt;body&gt;",
        "answer_4": "&lt;body&gt;;&lt;head&gt;;&lt;html&gt;",
        "right_answer": 3
    },
    {
        "question": "Mit welchem Befehl gibt man die größte Überschrift an?",
        "answer_1": "&lt;h1&gt;...&lt;/h1&gt;",
        "answer_2": "&lt;ü3&gt;...&lt;/ü3&gt;",
        "answer_3": "&lt;ü1&gt;...&lt;/ü1&gt;",
        "answer_4": "&lt;ü1&gt;...&lt;/ü1&gt;",
        "right_answer": 1
    },
    {
        "question": "Wie fügt man ein Bild ein?",
        "answer_1": "&lt;picture src='...'&gt;",
        "answer_2": "&lt;img href='...'&gt;",
        "answer_3": "&lt;img src='...'&gt;",
        "answer_4": "&lt;pic src='...'&gt;",
        "right_answer": 3
    },
    {
        "question": "Wie fügt man ein Zitat ein?",
        "answer_1": "&lt;citation&gt;...&lt;/citation&gt;",
        "answer_2": "&lt;cite&gt;...&lt;/cite&gt;",
        "answer_3": "&lt;cita&gt;...&lt;/cita&gt;",
        "answer_4": "&lt;kursiv&gt;...&lt;/kursiv&gt;",
        "right_answer": 2
    },
    {
        "question": "Wofür benutzt man HTML?",
        "answer_1": "Zum Formatieren einer Seite.",
        "answer_2": "Zum Formatieren und Strukturieren einer Seite.",
        "answer_3": "Zum Formatieren einer Seite.",
        "answer_4": "Zum Strukturieren einer Seite.",
        "right_answer": 4
    }
];

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/wrong.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndofGame();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRrightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber, question)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRrightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right_answer']
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('next-button').disabled = true;
    resetAnswerButton();
    showQuestion();
}

function resetAnswerButton() {
    let card = document.querySelectorAll('.card');
    for (let i = 0; i < card.length; i++) {
        console.log(card[i]);
        if(card[i].matches('.bg-success, .bg-danger')){
            card[i].classList.remove('bg-success');
            card[i].classList.remove('bg-danger');
        }   
    }

/*  document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger'); */
}

function showEndofGame() {
    document.getElementById('end-screen').style.display = 'block';
    document.getElementById('question-body').style.display = 'none';
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('right-question').innerHTML = rightQuestions;
    document.getElementById('header-image').src = 'img/trophy.png';
    document.getElementById('header-image').classList.add('contain');
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('percent').innerHTML = `${percent}%`;
    document.getElementById('percent').style.width = `${percent}%`;
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = `<span>A</span> <span>${question['answer_1']}</span>`;
    document.getElementById('answer_2').innerHTML = `<span>B</span> <span>${question['answer_2']}</span>`;
    document.getElementById('answer_3').innerHTML = `<span>C</span> <span>${question['answer_3']}</span>`;
    document.getElementById('answer_4').innerHTML = `<span>D</span> <span>${question['answer_4']}</span>`;
}

function restartGame() {
    currentQuestion = 0;
    rightQuestions = 0;
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('header-image').src = 'img/brainstorm-gf6dc40ff0_1280.jpg';
    document.getElementById('header-image').classList.remove('contain');
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('question-body').style.display = 'block';
    init();
}
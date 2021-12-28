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
        "answer_1": "<body>;<head>;<html>",
        "answer_2": "<head>;<html>;<body>",
        "answer_3": "<html>;<head>;<body>",
        "answer_4": "<body>;<head>;<html>",
        "right_answer": 3
    },
    {
        "question": "Mit welchem Befehl gibt man die größte Überschrift an?",
        "answer_1": "<h1>...</h1>",
        "answer_2": "<ü3>...</ü3>",
        "answer_3": "<ü1>...</ü1>",
        "answer_4": "<ü1>...</ü1>",
        "right_answer": 1
    },
    {
        "question": "Wie fügt man ein Bild ein?",
        "answer_1": "<picture src='...'>",
        "answer_2": "<img href='...'>",
        "answer_3": "<img src='...'>",
        "answer_4": "<pic src='...'>",
        "right_answer": 3
    },
    {
        "question": "Wie fügt man ein Zitat ein?",
        "answer_1": "<citation>...</citation>",
        "answer_2": "<cite>...</cite>",
        "answer_3": "<cita>...</cita>",
        "answer_4": "<kursiv>...</kursiv>",
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

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer-1').innerHTML = question['answer_1'];
    document.getElementById('answer-2').innerHTML = question['answer_2'];
    document.getElementById('answer-3').innerHTML = question['answer_3'];
    document.getElementById('answer-4').innerHTML = question['answer_4'];

/*     for (let i = 0; i < questions.length; i++) {
        if (i == currentQuestion) {
            let question = questions[currentQuestion];
            document.getElementById('test').innerHTML +=
                `${question['question']}<br>
                 ${question['answer_1']}<br>
                 ${question['answer_2']}<br>
                 ${question['answer_3']}<br>
                 ${question['answer_4']}<br>
                `;
        }
    } */

}


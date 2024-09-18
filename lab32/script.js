const questions = [
    {
        question: "Qual é o nome do famoso mago da série de livros escrita por J.K. Rowling?",
        answers: ["Harry Potter", "Frodo Baggins", "Jon Snow", "Percy Jackson"],
        correctAnswer: 0
    },

    {
        question: "Qual planeta é conhecido como o 'Planeta Vermelho'?",
        answers: ["Júpiter", "Marte", "Vênus", "Saturno"],
        correctAnswer: 1
    },

    {
        question: "Quem foi o primeiro homem a pisar na Lua?",
        answers: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        correctAnswer: 1
    },

    {
        question: "Qual é a capital da França?",
        answers: ["Berlim", "Madrid", "Roma", "Paris"],
        correctAnswer: 3
    },

    {
        question: "Em qual ano ocorreu a queda do Muro de Berlim?",
        answers: ["1987", "1989", "1991", "1993"],
        correctAnswer: 1
    }
];


// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

window.onload = loadQuestions;
const questions = [
  "Что такое тестирование?",
  "Почему тестирование необходимо?",
  "Семь принципов тестирования?",
  "Что такое QA?Что такое QC?",
  "Что такое Верификация?Что такое Валидация?",
  "Что относится к этапам тестирования?",
  "Что относится к высокоуровневой документации?",
  "Что такое план тестирования? Тестовая стратегия?",
];

let usedQuestions = [];

function getRandomQuestion() {
  if (questions.length === 0) {
    return null; // Все вопросы были заданы
  }

  const randomIndex = Math.floor(Math.random() * questions.length);
  const question = questions[randomIndex];

  // Удалить вопрос из списка доступных
  questions.splice(randomIndex, 1);

  // Добавить вопрос в список использованных
  usedQuestions.push(question);

  return question;
}

function displayQuestion() {
  const question = getRandomQuestion();
  if (question) {
    document.getElementById("question").textContent = question;
  } else {
    document.getElementById("question").textContent =
      "Все вопросы были заданы!";
    document.getElementById("next-button").disabled = true; // Отключить кнопку
  }
}

document
  .getElementById("next-button")
  .addEventListener("click", displayQuestion);

// Показать первый вопрос при загрузке страницы
displayQuestion();

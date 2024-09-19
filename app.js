const questions = [
  "Что такое тестирование?",
  "Почему тестирование необходимо?",
  "Семь принципов тестирования?",
  "Что такое QA?Что такое QC?",
  "Что такое Верификация?Что такое Валидация?",
  "Что относится к этапам тестирования?",
  "Что относится к высокоуровневой документации?",
  "Что такое план тестирования? Тестовая стратегия?",
  "Что такое чеклист?",
  "Что такое тест кейс? Атрибуты тест кейса? Для чего стоит составлять тест кейсы?",
  "Что такое набор тестов? По какому принципу собираются наборы тестов?",
  "Что такое баг или дефект? Атрибуты баг репорта? Разница между Severity и Priority?",
  "Жизненный цикл бага?Разница между Error (Ошибка)?Fault (Сбой)?Failure (Отказ)?",
  "Что такое Отчет о тестировании?Почему так важен именно отчет тестировщиков?Кто использует?",
  "Что такое тест дизайн? Цели тест дизайна?",
  "Классы эквивалентности?Граничные значения?Попарное тестирование?Тестирование по сценариям использования?Диаграмма причинно-следственных связей?Таблица принятия решений?Диаграмма перехода состояний?",
  "Какие характеристики включает качество ПО?",
  "Виды тестирования?",
  "Регрессионное тестирование и смоук тестирование? В каких случаях нужно проводить регрессионное тестирование и в каких смоук?Санитарное тестирование?",
  "Приемочное тестирование? Формы приемочного тестирования?",
  "Что такое клиент-серверная архитектура?Какие виды?",
  "Что такое HTTP?Из чего состоит запрос?Из чего состоит ответ?",
  "Список кодов состояния HTTP?",
  "Что такое HTTPS?",
  "HTTP методы?Идемпотентность HTTP-методов?",
  "Cashe и cookie?Виды куков?Где хранится cashe и cookies?",
  "Что такое Web-Service?",
  "Что такое API?",
  "Разница между API и Web Service",
  "Что такое веб-приложение?",
  "Аутентификация и Авторизация?Сессия?Токен?",
  "Что такое REST?Что такое SOAP? Плюсы и минусы?",
  "Что такое JSON?",
  "Что такое модель OSI?Какие уровни содержит данная модель?",
  "TCP и UDP? Разница между ними?QUIC?",
  "SSL сертификат?Для чего используется? Кем выдается?",
  "Автоматизированное тестирование? Что можно автоматизировать? Плюсы и минусы?",
  "Что такое БД? СУБД?Реляционная база данных и Нереляционные базы данных? Их отличие? Виды БД по моделям данных?",
  "Первичный ключ? Вторичные(внешний) ключ?",
  "Что такое Нормализация? Первая нормальная форма?Вторая нормальная форма?Третья нормальная форма?",
  `Что такое Непрерывная интеграция (Continuous Integration, CI)?Непрерывная доставка (Continuous Delivery, CD)?`,
  "Canban vs Scrum?",
  "«Waterfall Model» (каскадная модель или «водопад»)?",
  "«V-Model»",
  "«Incremental Model» (инкрементная модель)",
  "«Iterative Model» (итеративная или итерационная модель)",
  "«Spiral Model» (спиральная модель)",
  "Жизненный цикл разработки ПО (SDLC (Software Development Life Cycle)?",
  "Жизненный цикл тестирования ПО (STLC - Software Testing Lifecycle)?",
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

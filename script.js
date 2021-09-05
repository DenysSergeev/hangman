let words = [
    'javascript',
    'monkey',
    'amazing',
    'pancake'
];

// Выбираем случайное слово
let word = words[Math.floor(Math.random() * words.length)];

// Устанавливаем массив ответов
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;

// Игровой цикл
while (remainingLetters > 0) {
    // Показываем игроку его прогресс
    alert(answerArray.join(" "));

    // Получаем варианты ответов от игрока
    let guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        // Выходим из игрового цикла
        break;
    }
    else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    }
    else {
        // Обновляем состояние игры с помощью переменного параметра guess
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    // Конец игрового цикла
}
// Показываем ответ и поздравляем игрока
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
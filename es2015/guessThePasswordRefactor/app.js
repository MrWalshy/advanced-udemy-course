document.addEventListener('DOMContentLoaded', function() {
  const wordCount = 10;
  let guessCount = 4;
  let password = '';
  // rename var to let and const
  const start = document.getElementById('start');
  start.addEventListener('click', () => { // arrow fn
    toggleClasses(document.getElementById('start-screen'), 'hide', 'show');
    toggleClasses(document.getElementById('game-screen'), 'hide', 'show');
    startGame();
  });

  function toggleClasses(element, ...classNames) { // rest operator
    // Using for each over array of arguments
    classNames.forEach(className => element.classList.toggle(className));
  }

  function startGame() {
    // updated var to let
    // get random words and append them to the DOM
    let wordList = document.getElementById('word-list');
    // 'words' variable is from words.js
    let randomWords = getRandomValues(words, wordCount); // eslint-disable-line no-undef
    randomWords.forEach(word => { // arrow fn
      let li = document.createElement('li');
      li.innerText = word;
      wordList.appendChild(li);
    });

    // set a secret password and the guess count display
    password = getRandomValues(randomWords, 1)[0];
    setGuessCount(guessCount);

    // add update listener for clicking on a word
    wordList.addEventListener('click', updateGame);
  }

  // arrow fn (it is nested in startGame())
  let getRandomValues = (array, numberOfVals) =>
    shuffle(array).slice(0, numberOfVals);

  function shuffle(array) {
    // Updated var to let
    let arrayCopy = array.slice();
    for (let idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) {
      // generate a random index between 0 and idx1 (inclusive)
      let idx2 = Math.floor(Math.random() * (idx1 + 1));

      // swap elements at idx1 and idx2 (Updated to shorthand array destructure)
      [arrayCopy[idx1], arrayCopy[idx2]] = [arrayCopy[idx2], arrayCopy[idx1]];
    }
    return arrayCopy;
  }

  function setGuessCount(newCount) {
    guessCount = newCount;
    document.getElementById('guesses-remaining').innerText =
      // template string
      `Guesses remaining: ${guessCount}.`;
  }

  function updateGame(e) {
    // updated var to let
    if (e.target.tagName === 'LI' && !e.target.classList.contains('disabled')) {
      // grab guessed word, check it against password, update view
      let guess = e.target.innerText;
      let similarityScore = compareWords(guess, password);
      e.target.classList.add('disabled');
      // template string
      e.target.innerText = `${guess} --> Matching Letters: ${similarityScore}`;
      setGuessCount(guessCount - 1);

      // check whether the game is over
      if (similarityScore === password.length) {
        toggleClasses(document.getElementById('winner'), 'hide', 'show');
        this.removeEventListener('click', updateGame);
      } else if (guessCount === 0) {
        toggleClasses(document.getElementById('loser'), 'hide', 'show');
        this.removeEventListener('click', updateGame);
      }
    }
  }

  function compareWords(word1, word2) {
    if (word1.length !== word2.length) {
      throw 'Words must have the same length';
    }
    // updated var to let
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] === word2[i]) count++;
    }
    return count;
  }
});

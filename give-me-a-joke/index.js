const giveJoke = require('give-me-a-joke');
const colors = require('colors');

firstUserInput = process.argv[2];

const jokeQuantity = process.argv[3] || 1;

if (firstUserInput == 1) {
    for (let i = 0; i < jokeQuantity; i++) {
        giveJoke.getRandomDadJoke(joke => console.log(colors.green(joke)))
    }
} else if (firstUserInput == 2) {
    const category = 'blonde';
    for (let i = 0; i < jokeQuantity; i++) {
        giveJoke.getRandomJokeOfTheDay(category, joke => console.log(colors.cyan(joke)))
    }
} else if (firstUserInput == 3) {
    const category = 'knock knock';
    for (let i = 0; i < jokeQuantity; i++) {
        giveJoke.getRandomJokeOfTheDay(category, joke => console.log(colors.blue(joke)))
    }
} else if (firstUserInput == 4) {
    const category = 'animal';
    for (let i = 0; i < jokeQuantity; i++) {
        giveJoke.getRandomJokeOfTheDay(category, joke => console.log(colors.white(joke)))
    }
} else if (firstUserInput == 5) {
    const category = 'jod';
    for (let i = 0; i < jokeQuantity; i++) {
        giveJoke.getRandomJokeOfTheDay(category, joke => console.log(colors.magenta(joke)))
    }
} else {
    console.log(colors.red('You either entered the command incorrectly, or the input is out of range.'))
}


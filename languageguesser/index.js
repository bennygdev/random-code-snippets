const langdetect = require('langdetect');
const langs = require('langs');
const colors = require('colors');

const input = process.argv[2];

if (!input || input === "") {
    console.log(colors.red("Please provide an input and try again"));
} else {
    const [{ lang }] = langdetect.detect(input);
    const [{ prob }] = langdetect.detect(input);

    if (lang === undefined) {
        console.log(colors.red("Sorry, we couldn't detect the language of the input"));
    } else {
        const language = langs.where("1", lang);
        console.log(colors.green(`Our best guess is ${language.name} with the probability of ${(prob * 100).toFixed(2)}%.`));
    }
}
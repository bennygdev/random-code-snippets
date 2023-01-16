const generate = require('project-name-generator');
const colors = require('colors');

const mode = process.argv[2];
const words = process.argv[3];
const quantity = process.argv[4];
const wantNumber = process.argv[5];

if(mode == 'dashed') {
    for (let i = 0; i < quantity; i++) {
        let name;
        if (wantNumber === "yes" || wantNumber === "y" || wantNumber === "Y" || wantNumber === "YES") {
            name = generate({words: words, number: true}).dashed;
        } else {
            name = generate({words: words}).dashed;
        }
        console.log(colors.green(name));
    }
}
else if (mode == 'spaced') {
    for (let i = 0; i < quantity; i++) {
        let name;
        if (wantNumber === "yes" || wantNumber === "y" || wantNumber === "Y" || wantNumber === "YES") {
            name = generate({words: words, number: true}).spaced;
        } else {
            name = generate({words: words}).spaced;
        }
        console.log(colors.green(name));
    }
}
else if (mode == 'raw') {
    for (let i = 0; i < quantity; i++) {
        let name;
        if (wantNumber === "yes" || wantNumber === "y" || wantNumber === "Y" || wantNumber === "YES") {
            name = generate({words: words, number: true}).raw;
        } else {
            name = generate({words: words}).raw;
        }
        console.log(colors.green(name));
    }
} else {
    console.log(colors.red('Please enter a valid input'));
}
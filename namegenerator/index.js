const generate = require('project-name-generator');
const colors = require('colors');

const mode = process.argv[2];
const words = process.argv[3];
const quantity = process.argv[4];
const wantNumber = process.argv[5];

try {
    if(mode == undefined || words == undefined || quantity == undefined || wantNumber == undefined) {
        throw new Error('Please enter a valid input');
    } 
    
    if(mode != 'dashed' && mode != 'spaced' && mode != 'raw') {
        throw new Error('Please enter a valid mode');
    }

    if(isNaN(words) || isNaN(quantity)) {
        throw new Error('Please enter a valid number for words and quantity');
    }

    if(wantNumber != "yes" && wantNumber != "y" && wantNumber != "Y" && wantNumber != "YES" && wantNumber != "n" && wantNumber != "N" && wantNumber != "no" && wantNumber != "NO") {
        throw new Error('Invalid input for wantNumber, please input yes or no OR y or n for the argument.');
    }

    for(let i = 0; i < quantity; i++) {
        let name;
        if (wantNumber === "yes" || wantNumber === "y" || wantNumber === "Y" || wantNumber === "YES") {
            name = generate({words: words, number: true})[mode];
        } else if (wantNumber === "n" || wantNumber === "N" || wantNumber === "no" || wantNumber === "NO"  ) {
            name = generate({words: words})[mode];
        }
        console.log(colors.green(name));
    }

} catch (err) {
    console.log(colors.red(err.message));
}

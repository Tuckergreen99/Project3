"use strict"
const PROMPT = require('readline-sync');

let continueResponse, numStars, counter, total, avgRating;


function main(){
    setContinueResponse();
    while (continueResponse === 1) {
        setNumStars();
        setCounter();
        setTotal();
        setContinueResponse();
    }
    setAvgRating();
    setPrintCurrenttotal();
}

main();

function setContinueResponse(){
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question("Do you want to continue rating 'Pineapple Express'? [1=Yes, 0=NO] "));
        while (continueResponse !== 0 && continueResponse !== 1){
            console.log(`${continueResponse} is and incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question('Do you want to continue rating "Pineapple Express? '));
        }
    } else {
        continueResponse = 1;
    }
    console.log(continueResponse);
}

function setNumStars() {
    const MIN_RATE = 0, MAX_RATE = 5;
    while (!numStars || numStars > MIN_RATE || numStars < MAX_RATE) {
        numStars = Number(PROMPT.question('How would you rate "Pineapple Express" on a scale of 0-5? '));
        if (isNaN(parseInt(numStars)) || numStars < MIN_RATE || numStars > MAX_RATE) {
            console.log('This value was incorrect. Please try again');
            numStars = Number(PROMPT.question('How would you rate "Pineapple Express" on a scale of 0-5? '));
            console.log('This value was incorrect. Please try again');
            numStars = Number(PROMPT.question('How would you rate "Pineapple Express" on a scale of 0-5? '));
            console.log('This value was incorrect. Please try again');
            console.log('too many incorrect inputs, please try rating again.');
            break;
        }
        break;
    }
}
    function setCounter() {
        if (counter != null) {
            counter++;
            console.log('')
        } else {
            counter = 1;
        }
    }

    function setTotal() {
    if (total != null) {
        total = total + numStars;
    } else {
        total = numStars
        }
    }
    
    function setAvgRating() {
        avgRating = total / counter;
    }

    function setPrintCurrenttotal(){
        console.log("you're average star rating is," , avgRating)
    }
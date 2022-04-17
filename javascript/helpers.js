//functions to calculate probability.

function probDice(num, dices, rolls) {
    //test that inputs are correct
    if(num < 1 || num > 6){
        throw new Error('Please enter a desired number between 1 and 6');
    }
    if(dices < 1){
        throw new Error('Please enter a dice number greater than or equal to 1');
    }
    if(rolls < 1){
        throw new Error('Please enter a roll number greater than or equal to 1');
    }

    // calculate probabilities
    let prob = 1;
    for(let i = 0; i < rolls; i++){
        prob *= 1/6;
    }
    prob *= 100;

    if(prob < 0.01){
        console.log(`The probability of having ${num}, ${rolls} times in a row is ${prob}%`);
    } else {
        prob = prob.toFixed(2);
        console.log(`The probability of having ${num}, ${rolls} times in a row is ${prob}%`);
    }

    


}

probDice(3, 1, 1);
probDice(5, 1, 20);

export function genRandomNumber(max){
    return Math.floor(Math.random() * (max + 1));
}
export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}



export function gameChoice(){
    function getRandomArbitraryFloor(min, max) {

        let x = Math.floor(Math.random() * (max - min)) + min;
        return x;
    }
    let rps = ["rock","paper","scissors"];
    let computerRandomSelection = rps[getRandomArbitraryFloor(0,3)];
    console.log(computerRandomSelection);
    return computerRandomSelection;

}

export function gameRound(userSelection) {
    let computerRandomSelection = gameChoice();
    console.log(`you chose: ${userSelection} computer chose:${computerRandomSelection}`);
 
    if(userSelection==='rock' && computerRandomSelection === 'scissors'){
     console.log('rock crushes scissors! You win!');
     return `you chose: ${userSelection} computer chose: ${computerRandomSelection} rock crushes scissors! You win!`;
    }
    else if(userSelection === 'rock' && computerRandomSelection === 'paper'){
     console.log('paper wraps rock! computer wins!');
     return `you chose: ${userSelection} computer chose: ${computerRandomSelection} paper wraps rock! computer wins!`;
    }
    else if(userSelection === 'rock' && computerRandomSelection === 'rock'){
     console.log( "both chose rock. It's a tie");
     return `you chose: ${userSelection} computer chose: ${computerRandomSelection} rock VS rock. It's a tie`;
    }
    else if(userSelection === 'paper' && computerRandomSelection === 'rock'){
     console.log('paper wraps rock! You win!');
     return `you chose: ${userSelection} computer chose: ${computerRandomSelection} paper wraps rock! You win!`;
    }
    else if(userSelection === 'paper' && computerRandomSelection === 'scissors'){
     console.log('scissors cuts paper! computer wins!' );
     return `you chose: ${userSelection} computer chose: ${computerRandomSelection} scissors cuts paper! Computer wins!`;
    }
    else if(userSelection === 'paper' && computerRandomSelection === 'paper'){
     console.log("paper VS paper. Its a tie");
     return `you chose: ${userSelection} computer chose: ${computerRandomSelection} paper VS paper. It's a tie`;
    }
    else if(userSelection === 'scissors' && computerRandomSelection === 'rock'){
     console.log('Rock breaks scissors! computer wins!');
     return `you chose: ${userSelection} computer chose: ${computerRandomSelection} Rock breaks scissors! computer wins!`;
    }
    else if(userSelection === 'scissors' && computerRandomSelection === 'paper'){
     console.log('scissors cuts paper. You win!');
     return `you chose: ${userSelection} computer chose: ${computerRandomSelection} scissors cuts paper. You win!`;
    }
    else if(userSelection === 'scissors' && computerRandomSelection === 'scissors'){
     console.log("scissors VS scissors. Its a tie");
     return `you chose: ${userSelection} computer chose: ${computerRandomSelection} scissors VS scissors. It's a tie`;
    }
 };
 
const rules = {
    'rock': {
        'rock': 'tie',
        'paper': 'lose',
        'scissors': 'win',
        'lizard': 'win',
        'spock': 'lose'
    },
    'paper': {
        'rock': 'win',
        'paper': 'tie',
        'scissors': 'lose',
        'lizard': 'lose',
        'spock': 'win'
    },
    'scissors': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'tie',
        'lizard': 'win',
        'spock': 'lose'
    },
    'lizard': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'lose',
        'lizard': 'tie',
        'spock': 'win'
    },
    'spock': {
        'rock': 'win',
        'paper': 'lose',
        'scissors': 'win',
        'lizard': 'lose',
        'spock': 'tie'
    }
};

export function rps(playerChoice) {
    const options = ['rock', 'paper', 'scissors'];
    //if no input, return {player : (random option)}
    if (!playerChoice) {
        return { player: options[Math.floor(Math.random() * 3)] }
    }
    playerChoice = playerChoice.toLowerCase();
    if (!options.includes(playerChoice)) {
        console.error(`${playerChoice} is not an option.`);
        throw new RangeError(`${playerChoice} is out of range.`)
    }

    const opponentChoice = options[Math.floor(Math.random() * 3)];
    return { player: playerChoice, opponent: opponentChoice, result: rules[playerChoice][opponentChoice] };
}

export function rpsls(playerChoice) {
    const options = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    if (!playerChoice) {
        return { player: options[Math.floor(Math.random() * 5)] };
    }
    playerChoice = playerChoice.toLowerCase();
    if (!options.includes(playerChoice)) {
        console.error(`${playerChoice} is not an option.`);
        throw new RangeError(`${playerChoice} is out of range.`);
    }
    
    const opponentChoice = options[Math.floor(Math.random() * 3)];
    return { player: playerChoice, opponent: opponentChoice, result: rules[playerChoice][opponentChoice] };
}
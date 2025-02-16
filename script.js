function rollDice(index) {
    let random = Math.floor(Math.random() * 6) + 1;
    let diceSource = 'img/dice' + random + '.png';
    document.querySelectorAll('img')[index].setAttribute('src', diceSource);
    return random;
}

let random1 = rollDice(0);
let random2 = rollDice(1);

if (random1 > random2) {
    document.querySelector('h1.result').innerHTML = '🏆 Jogador 1 ganhou!';
} else if (random1 === random2) {
    document.querySelector('h1.result').innerHTML = '🤝 Jogo empatado';
} else {
    document.querySelector('h1.result').innerHTML = '🏆 Jogador 2 ganhou!';
}

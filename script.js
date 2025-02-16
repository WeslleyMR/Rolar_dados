let random1 = Math.floor(Math.random() * 6) + 1

let dicenumber = 'dice' + random1 + '.png' //dice(n).png

let diceSoruce = 'img/' + dicenumber // img/dice1.png

let getImage = document.querySelectorAll('img')[0]

getImage.setAttribute('src', diceSoruce)


let random2 = Math.floor(Math.random() * 6) + 1

let dicenumber1 = 'dice' + random2 + '.png' //dice(n).png

let diceSoruce1 = 'img/' + dicenumber1 // img/dice1.png

let getImage1 = document.querySelectorAll('img')[1]

getImage1.setAttribute('src', diceSoruce1)


if(random1>random2){
    document.querySelector('h1.result').innerHTML = '🏆 Jogador 1 ganhou!'
}else if(random1 === random2){
    document.querySelector('h1.result').innerHTML = '🤝 Jogo empatado'
}else{
    document.querySelector('h1.result').innerHTML = '🏆 Jogador 2 ganhou!'
}
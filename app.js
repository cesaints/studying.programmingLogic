alert('Boas vindas ao jogo do número secreto!');

let secretNumber = 29;
let chute = prompt('Escolha um número entre 0 e 30:');

if (secretNumber == chute) {
    alert('Parabéns! Você acertou!');
} else if (chute > secretNumber) {
    alert('O número secreto é menor que ' + chute);
} else {
    alert('O número secreto é maior que ' + chute);
}


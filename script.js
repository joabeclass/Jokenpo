const choices = ['Pedra', 'Papel', 'Tesoura'];
const emojis = ['✊', '✋', '✌️'];

document.getElementById('rock').addEventListener('click', () => playGame(0));
document.getElementById('paper').addEventListener('click', () => playGame(1));
document.getElementById('scissors').addEventListener('click', () => playGame(2));

function playGame(playerChoice) {
    const computerChoice = Math.floor(Math.random() * 3);

    document.getElementById('playerChoice').textContent = `Sua escolha: ${emojis[playerChoice]} ${choices[playerChoice]}`;
    document.getElementById('computerChoice').textContent = `Escolha do computador: ${emojis[computerChoice]} ${choices[computerChoice]}`;

    const outcome = getOutcome(playerChoice, computerChoice);
    document.getElementById('outcome').textContent = `Resultado: ${outcome}`;
}

function getOutcome(player, computer) {
    if (player === computer) {
        return 'Empate!';
    }
    if ((player === 0 && computer === 2) || 
        (player === 1 && computer === 0) || 
        (player === 2 && computer === 1)) {
        return 'Você venceu!';
    }
    return 'Você perdeu!';
}

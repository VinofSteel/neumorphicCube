const dice = document.querySelector('.dice');
const button = document.querySelector('main button');

const randomDice = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    
    rollDice(random);
}

const rollDice = (random) => {
    const diceTransforms = {
        1: 'rotateX(0deg) rotateY(0deg)',
        2: 'rotateX(-90deg) rotateY(0deg)',
        3: 'rotateX(0deg) rotateY(90deg)',
        4: 'rotateX(0deg) rotateY(-90deg)',
        5: 'rotateX(90deg) rotateY(0deg)',
        6: 'rotateX(180deg) rotateY(0deg)'
    };

    dice.style.animation = 'rolling 3s';

    setTimeout(() => {
        dice.style.transform = diceTransforms[random];

        dice.style.animation = 'none';
    }, 3015);
}

button.addEventListener('click', randomDice);
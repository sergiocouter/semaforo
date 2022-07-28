const image = document.getElementById( 'image' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval ( intervalId );
}

const turnOn = {
    'red':      () => image.src = './imagens/vermelho.png',
    'yellow':   () => image.src = './imagens/amarelo.png',
    'green':    () => image.src = './imagens/verde.png',
    'automatic': () => intervalId = setInterval( changeColor, 1000 )
}

buttons.addEventListener('click', trafficLight );
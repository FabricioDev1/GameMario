const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const fundo = document.querySelector('.clouds');
const score = document.querySelector('.score');
let count = 0;

const som_HIT = new Audio();
som_HIT.src = 'images/jumpsom.mp3';


const loop = setInterval(() => {
       // const cloudsPosition = clouds.offset;
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        
            alert(`Game Over! - seu score foi: ${count} `);
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            
            mario.style.animation = 'none';
            //mario.style.bottom = `${marioPosition}px`;
            mario.src = 'images/gameover.png';
            mario.style.width = '150px';
            mario.style.marginLeft = `${marioPosition}px`;

            fundo.src = 'images/gameoverfundo.jpg';
            fundo.style.animation = 'none';
            fundo.style.width = '50%' ;


            mario.src.remove = ('som_HIT');

            
            return(loop);

        }

        count++;
        score.innerHTML = `SCORE: ${count}`;


}, 50);


document.addEventListener ('keydown', (e) => {
    if ((e.code === "ArrowUp") | (e.code === "Space")) {
        jump(); 
    }
});


const jump = () => {
    mario.classList.add ('jump');
    som_HIT.play();

    setTimeout(() => {
        mario.classList.remove('jump');
        
    },500);
}















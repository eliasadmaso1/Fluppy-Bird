let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = 0;
let counter = 0;


hole.addEventListener('animationiteration',()=>{
    let random = -((Math.random()*300)+170);
    hole.style.top = `${random}px`;

    counter++;
})

setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    if(jumping == 0){
        character.style.top = `${characterTop+3}px`;
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'))+500;

    if((characterTop>500) || ((blockLeft < 20)  && ((characterTop < holeTop) || (characterTop>holeTop+130)))){
        alert(`Game Over. Score = ${counter}`);
        character.style.top = `${100}px`;
        counter = 0;
    }

    
},10);

const jump = ()=>{
    let jumpCount = 0;
    let jumpInterval = setInterval(() => {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
        if(characterTop > 6){
            character.style.top = `${characterTop-5}px`;

        }
        if(jumpCount > 20){
            clearInterval(jumpInterval);
        }


        jumpCount++;
        
    }, 10);
}
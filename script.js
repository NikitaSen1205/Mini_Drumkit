let partnumber = document.querySelectorAll('.drum').length;

for(let i = 0; i<partnumber; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        
        let btnHTML = this.innerHTML;
        sound(btnHTML);
        Animate(btnHTML);
    })
} 

function sound(key){
    switch(key){
        case 't1':
        let tom1 = new Audio('tom1.mp3');
        tom1.play();
        break;
        case 't2':
        let tom2 = new Audio('tom2.mp3');
        tom2.play();
        break;
        case 't3':
        let tom3 = new Audio('tom3.mp3');
        tom3.play();
        break;
        case 's':
        let snare = new Audio('snare.mp3');
        snare.play();
        break;
        case 'c':
        let crash = new Audio('crash.mp3');
        crash.play();
        break;
        case 'k':
        let kick = new Audio('kick.mp3');
        kick.play();
        break;

        default: console.log(key);
    }
}


function Animate(key){
    let activebtn = document.querySelector('.'+key);
    activebtn.classList.add('pressed');

    setTimeout(function(){
        activebtn.classList.remove('pressed');
    }, 100);
}
const car = document.getElementById('car');
const car2 = document.getElementById('pcar');

function jump(){
    setTimeout(() => {
        if(car.classList != 'jump'){
            car.classList.add('jump');
        }
        setTimeout(() => {
            car.classList.remove('jump');
        }, 1000);
    })
}

document.addEventListener('keydown', function(e){
    jump();
}) 
const car = document.getElementById('car');
const car2 = document.getElementById('pcar');

function jump() {
    if (!car.classList.contains('jump')) {
        car.classList.add('jump');
        setTimeout(() => {
            car.classList.remove('jump');
        }, 1000);
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowUp") { 
        jump();
    }
});

const game_Over = setInterval(function() {
    let carRect = car.getBoundingClientRect();
    let pcarRect = car2.getBoundingClientRect();

    let carLeft = carRect.left;
    let carRight = carRect.right;
    let carTop = carRect.top;
    let carBottom = carRect.bottom;

    let pcarLeft = pcarRect.left;
    let pcarRight = pcarRect.right;
    let pcarTop = pcarRect.top;
    let pcarBottom = pcarRect.bottom;

    // AABB Collision Detection
    let isColliding = 
        carRight > pcarLeft &&  // Car's right side touches police car's left
        carLeft < pcarRight &&  // Car's left side touches police car's right
        carBottom > pcarTop &&  // Car's bottom touches police car's top
        carTop < pcarBottom;    // Car's top touches police car's bottom

    if (isColliding) {
        alert("Game Over!");
        clearInterval(game_Over);
        car2.style.animation = 'none';
        car.style.animation = 'none';
    }
}, 10);

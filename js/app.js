// Enemies our player must avoid
let allEnemies = [];

class Enemy {
constructor(x, y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

update(dt) {
// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
}
// Draw the enemy on the screen, required method for game
render () { 
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}
}

const bug1 = new Enemy(10,60);
const bug2 = new Enemy(10, 140);
const bug3 = new Enemy(10, 225);

allEnemies.push(bug1);
allEnemies.push(bug2);
allEnemies.push(bug3);

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


class Player {
    constructor (x, y) {
        this.sprite = 'images/char-boy.png';
        this.x = x;
        this.y = y;
    }

    update(dt) {

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
    }

    handleInput() {

    }
}

let player = new Player(200,390);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


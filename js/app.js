// Enemies our player must avoid
let allEnemies = [];

class Enemy {
  constructor(x, y, speed) {
    this.sprite = "images/enemy-bug.png";
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks

  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    if (this.x > 510) {
      this.x = -50;
      this.speed = 150 + Math.floor(Math.random() * 222);
    }
  }
  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

//3 enemies created
const bug1 = new Enemy(10, 60, 200);
const bug2 = new Enemy(10, 140, 200);
const bug3 = new Enemy(10, 225, 200);

//puts the bug objects into the render.js to output
allEnemies.push(bug1);
allEnemies.push(bug2);
allEnemies.push(bug3);

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
  constructor(x, y) {
    this.sprite = "images/char-boy.png";
    this.x = x;
    this.y = y;
  }

  update(dt) {}

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(keyPress) {
    switch (keyPress) {
      case "a":
        this.x -= 100;
        break;
      case "s":
        this.y += 83;
        break;
      case "d":
        this.x += 100;
        break;
      case "w":
        this.y -= 83;
    }
  }
}

let player = new Player(200, 390);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function(e) {
  player.handleInput(e.key);
});

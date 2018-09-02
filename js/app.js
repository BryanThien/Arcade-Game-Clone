'use strict;';

// Enemies that are rendered
const allEnemies = [];

class Enemy {
  // Enemy object creator
  constructor(x, y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  // Sets the speed of enemies and checks if there is a collision with player
  update(dt) {
    this.x += this.speed * dt;

    if (this.x > 510) {
      this.x = -50;
      this.speed = 150 + Math.floor(Math.random() * 222);
    }

    if (
      player.x < this.x + 75 &&
      player.x + 75 > this.x &&
      player.y < this.y + 60 &&
      60 + player.y > this.y
    ) {
      player.x = 200;
      player.y = 390;
    }
  }
  // Draws the enemy on the screen

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// 3 enemies created
const bug1 = new Enemy(10, 60, 200);
const bug2 = new Enemy(10, 140, 200);
const bug3 = new Enemy(10, 225, 200);

// puts the bug objects into the render.js to output
allEnemies.push(bug1);
allEnemies.push(bug2);
allEnemies.push(bug3);

class Player {
  // player object creator
  constructor(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
  }

  update(dt) {}
  // Draws player image

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  // Allows the player to move the character with the wasd keys

  handleInput(keyPress) {
    if (keyPress === 'a' && this.x > 0) {
      this.x -= 100;
    }
    if (keyPress === 's' && this.y < 350) {
      this.y += 83;
    }
    if (keyPress === 'd' && this.x < 400) {
      this.x += 100;
    }
    if (keyPress === 'w' && this.y > 0) {
      this.y -= 83;
    }

    if (this.y < 0) {
      setTimeout(() => {
        this.x = 200;
        this.y = 390;
      }, 600);
    }
  }
}
// Creates a new player object at the starting x and y location
let player = new Player(200, 390);

// This listens for key presses and sends the keys to the
// Player.handleInput() method.
document.addEventListener('keyup', (e) => {
  player.handleInput(e.key);
});

let particles = []

function setup() {
    createCanvas(800,600);
}

function draw() {
    background(0);

    let p = new Particle();
    particles.push(p);

    for (let i = particles.length - 1; i >= 0 ; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].invisible()) {
            particles.splice(i, 1);
        }
    }
}

class Particle {

    constructor() {
        this.x  = 400;
        this.y  = 600;
        this.vx = random(-1,  1);
        this.vy = random(-0.9, -5);
        this.alpha = 255;
    }

    show() {
        noStroke();
        fill(255, this.alpha);
        ellipse(this.x, this.y, 16);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= random(1,4);
    }

    invisible() {
        return this.alpha < 0;
    }
}

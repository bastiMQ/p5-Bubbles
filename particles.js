let particles = []
let velSliderX, velSliderY, numParticles;

function setup() {
    noStroke();
    background(0);
    createCanvas(800,600);
    velSliderX = createSlider(0, 5, 1, 0.01);
    velSliderY = createSlider(0, 10, 5, 0.01);
    numParticles = createSlider(0, 10, 1, 1);
}

function draw() {
    background(0);

    for (let i=0; i<numParticles.value(); ++i) {
        let newP = new Particle();
        particles.push(newP);
    }

    for (p of particles) {
        p.update();
        if (p.invisible()) {
            particles.splice(particles.indexOf(p), 1);
        } else {
            p.show();            
        }
    }
}

class Particle {

    constructor() {
        this.x  = 400;
        this.y  = 600;
        this.vx = random(-1, 1) * velSliderX.value();
        this.vy = random(0, -1) * velSliderY.value();
        this.hue = Math.round((360 / width) * (mouseX < 0 ? 0 : mouseX));
        this.alpha = 1.0;
        this.size = random(1,25);
    }

    show() {
        let c = color(`hsba(${this.hue}, 100%, 100%, ${this.alpha})`);
        fill(c);
        ellipse(this.x, this.y, this.size);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= random(0,0.015);
    }

    invisible() {
        return this.alpha < 0;
    }
}

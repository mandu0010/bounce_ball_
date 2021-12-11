let snow = [];

function setup() {
  createCanvas(700, 400);

}

function mousePressed(){
  let p = new Snow();
  snow.push(p);
}
function draw() {
  background(50, 10);
  gravity1 = createVector(0.07, 0.5);
   for (let i = 0 ; i<snow.length ; i++){
  
       wind = createVector(0.5, -0.3);
     
     if (keyIsPressed) {
     snow[i].applyForce(wind);
      
         }
     
   snow[i].applyForce(gravity1);
   snow[i].update();
   snow[i].display();
   snow[i].checkadge();
    
  }

}


class Snow {
  
  constructor(){
  this.pos = createVector(mouseX, mouseY, random(2,4));
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.w = random(10,50);
  }
  
  applyForce(force){
    this.acc.add(force);
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    
    this.acc.set(0,0);
  }
  
  display(){
    fill(random(0,255),random(0,255),random(0,255),random(10,255));
    ellipse(this.pos.x, this.pos.y, this.w*2, this.w*2);
    
  }
  
 checkadge(){
   if (this.pos.y > height) {
      this.vel.y = this.vel.y * -1;
      this.pos.y = height;
     }
        if (this.pos.x > width) {
      this.vel.x = this.vel.x * -1;
      this.pos.x = width;
    } 
   
    
  }
  
}
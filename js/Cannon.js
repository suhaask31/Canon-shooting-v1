
class Cannon {

  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImg = loadImage("assets/cannon.png") 
    this.cannonbaseImg = loadImage("assets/cannonBase.png") 
  }
  display(){
    push()
    rectMode(CENTER)
    image(this.cannonImg,this.x,this.y,this.width,this.height,this.angle)
    pop()
    image(this.cannonbaseImg,70,20,200,200)
    noFill()
  }
}

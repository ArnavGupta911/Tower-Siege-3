class Ball {
  constructor(x, y,width,height) {
    var ball_options = {
      isStatic:true,
      restitution:0.8,
      friction:1.0,
      density:1.0,
    };

    this.body = Bodies.rectangle(x, y, width, height, ball_options);
      this.ball_w = width;
      this.ball_h = height;
      this.image = loadImage("hexagon.png");
      World.add(world, this.body);
  }
  display(){
    push ();
    translate(this.body.position.x,this.body.position.y)
    angleMode(RADIANS);
    rotate (this.body.angle);
    imageMode(CENTER);

    image(this.image ,this.body.position.x,this.body.position.y,40,40);  
    
    pop ();

  }
}
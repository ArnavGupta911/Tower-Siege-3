class Ground {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true,
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.box_w = width;
      this.box_h = height;
  
      World.add(world, this.body);
    }
  
    display(){
      fill("brown");
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,this.box_w,this.box_h);
  
    }
  }
  
class Paper {
    constructor(x,y,R) {
      var options = {
          isStatic:false,
          restitution:0.2,
          friction:0.10,
          density:1.2,
      }
      this.body = Bodies.circle(x,y,R,options);
      this.R = R;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
        }
    display(){
      var pos =this.body.position;
      rectMode(RADIUS);
      fill("black");
      imageMode (CENTER);
      image(this.image,100,720,this.R,this.R);
    }
  };
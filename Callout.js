class Callout{
  
    constructor(x,y){
      var options={
          'isStatic':true,
          'friction':0,
          'density':0.04
      }
      
      this.body = Bodies.circle(x,y,0,options);
      
      this.x=x;
      this.y=y;
      this.radius=300;
      World.add(world,this.body);
      this.image=loadImage("Callout.png")
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        //rotate(angle)
        imageMode(CENTER)
        stroke(0)
        strokeWeight(1)
        fill(211)
        image(this.image,this.x,this.y,this.radius,this.radius)
        pop();
    }

 };
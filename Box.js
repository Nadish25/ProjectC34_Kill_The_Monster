class Box {
  
    constructor(x,y){
      var options={
          'isStatic':false,
          'restitution':0.8,
          'friction':0,
          'density':0.04
      }
      
      this.body = Bodies.rectangle(x,y,70,60,options);
  
      this.x=x;
      this.y=y;
      this.width=70;
      this.height=60;
      World.add(world,this.body);

    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        stroke(0)
        strokeWeight(1)
        fill(255,40,21)
        rect(0,0,this.width,this.height)
        pop();
    }

 };
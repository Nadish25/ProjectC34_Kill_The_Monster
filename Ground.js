class Ground {
  
    constructor(x,y){
      var options={
          isStatic:true
      }
      
      this.body = Bodies.rectangle(x,y,3000,20,options);
  
      this.x=x;
      this.y=y;
      this.width=900;
      this.height=20;
      World.add(world,this.body);

    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        fill(255)
        rect(pos.x,pos.y,this.width,this.height)
    }

 };
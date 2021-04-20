
class Slave{
    constructor(x, y, width, height, angle) {
        var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.1,
          isStatic : false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
       this.Visibility=6005;
       this.remove=true
        this.image=loadImage("ws.png");
        this.broken=loadImage("ge.png");
        World.add(world, this.body);
      }
      display(){
        if (this.body.speed < 7){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
           imageMode(CENTER);
          image(this.image,0,0 , this.width, this.height); 
          pop();
        }
        else{
          World.remove(world,this.body);
          if(this.remove===true){
            score=score+20;
            this.remove=false
           }
        
          push();
          translate(this.body.position.x, this.body.position.y);
          imageMode(CENTER);
          tint(6005,this.Visiblity);
          image(this.broken,20,20, 50, 50);
          this.Visiblity = this.Visiblity - 100;
          pop();
          
            
         
        }
      }
};


class SlingShot{

    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 5
        }
        this.pointB = pointB
        this.SlingShot= Constraint.create(options);
        World.add(world, this.SlingShot);
    }

      display(){
          if(this.SlingShot.bodyA){
            var pointA = this.SlingShot.bodyA.position;
            var pointB = this.pointB;
           stroke("black");
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        
          }
            
    }
    fly(){
       this.SlingShot.bodyA = null 
    }
    attach(shooter){
        this.SlingShot.bodyA = shooter;
    }
}

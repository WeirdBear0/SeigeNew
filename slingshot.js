class Slingy{
    constructor(b1,point){
        var options = {
            bodyA: b1,
            pointB: point,
            length: 10,
            stiffness: 0.05
        }
    
        this.slingy = Constraint.create(options);
        World.add(world, this.slingy);
    }
    display(){

        
        if (this.slingy.bodyA){
            var p1 = this.slingy.bodyA.position;
            var p2 = this.slingy.pointB;

            if(p1.x > 220){
                strokeWeight(3);
                stroke("#301608");
                line(p1.x+20, p1.y, p2.x+25, p2.y+10);
                // line(p1.x+20, p1.y, p2.x-25, p2.y+10);
                
            }
            else{
                strokeWeight(7);
                stroke("#301608");
                line(p1.x-20, p1.y, p2.x+25, p2.y+10);
                // line(p1.x-20, p1.y, p2.x-25, p2.y+10);
                
            }
        }
       

    }
    fly(){
        this.slingy.bodyA = null;
    }
    attach(body){
        this.slingy.bodyA = body;
    }
}

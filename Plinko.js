class Plinko {
    constructor(x,y,r){

        var options={
            restitution:0.3
        }
        this.r=10;
        this.body=Bodies.circle(x,y,10,options);
        this.color=color(random(0.225),random(0,225),random(0,225))
World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
       
        
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y.this.r);
       
    }
}
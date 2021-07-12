class Ball{
    constructor(x,y,r)
    {
        var options={
            restituition:0.8
        };
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
    show()
    {
        var p = this.body.position;
        var angle = this.body.angle;
        push();
        translate(p.x,p.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
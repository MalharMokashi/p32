class Blower{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:true
        };
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
    show()
    {
        var p = this.body.position;
        var angle = this.body.angle;
        push();
        translate(p.x,p.y);
        rotate(angle);
        rectMode(CENTER);
        fill("8Af5c7");
        rect(0,0,this.w,this.h);
        pop();
    }
}
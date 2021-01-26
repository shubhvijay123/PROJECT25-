class Paper 
{
    constructor(x,y,r)
    {

        var options={
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1 ,

            }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("crumbled.png")
        this.body=Bodies.circle(x,y,r,options)
        World.add(world, this .body);
    }
    display()
    {
        var paperpos=this.body.position;

        push();
        translate(paperpos.x,paperpos.y);
        
       // stroke("red");
       // fill("pink");
        imageMode(RADIUS);
        image(this.image,0,0,2*this.r,2*this.r)
        pop();

    }
}
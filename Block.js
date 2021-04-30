class Block{
    constructor(x,y){
        var options={
            isStatic: false
        }
        this.body=Bodies.rectangle(x,y,100,100,options);
        Matter.Body.setMass(this.body,this.body.mass*5)
        this.width=100;
        this.height=100;
        World.add(world,this.body);

    }
    show()
    {
        push ()
        fill("red")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop ()
    }
}
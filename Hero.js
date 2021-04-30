class Hero{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 0.8
        }
        this.body=Bodies.circle(x,y,200,options);
        this.radius=200
        World.add(world,this.body)
    }
    getPosition(){
        return this.body.position;
    }
}
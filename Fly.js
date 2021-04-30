class Fly{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            length:10
        }
        this.string=Constraint.create(options);
        World.add(world,this.string)
    }
    display(){
        if(this.string.bodyA){
            var a=this.string.bodyA.position;
            var b=this.string.pointB;
            line(a.x,a.y,b.x,b.y)
        }
        
    }
    remove(){
        this.string.bodyA=null;
    }
    getBack(ourHero){
        this.string.bodyA=ourHero;
    }
}
class chain{
    constructor(pointA,bodyB){
        var options={
            pointA:pointA,
            bodyB:bodyB,
            stiffness:0.06,
            length:1
        }
        this.pointA=pointA
        this.bodyB=bodyB
        this.rubber=Constraint.create(options)
        World.add(world,this.rubber)
    }
    attach(body){
        this.rubber.bodyB=body
    }
    fly(){
        this.rubber.bodyB=null
    }
    display(){
        if(this.rubber.bodyB){
        var pointA=this.pointA
        var pointB=this.rubber.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }}
}
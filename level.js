class level{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,400,10,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        rect (pos.x,pos.y,400,10)
    }
}
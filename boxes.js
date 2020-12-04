class boxes{
    constructor(x,y){
        var options={
            'restitution':0.5,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,50,50,options)
        World.add(world,this.body)
        this.Visibility=255
        

    }
    display(xmas){
if(this.body.speed<6){
        fill(xmas)
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, 50, 50);
        pop();
}else{
    World.remove(world,this.body)
    this.Visibility=this.Visibility-5
    console.log(this.Visibility)
    if(this.Visibility,this.Visibility>-25){
        score++
    }
}
    }
}
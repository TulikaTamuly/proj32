
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var bg="lightblue"
var score=0
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
	box=new shooter()
	sling=new chain({x:200,y:200},box.body)
    g1=new ground()
	l1=new level(635,390)
	l2=new level(610+200,135)
	b1=new boxes(510,360)
	b2=new boxes(560,360)
	b3=new boxes(610,360)
	b4=new boxes(660,360)
	b5=new boxes(710,360)
	b6=new boxes(760,360)
	b7=new boxes(535,310)
	b8=new boxes(585,310)
	b9=new boxes(635,310)
	b10=new boxes(685,310)
	b11=new boxes(735,310)
	b12=new boxes(560,260)
	b13=new boxes(610,260)
	b14=new boxes(660,260)
	b15=new boxes(710,260)
	
	b20=new boxes(510-25+200,360-255)
	b21=new boxes(560-25+200,360-255)
	b22=new boxes(610-25+200,360-255)
	b23=new boxes(660-25+200,360-255)
	b24=new boxes(710-25+200,360-255)
	b25=new boxes(760-25+200,360-255)
	b26=new boxes(535-25+200,310-255)
	b27=new boxes(585-25+200,310-255)
	b28=new boxes(635-25+200,310-255)
	b29=new boxes(685-25+200,310-255)
	b30=new boxes(735-25+200,310-255)








	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Timeperiod()
  background(bg);
  
  
  
 box.display()
 sling.display()
 g1.display() 
  l1.display()
  l2.display()
  b1.display("red")
  b2.display("blue")
  b3.display("yellow")
  b4.display("green")
  b5.display("lightgreen")
  b6.display("blue")
  b7.display("red")
  b8.display("blue")
  b9.display("yellow")
  b10.display("white")
  b11.display("blue")
  b12.display("lightgreen")
  b13.display("white")
  b14.display("yellow")
  b15.display("white")
  b20.display("red")
  b21.display("red")
  b22.display("blue")
  b23.display("yellow")
  b24.display("green")
  b25.display("lightgreen")
  b26.display("blue")
  b27.display("red")
  b28.display("blue")
  b29.display("yellow")
  b30.display("white")
  textSize(30)
  fill("orange")
  text("Score:  "+score,50,50)

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(box.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	sling.fly()
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(box.body,{x:200,y:200})
		sling.attach(box.body)
	}
}
    async function Timeperiod(){
	var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
	var responseJson=await response.json()
	var dateTime=responseJson.datetime
	console.log(response)
	console.log(responseJson)
	console.log(dateTime)
	var time=dateTime.slice(11,13)
	console.log(time)
	if(time>06&&time<18){
		bg="lightblue"
	}else{
		bg="blue"
	}
}

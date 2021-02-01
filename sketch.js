const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform, slingshot;
var bird;
window.score = 0;

function preload() {
    dayNight();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(800, height-70, 300, 20);
    platform2 = new Ground(1000, height-300, 20,140);
    platform3 = new Ground(200, height-230, 300, 20);
    platform4 = new Ground(50, height-230, 20,300);

    box1 = new Box(700,320,70,70);
    box2 = new Box(770,320,70,70);
 


    box3 = new Box(840,320,70,70);
    box4 = new Box(668,320,70,70);



    box5 = new Box(810,320,70,70);
    box6 = new Box(200, height-270, 70, 70);
    box7 = new Box(140, height-270, 70, 70);
    box8 = new Box(270, height-270, 70, 70);
    box9 = new Box(220, height-300, 70, 70);
    box10 = new Box(150, height-300, 70, 70);
    box11 = new Box(175, height-330, 70,70);
    box12 = new Box(710, 290, 70,70);
    box13 = new Box(780, 290, 70,70);
    box14 = new Box(850, 290, 70,70);
    box15 = new Box(800, 260, 70,70);


    
    
    
   
    
    bird = new Bird(200,300);
    slingshot = new Slingy(bird.body, {x:200,y:300});


}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }
    

    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    platform1.display();
    platform2.display();
    platform3.display();
    platform4.display();
   
    box3.display();
    box4.display();
  


    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();





    bird.display();
    slingshot.display();

    text("Score:" + window.score, 1050, 50);
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        Matter.Body.setPosition(bird.body, {x:300, y:300});
        slingshot.attach(bird.body);
    }

}

async function dayNight(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/america/phoenix");
    var json = await response.json()
    console.log(json);
    time = json.datetime;
    var indexpos = time.slice(11,13);
    console.log(indexpos);
    if (indexpos>6 && indexpos<=17){
        bg = "yellow.jpg"
        console.log("day");
    }
    else{
        bg = "black.jpg"
        console.log("night");

    }
    backgroundImg = loadImage(bg);
}

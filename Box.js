class Box extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("square2.png");
    this.visibility = 255;
    this.counter = 0;
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed> 3){
    
      World.remove(world, this.body);
      push()
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      this.score()
      pop();
      this.visibility = this.visibility - 5;
    } 
    else{
      super.display();
    }
  }
  score(){
    this.counter++
    if(this.counter === 1){
      window.score = window.score+50;
    }
  }


};


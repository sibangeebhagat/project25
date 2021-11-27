class Paper{

    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
         
        }
        this.r = r ;
        this.x = x;
        this.y = y;
        this.image = loadImage("paper.png")
         this.body = Bodies.circle(this.x,this.y, this.r,options);

         World.add(world,this.body);
    }
    display(){

        var paperposition=this.body.position;		

        push()
        translate(paperposition.x,paperposition.y);
        rectMode(CENTER)
        //strokeWeight(4);
        fill(255,0,255);
        imageMode(CENTER)
        image(this.image,0,0,this.r, this.r);
        pop()
      
    }

}
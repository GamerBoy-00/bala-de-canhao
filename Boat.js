class Boat{
constructor(x,y,w,h,boatPos,bAnimation){
this.x = x
this.y = y
this.w = w
this.h = h
this.boatPos = boatPos
this.bAnimation = bAnimation
this.speed = 0
var options={
    restitution:0.8,
    friction:1,
    density:1


};

this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
this.image = loadImage("./assets/boat.png");
World.add(world,this.body);

}

display(){
var pos = this.body.position;
var angle = this.body.angle;
var index = floor(this.speed % this.bAnimation.length)
push();
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
image(this.bAnimation[index],0,this.boatPos,this.w,this.h);
noTint();
pop();
}

showBoats() {
    if (boats.length > 0) {
        if (boats.length < 4 && boats[boats.length-1].body.position.x < width -300) {
        
        
    
var positions = [-130,-100,120,80];
var position = random(positions);


var boat = new Boat(width,height-100,200,200,position)
boats.push(boat);
        }
for (var i = 0; i < boats.length; i++) {
    boats[i].display();
   Body.setVelocity(boats[i].body,{x:-0.9,y:0});
    
}



}

else{
    var boat = new Boat(width,height-100,200,200,-100)
boats.push(boat);
}

}

animate(){
this.speed+=0.05;

}

































}

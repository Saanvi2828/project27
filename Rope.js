class Rope{
    constructor(body1,pointB){
       var options={
          isStatic:false,
          bodyA:body1,
          length: 400,
          pointB:pointB
      }
      this.pointB=pointB
      this.rope=Matter.Constraint.create(options)
      World.add(world,this.rope);
    }
    display(){
        strokeWeight(4);
        stroke("black");
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
}
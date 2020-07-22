class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX,
        this.offsetY=offsetY
      var options={
          bodyA:body1,
          bodyB:body2,
          pointB:{x:this.offsetX,y:this.offsetY}
      }
      this.rope=Matter.Constraint.create(options)
      World.add(world,this.rope);
    }
    display(){
        strokeWeight(4);
        stroke("black");
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
}
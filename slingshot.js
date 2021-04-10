class Slingshot {
  constructor(bodyA,pointB) {
      var options = {
        bodyA:bodyA,
        pointB:pointB,
        length:15,
        stiffness:0.04,
      }
      this.pointB = pointB;
      this.sling = Matter.Constraint.create(options);
      World.add(world, this.sling);

  }

  fly() {
    this.sling.bodyA = null;
  }

  display() {

    if (this.sling.bodyA) {

    
      var pA = this.sling.bodyA.position;
      var pB = this.pointB;
push();
      strokeWeight(4);
      stroke('brown');

      line(pA.x,pA.y,pB.x,pB.y);
      pop();
      }
    }

}
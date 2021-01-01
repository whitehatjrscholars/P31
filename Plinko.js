class Plinko{
    constructor(x, y){

        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 10, options)
        this.r = 10
        
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position
        ellipseMode(CENTER)
        ellipse(pos.x, pos.y, this.r)
    }
}
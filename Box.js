class Box {
    constructor(x,y,width,height);{

    var options = {

        restitution:0.8
    }

    this.body = Bodies.rectangle(x,y,width,height)
    World.add(world,this.body);
    }

    didplay(){
      
        var pos =this.body.position;
        rectMode(CENTER)
        Fill(255);
        rect(pos.x,pos.y,this.width,this.height);
    }
        
    
 }

    




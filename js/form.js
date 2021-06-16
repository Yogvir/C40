class Form{
    constructor() {
        this.input = createInput("Name")
    this.button = createButton("PLAY")
    this.greeting= createElement("h2")
    this.reset = createButton("RESET")
    }
    Hide() {
       this.button.hide();
       this.input.hide();
       this.greeting.hide();
    }
    display() {
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(displayWidth/2-120,70);

        
        this.input.position(displayWidth/2-120,displayHeight/2);
        this.button.position(displayWidth/2,displayHeight/2+ 50);
        this.reset.position(100,100)
        this.button.mousePressed(()=> {
           this. input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount
            player.update();
            player.updateCount(playerCount);
           
            
            this.greeting.html("Hey! WelCome to my Game " + player.name);
           this. greeting.position(displayWidth/2-120,displayHeight/2)
            })
            this.reset.mousePressed(()=>{
                game.updateState(0);
                player.updateCount(0);
                database.ref("/").update({
                    players:null
                })

                
            })
            
}

}
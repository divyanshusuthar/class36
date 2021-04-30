class Game {
    constructor(){

    }
    getState(){
            var gameStateref = database.ref("gameState");
            gameStateref.on("value",function(data){
                gameState = data.val
            })
            
            

         }
    
    update(state){
        database.ref("/").set({
            gameState : state
        })
    }
    start(){

        if(gameState===0){
            form = new Form();
            form.display(); 
        }
    }
    

}
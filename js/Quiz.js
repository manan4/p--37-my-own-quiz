class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

  //question.hide();

  var y = 200
    
    /*fill("lightGreen")
    textSize(30);
    text("Game Start",120,100);*/

    Contestant.getContestantInfo();

    if(allContestants !==undefined){
      fill("skyblue");
      textSize(20);
      text("note: contestant who answer correct are highlighted in purple color",130,230);

      for(var plr in allContestants){
         var correctAns = "2"
          if(correctAns === allContestants[plr].answer){
              fill ("purple")
          }
          else{
              fill ("red")
          } 
          text(allContestants[plr].name + ": " + allContestants[plr].answer,300,y) ;
          y = y + 20; 
      }
  }


  }

}

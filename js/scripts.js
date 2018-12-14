//business logic
var player1 = "";
var player2 = "";
var rollDice = function (){
  return Math.floor(Math.random()*6)+1;
};

function Player (){
  this.roll = 0;
  this.playerName = 0;  //player constructor
  this.score= 0 ;
  this.totalScore = 0;

};
 // Roll Hold and Winner
Player.prototype.rolll = function(){
  if (this.roll === 1){
    this.score = 0;
    alert("You rolled a 1!Next player's turn!"); //Roll
  }
  else{
    this.score += this.roll;
  }
};


Player.prototype.hold = function(){
  this.totalScore += this.score;    //Hold
  this.score = 0;
};

Player.prototype.winner = function(){
  if (this.totalScore >= 100){                         //winner
    alert(this.playerName + "has won the game!!");
  }
};

Player.prototype.newgame = function(){
  this.roll = 0;
  this.score= 0;
  this.totalScore = 0;
  this.playerName = "";
};

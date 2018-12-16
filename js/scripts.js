//business logic
var player1 = "";
var player2 = "";
var rollDice = function() {
  return Math.floor(Math.random() * 6) + 1;
};

function Player() {
  this.roll = 0;
  this.playerName = 0; //player constructor
  this.score = 0;
  this.totalScore = 0;

};
// Roll Hold and Winner
Player.prototype.rolll = function() {
  if (this.roll === 1) {
    this.score = 0;
    alert("You rolled a 1!Next player's turn!"); //Roll
  } else {
    this.score += this.roll;
  }
};


Player.prototype.hold = function() {
  this.totalScore += this.score; //Hold
  this.score = 0;
};

Player.prototype.winner = function() {
  if (this.totalScore >= 100) { //winner
    alert(this.playerName + "has won the game!!");
  }
};

Player.prototype.newgame = function() {
  this.roll = 0;
  this.score = 0;
  this.totalScore = 0;
  this.playerName = "";
};

var newPlayers = function() {
  $(".player1").val("");
  $(".player2").val("");
};




//UI

$(document).ready(function(){

  $("button#start").click(function(event){
    eveny.preventDefault();
    player1 = new Player ();
    player2 = new Player();
    $("#main").hide();
    $("#arena").show();


    var player1 = $("#player1").val();
    $("#player1").text(player1);

    var player2 = $("#player2").val();
    $("#player2").text(player2);

    player1.playerName = player1;
    player2.playerName = player2;

  });


  $("button#player1-roll").click(function(event){
    player1.roll = rollDice();
    $("#score1").text(player1.score);
  });
  $("button#player2-roll").click(function(event){
    player2.roll = rollDice();
    $("#score2").text(player2.score);

  });
});

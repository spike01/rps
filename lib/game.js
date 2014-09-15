function Game(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
};

Game.prototype.PAIRS = {
  rock: { beats: "scissors" },
  paper: { beats: "rock" },
  scissors: { beats: "paper" }
};

Game.prototype.winner = function() {
  if (this.isSamePick()) {
    return null;
  } 

  if(this.PAIRS[this.player1.pick]["beats"] === this.player2.pick) {
    return this.player1;
  }
  else {
    return this.player2;
  }
};

Game.prototype.isSamePick = function() {
  return this.player1.pick === this.player2.pick;
};

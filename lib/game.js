function Game(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
};

Game.prototype.PAIRS = {
  rock:     { scissors: "crushes",   lizard: "crushes" },
  paper:    { spock: "disproves",    rock: "covers" },
  scissors: { paper: "cuts",         lizard: "decapitates" },
  lizard:   { spock: "poisons",      paper: "eats" },
  spock:    { scissors: "smashes",   rock: "vapourises" }
};

Game.prototype.winner = function() {
  if (this.isSamePick()) {
    return null;
  } 

  if (this.PAIRS[this.player1.pick][this.player2.pick]) {
    return this.player1;
  }
  else {
    return this.player2;
  }
};

Game.prototype.isSamePick = function() {
  return this.player1.pick === this.player2.pick;
};

Game.prototype.winningMessage = function() {
  return [this.winner().name, this.PAIRS[this.winner().pick][this.loser().pick],
         this.loser().name].join(" ");
};

Game.prototype.endMessage = function() {
  if (this.winner()) {
    return this.winningMessage();
  }
  else {
    return "Draw";
  }
};

Game.prototype.loser = function() {
  return (this.winner() === this.player1 ? this.player2 : this.player1);
};

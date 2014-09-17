var player1 = new Player("Spike")
var player2 = new Player("Computer")
var game = new Game(player1, player2)

$(document).ready(function() {
  $('.picks img').on('click', function() {
      player1.picks($(this).data('pick'));
      player2.picks(game.randomPick())
      $('.result').prepend('<li>' + game.endMessage() + '</li>');
      $('.result li:gt(3)').fadeOut(500, function() {
       this.remove(); 
      });
        
  });


});

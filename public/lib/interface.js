var player1 = new Player("Player1")
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

  $('.name_input').on('submit', function(e) {
    e.preventDefault();
    player1.name = $('input.playername').val()
    $('.name_input').fadeOut(500);
    
  });

});

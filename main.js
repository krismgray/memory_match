$(document).ready(function() {

var Memory = {

  init; function(cards){
    this.$restartButton = $("button.restart");
    this.cardsArray = $.merge(cards, cards);
    this.shuffleCards(this.cardsArray);
    this.setup();
    this.binding();
  },

  cardArray = [1,2,3,4,5,6,7,8]



  shuffleCards: function(cardArray) {
    this.$cards = $(this.shuffle(this.cardsArray));
  },
}
})

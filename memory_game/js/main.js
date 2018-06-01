var cards = [
  {
    rank: "Queen",
    suit: "Hearts",
    cardImage: "images/queen-of-hearts.png"
  },
 {
   rank: "Queen",
   suit: "Diamonds",
   cardImage: "images/queen-of-diamonds.png"
 },
 {
   rank: "King",
   suit: "Hearts",
   cardImage: "images/king-of-hearts.png"
 },
 {
   rank: "King",
   suit: "Diamonds",
   cardImage: "images/king-of-diamonds.png"
 },
];

var cardsInPlay = [];
var checkForMatch = function(){
if (cardsInPlay[0] === cardsInPlay[2]){
 alert ("You Found a Match!");
} else {
 alert ("Sorry, Try Again!");
}
}
var flipCard = function(cardId){
console.log("User flipped " + cards[cardId].rank)
console.log("User flipped " + cards[cardId].suit)
console.log("User flipped " + cards[cardId].cardImage)

cardsInPlay.push(cards[cardId].rank);
if (cardsInPlay.length === 2){
checkForMatch();
}
};
flipCard(0);
flipCard(2);

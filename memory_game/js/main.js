var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];
var checkForMatch = function(){
if (cardsInPlay[0] === cardsInPlay[1]){
 alert ("You Found a Match!");
} else {
 alert ("Sorry, Try Again!");
}
}
var flipCard = function(cardID){
console.log("User flipped " + cards[cardID])

cardsInPlay.push(cards[cardID]);
if (cardsInPlay.length === 2){
checkForMatch();
}
};
flipCard(0);
flipCard(1);

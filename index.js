

// document.getElementById('Refresh').addEventListener('click', function() {

    var diceroll = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.img1').setAttribute('src', 'images/dice' + diceroll + '.png');
    
    var diceroll2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.img2').setAttribute('src', 'images/dice' + diceroll2 + '.png');
   
    if (diceroll > diceroll2) {
        document.querySelector('h1').innerHTML = '<em>Player 1</em> wins!'
    } else if (diceroll < diceroll2) {
        document.querySelector('h1').innerHTML = '<em>Player 2</em> wins!'
    } else{
   document.querySelector('h1').innerHTML = 'Draw!'
}
// });
 
  




/* Games Rules

--> The games have two players play in round 
--> In each turn, a player roll dice as many times as he wish, each round add to its round score
--> But if a player roll 1, all of it round score gets lost, and that the next player get time
--> The first player reach 100 gets wins a game

*/

/*
############### FIRST PHASE OF CODE ####################
 1. How to create fundemental game variables
 2. How to generate randomly numbers
 3. How to manupulate Dom
 4. How to read Dom
 5. How to change Css

*/

var scores, roundScores, activePlayer, dice;

scores=[0,0];
roundScores=0;
activePlayer=0;

dice=Math.floor(Math.random()*6)+1;

// DOM ACT AS SETTER 

document.querySelector('#current--'+ activePlayer).textContent=dice // return normal html context

//document.querySelector('#current--'+activePlayer).innerHTML='<i>' + dice + '</i>' // return  normal html dont forger to concatination

 // ########### READ VALUE TO DOM ##############

 // DOM ACT AS GETTER 

 var x= document.querySelector('#score--0').textContent; 
 console.log(x);

// #################### USING DOM TO CHANGE CSS ##########

document.querySelector('.dice').style.display='none';












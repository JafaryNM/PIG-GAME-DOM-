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


// DOM ACT AS SETTER 

document.querySelector('#current--'+ activePlayer).textContent=dice // return normal html context

//document.querySelector('#current--'+activePlayer).innerHTML='<i>' + dice + '</i>' // return  normal html dont forger to concatination

 // ########### READ VALUE TO DOM ##############

 // DOM ACT AS GETTER 

 var x= document.querySelector('#score--0').textContent; 
 console.log(x);

// #################### USING DOM TO CHANGE CSS ##########

document.querySelector('.dice').style.display='none';


/*
############### SECOND  PHASE OF CODE ####################
 1. How to set an event Handler
 2. What is call back function
 3. What is anonymous function
 4. Another you want to select element by id
 5. How to change image on elements

\

  Event --> Is notification sent to code to notify sometthing happen to code 
             Example click scrolling Down, Hover, and Pressing Key

  Event Listener -->  A function that perform action based  certain events 
                      it wait to specific events to happens

 function btn(){   // --> Call back  Function
   // Statements here
 }

 document.querySelector('.btn--roll').addEventListener('click',btn)
 */

 //######################### GETTING ELEMENTS BY ID ####################

 document.getElementById('score--0').textContent=0;
 document.getElementById('score--1').textContent=0;
 document.getElementById('current--0').textContent=0;
 document.getElementById('current--1').textContent=0;

 // Anonymous Function is function that dont have name and cannot be reused

 document.querySelector('.btn--roll').addEventListener('click',function(){

      //  1. Randomly number 

       var dice=Math.floor(Math.random()*6)+1;

      // 2. Display result

         //  ############## CREATE VARIABLE DICE ##############

        var diceDOM=document.querySelector('.dice');
       
        diceDOM.style.display='block';
        diceDOM.src='dice-'+ dice + '.png';





      // 3. Update Result if result is not 1

 });
































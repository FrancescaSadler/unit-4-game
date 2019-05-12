$(document).ready(function (){
    //Global Variables: wins, losses,target score
var wins = 0;
var losses =0; 
var counter= 0;

//array of crystals (create variables) that you loop through- set max 1-12
for (var i=0; i<5; i++) {

    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");

}

//dynamically create crystals on the page 
    //each crytal needs a score, an image(aka an image held as an string held in your images folder), an object with all of this info aka collection of key value pairs 

//Random Number Function: 
    //return a random number 
    
    function randomNum = 

//Click Event Function: 
    //each crystal should have same class 
    // var score = yourScore + crystalValue 


// start/reset game
    //clear variables 
    //set target score 
    //assign a value for each crystal (.empty)
    

}

)


    $(document).ready(function(){


        //variables
    
        var counter = 0;
        var wins= 0;
        var losses = 0;
    
        
    
        function randomNum(min,max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max-min +1)) + min;
    
        }
    
        var targetNumber = randomNum(40,90);
        $("#target").html(targetNumber);
    
        var crystalOne= randomNum(1, 12);
        var crystalTwo= randomNum(1, 12);
        var crystalThree= randomNum(1, 12);
        var crystalFour= randomNum(1, 12);
    
    
        function reset(){
            counter = 0;
            $("#target").html(targetNumber);
            targetNumber = randomNum(40,90);
            $("#playerScore").text(counter);
            crystalOne= randomNum(1, 12);
            crystalTwo= randomNum(1, 12);
            crystalThree= randomNum(1, 12);
            crystalFour= randomNum(1, 12);
    
    
        }
    
        
        $("#greenGem").on("click", function(){
            counter += crystalOne;
            WinLoose();
            $(playerScore).text(counter);
            
        });
    
        $("#whiteGem").on("click", function(){
            counter += crystalTwo;
            WinLoose();
            $(playerScore).text(counter);
            
    
        });
    
        $("#yellowGem").on("click", function(){
            counter += crystalThree;
            WinLoose();
            $(playerScore).text(counter);
            
    
        });
    
        $("#redGem").on("click", function(){
            counter += crystalFour;
            WinLoose();
            $(playerScore).text(counter);
            
    
        });
    
        function WinLoose (){
    
        if (counter === targetNumber){
            wins += 1;
            alert("Winner!");
            $(win).text(wins);
            reset();
    
        } else if(counter > targetNumber){
            losses += 1;
            alert("You suck sooo bad!");
            $(loss).text(losses);
            reset();
        }
        
    }
        
    })

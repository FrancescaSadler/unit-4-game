

//Global Variables: wins, losses,target score
  var win = 0;
  var lost = 0;
  var RandomNum;
  var result = 0;
  var currentScore = 0;
  var crystalValue = 0;
  
  var resetAndStart = function () {
      $("#crystals").empty();
  
  //Generate Random Numbeer 
      RandomNum = Math.floor(Math.random() * (120 - 19) + 19)
  //This random number is then sent to screen 
      $("#result").html('Target Number: ' + RandomNum);
  //for loop to run through number options and create crystals 
      for (var i = 0; i < 4; i++) {
          var random = Math.floor(Math.random() * 11) + 1;
  
          var imageCrystal = $("<img>");
          imageCrystal.attr("src", "https://static.playbill.com/dims4/default/8261b25/2147483647/resize/x250%3C/quality/90/?url=http%3A%2F%2Fplaybill-brightspot.s3.amazonaws.com%2F2d%2F09%2F0134fa7a469e9d03ea9746449a66%2FBilly-Crystal-06.jpg");
          imageCrystal.attr('data-crystalValue', random);
          imageCrystal.addClass("crystal-image");
          $("#crystals").append(imageCrystal);
      }
  
      $("#currentScore").html("Total Score: " + currentScore);
  
  }
  
   resetAndStart();
  //click event for crystal -not operating 
  $(document).on('click', ".crystal-image", function () {
      console.log ("works")
  
  
      // var crystalValue = ($(this).attr("data-crystalValue"));
      // // crystalValue += parseInt(crystalValue);
  
      // var num = parseInt($(this).attr('data-crystalValue'));
  
      // currentScore += num
      // console.log(num)
  
  
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue += parseInt(crystalValue);
  
      $("#currentScore").html("Total Score: " + currentScore);
  
  
      if (currentScore > result) {
          lost++;
  
          currentScore = 0;
  
          // resetAndStart();
  
  
      }
      else if (currentScore === result) {
          win++;
          currentScore = 0;
  
          // resetAndStart ();
      }
  
  
  });
  
  
  
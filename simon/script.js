
var pattern = [];
var patternGuess = [];
var lost = false;
var init = function(){
  generatePattern();
  displayPattern(pattern);
  turn();
  console.log(pattern);
}
var turn = function(){
  patternGuess = [];
  $(document).ready(function(){
    for (var x = 0; x < pattern.length; x++){
      if (patternGuess.length < pattern.length){
        $( ".quarter" ).click(function() {
          var colour = $(this).attr('id');
          patternGuess.push(colour);
          console.log("pattern " + pattern + " turn: " + patternGuess );
          //console.log(patternGuess);
        });
      }
    }
    if (patternGuess.length == pattern.length){
      console.log("pattern " + pattern + " turn: " + patternGuess );
  }
    });
    //return patternGuess;
}
var displayPattern = function (arr){
  var x = 0;
  changeColour(arr, x);
}
var changeColour = function(arr, x){
  var myId = setInterval(function(){ mycode() }, 2000);
  var mycode = function(){
    if (x >= arr.length){
      clearInterval(myId);
    }
    else{
      console.log(arr[x]);
      $("#" + arr[x]).addClass("blacken", 1000).delay(1000).removeClass("blacken", 1000);
      x = x + 1;
      console.log(x);
    }
  }
  /*$("#" + arr[x]).addClass("blacken", 1000);
  setTimeout(function(){
  $("#" + arr[x]).removeClass("blacken");
    if (x < arr.length - 1){
      x = x + 1;
      changeColour(arr, x);
  	}
  /*x = x+1;
      if (x < arr.length){
        changeColour(arr, x);
      }
    }, 1000 * (x + 1));*/
  }

var generatePattern = function(){
  pattern.push(addToPattern());
}
var addToPattern = function(){
  var randomQuadrant = Math.ceil(Math.random() * 4);
  switch (randomQuadrant){
    case 1:
      return "blue";
      break;
    case 2:
      return "green";
      break;
    case 3:
      return "yellow";
      break;
    case 4:
      return "red";
      break;
  }
}

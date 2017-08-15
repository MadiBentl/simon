
var pattern = [];
var patternGuess = [];
var score = 0;
var lost = false;
var init = function(){
  $("#counter").html("<h1>" + score + "<h1>");
  generatePattern();
  displayPattern(pattern);
  patternGuess = [];
}
var updateGame = function(){
  generatePattern();
  displayPattern(pattern);
  patternGuess = [];
}
var startGame = function(){
  score = 0;
  $("#counter").html("<h1>" + score + "<h1>");
  pattern = [];
  patternGuess = [];
  generatePattern();
  displayPattern(pattern);
}
var addToPatternGuess = function(id){
  var colour = id;
  patternGuess.push(colour);
  console.log(patternGuess + " colour: " + colour);
  if (patternGuess.length == pattern.length){
    if(evaluateArrs(patternGuess, pattern) == true){
      updateGame();
      score += 1;
      $("#counter").html("<h1>" + score + "<h1>");
    }
    else{
      console.log("Sorry you lost");
      startGame();
    }
  }
}
var evaluateArrs = function(arr1, arr2) {
  if (arr1.length != arr2.length){
    return false;
  }
  else{
    for (var x = 0; x < arr1.length; x++){
      if (arr1[x] != arr2[x]){
        return false;
      }
    }
  }
  return true;
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

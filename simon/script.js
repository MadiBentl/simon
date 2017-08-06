
var pattern = [];
var init = function(){
  generatePattern();
  displayPattern(pattern);
  console.log(pattern);
}
var displayPattern = function (arr){
  for (var x = 0; x < arr.length; x++){
    changeColour(arr[x]);
  }
}
var changeColour = function(colour){
  $("#" + colour).css("background-color", "black");
  window.setTimeout(function(){
    $("#" + colour).css("background-color", colour);
  }, 600);
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

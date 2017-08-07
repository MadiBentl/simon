
var pattern = [];
var init = function(){
  generatePattern();
  displayPattern(pattern);
  console.log(pattern);
}
var displayPattern = function (arr){
  var x = 0;
  changeColour(arr, x);
}
var changeColour = function(arr, x){
  $("#" + arr[x]).addClass("blacken");
    setTimeout(function(){
      $("#" + arr[x]).removeClass("blacken");
      console.log("done");
      x = x+1;
      if (x < arr.length){
        changeColour(arr, x);
      }
    }, 1000);
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

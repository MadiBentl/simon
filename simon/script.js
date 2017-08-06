
var generatedPattern = [];
var generatePattern = function(){

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
console.log(addToPattern() + " " + addToPattern() + " " + addToPattern() + " " + addToPattern() + " " + addToPattern());

console.log("successful");
$(document).ready(function(){
  var dataLength = 3;
  for (var x = 0; x < dataLength; x++){
    $("#options")
    .append("<div class='option' id='option" + x + "'></div>");
    $("#option" + x)
    .append("<h3>Moto</h3>")
    .append("<p>Price:" + x + "</p>")
    .append("<p>Time:" + x + " minutes</p>")
    .append("<a href='google.com'>book now</a>");
  }
});

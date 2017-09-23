console.log("successful");
$(document).ready(function(){
  var dataLength = 3;
  displayFilter();
  $( "#target" ).submit(function( event ) {
    $("#container").load("addresses.html");
    //displayOptions();
    event.preventDefault();
  });
  function enterAddress(){
    $("#container").load("index.html");
  }
  var displayFilter = function(){
    var filter = "Top Recommendations";
    $("#container")
    .append("<div class='activeFilter'>"+ filter +"</div>");
  }
  var displayOptions = function(){
    for (var x = 0; x < dataLength; x++){
      $("#options")
      .append("<div class='option' id='option" + x + "'></div>");
      $("#option" + x)
      .append("<h3>Moto</h3>")
      .append("<p>Price:" + x + "</p>")
      .append("<p>Time:" + x + " minutes</p>")
      .append("<a href='google.com'>book now</a>");
    }
  }
});

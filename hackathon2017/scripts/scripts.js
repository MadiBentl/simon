console.log("successful");
var addressEntered = false;
var dataLength = 3;

$(document).ready(function(){
  $( "#target" ).submit(function( event ) {
    $("#content").addClass("hidden");
    addressEntered = true;
    confirmAddress();
    event.preventDefault();
  });

  var confirmAddress = function(){
    $("#address-options").removeClass("hidden");
      addressEntered = true;
  }

});
var displayOptions = function(){
    if (addressEntered){
      $("#content").removeClass("hidden");
      $("#address-options").addClass("hidden");
      $("#car-options").removeClass("hidden");
      createOptions();
    }
}
var createOptions = function(){
  for (var x = 0; x< dataLength; x++){
    $("#car-options").append("<div class='option' id='option" + x +"'>");
    $("#option" + x).append("<div class='fltright' id='fltright" + x +"'></div>")
                    .append("<div class='fltlft' id='fltleft" + x + "''></div>");
    $("#fltright" + x).append("<h3> \uD83D\uDEB6 > \uD83D\uDE97 Moto > \uD83D\uDEB6</h3>")
    .append("</br>")
    .append("Most Peaceful");
    $("#fltleft" + x).append("<p>35 min</p>")
                     .append("<p>$7-10</p>")

  }
}

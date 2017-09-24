console.log("successful");
$(document).ready(function(){
  var addressEntered = false;
  var dataLength = 3;
  $( "#target" ).submit(function( event ) {
    $("#content").css("display","none");
    addressEntered = true;
    confirmAddress();
    event.preventDefault();
  });

  var confirmAddress = function(){
    $("#options").css("display","block");
  }
  var displayOptions = function(){
    $("body").append("moto");
    if (addressEntered){
      for (var x = 0; x < dataLength; x++){
        $("body")
        .append("<div class='option' id='option" + x + "'></div>");
        $("#option" + x)
        .append("<h3>Moto</h3>")
        .append("<p>Price:" + x + "</p>")
        .append("<p>Time:" + x + " minutes</p>")
        .append("<a href='google.com'>book now</a>");
      }
    }
  }
});

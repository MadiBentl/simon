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
//  $(document).ready(function(){
    if (addressEntered){
      $("#car-options").removeClass("hidden");
    }
  //});
}

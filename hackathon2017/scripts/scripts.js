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
      $("#address-options").addClass("hidden");
      $("#car-options").removeClass("hidden");
    }
  //});
}

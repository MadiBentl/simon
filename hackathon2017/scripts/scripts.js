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
      $("#activeFilter").removeClass("hidden");
      $("#address-options").addClass("hidden");
      $("#car-options").removeClass("hidden");
      createOptions();
    }
}
var showmap = function(){
  console.log("show map");
  $("#content").addClass("hidden");
  $("#activeFilter").addClass("hidden");
  $("#car-options").addClass("hidden");
  $("#options").addClass("hidden");
  $("#map-page").removeClass("hidden");
}
var createOptions = function(){
  for (var x = 0; x< dataLength; x++){
    if (data[x]["available"]){
      $("#car-options").append("<div onClick='showmap()' class='option' id='option" + x +"'>");
      $("#option" + x).append("<div class='fltright' id='fltright" + x +"'></div>")
                      .append("<div class='fltlft' id='fltleft" + x + "''></div>");
      $("#fltright" + x).append("<h3> \uD83D\uDEB6 > \uD83D\uDE97 " + data[x]["name"] + " > \uD83D\uDEB6</h3>")
      .append("</br>")
      .append(data[x]["badge"]);
      $("#fltleft" + x).append("<h4>"+ data[x]["time"] +"</h4>")
                       .append("<p>" + data[x]['cost'] + "</p>");
    }

  }
}

var data = [
  {
    name: "Evo",
    "type": "Car Sharing",
    "time": "26 min",
    "cost": "$6-10",
    "available": true,
    "badge": "Lowest Cost"
  },
  {
    "name": "Uber",
    "typ": "Car Sharing",
    "time": "20 min",
    "cost": "$9-15",
    "available": true,
    "badge": "Shortest Walk"
  },
  {
    "name": "Mobi",
    "type": "Bike Sharing",
    "time": "35 min",
    "cost": "$9.75",
    "available": true,
    "badge": "Most Peaceful"
  },
  {
    "name": "Car2Go",
    "type": "Car Sharing",
    "time": "30 min",
    "cost": "$5-8",
    "available": false,
    "badge": null
  }
]

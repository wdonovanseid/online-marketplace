$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const fullname = $("#name").val();
    const fulladdress = $("#address").val();
    result = "thank you, " + fullname + " at " + fulladdress; 
    $("#output").text(result);
  });
});
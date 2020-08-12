$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const fullname = $("#name").val();
    const fulladdress = $("#address").val();
    const cost = parseFloat($("#beverage").val())+parseFloat($("#entree").val())+parseFloat($("#dessert").val());
    $("#output1").text("Thank you, " + fullname + ". Your total is $" + cost);
    $("#output2").text("Your order will be shipped to " + fulladdress);
  });
});
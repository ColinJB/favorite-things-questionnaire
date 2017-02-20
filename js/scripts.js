$(document).ready(function() {

  var food = $("input#fav1").val();
  var animal = $("input#fav2").val();
  var sport = $("input#fav3").val();
  var holiday = $("input#fav4").val();

  $("#formOne").submit(function(event) {

    event.preventDefault();
  })
});

$(document).ready(function() {
  $("#formOne").submit(function(event) {


      var food = $("input#fav1").val();
      var animal = $("input#fav2").val();
      var sport = $("input#fav3").val();
      var holiday = $("input#fav4").val();

      var array1 = [food, animal, sport, holiday];
      var array2 = [array1[1], array1[0], array1[2]];

      $("#output").show();


    event.preventDefault();
  });
});

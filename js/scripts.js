$(document).ready(function() {
  $("#formOne").submit(function(event) {


      var list1 = $("input#list1").val();
      var list2 = $("input#list2").val();
      var list3 = $("input#list3").val();
      var list4 = $("input#list4").val();

      var items = [list1, list2, list3, list4];
      var sortItems = items.map(function(item) {
        return item.toUpperCase();
      })
      sortItems.sort();

      $(".list1").text(sortItems[0]);
      $(".list2").text(sortItems[1]);
      $(".list3").text(sortItems[2]);
      $(".list4").text(sortItems[3]);

      $("#output").show();


    event.preventDefault();
  });
});

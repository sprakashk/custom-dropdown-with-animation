$(".dropdown-content li").click(function (e) {
  if ($(".dropdown-toggle").focus()) {
    $(".dropdown-toggle").blur();
  }
  var listItemId = $(this).attr("id");
  embedInputName(listItemId);
});
function embedInputName(idName) {
  var listItemIdName = "#" + idName;
  var listItemText = $(listItemIdName).text();
  $("input").val(listItemText);
}

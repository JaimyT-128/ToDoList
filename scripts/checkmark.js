$(document).on("click",".fa-check",function(){

  $(this).parent().remove();
  var count = $("#list_body div").length;
  if (count == 0) {
    $(".noTasks").show();
  } else {
    $(".noTasks").hide();
  }
});

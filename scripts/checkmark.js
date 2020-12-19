$(document).on("click",".fa-check",function(){

  // Removes the parent div and all the children when clicked on a checkmark
  $(this).parent().remove();

  // Checks if the "No current task message" has to be hidden or shown
  var count = $("#list_body div").length;
  if (count == 0) {
    $(".noTasks").show();
  } else {
    $(".noTasks").hide();
  }
});

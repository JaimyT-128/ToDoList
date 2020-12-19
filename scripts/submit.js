$(".inputButton").click(function(){
  if ($(".inputText").val() != "") {
    if($(".inputText").val().length < 75){
      var formInput = $(".inputText").val();
      var newDiv = document.createElement('div');
      newDiv.setAttribute("class", "task");
      newDiv.innerHTML = "<span>" + formInput + "</span><i class=\"fa fa-pencil\" title=\"Click to edit task\"></i> <i class=\"fa fa-check\" title=\"Click to finish task\"></i>"
      document.getElementById("list_body").appendChild(newDiv);
      var count = $("#list_body div").length;
      if (count == 0) {
        $(".noTasks").show();
      } else {
        $(".noTasks").hide();
      }
    } else{
      alert("The task you entered is too long.")
    }
  } else {
    alert("You need to enter a task before you add it.")
  }
});

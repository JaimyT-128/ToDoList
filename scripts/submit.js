$(".inputButton").click(function(){
  if ($(".inputText").val() != "") {
    var formInput = $(".inputText").val();
    var newDiv = document.createElement('div');
    newDiv.setAttribute("class", "task");
    newDiv.innerHTML = "<span>" + formInput + "</span> <a class=\"checkmark\" title=\"Click to finish task!\">&#10003;</a>"
    document.getElementById("list_body").appendChild(newDiv);
  }
});

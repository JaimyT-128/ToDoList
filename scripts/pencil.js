$(document).on("click",".fa-pencil",function(){
  var span = $(this).prev();
  var text = span.text();

  var newText = prompt("Edit task", text);

  if(newText != null){
    if (newText.length < 75) {
      span.text(newText);
    } else {
      alert("The task you entered was too long!")
    }
  }
});

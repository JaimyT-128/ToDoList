$(document).on("click",".fa-pencil",function(){
  // When clicked on a pencil, it gets the span which has the task in it by using .prev(), since it is the previous sibling of the pencil.
  var span = $(this).prev();
  var text = span.text();

  // Shows a prompt where you can fill in the new task
  var newText = prompt("Edit task", text);

  // Edits the task
  if(newText != null){
    if (newText.length < 75) {
      span.text(newText);
    } else {
      alert("The task you entered was too long!")
    }
  }
});

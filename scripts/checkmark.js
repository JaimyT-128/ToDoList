$(".checkmark").click(function(){
  console.log("test");
  $(this).parent().remove();
});
// not working yet, somehow not detecting checkmarks in newer divs.

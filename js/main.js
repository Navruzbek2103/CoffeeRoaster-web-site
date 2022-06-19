var elForm = document.querySelector(".choice-subscribe__right");

elForm.addEventListener("click", function(evt){
  var clickedItem = evt.target.classList;

  if(clickedItem == "choice-subscribe__right-btn"){
    var parentClass =evt.target.parentNode.closest(".choice-subscribe__right-item")

    parentClass.classList.toggle("choice-subscribe__right-item--active")
  }
})
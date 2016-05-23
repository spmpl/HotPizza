var link = document.querySelector(".main-header__cart");
var popup = document.querySelector(".modal-content__cart");

    link.addEventListener("click", function(event){
      event.preventDefault();
       popup.classList.add("modal-content__cart-show");
});

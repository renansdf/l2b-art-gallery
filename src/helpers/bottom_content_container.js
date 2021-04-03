const bottom_content_container = document.querySelector('.bottom_content_container')
const close_bottom_content_container = document.querySelector('.close_bottom_content_container')
const bottom_content_receiver = document.querySelector('.bottom_content_receiver')

close_bottom_content_container.addEventListener('click', HideBottomContentContainer)
$(close_bottom_content_container).fadeOut(0) 

function HideBottomContentContainer() {
  $(bottom_content_receiver).slideUp();
  $(bottom_content_container).slideUp();
  $(close_bottom_content_container).fadeOut(100) 
}

function ShowBottomContentContainer() {
  $(bottom_content_container).slideDown();
  $(bottom_content_receiver).slideDown();
  setTimeout(() => { $(close_bottom_content_container).fadeIn() }, 700); 
}

function ScrollBottomContentToTop() {
  $(bottom_content_receiver).animate({ scrollTop: "0px" })	
}
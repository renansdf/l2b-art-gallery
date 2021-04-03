const image_carousel_container = document.querySelector('.image_carousel_container')
let image_carousel_pages

let image_carousel_current_page = 0

function AddImageCarouselButtonsListeners()
{
  const close_image_carousel_container = document.querySelector('.close_image_carousel_container')
  const previous_page_buttons = document.querySelectorAll('.image_carousel_previous_page, .image_carousel_previous_page_mobile')
  const next_page_buttons = document.querySelectorAll('.image_carousel_next_page, .image_carousel_next_page_mobile')
  
  close_image_carousel_container.addEventListener('click', CloseImageCarouselContainer)
  previous_page_buttons.forEach(btn => { btn.addEventListener('click', imageCarouselPreviousPage) })
  next_page_buttons.forEach(btn => { btn.addEventListener('click', imageCarouselNextPage) })
}

function SetupCarousel()
{
  image_carousel_pages = document.querySelectorAll('.image_carousel_page')
  image_carousel_current_page = 0
  AddImageCarouselButtonsListeners()  
}

function OpenImageCarouselContainer() {
  $(image_carousel_container).fadeIn();
  SetupCarousel()
  imageCarouselDisplayCurrentPage()
}

function CloseImageCarouselContainer() {
  $(image_carousel_container).fadeOut();

  ReturnCameraToNavigation()
}

function imageCarouselNextPage()
{
  image_carousel_current_page++
  if(image_carousel_current_page >= image_carousel_pages.length)
    image_carousel_current_page = 0

  imageCarouselDisplayCurrentPage()
}

function imageCarouselPreviousPage()
{
  image_carousel_current_page--
  if(image_carousel_current_page < 0)
    image_carousel_current_page = (image_carousel_pages.length - 1)

  imageCarouselDisplayCurrentPage()
}

function imageCarouselDisplayCurrentPage() {
  for (let i = 0; i < image_carousel_pages.length; i++) {
    image_carousel_pages[i].style.display = "none";
  }     
  
  image_carousel_pages[image_carousel_current_page].style.display = "block";
}

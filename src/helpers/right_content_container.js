const right_content_container = document.querySelector('.right_content_container')
const close_right_content_container = document.querySelector('.close_right_content_container')

const show_right_content_class = 'right_content_container_show'
const hide_right_content_class = 'right_content_container_hide'

close_right_content_container.addEventListener('click', HideRightContentContainerAndReturnToNavigation)

function ScrollRightContentToTop()
{
  $(right_content_container).animate({ scrollTop: "0px" })
}

function ShowRightContentContainer() {
  $(right_content_container).addClass(show_right_content_class);
  $(right_content_container).removeClass(hide_right_content_class);
}

function HideRightContentContainer() {
  $(right_content_container).addClass(hide_right_content_class);
  $(right_content_container).removeClass(show_right_content_class);  
}

function HideRightContentContainerAndReturnToNavigation()
{
  HideRightContentContainer()
  ReturnCameraToNavigation()
}
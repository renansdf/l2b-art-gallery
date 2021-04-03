const mobile_map_button = document.querySelector('.mobile_map_button')
const desktop_map_button = document.querySelector('.header_menu_button')

mobile_map_button.addEventListener('click', LoadMobileMapContent)
desktop_map_button.addEventListener('click', LoadDesktopMapContent)

function LoadMobileMapContent()
{
  ShowGalleryMapContainerMobile()
  LoadPage('./pages/gallery_map.html', '.gallery_map_receiver_mobile', SetMapButtonsListeners)
}

function LoadDesktopMapContent()
{
  ShowRightContentContainer()
  LoadPage('./pages/gallery_map.html', '.right_content_receiver', SetMapButtonsListeners)
}

function SetMapButtonsListeners()
{
  const map_buttons = document.querySelectorAll('.map_item_container')
  
  map_buttons.forEach(btn => {
    btn.addEventListener('click', (evt) => {
      const room_name = btn.getAttribute('teleport_to')
      if(room_name)
        FadeAndTeleport(room_name)
    })
  })
}

function HideMobileMapButton()
{
  $(mobile_map_button).fadeOut()
}

function ShowMobileMapButton()
{
  $(mobile_map_button).fadeIn()
}

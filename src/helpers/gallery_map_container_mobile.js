const gallery_map_container_mobile = document.querySelector('.gallery_map_container_mobile')
const gallery_map_content_mobile = document.querySelector('.gallery_map_content_mobile')
const close_gallery_map_container_mobile = document.querySelector('.close_gallery_map_container_mobile')
const gallery_map_container_mobile_room_name = document.querySelector('.gallery_map_container_mobile_room_name') 

close_gallery_map_container_mobile.addEventListener('click', HideGalleryMapContainerMobile)

function HideGalleryMapContainerMobile() {
  $(gallery_map_content_mobile).slideUp();
  $(gallery_map_container_mobile).slideUp();
}

function ShowGalleryMapContainerMobile() {
  $(gallery_map_container_mobile).slideDown();
  $(gallery_map_content_mobile).slideDown();
}

function SetModalBottomRoomName(room_name)
{
  $(gallery_map_container_mobile_room_name).text(room_name)
}
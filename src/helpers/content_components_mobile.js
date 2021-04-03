const mobile_back_to_navigation_button = document.querySelector('.mobile_back_to_navigation_button')
const mobile_read_content_button = document.querySelector('.mobile_read_content_button')

mobile_back_to_navigation_button.addEventListener('click', CloseReadPreviewMobile)

$(document).ready(function() {
  $(mobile_back_to_navigation_button).hide()
});

function HideMobileBackToNavigationButton() {
  $(mobile_back_to_navigation_button).fadeOut();
}

function ShowMobileBackToNavigationButton() {
  $(mobile_back_to_navigation_button).fadeIn();
}

function ShowMobileReadContentButton() {
  $(mobile_read_content_button).slideDown();
}

function HideMobileReadContentButton() {
  $(mobile_read_content_button).hide();
}

function ShowReadPreviewMobile()
{
  HideMobileMapButton()
  ShowMobileBackToNavigationButton()
  ShowMobileReadContentButton()
}

function CloseReadPreviewMobile()
{
  HideMobileBackToNavigationButton()
  HideMobileReadContentButton()
  ShowMobileMapButton()

  ReturnCameraToNavigation()
}